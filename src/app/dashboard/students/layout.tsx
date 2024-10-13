import React from "react";

interface DashboardLayoutProps {
    children?: React.ReactNode[];
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
    return <div>{children}</div>;
}

export default DashboardLayout;
