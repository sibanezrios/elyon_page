import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Analytics tracking stub
export const analytics = {
  track: (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      console.log('[Analytics]', event, properties);
      // Integrar con Plausible/GA4/Vercel Analytics aquí
    }
  }
};
