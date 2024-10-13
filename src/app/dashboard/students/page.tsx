import React from "react";
import DashboardLayout from "./layout";
import { StudentContent } from "./StudentContent";
import { Header } from "@/app/components/Header";
import StudentCard from "../StudentCard";

export function Students() {
    return (
        <DashboardLayout>
            <Header title="Личный кабинет преподавателя"/>
            <StudentContent><StudentCard/></StudentContent>
        </DashboardLayout>
    );
}

export default Students;
