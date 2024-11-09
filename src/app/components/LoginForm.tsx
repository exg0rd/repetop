"use client";
import React, { useState } from "react";
import { Logo } from "./Logo";
import { AuthFormInput } from "./AuthFormInput";
import { SubmitButton } from "./SubmitButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { loginValidate } from "../validation/auth";
import { usePOST } from "@/hooks/usePOST";

type LoginFormInputs = {
    email: string;
    password: string;
};

type existingUserResponse = {
    user: {
        email: string;
        password: string;
        id: number;
        name: string;
        role: string;
        surname: string;
        patronym: string;
        phone: string;
    };
    status: 200;
};

export const LoginForm: React.FC = () => {
    const router = useRouter();

    const [formErrors, setFormErrors] = useState<{
        email?: string;
        password?: string;
    }>({});
    const [loading, setLoading] = useState(false);
    const { postRequest, res, isLoading, error } = usePOST<
        LoginFormInputs,
        existingUserResponse
    >({ url: "/api/auth/login", body: {} as LoginFormInputs });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>({
        defaultValues: {},
        mode: "onSubmit",
    });

    let validationResult;

    const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
        setLoading(true);

        validationResult = loginValidate(data);

        if (!validationResult.isValid) {
            setTimeout(() => {
                setLoading(false);
                setFormErrors({
                    ...formErrors,
                    password: "Неверное имя пользователя или пароль",
                });
            }, 1500);
           
            return;
        }

        const { email, password } = data ?? {};
        if (email && password) {
            await postRequest({ email, password })
                .then((resp) => {
                    router.push("/profile");
                })
                .catch((error) => {
                    console.log(error, "is thrown");
                    setFormErrors({ ...formErrors, password: error });
                    handleServerResponse(error);
                });
        }

        //     try {
        //         const response = await fetch("/api/auth/login", {
        //             method: "POST",
        //             headers: { "Content-Type": "application/json" },
        //             body: JSON.stringify({ email, password }),
        //         });

        //         if (response.ok) {
        //             router.push("/profile");
        //         } else {
        //             const errorData = await response.json();
        //             handleServerResponse(errorData);
        //         }
        //     } catch (error) {
        //         console.error("Login error:", error);
        //         setLoading(false);
        //         setFormErrors({
        //             ...formErrors,
        //             password: "Что - то пошло не так. Попробуйте войти еще раз.",
        //         });
        //     }
        // };
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
                method="post"
                onSubmit={handleSubmit(onSubmit)}
                id="loginform">
                <AuthFormInput
                    type="email"
                    description="Почта"
                    errorDescription={
                        formErrors.email ||
                        (validationResult?.errors?.username &&
                            "Это поле обязательно")
                    }
                    {...register("email", { required: true, maxLength: 256 })}
                />
                <AuthFormInput
                    type="password"
                    description="Пароль"
                    errorDescription={
                        formErrors.password ||
                        (validationResult?.errors?.password &&
                            "Это поле обязательно")
                    }
                    {...register("password", {
                        required: true,
                        maxLength: 256,
                    })}
                />
                <SubmitButton
                    loading={loading}
                    form={"loginform"}>
                    Войти
                </SubmitButton>
            </form>
        </>
    );
};

export default LoginForm;
