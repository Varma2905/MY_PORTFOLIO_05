import { Mesh, Program, Renderer, Triangle } from 'ogl';
import { useEffect, useRef, useState } from 'react';
import './Orb.css';

export default function Orb() {
  const ctnDom = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // 📱 Disable on mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isMobile) return null;

  useEffect(() => {
    const container = ctnDom.current;
    if (!container) return;

    // ✅ Renderer (fixed alpha issue)
    const renderer = new Renderer({
      alpha: true,
      premultipliedAlpha: false,
    });

    const gl = renderer.gl;
    container.appendChild(gl.canvas);

    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex: `
        attribute vec2 position;
        void main() {
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform float iTime;

        void main() {
          vec2 uv = gl_FragCoord.xy / 600.0;

          float wave = sin(iTime + uv.x * 3.0 + uv.y * 3.0);

          // 🎨 Dark neon (NO WHITE)
          vec3 color = vec3(
            0.2 + 0.3 * sin(iTime + uv.x * 2.0),
            0.0,
            0.4 + 0.4 * cos(iTime + uv.y * 2.0)
          );

          // ✨ Reduce brightness
          color *= 0.6;

          // 🧊 Transparency (NO SMOKE)
          gl_FragColor = vec4(color, 0.35);
        }
      `,
      uniforms: {
        iTime: { value: 0 }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      const width = container.clientWidth;
      const height = container.clientHeight;

      renderer.setSize(width * dpr, height * dpr);
      gl.canvas.style.width = width + 'px';
      gl.canvas.style.height = height + 'px';
    }

    window.addEventListener('resize', resize);
    resize();

    let raf;
    const update = (t) => {
      raf = requestAnimationFrame(update);
      program.uniforms.iTime.value = t * 0.001;
      renderer.render({ scene: mesh });
    };

    raf = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      container.removeChild(gl.canvas);
    };
  }, []);

  return <div ref={ctnDom} className="orb-container" />;
}