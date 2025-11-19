"use client";
import { useRef, useEffect } from "react";
import { cn } from "../../lib/utils";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: any[] = [];

    const resizeCanvas = () => {
      // Ensure canvas matches its parent container's size
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // Calculate number of particles based on density and screen width
      // Density 70 is roughly for a large screen, scale it down for mobile
      const density = particleDensity || 50;
      const count = Math.floor(density * (canvas.width / 1000));
      
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * ((maxSize || 3) - (minSize || 1)) + (minSize || 1),
          // Speed: random value between -speed and +speed
          speedX: (Math.random() - 0.5) * (speed || 1),
          speedY: (Math.random() - 0.5) * (speed || 1),
          // Opacity for twinkling
          opacity: Math.random(),
          opacitySpeed: Math.random() * 0.01 + 0.002,
          opacityDirection: Math.random() > 0.5 ? 1 : -1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background if specified
      if (background && background !== "transparent") {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      particles.forEach((p) => {
        // Move particle
        p.x += p.speedX;
        p.y += p.speedY;

        // Twinkle logic (fade in/out)
        p.opacity += p.opacitySpeed * p.opacityDirection;
        if (p.opacity >= 1) {
          p.opacity = 1;
          p.opacityDirection = -1;
        } else if (p.opacity <= 0.1) {
          p.opacity = 0.1;
          p.opacityDirection = 1;
        }

        // Wrap around screen edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor || "#ffffff";
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      animationId = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    animate();

    // Handle resize
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [minSize, maxSize, speed, particleColor, particleDensity, background]);

  return (
    <div id={id} className={cn("relative w-full h-full", className)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none block"
      />
    </div>
  );
};