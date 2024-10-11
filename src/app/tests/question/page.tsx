"use client";
import React, { useState } from "react";
import QuestionLayout from "./layout";
import TestQuestion from "./TestQuestion";
import { Header } from "../../components/Header";
import { QuestionProps } from "./TestQuestion";
import { QUESTIONS } from "@/constants/mockdata";
import Test from "../Test";

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
            {questionIndex === 0 ? (
                <Test onStart={() => setQuestionIndex(questionIndex + 1)}/>
            ) : (
                <TestQuestion
                    totalQuestions={QUESTIONS.totalQuestions}
                    {...currentQuestion}
                    onNextQuestion={nextQuestion}
                    onPrevQuestion={prevQuestion}></TestQuestion>
            )}
        </QuestionLayout>
    );
};

export default TestPage;
