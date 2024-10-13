'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { PinoutBadge } from '@/components/ui/pinout-badge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useScopedI18n } from '@/locales/client';

import { PinTypeColorMap, usePicoPinout } from './constants';

export const RaspberryPiPicoPinout = () => {
  const PICO_PINOUT = usePicoPinout();
  const t = useScopedI18n('RaspberryPiPicoPinout');

  const [isLeftSide, setIsLeftSide] = useState<boolean>(true);

  return (
    <div className="max-w-[27.4rem] md:max-w-[32rem] lg:max-w-full mx-auto overflow-hidden">
      <Button
        className="mb-4 lg:hidden"
        size="sm"
        onClick={() => setIsLeftSide((value) => !value)}
      >
        {!isLeftSide ? <CaretLeftIcon /> : null}
        {isLeftSide ? t('button.leftSideToggle') : t('button.rightSideToggle')}
        {isLeftSide ? <CaretRightIcon /> : null}
      </Button>
      <div
        className={cn('flex justify-center items-center', {
          'translate-x-[11.8rem] md:translate-x-[13.2rem] lg:translate-x-0':
            isLeftSide,
          'translate-x-[-11.8rem] md:translate-x-[-13.2rem] lg:translate-x-0':
            !isLeftSide
        })}
      >
        <div className="grid pt-5 gap-[0.18rem]">
          {PICO_PINOUT.slice(0, 20).map(
            ({
              number,
              title,
              description,
              name,
              type,
              spi,
              adc,
              i2c,
              uart,
              defaultFn
            }) => (
              <Popover key={number}>
                <PopoverTrigger asChild>
                  <button className="flex gap-1 justify-end border-none bg-none hover:opacity-60 data-[state=open]:opacity-60">
                    {uart ? (
                      <PinoutBadge
                        bgColor={defaultFn === 'uart' ? 'violetDark' : 'violet'}
                      >
                        {uart}
                      </PinoutBadge>
                    ) : null}
                    {i2c ? (
                      <PinoutBadge
                        bgColor={defaultFn === 'i2c' ? 'skyDark' : 'sky'}
                      >
                        {i2c}
                      </PinoutBadge>
                    ) : null}
                    {adc ? (
                      <PinoutBadge bgColor="green">{adc}</PinoutBadge>
                    ) : null}
                    {spi ? (
                      <PinoutBadge
                        bgColor={defaultFn === 'spi' ? 'pinkDark' : 'pink'}
                      >
                        {spi}
                      </PinoutBadge>
                    ) : null}
                    <PinoutBadge className={PinTypeColorMap[type]}>
                      {name}
                    </PinoutBadge>
                    <PinoutBadge bgColor="slate" size="square">
                      {number}
                    </PinoutBadge>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <h4 className="text-sm font-semibold">{title}</h4>
                  {description ? (
                    <p className="text-sm">{description}</p>
                  ) : null}
                </PopoverContent>
              </Popover>
            )
          )}
        </div>
        <div className="mx-2 relative basis-40 md:basis-48 self-stretch shrink-0">
          <Image
            src="/images/raspberry-pi-pico.svg"
            fill
            style={{ objectFit: 'contain' }}
            alt="Picture of the author"
          />
        </div>
        <div className="grid pt-5 gap-[0.18rem]">
          {PICO_PINOUT.slice(20)
            .reverse()
            .map(
              ({
                number,
                title,
                description,
                name,
                type,
                spi,
                adc,
                i2c,
                uart,
                defaultFn
              }) => (
                <Popover key={number}>
                  <PopoverTrigger asChild>
                    <button className="flex gap-1 justify-start border-none bg-none hover:opacity-60 data-[state=open]:opacity-60">
                      <PinoutBadge bgColor="slate" size="square">
                        {number}
                      </PinoutBadge>
                      <PinoutBadge className={PinTypeColorMap[type]}>
                        {name}
                      </PinoutBadge>
                      {spi ? (
                        <PinoutBadge
                          bgColor={defaultFn === 'spi' ? 'pinkDark' : 'pink'}
                        >
                          {spi}
                        </PinoutBadge>
                      ) : null}
                      {adc ? (
                        <PinoutBadge bgColor="green">{adc}</PinoutBadge>
                      ) : null}
                      {i2c ? (
                        <PinoutBadge
                          bgColor={defaultFn === 'i2c' ? 'skyDark' : 'sky'}
                        >
                          {i2c}
                        </PinoutBadge>
                      ) : null}
                      {uart ? (
                        <PinoutBadge
                          bgColor={
                            defaultFn === 'uart' ? 'violetDark' : 'violet'
                          }
                        >
                          {uart}
                        </PinoutBadge>
                      ) : null}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <h4 className="text-sm font-semibold">{title}</h4>
                    {description ? (
                      <p className="text-sm">{description}</p>
                    ) : null}
                  </PopoverContent>
                </Popover>
              )
            )}
        </div>
      </div>
    </div>
  );
};
