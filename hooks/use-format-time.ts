import { useScopedI18n } from '@/locales/client';

export const useFormatTime = () => {
  const t = useScopedI18n('useFormatTime');

  /**
   * Format the number of seconds into a string with the time duration.
   * @param time The number in seconds.
   */
  return (
    time: number | undefined,
    displayDepth?: 'milliseconds' | 'microseconds'
  ): string => {
    if (typeof time !== 'number' || isNaN(time)) {
      return '\u2014';
    }

    const withMilliseconds =
      displayDepth === 'milliseconds' || displayDepth === 'microseconds';
    const withMicroseconds = displayDepth === 'microseconds';

    const days = Math.floor(time / 86400);
    const hours = Math.floor((time % 86400) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = withMilliseconds
      ? Math.floor(time % 60)
      : Math.round(time % 60);

    const milliseconds = withMicroseconds
      ? Math.floor((time * 1000) % 1000)
      : Math.round((time * 1000) % 1000);
    const microseconds = Math.round((time * 1000000) % 1000);

    return (
      [
        days ? `${days}\u202F${t('days')}` : undefined,
        hours ? `${hours}\u202F${t('hours')}` : undefined,
        minutes ? `${minutes}\u202F${t('minutes')}` : undefined,
        seconds ? `${seconds}\u202F${t('seconds')}` : undefined,
        milliseconds && withMilliseconds
          ? `${milliseconds}\u202F${t('milliseconds')}`
          : undefined,
        microseconds && withMicroseconds
          ? `${microseconds}\u202F${t('microseconds')}`
          : undefined
      ]
        .filter(Boolean)
        .join(' ') || `0\u202F${t('seconds')}`
    );
  };
};
