"use client"

import { useEffect, useRef } from "react"

export default function ShaderHero() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current

        if (!canvas) return

        const gl = canvas.getContext("webgl")

        if (!gl) {
            console.error("WebGL is not supported in this browser.")
            return
        }

        const vertexShaderSource = `
            attribute vec2 a_position;

            void main() {
                gl_Position = vec4(a_position, 0.0, 1.0);
            }
        `

        const fragmentShaderSource = `
            precision mediump float;

            uniform float u_time;
            uniform vec2 u_resolution;
            uniform vec2 u_mouse;

            void main() {
                vec2 uv = gl_FragCoord.xy / u_resolution;

                vec2 mouse = u_mouse / u_resolution;

                float distanceFromMouse =
                    distance(uv, mouse);

                float mouseGlow =
                    1.0 - smoothstep(
                        0.0,
                        0.5,
                        distanceFromMouse
                    );

                float wave =
                    sin(
                        uv.x * 6.0 +
                        u_time +
                        mouseGlow * 3.0
                    ) * 0.5 + 0.5;

                vec3 purple =
                    vec3(0.49, 0.23, 0.93);

                vec3 cyan =
                    vec3(0.02, 0.71, 0.83);

                vec3 color =
                    mix(purple, cyan, wave);

                color += mouseGlow * 0.12;

                gl_FragColor =
                    vec4(color, 1.0);
            }
        `

        function createShader(
            type: number,
            source: string
        ): WebGLShader | null {
            const shader = gl.createShader(type)

            if (!shader) return null

            gl.shaderSource(shader, source)
            gl.compileShader(shader)

            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error(gl.getShaderInfoLog(shader))
                gl.deleteShader(shader)
                return null
            }

            return shader
        }

        const vertexShader = createShader(
            gl.VERTEX_SHADER,
            vertexShaderSource
        )

        const fragmentShader = createShader(
            gl.FRAGMENT_SHADER,
            fragmentShaderSource
        )

        if (!vertexShader || !fragmentShader) return

        const program = gl.createProgram()

        if (!program) return

        gl.attachShader(program, vertexShader)
        gl.attachShader(program, fragmentShader)
        gl.linkProgram(program)

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error(gl.getProgramInfoLog(program))
            return
        }

        const positions = new Float32Array([
            -1, -1,
             1, -1,
            -1,  1,

            -1,  1,
             1, -1,
             1,  1,
        ])

        const buffer = gl.createBuffer()

        if (!buffer) return

        gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
        gl.bufferData(
            gl.ARRAY_BUFFER,
            positions,
            gl.STATIC_DRAW
        )

        const positionLocation =
            gl.getAttribLocation(
                program,
                "a_position"
            )

        const timeLocation =
            gl.getUniformLocation(
                program,
                "u_time"
            )

        const resolutionLocation =
            gl.getUniformLocation(
                program,
                "u_resolution"
            )

        const mouseLocation =
            gl.getUniformLocation(
                program,
                "u_mouse"
            )

        gl.useProgram(program)

        gl.enableVertexAttribArray(
            positionLocation
        )

        gl.vertexAttribPointer(
            positionLocation,
            2,
            gl.FLOAT,
            false,
            0,
            0
        )

        function resizeCanvas() {
            const pixelRatio = Math.min(
                window.devicePixelRatio || 1,
                2
            )

            const width = Math.floor(
                canvas.clientWidth * pixelRatio
            )

            const height = Math.floor(
                canvas.clientHeight * pixelRatio
            )

            if (
                canvas.width !== width ||
                canvas.height !== height
            ) {
                canvas.width = width
                canvas.height = height
            }

            gl.viewport(
                0,
                0,
                canvas.width,
                canvas.height
            )
        }

        resizeCanvas()

        window.addEventListener(
            "resize",
            resizeCanvas
        )

        const mouse = {
            x: canvas.clientWidth / 2,
            y: canvas.clientHeight / 2,
        }

        function handleMouseMove(
            event: MouseEvent
        ) {
            const rect =
                canvas.getBoundingClientRect()

            mouse.x =
                event.clientX - rect.left

            mouse.y =
                rect.height -
                (event.clientY - rect.top)
        }

        window.addEventListener(
            "mousemove",
            handleMouseMove
        )

        let animationFrameId = 0

        const startTime = performance.now()

        function render(
            currentTime: number
        ) {
            resizeCanvas()

            const elapsedTime =
                (currentTime - startTime) / 1000

            gl.useProgram(program)

            gl.uniform1f(
                timeLocation,
                elapsedTime
            )

            gl.uniform2f(
                resolutionLocation,
                canvas.width,
                canvas.height
            )

            const pixelRatio =
                Math.min(
                    window.devicePixelRatio || 1,
                    2
                )

            gl.uniform2f(
                mouseLocation,
                mouse.x * pixelRatio,
                mouse.y * pixelRatio
            )

            gl.drawArrays(
                gl.TRIANGLES,
                0,
                6
            )

            animationFrameId =
                requestAnimationFrame(render)
        }

        animationFrameId =
            requestAnimationFrame(render)

        return () => {
            cancelAnimationFrame(
                animationFrameId
            )

            window.removeEventListener(
                "resize",
                resizeCanvas
            )

            window.removeEventListener(
                "mousemove",
                handleMouseMove
            )

            gl.deleteBuffer(buffer)
            gl.deleteShader(vertexShader)
            gl.deleteShader(fragmentShader)
            gl.deleteProgram(program)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
        />
    )
}