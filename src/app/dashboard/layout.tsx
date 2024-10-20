import React from "react";

interface DashboardLayoutProps {
    children?: React.ReactNode[];
}

export function StudentsLayout({ children }: DashboardLayoutProps) {
    return <div>{children}</div>;
}

export default StudentsLayout;
