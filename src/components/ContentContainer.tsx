import React from 'react';

type ContentContainerProps = {
  children: React.ReactNode;
};

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
  return (
    <main className="py-8 px-6 md:pt-24 md:pb-16 md:px-8 lg:px-12 min-h-screen overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        {children}
      </div>
    </main>
  );
};

export default ContentContainer;