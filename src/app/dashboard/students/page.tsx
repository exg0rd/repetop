import React from "react";
import DashboardLayout from "./layout";
import { StudentContent } from "./StudentContent";
import StudentCard from "../StudentCard";

export function Students() {
    return (
        <DashboardLayout>
            <StudentContent>
                <StudentCard />
            </StudentContent>
        </DashboardLayout>
    );
}

export default Students;
