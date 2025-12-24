import { useEffect, useRef } from "react";

const WaveAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const drawWave = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      ctx.clearRect(0, 0, width, height);

      // Draw multiple wave layers
      const waves = [
        { amplitude: 60, frequency: 0.008, speed: 0.015, opacity: 0.4, yOffset: 0 },
        { amplitude: 40, frequency: 0.012, speed: 0.02, opacity: 0.3, yOffset: 30 },
        { amplitude: 30, frequency: 0.015, speed: 0.025, opacity: 0.2, yOffset: -20 },
        { amplitude: 50, frequency: 0.01, speed: 0.018, opacity: 0.35, yOffset: 15 },
      ];

      waves.forEach((wave) => {
        ctx.beginPath();
        
        // Create gradient for each wave
        const gradient = ctx.createLinearGradient(0, height * 0.3, width, height * 0.7);
        gradient.addColorStop(0, `hsla(217, 91%, 50%, ${wave.opacity * 0.5})`);
        gradient.addColorStop(0.3, `hsla(217, 91%, 60%, ${wave.opacity})`);
        gradient.addColorStop(0.5, `hsla(199, 89%, 50%, ${wave.opacity})`);
        gradient.addColorStop(0.7, `hsla(217, 91%, 60%, ${wave.opacity})`);
        gradient.addColorStop(1, `hsla(217, 91%, 50%, ${wave.opacity * 0.5})`);

        const centerY = height * 0.5 + wave.yOffset;

        // Draw the wave path with flowing particles effect
        for (let x = 0; x <= width; x += 2) {
          const y =
            centerY +
            Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude +
            Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 1.5) * (wave.amplitude * 0.3);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw glowing effect
        ctx.shadowBlur = 20;
        ctx.shadowColor = `hsla(217, 91%, 60%, ${wave.opacity})`;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });

      // Draw floating particles along the waves
      const particleCount = 30;
      for (let i = 0; i < particleCount; i++) {
        const x = (width / particleCount) * i + ((time * 30) % (width / particleCount));
        const waveY =
          height * 0.5 +
          Math.sin(x * 0.01 + time * 0.02) * 50 +
          Math.sin(x * 0.005 + time * 0.015) * 20;

        const particleOpacity = 0.3 + Math.sin(time * 0.05 + i) * 0.2;
        const particleSize = 2 + Math.sin(time * 0.03 + i * 0.5) * 1;

        ctx.beginPath();
        ctx.arc(x % width, waveY, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(199, 89%, 60%, ${particleOpacity})`;
        ctx.fill();

        // Glow effect for particles
        ctx.shadowBlur = 10;
        ctx.shadowColor = `hsla(199, 89%, 60%, 0.5)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      time += 1;
      animationId = requestAnimationFrame(drawWave);
    };

    drawWave();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
};

export default WaveAnimation;
