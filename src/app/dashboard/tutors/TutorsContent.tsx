"use client";
import React, { FormEvent, useState } from "react";
import { cn } from "@/lib/utils";
import { comforta } from "@/app/layout";
import { Plus, Search } from "lucide-react";
import { Button } from "@/ui/button";
import Modal from "@/app/components/Modal";
import { ITutorCardProps, TutorCard } from "./TutorCard";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { addTutorValidate } from "@/app/validation/auth";

interface Props {
    children: React.ReactElement;
}

const DATA: ITutorCardProps[] = [
    {
        id: "1",
        name: "Иван",
        surname: "Иванов",
        patronym: "Иванович",
        phone: "+7 (999) 123-45-67",
        avatarUrl: "",
        telegram: "@Ivanov_Ivan",
        joinDate: "2020-01-15T10:00:00Z",
        email: "ivanov@example.com",
    },
    {
        id: "2",
        name: "Марина",
        surname: "Петрова",
        patronym: "Николаевна",
        phone: "+7 (888) 987-65-43",
        avatarUrl: "",
        telegram: "@Petrova_Marina",
        joinDate: "2019-05-20T12:30:00Z",
        email: "petrova@example.com",
    },
    {
        id: "3",
        name: "Алексей",
        surname: "Сидоров",
        patronym: "Вячеславович",
        phone: "+7 (777) 456-78-90",
        avatarUrl: "",
        telegram: "@Sidorov_Alexey",
        joinDate: "2021-11-03T09:15:00Z",
        email: "sidorov@example.com",
    },
    {
        id: "4",
        name: "Ольга",
        surname: "Кузнецова",
        patronym: "Семёновна",
        phone: "+7 (666) 555-44-33",
        avatarUrl: "",
        telegram: "@Kuznetsova_Olga",
        joinDate: "2022-02-28T14:25:00Z",
        email: "kuznetsova@example.com",
    },
    {
        id: "5",
        name: "Сергей",
        surname: "Васильев",
        patronym: "Тимофеевич",
        phone: "+7 (111) 222-33-44",
        avatarUrl: "",
        telegram: "@Vasiliev_Sergey",
        joinDate: "2021-08-17T18:40:00Z",
        email: "vasiliev@example.com",
    },
    {
        id: "6",
        name: "Елена",
        surname: "Орлова",
        patronym: "Владимировна",
        phone: "+7 (333) 444-55-66",
        avatarUrl: "",
        telegram: "@Orlova_Elena",
        joinDate: "2020-04-12T16:50:00Z",
        email: "orlova@example.com",
    },
    {
        id: "7",
        name: "Андрей",
        surname: "Николаев",
        patronym: "Андреевич",
        phone: "+7 (777) 000-99-88",
        avatarUrl: "",
        telegram: "@Nikolaev_Andrey",
        joinDate: "2022-06-19T13:35:00Z",
        email: "nikolaev@example.com",
    },
    {
        id: "8",
        name: "Анна",
        surname: "Федорова",
        patronym: "Олеговна",
        phone: "+7 (999) 888-77-66",
        avatarUrl: "",
        telegram: "@Fedorova_Anna",
        joinDate: "2020-07-23T22:10:00Z",
        email: "fedorova@example.com",
    },
];

type AddTutorFormInputs = {
    name: string;
    surname: string;
    patronym: string;
    email: string;
    phone: string;
};

export const TutorsContent: React.FC<Props> = () => {
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formErrors, setFormErrors] = useState<{
        name?: string;
        surname?: string;
        patronym?: string;
        email?: string;
        phone?: string;
    }>({});

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddTutorFormInputs>({
        defaultValues: {
            name: "Имя",
            surname: "Фамилия",
            patronym: "Отчество",
            email: "primer@mail.ru",
            phone: "+7(111)111-11-11",
        },
        mode: "onSubmit",
    });

    // вынести инпуты в отдельный компонент нахуй

    const onSubmit: SubmitHandler<AddTutorFormInputs> = async (data) => {
        setLoading(true);

        const { name, surname, patronym, email, phone } =
            addTutorValidate(data);

        console.log(data);
        console.log(errors, errors == true);
        if (errors) {
            setFormErrors({
                ...formErrors,
            });
            setLoading(false);
            return;
        }

        try {
            const response = await fetch("/api/tutors/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, surname, patronym, email, phone }),
            });

            if (response.ok) {
                const responseBody = await response.json();
                return <div>{responseBody.password}</div>;
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
            phone:
                errorData.errors.phone || "Такой репетитор уже есть в системе.",
        });
    }

    const handleOpen = () => {
        setOpenModal(!openModal);
    };

    return (
        <div className={cn(comforta.className, "mx-auto mx-4 my-4")}>
            <div className="bg-white rounded-xl shadow-md p-4 text-sm md:text-md lg:text-lg">
                <div className="flex flex-row flex-wrap items-center justify-between gap-3">
                    <p className="text-center font-extrabold">
                        Преподаватели проекта
                    </p>

                    <Button
                        className="ml-auto"
                        onClick={handleOpen}>
                        <Plus />
                    </Button>

                    <div className="rounded-xl p-3 border shadow-sm text-center text-xs sm:text-sm relative w-full">
                        <Search className="absolute text-sm left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input
                            placeholder="Поиск преподавателя..."
                            className="pl-8 focus:outline-none focus:ring focus:border-blue-500 w-full"
                        />
                    </div>
                </div>
            </div>
            <div className="grid mx-auto my-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {DATA.map((tutor, index) => (
                    <TutorCard
                        key={index}
                        {...DATA[index]}
                    />
                ))}
            </div>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                title={"Добавление нового преподавателя"}
                formName="addtutorform"
                submitTitle="Добавить">
                <form
                    method="post"
                    className="flex flex-col gap-3"
                    id="addtutorform"
                    onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label>Фамилия</label>
                        <Input {...register("surname", {required: true, maxLength: 64})}/>
                        <p>{formErrors.surname ||
                        (errors.surname && "Это поле обязательно")}</p>
                    </div>
                    <div>
                        <label>Имя</label>
                        <Input {...register("name", {required: true, maxLength: 64})}/>
                        <p>{formErrors.name ||
                        (errors.name && "Это поле обязательно")}</p>
                    </div>
                    <div>
                        <label>Отчество</label>
                        <Input {...register("patronym", {required: true, maxLength: 64})}/>
                        <p>{formErrors.patronym ||
                        (errors.patronym && "Это поле обязательно")}</p>
                    </div>

                    <div>
                        <label>Почта</label>
                        <Input {...register("email", {required: true})}/>
                        <p>{formErrors.email ||
                        (errors.email && "Это поле обязательно")}</p>
                    </div>
                    <div>
                        <label>Телефон</label>
                        <Input type="tel" {...register("phone", {required: true})}/>
                        <p>{formErrors.phone ||
                        (errors.phone && "Это поле обязательно")}</p>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default TutorsContent;
