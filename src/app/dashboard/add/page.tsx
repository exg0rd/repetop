import React from "react";
import DashboardLayout from "../students/layout";
import AddUserForm from "./AddUserForm";

export function Profile() {
    return (
        <DashboardLayout>
            <AddUserForm />
        </DashboardLayout>
    );
}

export default Profile;
