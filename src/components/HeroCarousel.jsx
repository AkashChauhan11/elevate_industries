import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Cinematic full-bleed hero carousel.
 * - Crossfades through `slides` with a slow Ken Burns zoom.
 * - Auto-advances continuously (~`interval` ms); click a thumbnail to jump.
 * - Every slide image links to `href` (the catalog) — all images are clickable.
 * - Overlay copy is passed as `children` (rendered above the scrim, click-through
 *   except for its own interactive elements).
 */
const HeroCarousel = ({ slides, href = '/products', interval = 4800, children }) => {
  const [active, setActive] = useState(0);

  // Auto-advance continuously. The timer resets whenever `active` changes,
  // so a manual thumbnail click still gets a full dwell before the next move.
  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setTimeout(
      () => setActive((i) => (i + 1) % slides.length),
      interval
    );
    return () => clearTimeout(t);
  }, [active, slides.length, interval]);

  return (
    <section
      className="relative w-full min-h-[80vh] md:min-h-[88vh] overflow-hidden bg-espresso-900"
      aria-roledescription="carousel"
      aria-label="Our components"
    >
      {/* Slides — each image links to the catalog */}
      {slides.map((s, i) => {
        const isActive = i === active;
        return (
          <Link
            key={s.short}
            to={href}
            aria-label={`${s.name} — view our products`}
            aria-hidden={!isActive}
            tabIndex={isActive ? 0 : -1}
            className={`absolute inset-0 transition-opacity duration-[1100ms] ease-out ${
              isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={s.img}
              alt={s.alt}
              className={`w-full h-full object-cover ${isActive ? 'kenburns-active' : ''}`}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </Link>
        );
      })}

      {/* Scrims — left-weighted for copy legibility + bottom for thumbnails */}
      <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-r from-espresso-900/95 via-espresso-900/65 to-espresso-900/5" />
      <div className="absolute inset-0 z-[2] pointer-events-none bg-gradient-to-t from-espresso-900/85 via-transparent to-transparent" />
      {/* Brass top hairline */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-[3] bg-brass-gradient" />

      {/* Overlay copy (click-through except its own buttons) */}
      <div className="relative z-[4] h-full min-h-[80vh] md:min-h-[88vh] pointer-events-none">
        <div className="container-custom h-full flex items-center px-5 sm:px-6 lg:px-8 pt-24 pb-44 md:pb-32">
          <div className="max-w-2xl">{children}</div>
        </div>
      </div>

      {/* Named, clickable thumbnails */}
      <div className="absolute z-[5] bottom-6 left-5 right-5 sm:left-6 sm:right-6 lg:left-auto lg:right-8 lg:w-[380px]">
        <div className="grid grid-cols-4 gap-2.5">
          {slides.map((s, i) => {
            const isActive = i === active;
            return (
              <button
                key={s.short}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${s.name}`}
                aria-current={isActive}
                className="group text-left focus:outline-none"
              >
                <div className="relative h-12 sm:h-14 w-full rounded-lg overflow-hidden border border-white/15 shadow-warm">
                  <img src={s.img} alt="" className="w-full h-full object-cover" />
                  <span
                    className={`absolute inset-0 rounded-lg border-2 transition-all duration-300 ${
                      isActive ? 'border-brass-light opacity-100' : 'border-transparent opacity-0 group-hover:opacity-100 group-hover:border-white/40'
                    }`}
                  />
                  {!isActive && <span className="absolute inset-0 bg-espresso-900/40 group-hover:bg-espresso-900/10 transition-colors" />}
                </div>
                <span
                  className={`block text-center text-[10px] sm:text-[11px] mt-1.5 font-semibold tracking-wide transition-colors ${
                    isActive ? 'text-brass-light' : 'text-cream/55 group-hover:text-cream/80'
                  }`}
                >
                  {s.short}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
