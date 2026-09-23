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

        // Vertex shader: decides where each point/triangle is placed.
        const vertexShaderSource = `
            attribute vec2 a_position;

            void main() {
                gl_Position = vec4(a_position, 0.0, 1.0);
            }
        `

        // Fragment shader: decides the color of every pixel.
        const fragmentShaderSource = `
            precision mediump float;

            void main() {
                gl_FragColor = vec4(0.49, 0.23, 0.93, 1.0);
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

        // Two triangles create one fullscreen rectangle.
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

        const positionLocation = gl.getAttribLocation(
            program,
            "a_position"
        )

        gl.useProgram(program)

        gl.enableVertexAttribArray(positionLocation)

        gl.vertexAttribPointer(
            positionLocation,
            2,
            gl.FLOAT,
            false,
            0,
            0
        )

        function resizeCanvas() {
            const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)

            const width = canvas.clientWidth * pixelRatio
            const height = canvas.clientHeight * pixelRatio

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

        window.addEventListener("resize", resizeCanvas)

        gl.clearColor(0, 0, 0, 0)
        gl.clear(gl.COLOR_BUFFER_BIT)

        gl.drawArrays(
            gl.TRIANGLES,
            0,
            6
        )

        return () => {
            window.removeEventListener("resize", resizeCanvas)

            gl.deleteBuffer(buffer)
            gl.deleteShader(vertexShader)
            gl.deleteShader(fragmentShader)
            gl.delete