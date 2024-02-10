import { useScopedI18n } from '@/locales/client';

export const useFormatTime = () => {
  const t = useScopedI18n('useFormatTime');

  /**
   * Format the number of seconds into a string with the time duration.
   * @param time The number in seconds.
   */
  return (time: number): string => {
    if (typeof time !== 'number' || isNaN(time)) {
      return '\u2014';
    }

    const days = Math.floor(time / 86400);
    const hours = Math.floor((time % 86400) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.round(time % 60);

    return (
      [
        days ? `${days}\u2009${t('days')}` : undefined,
        hours ? `${hours}\u2009${t('hours')}` : undefined,
        minutes ? `${minutes}\u2009${t('minutes')}` : undefined,
        seconds ? `${seconds}\u2009${t('seconds')}` : undefined
      ]
        .filter(Boolean)
        .join(' ') || `0\u2009${t('seconds')}`
    );
  };
};
