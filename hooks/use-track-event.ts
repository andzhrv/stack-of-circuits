import { useCallback } from 'react';

import { UmamiData } from '@/types/umami';

export const useTrackEvent = (name: string) => {
  return useCallback(
    (data?: UmamiData) => {
      if (window?.umami) {
        window.umami.track(name, data);
      }
    },
    [name]
  );
};
