import React from "react";
import { Header } from "../components/Header";
import DashboardLayout from "./layout";
import { DashboardContent } from "./DashboardContent";

export async function Dashboard() {
    return (
        <DashboardLayout>
            <Header />
            <DashboardContent>
            </DashboardContent>
        </DashboardLayout>
    );
}

export default Dashboard;
