"use client";
import React from "react";

import { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/ui/button";
import { Logo } from "./Logo";
import Link from "next/link";
import { AuthFormInput } from "./AuthFormInput";
import { SubmitButton } from "./SubmitButton";
import { loginValidate } from "@/app/validation/auth";

export const LoginForm: React.FC = () => {

    const router = useRouter();
    
    const [formErrors, setFormErrors] = useState<any>({});
    const [loading, setLoading] = useState(false);

    function handleServerResponse(errorData) {
        setLoading(false);
        setFormErrors({
            ...formErrors,
            username: errorData.errors
        });
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        setLoading(true);
        event?.preventDefault();
        const formData = new FormData(event?.currentTarget);

        const { username, password, errors } = loginValidate(formData);

        if (errors) {
            setFormErrors(errors);
            return;
        }

        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            setLoading(false);
            router.push('/profile');
        } else {
            const errorData = await response.json();
            handleServerResponse(errorData);
        }
    }

    return (
        <>
            <Logo
                iconSize="64"
                className="my-8"
                slogan={true}
            />
            <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
                <AuthFormInput
                    type="username"
                    description="Имя пользователя"
                    errorDescription={formErrors.username}
                />
                <AuthFormInput
                    type="password"
                    description="Пароль"
                />
                <SubmitButton loading={loading} className="bg-blue-700 text-sm">Войти</SubmitButton>
            </form>
        </>
    );
};
