import React from "react";

interface DashboardLayoutProps {
    children?: React.ReactNode[];
}

export function StudentLayout({ children }: DashboardLayoutProps) {
    return <div className="bg-blue-100">{children}</div>;
}

export default StudentLayout;
