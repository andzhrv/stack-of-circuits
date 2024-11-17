import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { Icon, IconCpu, IconProps } from '@tabler/icons-react';

import { getI18n } from '@/locales/server';

export const getGuidesLink = async (): Promise<
  {
    title: string;
    href: string;
    description: string;
    Icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  }[]
> => {
  const t = await getI18n();

  return [
    {
      title: t('RaspberryPiPico.title'),
      href: '/guides/raspberry-pi-pico',
      description: t('RaspberryPiPico.description'),
      Icon: IconCpu
    }
  ];
};
