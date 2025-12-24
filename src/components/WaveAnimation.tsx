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

      // Multiple wave groups with different colors
      const waveGroups = [
        // Blue-cyan waves (upper layer)
        {
          waves: 8,
          baseY: height * 0.35,
          amplitude: 80,
          frequency: 0.003,
          speed: 0.008,
          colors: ["hsla(200, 90%, 50%, 0.6)", "hsla(217, 91%, 60%, 0.5)", "hsla(190, 80%, 55%, 0.4)"],
          phaseOffset: 0,
        },
        // Purple waves (middle layer)
        {
          waves: 10,
          baseY: height * 0.5,
          amplitude: 100,
          frequency: 0.004,
          speed: 0.01,
          colors: ["hsla(270, 70%, 50%, 0.5)", "hsla(280, 80%, 60%, 0.4)", "hsla(260, 60%, 55%, 0.3)"],
          phaseOffset: Math.PI * 0.5,
        },
        // Pink-red waves (lower layer)
        {
          waves: 12,
          baseY: height * 0.65,
          amplitude: 90,
          frequency: 0.0035,
          speed: 0.012,
          colors: ["hsla(330, 80%, 50%, 0.5)", "hsla(350, 85%, 55%, 0.4)", "hsla(320, 70%, 45%, 0.3)"],
          phaseOffset: Math.PI,
        },
      ];

      waveGroups.forEach((group) => {
        for (let w = 0; w < group.waves; w++) {
          const waveOffset = (w / group.waves) * Math.PI * 2;
          const opacity = 0.15 + (w / group.waves) * 0.2;
          
          ctx.beginPath();
          
          // Create gradient for the wave line
          const gradient = ctx.createLinearGradient(0, 0, width, 0);
          gradient.addColorStop(0, group.colors[0].replace(/[\d.]+\)$/, `${opacity * 0.3})`));
          gradient.addColorStop(0.25, group.colors[1].replace(/[\d.]+\)$/, `${opacity})`));
          gradient.addColorStop(0.5, group.colors[0].replace(/[\d.]+\)$/, `${opacity * 1.2})`));
          gradient.addColorStop(0.75, group.colors[2].replace(/[\d.]+\)$/, `${opacity})`));
          gradient.addColorStop(1, group.colors[0].replace(/[\d.]+\)$/, `${opacity * 0.3})`));

          const yOffset = Math.sin(waveOffset) * 40;
          
          for (let x = 0; x <= width; x += 3) {
            // Complex wave with multiple frequencies for organic look
            const y =
              group.baseY +
              yOffset +
              Math.sin(x * group.frequency + time * group.speed + waveOffset + group.phaseOffset) * group.amplitude +
              Math.sin(x * group.frequency * 2.3 + time * group.speed * 1.7 + waveOffset) * (group.amplitude * 0.4) +
              Math.sin(x * group.frequency * 0.7 + time * group.speed * 0.5 + waveOffset) * (group.amplitude * 0.25);

            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5 + (w / group.waves) * 0.5;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          
          // Glow effect
          ctx.shadowBlur = 15;
          ctx.shadowColor = group.colors[0];
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      });

      // Add floating particles for extra depth
      const particles = 40;
      for (let i = 0; i < particles; i++) {
        const px = ((i / particles) * width + time * 0.5) % width;
        const baseY = height * 0.4 + Math.sin(i * 0.5) * height * 0.3;
        const py = baseY + Math.sin(px * 0.005 + time * 0.01 + i) * 60;
        
        const hue = 200 + Math.sin(i * 0.3 + time * 0.005) * 80; // Shift between blue and pink
        const particleOpacity = 0.2 + Math.sin(time * 0.02 + i * 0.7) * 0.15;
        const size = 1.5 + Math.sin(time * 0.015 + i) * 1;

        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, 80%, 60%, ${particleOpacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(${hue}, 80%, 60%, 0.5)`;
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
      style={{ opacity: 0.85 }}
    />
  );
};

export default WaveAnimation;
