import React from "react";
import { ProfileContent } from "./ProfileContent";
import { TestList } from "../components/TestList";
import DashboardLayout from "../dashboard/students/layout";

export async function Profile() {
    return (
        <DashboardLayout>
            <ProfileContent>
                <TestList />
            </ProfileContent>
        </DashboardLayout>
    );
}

export default Profile;
