import { ReactNode } from 'react';

import { Sidebar } from '@/components/features/sidebar';

const ToolsLayout = ({
  children
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:mr-8 basis-full">{children}</div>
      <Sidebar />
    </div>
  );
};

export default ToolsLayout;
