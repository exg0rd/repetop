import React from "react";
import { AuthFormLayout } from "./layout";
import { LoginForm } from "../components/LoginForm";
import { ModalContainer } from "../components/ModalContainer";

const LoginPage: React.FC = () => {
    return (
        <AuthFormLayout>
            <ModalContainer>
                <LoginForm />
            </ModalContainer>
        </AuthFormLayout>
    );
};

export default LoginPage;
