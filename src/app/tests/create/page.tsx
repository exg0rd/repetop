import React from 'react';
import CreateTest from './CreateTest';

export const Page: React.FC = ({children}) => {
  return (
    <div>
        <CreateTest/>
        {children}</div>
  );
};

export default Page;