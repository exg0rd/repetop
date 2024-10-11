export const QUESTIONS = {
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
        {
            questionNumber: 3,
            questionType: "default",
            questionContent: `Известно, что 0 < a < 1. Выберите наименьшее из чисел.

В ответе укажите номер правильного варианта.

1) a^2

2) a^3

3) -a

4) 1/a`,
            imgURL: "",
            answerNumber: 1,
            questionDescription: "",
        },
        {
            questionNumber: 4,
            questionType: "default",
            questionContent: `Площадь равнобедренного треугольника равна 196sqrt(3). Угол, лежащий напротив основания равен 120°. Найдите длину боковой стороны.`,
            imgURL: "https://math-oge.sdamgia.ru/get_file?id=39816",
            answerNumber: 1,
            questionDescription: "",
        },
        {
            questionNumber: 5,
            questionType: "default",
            questionContent: `1)  Если две стороны одного треугольника соответственно равны двум сторонам другого треугольника, то такие треугольники равны.

2)  Средняя линия трапеции параллельна ее основаниям.

3)  Длина гипотенузы прямоугольного треугольника меньше суммы длин его катетов.

Если утверждений несколько, запишите их номера в порядке возрастания.`,
            imgURL: "",
            answerNumber: 1,
            questionDescription: "Какие из следующих утверждений верны?",
        },
        {
            questionNumber: 6,
            questionType: "code",
            codeContent: 
            `
            s = int(input())
            t = int(input())
            if s > 10 or t > 10:
                print("YES")
            else:
                print("NO")`,
            questionContent: `Было проведено 9 запусков программы, при которых в качестве значений переменных s и t вводились следующие пары чисел:

(1, 2); (11, 2); (1, 12); (11, 12); (–11, –12); (–11, 12); (–12, 11); (10, 10); (10, 5).

Сколько было запусков, при которых программа напечатала «YES»?`,
            imgURL: "",
            answerNumber: 1,
            questionDescription:
                "Ниже приведена программа, записанная на языке Python.",
        },
    ],
};
