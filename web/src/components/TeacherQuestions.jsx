import { useState } from "react";

const results = [
  { question: "¿Qué te pareció la clase?", answer: 8.5 },
  { question: "¿Que tanto aprendiste con el profesor?", answer: 7 },
  { question: "¿Qué tan bien se explica el profesor?", answer: 9 },
];

const Row = (props) => {
  const { question, answer } = props;
  return (
    <tr>
      <td>{question}</td>
      <td>{answer}</td>
    </tr>
  );
};

const Table = (props) => {
  const { data } = props;
  return (
    <table>
      <thead>
        <tr>
          <td>Pregunta</td>
          <td>Resultado</td>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <Row question={row.question} answer={row.answer} />
        ))}
      </tbody>
    </table>
  );
};

const TeacherQuestions = () => {
  const [rows, setRows] = useState(results);

  return (
    <div>
      <Table data={rows} />
    </div>
  );
};

export default TeacherQuestions;
