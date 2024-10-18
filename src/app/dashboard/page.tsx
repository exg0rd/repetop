import React from "react";
import DashboardLayout from "./layout";
import { DashboardContent } from "./DashboardContent";

export function Dashboard() {
    return (
        <DashboardLayout>
            <DashboardContent />
        </DashboardLayout>
    );
}

export default Dashboard;
