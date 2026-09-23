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

        console.log("WebGL initialized successfully.")

        return () => {
            console.log("WebGL cleanup.")
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