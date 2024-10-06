import React from "react";
import { AuthFormLayout } from "./layout";
import { LoginForm } from "../components/LoginForm";

const LoginPage: React.FC = () => {
    return (
        <AuthFormLayout>
            <LoginForm />
        </AuthFormLayout>
    );
};

export default LoginPage;
