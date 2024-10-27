"use client";
import React, { useState } from "react";
import { Logo } from "./Logo";
import { AuthFormInput } from "./AuthFormInput";
import { SubmitButton } from "./SubmitButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { loginValidate } from "../validation/auth";

type LoginFormInputs = {
    username: string;
    password: string;
};

export const LoginForm: React.FC = () => {
    const router = useRouter();

    const [formErrors, setFormErrors] = useState<{
        username?: string;
        password?: string;
    }>({});
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>({
        defaultValues: {
            username: "",
            password: "",
        },
        mode: "onSubmit",
    });

    const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
        setLoading(true);

        console.log("form submitted with", data);

        const { username, password, errors } = loginValidate(data);
        console.log(errors);

        if (errors) {
            setFormErrors({
                ...formErrors,
                password: "Что - то пошло не так. Попробуйте войти еще раз.",
            });
            setLoading(false);
            return;
        }

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                router.push("/profile");
            } else {
                const errorData = await response.json();
                handleServerResponse(errorData);
            }
        } catch (error) {
            console.error("Login error:", error);
            setLoading(false);
            setFormErrors({
                ...formErrors,
                password: "Что - то пошло не так. Попробуйте войти еще раз.",
            });
        }
    };

    function handleServerResponse(errorData: any) {
        setLoading(false);
        setFormErrors({
            ...formErrors,
            password:
                errorData.errors.password ||
                "Неверное имя пользователя или пароль.",
        });
    }

    return (
        <>
            <Logo
                iconSize="64"
                className="flex flex-row space-x-6 p-2 items-center mx-auto"
                slogan={true}
            />
            <form
                className="space-y-4"
                onSubmit={handleSubmit(onSubmit)}>
                <AuthFormInput
                    type="username"
                    description="Имя пользователя"
                    errorDescription={
                        formErrors.username ||
                        (errors.username && "Это поле обязательно")
                    }
                    {...register("username", { required: true, maxLength: 20 })}
                    aria-invalid={!!errors.username || !!formErrors.username}
                />
                <AuthFormInput
                    type="password"
                    description="Пароль"
                    errorDescription={
                        formErrors.password ||
                        (errors.password && "Это поле обязательно")
                    }
                    {...register("password", { required: true, maxLength: 20 })}
                    aria-invalid={!!errors.password}
                />
                <SubmitButton
                    loading={loading}
                    className="bg-blue-700 text-sm">
                    Войти
                </SubmitButton>
            </form>
        </>
    );
};
