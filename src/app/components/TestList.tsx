import { TestListView, TestListViewProps } from "./TestListView";

// Define the type for the tests array
type TestsArray = Array<TestListViewProps>;

const tests = [
    {
        name: "Тест 1",
        theme: "Основы программирования",
        questions: 10,
        deadline: "2023-03-15T10:00:00.000Z",
        grade: '',
    },
    {
        name: "Тест 2",
        theme: "Базы данных",
        questions: 15,
        deadline: "2023-03-16T14:30:00.000Z",
        grade: '',
    },
    {
        name: "Тест 3",
        theme: "Разработка веб-приложений",
        questions: 20,
        deadline: "2023-03-17T09:00:00.000Z",
        grade: 3,
    },
    {
        name: "Тест 4",
        theme: "Системное администрирование",
        questions: 25,
        deadline: "2023-03-18T08:00:00.000Z",
        grade: 2,
    },
    {
        name: "Тест 5",
        theme: "Информационная безопасность",
        questions: 30,
        deadline: "2023-03-19T11:00:00.000Z",
        grade: 1,
    },
    {
        name: "Тест 6",
        theme: "Основы алгоритмов",
        questions: 35,
        deadline: "2023-03-20T14:00:00.000Z",
        grade: 5,
    },
    {
        name: "Тест 7",
        theme: "Машинное обучение",
        questions: 40,
        deadline: "2023-03-21T09:00:00.000Z",
        grade: 4,
    },
    {
        name: "Тест 8",
        theme: "Глубокое обучение",
        questions: 45,
        deadline: "2023-03-22T08:00:00.000Z",
        grade: 3,
    },
    {
        name: "Тест 9",
        theme: "Нейросети",
        questions: 50,
        deadline: "2023-03-23T11:00:00.000Z",
        grade: 2,
    },
    {
        name: "Тест 10",
        theme: "Обработка естественного языка",
        questions: 55,
        deadline: "2023-03-24T14:00:00.000Z",
        grade: 1,
    },
];

export const TestList: React.FC= () => {
  const testsList = tests;
    return (
        <div className="flex flex-col gap-5 justify-between border rounded-xl p-1 md:p-3 mt-1">
            {tests.map((test) => (
                <TestListView
                    key={test.name || test.theme}
                    {...test}
                />
            ))}
        </div>
    );
};
