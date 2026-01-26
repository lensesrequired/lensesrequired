import defaultTheme from 'tailwindcss/defaultTheme';
import { useEffect, useState } from 'react';

const { screens } = defaultTheme;
type Breakpoint = keyof typeof screens;

/**
 * Convert rem → px using current root font-size
 */
const remToPx = (rem: string) =>
  parseFloat(rem) *
  (typeof window === 'undefined'
    ? 12
    : parseFloat(getComputedStyle(document.documentElement).fontSize));

/**
 * Sort breakpoints smallest → largest
 */
const orderedScreens = Object.entries(screens)
  .map(([key, value]) => [key, remToPx(value)] as [Breakpoint, number])
  .sort((a, b) => b[1] - a[1]);

export function useTailwindBreakpoint(): Breakpoint | null {
  const [breakpoint, setBreakpoint] = useState<Breakpoint | null>(null);

  useEffect(() => {
    const getBreakpoint = () => {
      const width = window.innerWidth;

      let current: Breakpoint | null = null;

      for (const [key, maxWidth] of orderedScreens) {
        if (width <= maxWidth) {
          current = key;
        }
      }

      return current;
    };

    const update = () => {
      setBreakpoint(getBreakpoint());
    };

    update(); // initial
    window.addEventListener('resize', update);

    return () => window.removeEventListener('resize', update);
  }, []);

  return breakpoint;
}
