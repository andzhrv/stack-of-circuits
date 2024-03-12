import { Umami } from '@/types/umami';

declare global {
  interface Window {
    umami?: Umami;
  }
}
