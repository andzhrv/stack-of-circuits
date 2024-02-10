import { ReactNode } from 'react';

export const CalculatorWrapper = ({ children }: { children: ReactNode }) => (
  <div className="w-full md:w-[25rem]">{children}</div>
);
