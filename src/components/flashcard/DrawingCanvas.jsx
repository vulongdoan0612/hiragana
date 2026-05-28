import { useRef, useEffect, useCallback, useState } from 'react';
import { Eraser, PenLine } from 'lucide-react';

export default function DrawingCanvas({ resetKey }) {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const lastPos = useRef(null);
  const [hasDrawing, setHasDrawing] = useState(false);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    if (!rect.width) return;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
  }, []);

  useEffect(() => {
    initCanvas();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ro = new ResizeObserver(initCanvas);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, [initCanvas]);

  // Clear when card changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, rect.width, rect.height);
    setHasDrawing(false);
  }, [resetKey]);

  const getPos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const src = e.touches?.[0] ?? e;
    return { x: src.clientX - rect.left, y: src.clientY - rect.top };
  };

  const startDraw = (e) => {
    e.preventDefault();
    isDrawing.current = true;
    lastPos.current = getPos(e);
  };

  const draw = (e) => {
    e.preventDefault();
    if (!isDrawing.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const pos = getPos(e);

    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle = '#a78bfa';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();

    lastPos.current = pos;
    setHasDrawing(true);
  };

  const stopDraw = () => {
    isDrawing.current = false;
    lastPos.current = null;
  };

  const clear = () => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, rect.width, rect.height);
    setHasDrawing(false);
  };

  return (
    <div className="w-full max-w-sm flex flex-col gap-2">
      <div className="flex items-center justify-between px-1">
        <span className="text-white/40 text-xs uppercase tracking-wider flex items-center gap-1.5">
          <PenLine size={12} />
          Luyện viết
        </span>
        {hasDrawing && (
          <button
            onClick={clear}
            className="text-xs text-white/40 hover:text-rose-400 flex items-center gap-1 transition-colors"
          >
            <Eraser size={12} />
            Xoá
          </button>
        )}
      </div>
      <canvas
        ref={canvasRef}
        className="w-full h-72 rounded-2xl bg-white/5 border border-white/10 cursor-crosshair touch-none"
        onMouseDown={startDraw}
        onMouseMove={draw}
        onMouseUp={stopDraw}
        onMouseLeave={stopDraw}
        onTouchStart={startDraw}
        onTouchMove={draw}
        onTouchEnd={stopDraw}
      />
    </div>
  );
}
