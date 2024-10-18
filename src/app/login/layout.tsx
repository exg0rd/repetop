// LoginLayout.tsx
import React, { ReactNode } from "react";

interface AuthFormLayoutProps {
    children: ReactNode;
}

export const AuthFormLayout: React.FC<AuthFormLayoutProps> = ({ children }) => {
    return <div>{children}</div>;
};

export default AuthFormLayout;
