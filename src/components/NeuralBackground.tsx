import { useEffect, useRef, useCallback } from "react";

const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const nodesRef = useRef<{ x: number; y: number; vx: number; vy: number; r: number; pulse: number; isKnowledge: boolean }[]>([]);

  const initNodes = useCallback((width: number, height: number) => {
    // Aggressive performance reduction: Fewer nodes, less CPU calculation
    const count = Math.min(30, Math.floor(width / 50));
    const nodes = [];
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15, // Slower movement reduces perception of jank
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.5 + 0.5,
        pulse: Math.random() * Math.PI * 2,
        isKnowledge: Math.random() > 0.9,
      });
    }
    nodesRef.current = nodes;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (nodesRef.current.length === 0) {
        initNodes(canvas.width, canvas.height);
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      const nodes = nodesRef.current;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = nodes[i].isKnowledge || nodes[j].isKnowledge
              ? `rgba(255, 155, 81, ${(1 - dist / 120) * 0.2})`
              : `rgba(191, 201, 209, ${(1 - dist / 120) * 0.1})`;
            ctx.lineWidth = nodes[i].isKnowledge || nodes[j].isKnowledge ? 0.8 : 0.4;
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        node.pulse += 0.012;
        const g = Math.max(0, node.r + Math.sin(node.pulse) * 1.5);

        if (node.isKnowledge) {
          // Draw as a pulsing 'Knowledge Unit' square
          const size = g + 2;
          ctx.save();
          ctx.translate(node.x, node.y);
          ctx.rotate(node.pulse * 0.5);
          ctx.strokeStyle = `rgba(255, 155, 81, ${0.4 + Math.sin(node.pulse) * 0.3})`;
          ctx.lineWidth = 1;
          ctx.strokeRect(-size / 2, -size / 2, size, size);
          ctx.fillStyle = `rgba(255, 155, 81, 0.15)`;
          ctx.fillRect(-size / 2, -size / 2, size, size);
          ctx.restore();
        } else {
          ctx.beginPath();
          ctx.arc(node.x, node.y, g + 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(191, 201, 209, 0.03)`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(node.x, node.y, g, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(191, 201, 209, ${0.2 + Math.sin(node.pulse) * 0.15})`;
          ctx.fill();
        }

        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [initNodes]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};

export default NeuralBackground;
