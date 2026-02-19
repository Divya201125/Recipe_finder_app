// App.jsx
import React, { useState } from "react";

const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats"
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
      "Helicopters Terminals Motorboats Lamborginis"
    ],
    answer: "Hypertext Markup Language",
  },
  {
    question: "Which year was JavaScript launched?",
    options: ["1996", "1995", "1994", "None of the above"],
    answer: "1995",
  },
  {
    question: "React is mainly used for building?",
    options: ["Database", "User Interface", "Networking", "Compiler"],
    answer: "User Interface",
  },
  {
    question: "Which company developed React?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    answer: "Facebook",
  },
  {
    question: "Which hook is used for managing state in React?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    answer: "useState",
  },
  {
    question: "Which tag is used to link JavaScript file in HTML?",
    options: ["<link>", "<script>", "<js>", "<style>"],
    answer: "<script>",
  },
  {
    question: "Which database is NoSQL?",
    options: ["MySQL", "MongoDB", "PostgreSQL", "Oracle"],
    answer: "MongoDB",
  },
  {
    question: "Which protocol is used for secure communication on the web?",
    options: ["HTTP", "HTTPS", "FTP", "SMTP"],
    answer: "HTTPS",
  },
];

function App() {
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (qIndex, option) => {
    setUserAnswers({ ...userAnswers, [qIndex]: option });
  };

  const handleSubmit = () => {
    let newScore = 0;
    quizData.forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        newScore++;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial" }}>
      <h1>React Quiz App</h1>
      {!submitted ? (
        <div>
          {quizData.map((q, index) => (
            <div key={index} style={{ marginBottom: "20px" }}>
              <h3>{q.question}</h3>
              {q.options.map((option, i) => (
                <label key={i} style={{ display: "block" }}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={userAnswers[index] === option}
                    onChange={() => handleOptionChange(index, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
          {/* ✅ Colored Submit Button */}
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Submit Quiz
          </button>
        </div>
      ) : (
        <div>
          <h2>Your Score: {score} / {quizData.length}</h2>
          {quizData.map((q, index) => (
            <div key={index} style={{ marginBottom: "15px" }}>
              <h3>{q.question}</h3>
              <p>
                Your Answer:{" "}
                <strong style={{ color: userAnswers[index] === q.answer ? "green" : "red" }}>
                  {userAnswers[index] || "Not Answered"}
                </strong>
              </p>
              <p>Correct Answer: <strong>{q.answer}</strong></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
