import { useScopedI18n } from '@/locales/client';

export const useBandColors = () => {
  const t = useScopedI18n('useBandColors');

  return {
    black: {
      title: t('black'),
      value: '0',
      color: '#19180A'
    },
    brown: {
      title: t('brown'),
      value: '1',
      color: '#8F5300'
    },
    red: {
      title: t('red'),
      value: '2',
      color: '#D00000'
    },
    orange: {
      title: t('orange'),
      value: '3',
      color: '#E85D04'
    },
    yellow: {
      title: t('yellow'),
      value: '4',
      color: '#F3DE2C'
    },
    green: {
      title: t('green'),
      value: '5',
      color: '#3F8D4F'
    },
    blue: {
      title: t('blue'),
      value: '6',
      color: '#009CCC'
    },
    violet: {
      title: t('violet'),
      value: '7',
      color: '#822E81'
    },
    gray: {
      title: t('gray'),
      value: '8',
      color: '#ABADB0'
    },
    white: {
      title: t('white'),
      value: '9',
      color: '#F9F6F0'
    },
    silver: {
      title: t('silver'),
      value: '-1',
      color: '#8D99AE'
    },
    gold: {
      title: t('gold'),
      value: '-2',
      color: '#FFFC47'
    }
  } as const;
};

export type BandKey = keyof Awaited<ReturnType<typeof useBandColors>>;
