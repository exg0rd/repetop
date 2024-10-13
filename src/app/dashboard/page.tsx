import React from "react";
import DashboardLayout from "./layout";
import { DashboardContent } from "./DashboardContent";
import { Header } from "../components/Header";
import Students from "./StudentCard";

export function Dashboard() {
    return (
        <DashboardLayout>
            <Header title="Личный кабинет преподавателя"/>
            <DashboardContent><Students/></DashboardContent>
        </DashboardLayout>
    );
}

export default Dashboard;
