import React from "react";

interface DashboardLayoutProps {
    children?: React.ReactNode[];
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
    return <div className="bg-blue-100">{children}</div>;
}

export default DashboardLayout;
