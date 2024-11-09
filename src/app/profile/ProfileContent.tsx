"use client";
import React, { useState } from "react";
import { comforta } from "../layout";
import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import Modal from "../components/Modal";
import { Edit, Mail, Phone, Plane, Plus, UserRound } from "lucide-react";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { SubmitButton } from "../components/SubmitButton";
import { error } from "console";

interface Props {
    children: React.ReactElement;
}

const TAGS = [
    "Алгебра",
    "Геометрия",
    "Физика",
    "Информатика",
    "Программирование",
    "Домашние задания",
    "ОГЭ",
    "Повышение успеваемости",
];

export const ProfileContent: React.FC<Props> = ({ children }) => {
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleOpen = () => {
        setOpenModal(!openModal);
    };

    const handleLogout = async () => {
        try {
            const response = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({}),
            });

            if (response.ok) {
                const responseBody = await response.json();
                setLoading(false);
                return;
            } else {
                const errorData = await response.json();
                console.log(errorData)
            }
        } catch (error) {
            console.error("Login error:", error);
            setLoading(false);
        }
    }

    return (
        <div className={cn(comforta.className, "mx-auto mx-4 my-4")}>
            <div className="bg-white rounded-xl shadow-md p-4 items-center text-lg">
                <div className="flex flex-row align-items-center justify-between">
                    <h1 className="font-extrabold text-xl text-center my-auto">
                        Профиль
                    </h1>
                    <Button
                        className="mr-3"
                        onClick={handleOpen}>
                        <Edit />
                    </Button>
                    <SubmitButton
                        className="mr-3"
                        onClick={handleLogout}
                        loading={loading}
                        form={''}
                        >Выйти
                    </SubmitButton>
                </div>
            </div>
            <div className="my-4 text-lg grid grid-cols-3">
                <div className="flex flex-col gap-3 bg-white shadow-md rounded-xl p-6">
                    <img
                        className="h-[64px] w-[64px] md:h-[128px] md:w-[128px] lg:h-[384px] lg:w-[384px] object-cover rounded-full shadow-md"
                        src=""
                    />
                    <span className="font-extrabold text-2xl">
                        Иванов Иван Иванович
                    </span>
                    <span className="font-light text-grey-100 text-sm">
                        Репетитор ОГЭ
                    </span>
                    <span className="font-extrabold text-blue-900 text-sm">
                        ⭐ Создатель Repetop⭐{" "}
                    </span>
                </div>
                <div className="rounded-xl bg-white flex flex-col ml-4 p-6 gap-2 text-sm shadow-md">
                    <span className="font-extrabold text-2xl">О себе</span>
                    <p>
                        ⭐ Студент N курса [REDACTED] кафедры
                        "[REDACTED]"
                    </p>
                    <p>⭐ Средний балл ЕГЭ 90</p>
                    <p>⭐ Frontend React разработчик</p>
                    <div className="mt-4 flex flex-row flex-wrap gap-3">
                        {TAGS.map((tag) => (
                            <span className="text-center p-1 bg-blue-500 rounded-xl text-white font-bold">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="rounded-xl bg-white ml-4 p-6 text-sm shadow-md">
                    <div className="h-1/2 flex flex-col gap-3">
                        <span className="font-extrabold text-2xl">
                            Контактная информация
                        </span>
                        <div className="flex flex-row items-center">
                            <Phone />
                            <a
                                href="tel:"
                                className="ml-4">
                                + 7(111)111-11-11
                            </a>
                        </div>
                        <div className="flex flex-row items-center">
                            <Mail />
                            <a
                                href="mailto:egor.mail@mail.ru"
                                className="ml-4">
                                egor.mail@mail.ru
                            </a>
                        </div>
                        <div className="flex flex-row items-center">
                            <UserRound />
                            <a
                                href=""
                                className="ml-4">
                                Telegram
                            </a>
                        </div>
                    </div>
                    <div className="h-1/2 whitespace-pre-line">
                        <span className="font-extrabold text-2xl">Тарифы</span>
                        <p>WORK IN PROGRESS</p>
                    </div>
                </div>
            </div>

            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                title={"Новая задача"}
                formName="todoform">
                <p className="backdrop-blur-xl">Текст</p>
            </Modal>
        </div>
    );
};
