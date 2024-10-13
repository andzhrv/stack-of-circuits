import { useScopedI18n } from '@/locales/client';

export const enum PinType {
  Power = 'power',
  Ground = 'ground',
  GPIO = 'GPIO',
  SystemControl = 'SystemControl',
  None = 'none'
}

export const PinTypeColorMap: Record<PinType, string> = {
  [PinType.Power]: 'bg-red-600',
  [PinType.Ground]: 'bg-gray-700',
  [PinType.GPIO]: 'bg-lime-500',
  [PinType.SystemControl]: 'bg-red-300',
  [PinType.None]: ''
};

export const usePicoPinout = (): {
  number: number;
  title: string;
  description: string;
  name: string;
  type: PinType;
  adc: string | undefined;
  spi: string | undefined;
  i2c: string | undefined;
  uart: string | undefined;
  defaultFn: string | undefined;
}[] => {
  const t = useScopedI18n('RaspberryPiPicoPinout');

  return [
    {
      number: 1,
      title: t('pin1.title'),
      description: t('pin1.description'),
      name: 'GP0',
      type: PinType.GPIO,
      adc: undefined,
      spi: 'SPI0 RX',
      i2c: 'I2C0 SDA',
      uart: 'UART0 TX',
      defaultFn: 'uart'
    },
    {
      number: 2,
      title: t('pin2.title'),
      description: t('pin2.description'),
      name: 'GP1',
      type: PinType.GPIO,
      adc: undefined,
      spi: 'SPI0 CSn',
      i2c: 'I2C0 SCL',
      uart: 'UART0 RX',
      defaultFn: 'uart'
    },
    {
      number: 3,
      title: t('pin3.title'),
      description: t('pin3.description'),
      name: 'GND',
      type: PinType.Ground,
      adc: undefined,
      spi: undefined,
      i2c: undefined,
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 4,
      title: t('pin4.title'),
      description: t('pin4.description'),
      name: 'GP2',
      type: PinType.GPIO,
      adc: undefined,
      spi: 'SPI0 SCK',
      i2c: 'I2C1 SDA',
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 5,
      title: t('pin5.title'),
      description: t('pin5.description'),
      name: 'GP3',
      type: PinType.GPIO,
      adc: undefined,
      spi: 'SPI0 TX',
      i2c: 'I2C1 SCL',
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 6,
      title: t('pin6.title'),
      description: t('pin6.description'),
      name: 'GP4',
      type: PinType.GPIO,
      adc: undefined,
      spi: 'SPI0 RX',
      i2c: 'I2C0 SDA',
      uart: 'UART1 TX',
      defaultFn: 'i2c'
    },
    {
      number: 7,
      title: t('pin7.title'),
      description: t('pin7.description'),
      name: 'GP5',
      type: PinType.GPIO,
      adc: undefined,
      spi: 'SPI0 CSn',
      i2c: 'I2C0 SCL',
      uart: 'UART1 RX',
      defaultFn: 'i2c'
    },
    {
      number: 8,
      title: t('pin8.title'),
      description: t('pin8.description'),
      name: 'GND',
      type: PinType.Ground,
      adc: undefined,
      spi: undefined,
      i2c: undefined,
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 9,
      title: t('pin9.title'),
      description: t('pin9.description'),
      name: 'GP6',
      type: PinType.GPIO,
      adc: undefined,
      spi: 'SPI0 SCK',
      i2c: 'I2C1 SDA',
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 10,
      title: t('pin10.title'),
      description: t('pin10.description'),
      name: 'GP7',
      type: PinType.GPIO,
      adc: undefined,
      spi: 'SPI0 TX',
      i2c: 'I2C1 SCL',
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 11,
      title: t('pin11.title'),
      description: t('pin11.description'),
      name: 'GP8',
      type: PinType.GPIO,
      adc: undefined,
      spi: 'SPI1 RX',
      i2c: 'I2C0 SDA',
      uart: 'UART1 TX',
      defaultFn: undefined
    },
    {
      number: 12,
      title: t('pin12.title'),
      description: t('pin12.description'),
      name: 'GP9',
      type: PinType.GPIO,
      adc: undefined,
      spi: 'SPI1 CSn',
      i2c: 'I2C0 SCL',
      uart: 'UART1 RX',
      defaultFn: undefined
    },
    {
      number: 13,
      title: t('pin13.title'),
      description: t('pin13.description'),
      name: 'GND',
      type: PinType.Ground,
      adc: undefined,
      spi: undefined,
      i2c: undefined,
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 14,
      title: t('pin14.title'),
      description: t('pin14.description'),
      name: 'GP10',
      type: PinType.GPIO,
      adc: undefined,
      spi: 'SPI1 SCK',
      i2c: 'I2C1 SDA',
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 15,
      title: t('pin15.title'),
      description: t('pin15.description'),
      name: 'GP11',
      type: PinType.GPIO,
      adc: undefined,
      spi: 'SPI1 TX',
      i2c: 'I2C1 SCL',
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 16,
      title: t('pin16.title'),
      description: t('pin16.description'),
      name: 'GP12',
      type: PinType.GPIO,
      adc: undefined,
      spi: 'SPI1 RX',
      i2c: 'I2C0 SDA',
      uart: 'UART0 TX',
      defaultFn: undefined
    },
    {
      number: 17,
      title: t('pin17.title'),
      description: t('pin17.description'),
      name: 'GP13',
      type: PinType.GPIO,
      adc: undefined,
      spi: 'SPI1 CSn',
      i2c: 'I2C0 SCL',
      uart: 'UART0 RX',
      defaultFn: undefined
    },
    {
      number: 18,
      title: t('pin18.title'),
      description: t('pin18.description'),
      name: 'GND',
      type: PinType.Ground,
      adc: undefined,
      spi: undefined,
      i2c: undefined,
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 19,
      title: t('pin19.title'),
      description: t('pin19.description'),
      name: 'GP14',
      type: PinType.GPIO,
      adc: undefined,
      spi: 'SPI1 SCK',
      i2c: 'I2C1 SDA',
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 20,
      title: t('pin20.title'),
      description: t('pin20.description'),
      name: 'GP15',
      type: PinType.GPIO,
      adc: undefined,
      spi: 'SPI1 TX',
      i2c: 'I2C1 SCL',
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 21,
      title: t('pin21.title'),
      description: t('pin21.description'),
      name: 'GP16',
      type: PinType.GPIO,
      adc: undefined,
      spi: 'SPI0 RX',
      i2c: 'I2C0 SDA',
      uart: 'UART0 TX',
      defaultFn: 'spi'
    },
    {
      number: 22,
      title: t('pin22.title'),
      description: t('pin22.description'),
      name: 'GP17',
      type: PinType.GPIO,
      adc: undefined,
      spi: 'SPI0 CSn',
      i2c: 'I2C0 SCL',
      uart: 'UART0 RX',
      defaultFn: 'spi'
    },
    {
      number: 23,
      title: t('pin23.title'),
      description: t('pin23.description'),
      name: 'GND',
      type: PinType.Ground,
      adc: undefined,
      spi: undefined,
      i2c: undefined,
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 24,
      title: t('pin24.title'),
      description: t('pin24.description'),
      name: 'GP18',
      type: PinType.GPIO,
      adc: undefined,
      spi: 'SPI0 SCK',
      i2c: 'I2C1 SDA',
      uart: undefined,
      defaultFn: 'spi'
    },
    {
      number: 25,
      title: t('pin25.title'),
      description: t('pin25.description'),
      name: 'GP19',
      type: PinType.GPIO,
      adc: undefined,
      spi: 'SPI0 TX',
      i2c: 'I2C1 SCL',
      uart: undefined,
      defaultFn: 'spi'
    },
    {
      number: 26,
      title: t('pin26.title'),
      description: t('pin26.description'),
      name: 'GP20',
      type: PinType.GPIO,
      adc: undefined,
      spi: undefined,
      i2c: 'I2C0 SDA',
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 27,
      title: t('pin27.title'),
      description: t('pin27.description'),
      name: 'GP21',
      type: PinType.GPIO,
      adc: undefined,
      spi: undefined,
      i2c: 'I2C0 SCL',
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 28,
      title: t('pin28.title'),
      description: t('pin28.description'),
      name: 'GND',
      type: PinType.Ground,
      adc: undefined,
      spi: undefined,
      i2c: undefined,
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 29,
      title: t('pin29.title'),
      description: t('pin29.description'),
      name: 'GP22',
      type: PinType.GPIO,
      adc: undefined,
      spi: undefined,
      i2c: undefined,
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 30,
      title: t('pin30.title'),
      description: t('pin30.description'),
      name: 'RUN',
      type: PinType.SystemControl,
      adc: undefined,
      spi: undefined,
      i2c: undefined,
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 31,
      title: t('pin31.title'),
      description: t('pin31.description'),
      name: 'GP26',
      type: PinType.GPIO,
      adc: 'ADC0',
      spi: undefined,
      i2c: 'I2C1 SDA',
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 32,
      title: t('pin32.title'),
      description: t('pin32.description'),
      name: 'GP27',
      type: PinType.GPIO,
      adc: 'ADC1',
      spi: undefined,
      i2c: 'I2C1 SCL',
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 33,
      title: t('pin33.title'),
      description: t('pin33.description'),
      name: 'GND',
      type: PinType.Ground,
      adc: 'AGND',
      spi: undefined,
      i2c: undefined,
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 34,
      title: t('pin34.title'),
      description: t('pin34.description'),
      name: 'GP28',
      type: PinType.GPIO,
      adc: 'ADC2',
      spi: undefined,
      i2c: undefined,
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 35,
      title: t('pin35.title'),
      description: t('pin35.description'),
      name: '',
      type: PinType.None,
      adc: 'ADC_VREF',
      spi: undefined,
      i2c: undefined,
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 36,
      title: t('pin36.title'),
      description: t('pin36.description'),
      name: '3V3(OUT)',
      type: PinType.Power,
      adc: undefined,
      spi: undefined,
      i2c: undefined,
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 37,
      title: t('pin37.title'),
      description: t('pin37.description'),
      name: '3V3_EN',
      type: PinType.SystemControl,
      adc: undefined,
      spi: undefined,
      i2c: undefined,
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 38,
      title: t('pin38.title'),
      description: t('pin38.description'),
      name: 'GND',
      type: PinType.Ground,
      adc: undefined,
      spi: undefined,
      i2c: undefined,
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 39,
      title: t('pin39.title'),
      description: t('pin39.description'),
      name: 'VSYS',
      type: PinType.Power,
      adc: undefined,
      spi: undefined,
      i2c: undefined,
      uart: undefined,
      defaultFn: undefined
    },
    {
      number: 40,
      title: t('pin40.title'),
      description: t('pin40.description'),
      name: 'VBUS',
      type: PinType.Power,
      adc: undefined,
      spi: undefined,
      i2c: undefined,
      uart: undefined,
      defaultFn: undefined
    }
  ];
};
