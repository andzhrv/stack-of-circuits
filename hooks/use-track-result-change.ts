import { useEffect, useRef } from 'react';

import { useTrackEvent } from './use-track-event';

export const useTrackResultChange = (
  name: string,
  value: number | undefined
) => {
  const valueRef = useRef<number | undefined>();
  const tracked = useRef<boolean>(false);

  const trackEvent = useTrackEvent(name);

  useEffect(() => {
    if (value && !valueRef.current) {
      valueRef.current = value;
    } else if (
      valueRef.current &&
      valueRef.current !== value &&
      !tracked.current
    ) {
      tracked.current = true;
      trackEvent();
    }
  }, [trackEvent, value]);
};
