import { ReactNode } from 'react';

import { Sidebar } from '@/components/features/sidebar';

const ToolsLayout = ({
  children
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
      <main className="basis-full">{children}</main>
      <Sidebar />
    </div>
  );
};

export default ToolsLayout;
