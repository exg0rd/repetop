"use client";
import React, { useState } from "react";
import QuestionLayout from "./layout";
import TestQuestion from "./TestQuestion";
import { Header } from "../../components/Header";
import { QuestionProps } from "./TestQuestion";

const QUESTIONS = {
    totalQuestions: 20,
    questions: [
        {
            questionNumber: 1,
            questionType: "default",
            questionContent: `На рисунке  — схема дорог, связывающих города А, Б, В, Г, Д, Е, Ж, К и Л. По каждой дороге можно двигаться только в одном направлении, указанном стрелкой. Сколько существует различных путей из города А в город Л?

`,
            imgURL: "https://inf-oge.sdamgia.ru/get_file?id=47383",
            answerNumber: 1,
            questionDescription: "",
        },
        {
            questionNumber: 2,
            questionType: "two-col-table",
            questionContent: [
                `УСТРОЙСТВА
А)  компас

Б)  электрометр

B)  электродвигатель`,

                `ФИЗИЧЕСКИЕ ЯВЛЕНИЯ
1)   взаимодействие постоянных магнитов

2)   возникновение электрического тока под действием переменного магнитного поля

3)   электризация тел при ударе

4)   взаимодействие наэлектризованных тел

5)   действие магнитного поля на проводник с током`,
            ],
            imgURL: "",
            answerNumber: 4,
            questionDescription: `Для каждого физического понятия из первого столбца подберите соответствующий пример из второго столбца.`,
        },
    ],
};

const TestPage: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(
        QUESTIONS.questions[0]
    );
    const [questionIndex, setQuestionIndex] = useState(0);

    const nextQuestion = () => {
        if (questionIndex === QUESTIONS.questions.length - 1) return;
        setCurrentQuestion(QUESTIONS.questions[questionIndex + 1]);
        setQuestionIndex(questionIndex + 1);
    };

    const prevQuestion = () => {
        if (questionIndex === 0) return;
        setCurrentQuestion(QUESTIONS.questions[questionIndex - 1]);
        setQuestionIndex(questionIndex - 1);
    };

    return (
        <QuestionLayout>
            <Header />
            <TestQuestion
                totalQuestions={QUESTIONS.totalQuestions}
                {...currentQuestion}
                onNextQuestion={nextQuestion}
                onPrevQuestion={prevQuestion}></TestQuestion>
        </QuestionLayout>
    );
};

export default TestPage;
