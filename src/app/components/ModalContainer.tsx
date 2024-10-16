import { cn } from '@/lib/utils';
import React from 'react';
import { comforta } from '../layout';


interface Props {
    children?: React.ReactNode;
}

export const ModalContainer: React.FC<Props> = ({children}) => {
  return (
    <div className={cn(comforta.className, "fixed inset-0 bg-blue-100 flex items-center justify-center z-50")}>
    <div className="bg-white m-3 p-6 rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {children}
    </div>
</div>
  );
};