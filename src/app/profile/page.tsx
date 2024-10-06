import React from "react";
import { ProfileLayout } from "./layout";
import { Header } from "../components/Header";
import { ProfileContent } from "./ProfileContent";
import { TestList } from "../components/TestList";

export async function Profile() {
    return (
        <ProfileLayout>
            <Header />
            <ProfileContent>
               <TestList/>
            </ProfileContent>
        </ProfileLayout>
    );
}

export default Profile;
