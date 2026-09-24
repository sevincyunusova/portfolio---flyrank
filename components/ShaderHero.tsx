"use client";

import { useEffect, useRef, useState } from "react";

type ShaderHeroProps = {
    dark: boolean;

    /**
     * Two accent hues (0..1 on the HSV wheel).
     * I use these same colors for the shader and floating orbs.
     */
    accent?: {
        primary: number;
        secondary: number;
    };

    /**
     * Number of floating orbs shown above the shader.
     */
    orbCount?: number;
};

type Orb = {
    el: HTMLDivElement;
    size: number;
    hue: number;
    baseXPct: number;
    baseYPct: number;
    ampX: number;
    ampY: number;
    freq: number;
    phase: number;
    x: number;
    y: number;
    held: boolean;
    pointerId: number | null;
};

export default function ShaderHero({
    dark,
    accent = {
        primary: 0.58,
        secondary: 0.82,
    },
    orbCount = 16,
}: ShaderHeroProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const orbLayerRef = useRef<HTMLDivElement | null>(null);

    const [ready, setReady] = useState(false);

    /* ================================================================
     * WEBGL FULLSCREEN SHADER
     * ================================================================ */

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;

        if (!canvas || !container) return;

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const gl = canvas.getContext("webgl", {
            alpha: true,
            antialias: true,
            premultipliedAlpha: true,
        });

        if (!gl) return;

        /*
         * Vertex shader:
         * It creates one fullscreen rectangle.
         * The fragment shader then decides what color
         * every pixel of this rectangle should have.
         */
        const vertexShaderSource = `
      attribute vec2 a_position;

      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

        /*
         * Fragment shader:
         *
         * u_time       -> controls animation
         * u_resolution -> tells the shader the canvas size
         * u_dark       -> switches between dark/light palette
         * u_intro      -> controls the initial fade-in
         * u_hueA/B     -> custom purple/cyan accent colors
         */
        const fragmentShaderSource = `
      precision highp float;

      uniform float u_time;
      uniform vec2 u_resolution;
      uniform float u_dark;
      uniform float u_intro;
      uniform float u_hueA;
      uniform float u_hueB;

      /*
       * Converts HSV color values to RGB.
       * This makes it easier to control the shader
       * colors by hue instead of hardcoding RGB values.
       */
      vec3 hsv2rgb(vec3 c) {
        vec3 rgb = clamp(
          abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0,
          0.0,
          1.0
        );

        return c.z * mix(vec3(1.0), rgb, c.y);
      }

      /*
       * Small pseudo-random function used for subtle grain.
       */
      float hash(vec2 p) {
        return fract(
          sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123
        );
      }

      /*
       * Creates one flowing wave/strand.
       * Several sine waves are combined to make the movement
       * less predictable than a single sine wave.
       */
      float strand(
        vec2 p,
        float t,
        float baseline,
        float freq,
        float speed,
        float phase,
        float thickness
      ) {
        float w =
          sin(p.x * freq - t * speed + phase) * 0.055;

        w +=
          sin(
            p.x * freq * 2.1 -
            t * speed * 1.3 +
            phase * 1.7
          ) * 0.020;

        w +=
          sin(
            p.x * freq * 3.4 -
            t * speed * 0.8 +
            phase * 0.6
          ) * 0.009;

        float y =
          baseline +
          w +
          sin(t * 0.045 + phase) * 0.05;

        float d = abs(p.y - y);

        float core =
          1.0 - smoothstep(0.0, thickness, d);

        float glow =
          1.0 -
          smoothstep(
            thickness * 0.3,
            thickness * 5.5,
            d
          );

        return core * 0.85 + glow * 0.18;
      }

      void main() {
        /*
         * Convert the current pixel position into 0..1 UV coordinates.
         * This uses the complete canvas, so the shader reaches both edges.
         */
        vec2 uv = gl_FragCoord.xy / u_resolution;

        /*
         * Convert UV coordinates to -1..1.
         * This gives us a centered coordinate system.
         */
        vec2 p = uv * 2.0 - 1.0;

        /*
         * Correct the horizontal aspect ratio so the waves
         * keep natural proportions on wide screens.
         */
        float aspect =
          u_resolution.x / u_resolution.y;

        vec2 shapeP = p;
        shapeP.x *= aspect;

        /*
         * Time is the main animation input.
         * In reduced-motion mode JavaScript keeps this value static.
         */
        float t = u_time;

        /*
         * Base colors for dark and light mode.
         */
        vec3 baseDark =
          vec3(0.047, 0.051, 0.068);

        vec3 baseLight =
          vec3(0.955, 0.958, 0.966);

        vec3 base =
          mix(baseLight, baseDark, u_dark);

        vec3 color = base;

        /*
         * Create the two custom accent colors.
         * The portfolio uses a purple/cyan visual identity,
         * so the shader follows the same palette.
         */
        vec3 hueColorA =
          hsv2rgb(
            vec3(
              u_hueA,
              mix(0.55, 0.46, u_dark),
              1.0
            )
          );

        vec3 hueColorB =
          hsv2rgb(
            vec3(
              u_hueB,
              mix(0.50, 0.42, u_dark),
              1.0
            )
          );

        float glowScale =
          mix(0.55, 1.0, u_dark);

        /*
         * Three large ambient glows.
         * They are placed toward the edges so the fullscreen
         * background does not look empty on wide screens.
         */
        vec2 glow1 =
          vec2(
            -0.95,
            0.42 +
            sin(t * 0.05) * 0.08
          );

        vec2 glow2 =
          vec2(
            0.95,
            0.58 +
            cos(t * 0.045) * 0.07
          );

        vec2 glow3 =
          vec2(
            0.0,
            -0.18 +
            sin(t * 0.04 + 2.0) * 0.06
          );

        float a1 =
          1.0 -
          smoothstep(
            0.0,
            1.05,
            length(p - glow1)
          );

        float a2 =
          1.0 -
          smoothstep(
            0.0,
            1.05,
            length(p - glow2)
          );

        float a3 =
          1.0 -
          smoothstep(
            0.0,
            1.20,
            length(p - glow3)
          );

        color +=
          hueColorA *
          a1 *
          a1 *
          0.075 *
          glowScale;

        color +=
          hueColorB *
          a2 *
          a2 *
          0.070 *
          glowScale;

        color +=
          mix(hueColorA, hueColorB, 0.5) *
          a3 *
          a3 *
          0.050 *
          glowScale;

        /*
         * Three different flowing strands.
         * Each one has a different baseline, frequency,
         * speed and phase, creating a layered aurora effect.
         */
        float s0 =
          strand(
            shapeP,
            t,
            -0.18,
            2.1,
            1.15,
            1.2,
            0.006
          );

        float s1 =
          strand(
            shapeP,
            t,
            -0.58,
            2.6,
            1.65,
            0.0,
            0.011
          );

        float s2 =
          strand(
            shapeP,
            t,
            -0.78,
            3.4,
            1.35,
            2.1,
            0.007
          );

        color +=
          mix(hueColorA, hueColorB, 0.35) *
          s0 *
          0.32;

        color +=
          hueColorA *
          s1 *
          0.95;

        color +=
          hueColorB *
          s2 *
          0.70;

        /*
         * Very subtle animated grain.
         * It prevents the gradient from looking too flat.
         */
        float grain =
          (
            hash(
              gl_FragCoord.xy * 0.6 +
              t * 4.0
            ) - 0.5
          ) *
          mix(0.012, 0.018, u_dark);

        color += grain;

        /*
         * Intro controls the shader opacity during the first frames.
         */
        color *= u_intro;

        gl_FragColor =
          vec4(color, u_intro);
      }
    `;

        const createShader = (
            type: number,
            source: string
        ) => {
            const shader = gl.createShader(type);

            if (!shader) return null;

            gl.shaderSource(shader, source);
            gl.compileShader(shader);

            if (
                !gl.getShaderParameter(
                    shader,
                    gl.COMPILE_STATUS
                )
            ) {
                console.error(
                    gl.getShaderInfoLog(shader)
                );

                gl.deleteShader(shader);
                return null;
            }

            return shader;
        };

        const vertexShader = createShader(
            gl.VERTEX_SHADER,
            vertexShaderSource
        );

        const fragmentShader = createShader(
            gl.FRAGMENT_SHADER,
            fragmentShaderSource
        );

        if (!vertexShader || !fragmentShader) {
            return;
        }

        const program = gl.createProgram();

        if (!program) return;

        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (
            !gl.getProgramParameter(
                program,
                gl.LINK_STATUS
            )
        ) {
            console.error(
                gl.getProgramInfoLog(program)
            );

            return;
        }

        gl.useProgram(program);

        const positionLocation =
            gl.getAttribLocation(
                program,
                "a_position"
            );

        const timeLocation =
            gl.getUniformLocation(
                program,
                "u_time"
            );

        const resolutionLocation =
            gl.getUniformLocation(
                program,
                "u_resolution"
            );

        const darkLocation =
            gl.getUniformLocation(
                program,
                "u_dark"
            );

        const introLocation =
            gl.getUniformLocation(
                program,
                "u_intro"
            );

        const hueALocation =
            gl.getUniformLocation(
                program,
                "u_hueA"
            );

        const hueBLocation =
            gl.getUniformLocation(
                program,
                "u_hueB"
            );

        /*
         * Two triangles create one fullscreen rectangle.
         */
        const buffer = gl.createBuffer();

        gl.bindBuffer(
            gl.ARRAY_BUFFER,
            buffer
        );

        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([
                -1,
                -1,
                1,
                -1,
                -1,
                1,
                -1,
                1,
                1,
                -1,
                1,
                1,
            ]),
            gl.STATIC_DRAW
        );

        gl.enableVertexAttribArray(
            positionLocation
        );

        gl.vertexAttribPointer(
            positionLocation,
            2,
            gl.FLOAT,
            false,
            0,
            0
        );

        /*
         * Resize the WebGL canvas.
         *
         * DPR is capped at 2 to avoid unnecessarily expensive
         * rendering on high-density displays.
         */
        const resize = () => {
            const dpr = Math.min(
                window.devicePixelRatio || 1,
                2
            );

            const width = Math.floor(
                canvas.clientWidth * dpr
            );

            const height = Math.floor(
                canvas.clientHeight * dpr
            );

            if (
                canvas.width !== width ||
                canvas.height !== height
            ) {
                canvas.width = width;
                canvas.height = height;
            }

            gl.viewport(
                0,
                0,
                canvas.width,
                canvas.height
            );
        };

        resize();

        const resizeObserver =
            new ResizeObserver(resize);

        resizeObserver.observe(container);

        /*
         * The shader should render only when the hero
         * is actually visible on the page.
         */
        let isIntersecting = true;
        let pageVisible =
            document.visibilityState === "visible";

        const intersectionObserver =
            new IntersectionObserver(
                (entries) => {
                    isIntersecting =
                        entries[0]?.isIntersecting ?? true;
                },
                {
                    threshold: 0,
                }
            );

        intersectionObserver.observe(container);

        /*
         * Pause rendering when the browser tab becomes hidden.
         * When the user returns, rendering can continue normally.
         */
        const handleVisibilityChange = () => {
            pageVisible =
                document.visibilityState === "visible";
        };

        document.addEventListener(
            "visibilitychange",
            handleVisibilityChange
        );

        let animationFrame = 0;

        const startTime =
            performance.now();

        /*
         * Reduced-motion users get a static shader frame.
         */
        let introProgress =
            reducedMotion ? 1 : 0;

        const render = (now: number) => {
            animationFrame =
                requestAnimationFrame(render);

            if (!isIntersecting || !pageVisible) {
                return;
            }

            /*
             * In reduced-motion mode the shader time stays at 0,
             * so the background becomes a static frame.
             */
            const elapsed = reducedMotion
                ? 0
                : (now - startTime) / 1000;

            if (!reducedMotion) {
                introProgress = Math.min(
                    1,
                    introProgress + 0.012
                );
            }

            gl.useProgram(program);

            gl.uniform1f(
                timeLocation,
                elapsed
            );

            gl.uniform2f(
                resolutionLocation,
                canvas.width,
                canvas.height
            );

            gl.uniform1f(
                darkLocation,
                dark ? 1 : 0
            );

            gl.uniform1f(
                introLocation,
                introProgress
            );

            gl.uniform1f(
                hueALocation,
                accent.primary
            );

            gl.uniform1f(
                hueBLocation,
                accent.secondary
            );

            gl.drawArrays(
                gl.TRIANGLES,
                0,
                6
            );
        };

        animationFrame =
            requestAnimationFrame(render);

        setReady(true);

        return () => {
            cancelAnimationFrame(
                animationFrame
            );

            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange
            );

            resizeObserver.disconnect();
            intersectionObserver.disconnect();

            gl.deleteBuffer(buffer);
            gl.deleteProgram(program);
            gl.deleteShader(vertexShader);
            gl.deleteShader(fragmentShader);
        };
    }, [
        dark,
        accent.primary,
        accent.secondary,
    ]);

    /* ================================================================
     * FLOATING ORBS
     * ================================================================ */

    useEffect(() => {
        const container =
            containerRef.current;

        const layer =
            orbLayerRef.current;

        if (!container || !layer) return;

        const reducedMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

        layer.innerHTML = "";

        const orbs: Orb[] = [];

        const width =
            container.clientWidth || 1;

        const height =
            container.clientHeight || 1;

        const aspect =
            width / Math.max(height, 1);

        const cols = Math.max(
            3,
            Math.round(
                Math.sqrt(
                    orbCount * aspect
                )
            )
        );

        const rows = Math.max(
            2,
            Math.ceil(
                orbCount / cols
            )
        );

        const cellW = 100 / cols;
        const cellH = 100 / rows;

        for (
            let i = 0;
            i < orbCount;
            i++
        ) {
            const col = i % cols;

            const row =
                Math.floor(i / cols);

            const jitterX =
                (Math.random() - 0.5) *
                cellW *
                0.7;

            const jitterY =
                (Math.random() - 0.5) *
                cellH *
                0.7;

            const sizeRoll =
                Math.random();

            const size =
                sizeRoll > 0.85
                    ? 58 + Math.random() * 34
                    : sizeRoll > 0.5
                        ? 30 + Math.random() * 24
                        : 14 + Math.random() * 16;

            const hue =
                i % 2 === 0
                    ? accent.primary
                    : accent.secondary;

            const el =
                document.createElement("div");

            el.style.position =
                "absolute";

            el.style.width =
                `${size}px`;

            el.style.height =
                `${size}px`;

            el.style.borderRadius =
                "9999px";

            el.style.left =
                "0px";

            el.style.top =
                "0px";

            /*
             * Orbs remain interactive for normal-motion users.
             */
            el.style.pointerEvents =
                reducedMotion
                    ? "none"
                    : "auto";

            el.style.cursor =
                reducedMotion
                    ? "default"
                    : "grab";

            el.style.touchAction =
                "none";

            el.style.willChange =
                reducedMotion
                    ? "auto"
                    : "transform";

            if (size > 48) {
                el.style.filter =
                    "blur(1.5px)";
            }

            const lightness =
                dark ? 63 : 48;

            const alphaCore =
                dark ? 0.85 : 0.62;

            const edgeAlpha =
                dark ? 0.05 : 0.02;

            el.style.background =
                `radial-gradient(
          circle at 34% 32%,
          hsla(
            ${hue * 360},
            85%,
            ${lightness + 12}%,
            ${alphaCore}
          ),
          hsla(
            ${hue * 360},
            70%,
            ${lightness}%,
            ${edgeAlpha}
          ) 72%
        )`;

            el.style.boxShadow =
                `0 0 ${size *
                (dark ? 0.55 : 0.35)
                }px hsla(
          ${hue * 360},
          80%,
          ${lightness}%,
          ${dark ? 0.28 : 0.16}
        )`;

            el.style.transition =
                "box-shadow 0.25s ease";

            layer.appendChild(el);

            orbs.push({
                el,
                size,
                hue,

                baseXPct: Math.min(
                    96,
                    Math.max(
                        4,
                        col * cellW +
                        cellW / 2 +
                        jitterX
                    )
                ),

                baseYPct: Math.min(
                    96,
                    Math.max(
                        4,
                        row * cellH +
                        cellH / 2 +
                        jitterY
                    )
                ),

                ampX:
                    16 +
                    Math.random() * 30,

                ampY:
                    12 +
                    Math.random() * 24,

                freq:
                    0.14 +
                    Math.random() * 0.22,

                phase:
                    Math.random() *
                    Math.PI *
                    2,

                x: 0,
                y: 0,

                held: false,
                pointerId: null,
            });
        }

        let pointerX = -9999;
        let pointerY = -9999;
        let pointerActive = false;

        const toContainerPoint = (
            clientX: number,
            clientY: number
        ) => {
            const rect =
                container.getBoundingClientRect();

            return {
                x:
                    clientX -
                    rect.left,

                y:
                    clientY -
                    rect.top,
            };
        };

        const handlePointerMove = (
            event: PointerEvent
        ) => {
            if (reducedMotion) return;

            const point =
                toContainerPoint(
                    event.clientX,
                    event.clientY
                );

            pointerX = point.x;
            pointerY = point.y;
            pointerActive = true;
        };

        const handlePointerUp = (
            event: PointerEvent
        ) => {
            for (const orb of orbs) {
                if (
                    orb.pointerId ===
                    event.pointerId
                ) {
                    orb.held = false;
                    orb.pointerId = null;

                    orb.el.style.cursor =
                        "grab";
                }
            }
        };

        if (!reducedMotion) {
            orbs.forEach((orb) => {
                orb.el.addEventListener(
                    "pointerdown",
                    (event) => {
                        event.preventDefault();

                        orb.el.setPointerCapture(
                            event.pointerId
                        );

                        orb.held = true;

                        orb.pointerId =
                            event.pointerId;

                        orb.el.style.cursor =
                            "grabbing";

                        const point =
                            toContainerPoint(
                                event.clientX,
                                event.clientY
                            );

                        pointerX = point.x;
                        pointerY = point.y;
                        pointerActive = true;
                    }
                );
            });

            window.addEventListener(
                "pointermove",
                handlePointerMove,
                {
                    passive: true,
                }
            );

            window.addEventListener(
                "pointerup",
                handlePointerUp,
                {
                    passive: true,
                }
            );

            window.addEventListener(
                "pointercancel",
                handlePointerUp,
                {
                    passive: true,
                }
            );
        }

        let liveWidth = width;
        let liveHeight = height;

        const resizeObserver =
            new ResizeObserver(() => {
                liveWidth =
                    container.clientWidth;

                liveHeight =
                    container.clientHeight;
            });

        resizeObserver.observe(
            container
        );

        /*
         * Pause the orb animation when the hero is outside
         * the viewport or when the browser tab is hidden.
         */
        let isIntersecting = true;
        let pageVisible =
            document.visibilityState === "visible";

        const intersectionObserver =
            new IntersectionObserver(
                (entries) => {
                    isIntersecting =
                        entries[0]?.isIntersecting ??
                        true;
                },
                {
                    threshold: 0,
                }
            );

        intersectionObserver.observe(
            container
        );

        const handleVisibilityChange = () => {
            pageVisible =
                document.visibilityState === "visible";
        };

        document.addEventListener(
            "visibilitychange",
            handleVisibilityChange
        );

        const startTime =
            performance.now();

        /*
         * Set the initial position.
         */
        for (const orb of orbs) {
            orb.x =
                (orb.baseXPct / 100) *
                liveWidth;

            orb.y =
                (orb.baseYPct / 100) *
                liveHeight;

            orb.el.style.transform =
                `translate3d(
          ${orb.x - orb.size / 2}px,
          ${orb.y - orb.size / 2}px,
          0
        )`;
        }

        let animationFrame = 0;

        const PULL_RADIUS = 150;

        const render = (now: number) => {
            animationFrame =
                requestAnimationFrame(render);

            if (
                reducedMotion ||
                !isIntersecting ||
                !pageVisible
            ) {
                return;
            }

            const elapsed =
                (now - startTime) / 1000;

            for (const orb of orbs) {
                const idleX =
                    (orb.baseXPct / 100) *
                    liveWidth +
                    Math.sin(
                        elapsed *
                        orb.freq +
                        orb.phase
                    ) *
                    orb.ampX;

                const idleY =
                    (orb.baseYPct / 100) *
                    liveHeight +
                    Math.cos(
                        elapsed *
                        orb.freq *
                        0.85 +
                        orb.phase
                    ) *
                    orb.ampY;

                let targetX = idleX;
                let targetY = idleY;

                let spring = 0.045;

                if (orb.held) {
                    targetX = pointerX;
                    targetY = pointerY;
                    spring = 0.35;
                } else if (
                    pointerActive
                ) {
                    const dx =
                        pointerX - idleX;

                    const dy =
                        pointerY - idleY;

                    const dist =
                        Math.sqrt(
                            dx * dx +
                            dy * dy
                        );

                    if (
                        dist < PULL_RADIUS
                    ) {
                        const pull =
                            (1 -
                                dist /
                                PULL_RADIUS) *
                            0.55;

                        targetX =
                            idleX +
                            dx * pull;

                        targetY =
                            idleY +
                            dy * pull;

                        spring = 0.09;
                    }
                }

                orb.x +=
                    (targetX - orb.x) *
                    spring;

                orb.y +=
                    (targetY - orb.y) *
                    spring;

                const scale =
                    orb.held
                        ? 1.12
                        : 1;

                orb.el.style.transform =
                    `translate3d(
            ${orb.x - orb.size / 2}px,
            ${orb.y - orb.size / 2}px,
            0
          ) scale(${scale})`;
            }
        };

        animationFrame =
            requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(
                animationFrame
            );

            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange
            );

            if (!reducedMotion) {
                window.removeEventListener(
                    "pointermove",
                    handlePointerMove
                );

                window.removeEventListener(
                    "pointerup",
                    handlePointerUp
                );

                window.removeEventListener(
                    "pointercancel",
                    handlePointerUp
                );
            }

            resizeObserver.disconnect();
            intersectionObserver.disconnect();

            layer.innerHTML = "";
        };
    }, [
        dark,
        accent.primary,
        accent.secondary,
        orbCount,
    ]);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 h-full w-full overflow-hidden"
        >
            <canvas
                ref={canvasRef}
                className={`pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-700 ${ready
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                aria-hidden="true"
            />

            <div
                ref={orbLayerRef}
                className="pointer-events-none absolute inset-0 h-full w-full"
                aria-hidden="true"
            />
        </div>
    );
}