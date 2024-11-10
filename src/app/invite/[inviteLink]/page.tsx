"use client";
import AuthFormInput from "@/app/components/AuthFormInput";
import { SubmitButton } from "@/app/components/SubmitButton";
import { comforta } from "@/app/layout";
import { inviteFormValidate } from "@/app/validation/auth";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Page: React.FC = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const INVITE_LINK = useParams<{inviteLink: string}>().inviteLink;
    console.log(INVITE_LINK);

    const [formErrors, setFormErrors] = useState<{
        name?: string;
        surname?: string;
        patronym?: string;
        email?: string;
        phone?: string;
        password?: string;
        repeatpassword?: string;
    }>({});

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddTutorFormInputs>({
        defaultValues: {},
        mode: "onSubmit",
    });

    // вынести инпуты в отдельный компонент нахуй

    let validationResult;

    const onSubmit: SubmitHandler<AddTutorFormInputs> = async (data) => {
        setLoading(true);
        validationResult = inviteFormValidate(data);

        if (!validationResult.isValid) {
            setFormErrors(prevErrors => ({
                ...prevErrors,
                ...validationResult.errors
            }));
            setLoading(false);
            console.log(validationResult.errors, "are errors");
            return;
        }

        const { name, surname, patronym, email, phone, password, repeatpassword } =
            validationResult.data ?? {};

        console.log(data);

        try {
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    surname,
                    patronym,
                    email,
                    phone,
                    password,
                    INVITE_LINK,
                }),
            });

            if (response.ok) {
                const responseBody = await response.json();
                setLoading(false);
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
            });
        }
    };

    function handleServerResponse(errorData: any) {
        setLoading(false);
        setFormErrors({
            ...formErrors,
            repeatpassword:
                errorData.errors.password ||
                "Такой пользователь уже есть в системе.",
        });
    }

    return (
        <div className={cn(comforta.className, "mx-auto mx-4 my-4")}>
            <div className="bg-white rounded-xl shadow-md p-4 items-center text-lg">
                <h1 className="text-center text-4xl my-4">
                    ДОБРО ПОЖАЛОВАТЬ НА REPETOP
                </h1>
                <p>Заполните информацию о себе.</p>
                <div className="mt-4 flex items-center flex-col gap-4">
                    <form
                        method="post"
                        className="flex w-full flex-col gap-3"
                        id="signupform"
                        onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Фамилия</label>
                            <Input
                                {...register("surname", {
                                    required: true,
                                    maxLength: 64,
                                })}
                            />
                            <p>
                                {formErrors.surname ||
                                    (validationResult?.errors.surname &&
                                        "Это поле обязательно")}
                            </p>
                        </div>
                        <div>
                            <label>Имя</label>
                            <Input
                                {...register("name", {
                                    required: true,
                                    maxLength: 64,
                                })}
                            />
                            <p>
                                {formErrors.name ||
                                    (validationResult?.errors.name &&
                                        "Это поле обязательно")}
                            </p>
                        </div>
                        <div>
                            <label>Отчество</label>
                            <Input
                                {...register("patronym", {
                                    required: true,
                                    maxLength: 64,
                                })}
                            />
                            <p>
                                {formErrors.patronym ||
                                    (validationResult?.errors.patronym &&
                                        "Это поле обязательно")}
                            </p>
                        </div>

                        <div>
                            <label>Почта</label>
                            <Input {...register("email", { required: true })} />
                            <p>
                                {formErrors.email ||
                                    (validationResult?.errors.email &&
                                        "Это поле обязательно")}
                            </p>
                        </div>
                        <div>
                            <label>Телефон</label>
                            <Input
                                type="tel"
                                {...register("phone", { required: true })}
                            />
                            <p>
                                {formErrors.phone ||
                                    (validationResult?.errors.phone &&
                                        "Это поле обязательно")}
                            </p>
                        </div>
                        <AuthFormInput
                            type={"password"}
                            className="relative"
                            description={"Пароль"}
                            {...register("password", {
                                required: true,
                                maxLength: 64,
                            })}
                        />
                        <AuthFormInput
                            type={"password"}
                            className="relative"
                            description={"Повторите пароль"}
                            {...register("repeatpassword", {
                                required: true,
                                maxLength: 64,
                            })}
                            errorDescription={formErrors?.password ? formErrors.password[0] : ''}
                        />
                        <SubmitButton
                            loading={loading}
                            form={"signupform"}>
                            Зарегистрироваться!
                        </SubmitButton>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;
