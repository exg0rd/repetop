import React from "react";

interface DashboardLayouProps {
    children?: React.ReactNode[];
}

export async function DashboardLayout({ children }: DashboardLayouProps) {
    return <div>{children}</div>;
}

export default DashboardLayout;
