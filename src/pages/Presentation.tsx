import { useEffect, useMemo, useRef, useState } from "react";

type Slide = {
  id: string;
  title: string;
  transition?: "fade" | "slide" | "zoom";
  content: JSX.Element;
};

const useSwipe = (onSwipeLeft: () => void, onSwipeRight: () => void) => {
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);

  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      startX.current = touch.clientX;
      startY.current = touch.clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (startX.current === null || startY.current === null) return;
      const touch = e.changedTouches[0];
      const dx = touch.clientX - startX.current;
      const dy = touch.clientY - startY.current;
      // horizontal swipe with some tolerance
      if (Math.abs(dx) > 40 && Math.abs(dy) < 60) {
        if (dx < 0) onSwipeLeft();
        else onSwipeRight();
      }
      startX.current = null;
      startY.current = null;
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight]);
};

const Presentation = () => {
  const slides: Slide[] = useMemo(
    () => [
      {
        id: "titulo",
        title: "Ética en Inteligencia Artificial",
        transition: "zoom",
        content: (
          <div className="h-full w-full grid place-items-center">
            <div className="text-center max-w-4xl px-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                Ética en Inteligencia Artificial
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Navegando el futuro digital con responsabilidad
              </p>
              <p className="text-sm opacity-70">
                Usa ← → o barra espaciadora. Pulsa O para vista general.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "temas",
        title: "Temas clave",
        transition: "slide",
        content: (
          <div className="h-full w-full flex items-center justify-center">
            <div className="max-w-3xl px-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Temas clave</h2>
              <ul className="space-y-4 text-xl leading-relaxed">
                <li className="fragment">Transparencia y explicabilidad</li>
                <li className="fragment">Privacidad y protección de datos</li>
                <li className="fragment">Mitigación de sesgos algorítmicos</li>
                <li className="fragment">Responsabilidad y gobernanza</li>
                <li className="fragment">Impacto social y laboral</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        id: "casos",
        title: "Casos de estudio",
        transition: "fade",
        content: (
          <div className="h-full w-full grid place-items-center">
            <div className="max-w-4xl px-6 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Casos de estudio</h2>
              <p className="text-xl opacity-90 mb-6">
                Aprendizajes a partir de implementaciones reales de IA
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="glass-card p-4 rounded-xl fragment">Recomendadores y burbujas de filtro</div>
                <div className="glass-card p-4 rounded-xl fragment">Reconocimiento facial y sesgos</div>
                <div className="glass-card p-4 rounded-xl fragment">Procesos de selección automatizados</div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "principios",
        title: "Principios prácticos",
        transition: "slide",
        content: (
          <div className="h-full w-full flex items-center justify-center">
            <div className="max-w-3xl px-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Principios prácticos</h2>
              <ol className="space-y-4 text-xl leading-relaxed list-decimal list-inside">
                <li className="fragment">Diseño centrado en las personas</li>
                <li className="fragment">Evaluaciones de impacto y auditorías</li>
                <li className="fragment">Datos diversos y gobernados</li>
                <li className="fragment">Monitoreo continuo y trazabilidad</li>
              </ol>
            </div>
          </div>
        ),
      },
      {
        id: "cierre",
        title: "Gracias",
        transition: "zoom",
        content: (
          <div className="h-full w-full grid place-items-center">
            <div className="text-center px-6">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">¡Gracias!</h2>
              <p className="text-xl opacity-90 mb-8">Preguntas, ideas y próximos pasos</p>
              <p className="opacity-70">Pulsa Esc para salir de vista general, Home/End para saltar.</p>
            </div>
          </div>
        ),
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [fragmentIndex, setFragmentIndex] = useState(0);
  const [overview, setOverview] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = slides.length;
  const current = slides[index];

  // Update hash to enable deep-linking
  useEffect(() => {
    const fromHash = window.location.hash.match(/#\/(\d+)/);
    if (fromHash) {
      const n = parseInt(fromHash[1], 10);
      if (!Number.isNaN(n)) setIndex(Math.max(0, Math.min(total - 1, n)));
    }
  }, [total]);

  useEffect(() => {
    window.location.hash = `#/${index}`;
  }, [index]);

  // Keyboard controls
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "Backspace") {
        e.preventDefault();
        prev();
      } else if (e.key.toLowerCase() === "o") {
        setOverview((v) => !v);
      } else if (e.key === "Home") {
        goTo(0);
      } else if (e.key === "End") {
        goTo(total - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total, fragmentIndex, index]);

  // Click zones
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onClick = (e: MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = e.clientX - rect.left;
      if (x > rect.width * 0.6) next();
      else if (x < rect.width * 0.4) prev();
    };
    el.addEventListener("click", onClick);
    return () => el.removeEventListener("click", onClick);
  }, [index, fragmentIndex]);

  useSwipe(() => next(), () => prev());

  const countFragments = (node: HTMLElement | null) => {
    if (!node) return 0;
    return node.querySelectorAll<HTMLElement>(".fragment").length;
  };

  const next = () => {
    const node = document.getElementById(`slide-${current.id}`);
    const totalFragments = countFragments(node);
    if (fragmentIndex < totalFragments) {
      setFragmentIndex((f) => f + 1);
      return;
    }
    if (index < total - 1) {
      setIndex((i) => i + 1);
      setFragmentIndex(0);
    }
  };

  const prev = () => {
    if (fragmentIndex > 0) {
      setFragmentIndex((f) => f - 1);
      return;
    }
    if (index > 0) {
      // Jump to previous and reveal all fragments there
      const prevIndex = index - 1;
      setIndex(prevIndex);
      // defer to allow DOM to render
      requestAnimationFrame(() => {
        const node = document.getElementById(`slide-${slides[prevIndex].id}`);
        const totalFragments = countFragments(node);
        setFragmentIndex(totalFragments);
      });
    }
  };

  const goTo = (n: number) => {
    const clamped = Math.max(0, Math.min(total - 1, n));
    setIndex(clamped);
    // set fragments to 0 for new slide
    requestAnimationFrame(() => setFragmentIndex(0));
    setOverview(false);
  };

  useEffect(() => {
    // Apply fragment visibility on every change
    const node = document.getElementById(`slide-${current.id}`);
    const fragments = node?.querySelectorAll<HTMLElement>(".fragment") ?? [];
    fragments.forEach((el, i) => {
      if (i < fragmentIndex) el.classList.add("visible");
      else el.classList.remove("visible");
    });
  }, [current.id, fragmentIndex]);

  const progress = ((index + 1) / total) * 100;

  return (
    <div className="deck" ref={containerRef}>
      {/* Slides */}
      {slides.map((s, i) => (
        <section
          key={s.id}
          id={`slide-${s.id}`}
          data-transition={s.transition ?? "fade"}
          className={`slide ${i === index ? "active" : ""}`}
        >
          {s.content}
        </section>
      ))}

      {/* Progress and counter */}
      <div className="deck-progress">
        <div className="deck-progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <div className="deck-counter">{index + 1} / {total}</div>

      {/* Controls */}
      <div className="deck-controls">
        <button className="btn" onClick={prev} aria-label="Anterior">←</button>
        <button className="btn" onClick={next} aria-label="Siguiente">→</button>
      </div>

      {/* Overview grid */}
      {overview && (
        <div className="deck-overview" role="dialog" aria-modal>
          <div className="grid">
            {slides.map((s, i) => (
              <button
                key={s.id}
                className={`thumb ${i === index ? "current" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Ir a la diapositiva ${i + 1}`}
              >
                <div className="thumb-inner">
                  <div className="thumb-title">{s.title}</div>
                  <div className="thumb-number">{i + 1}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Presentation;

