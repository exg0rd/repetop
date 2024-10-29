import React from "react";
import DashboardLayout from "../students/layout";
import TimetableContent from "./TimetableContent";

export function Timetable() {
    return (
        <DashboardLayout>
            <TimetableContent/>
        </DashboardLayout>
    );
}

export default Timetable;
