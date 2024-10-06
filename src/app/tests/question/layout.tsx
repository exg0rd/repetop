// LoginLayout.tsx
import React, { ReactNode } from "react";

interface QuestionLayoutProps {
    children: ReactNode;
}

export const QuestionLayout: React.FC<QuestionLayoutProps> = ({ children }) => {
    return <div> {children}</div>;
};

export default QuestionLayout;
