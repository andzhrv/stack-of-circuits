import { useScopedI18n } from '@/locales/client';

import { ResistivityKey } from './constants';

export const useMaterialNames = (): Record<ResistivityKey, string> => {
  const t = useScopedI18n('materials');

  return {
    copper: t('copper'),
    aluminum: t('aluminum'),
    silver: t('silver'),
    gold: t('gold'),
    iron: t('iron'),
    nichrome: t('nichrome'),
    tin: t('tin'),
    nickel: t('nickel'),
    platinum: t('platinum'),
    brass: t('brass'),
    tungsten: t('tungsten')
  };
};
