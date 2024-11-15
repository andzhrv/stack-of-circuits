import { ReactNode } from 'react';

import { UserFeedback } from '../user-feedback';

export const CalculatorWrapper = ({ children }: { children: ReactNode }) => (
  <div className="w-full md:w-[28rem]">
    {children}
    <UserFeedback className="mt-4" />
  </div>
);
