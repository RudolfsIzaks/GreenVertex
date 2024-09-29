import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry,
  faShippingFast,
  faStore,
  faBolt,
  faTruck,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "../index.css";
import { Link } from "react-router-dom";
import form_warehouse from "../assets/form_warehouse.png";

const questions = [
  {
    question: "Which industry are you in?",
    answers: [
      { text: "Manufacturing", icon: faIndustry },
      { text: "Logistics and Supply Chain", icon: faShippingFast },
      { text: "Retail and Online Grocers", icon: faStore },
      { text: "Energy and Utilities", icon: faBolt },
      { text: "Transportation", icon: faTruck },
      { text: "Fulfillment Centers", icon: faWarehouse },
      { text: "Other" },
    ],
  },
  {
    question: "What’s your name?",
    type: "input",
  },
  {
    question: "What’s your best email?",
    type: "input",
  },
  {
    question: "How soon are you looking to implement new solutions?",
    answers: [
      { text: "Immediately" },
      { text: "Within the next 3 months" },
      { text: "Within the next 6 months" },
      { text: "Within the next year" },
      { text: "Just exploring options" },
    ],
  },
];

function Qualify() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleAnswerClick = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
    setInputValue(""); // Clear input field
    setSelectedAnswers([]); // Clear selected answers

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setProgress(((currentQuestion + 1) / questions.length) * 100);
    } else {
      // Handle the end of the quiz here
      setQuizCompleted(true);
      sendEmail();
    }
  };

  const sendEmail = () => {
    const emailData = {
      email: [
        "rudolfsizaks@gmail.com",
        "chris@greenvertex.dev",
        "laurance@greenvertex.dev",
        "sales@mayhemagency.co",
      ], // Stack 'em up, baby
      subject: "Quiz Answers",
      message: JSON.stringify(answers),
    };

    axios
      .post(
        "https://green-vertexback-86f11d7eb251.herokuapp.com/send-email",
        emailData
      )
      .then((response) => {
        console.log("Email sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error sending the email:", error);
      });
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputSubmit = () => {
    handleAnswerClick(inputValue);
  };

  const handleCheckboxChange = (event, answer) => {
    if (event.target.checked) {
      setSelectedAnswers([...selectedAnswers, answer]);
    } else {
      setSelectedAnswers(selectedAnswers.filter((a) => a !== answer));
    }
  };

  const handleMultipleSubmit = () => {
    handleAnswerClick(selectedAnswers.join(", "));
  };

  const handleBackClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setProgress(((currentQuestion - 1) / questions.length) * 100);
    }
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
        <div className="w-full max-w-md bg-card border border-stone-700 shadow-md rounded-lg p-6">
          <h2 className="font-inter text-xl font-bold text-white mb-4">
            Thank You!
          </h2>
          <p className="font-inter text-lg text-white mb-5">
            Your responses have been recorded. We will get back to you soon.
          </p>
          <Link
            to="/booking"
            className="py-2 px-8 bg-green text-white mt-5 rounded-md text-lg font-inter font-semibold border w-48 border-green hover:bg-transparent hover:scale-110 hover:text-green duration-150"
          >
            Book The Call
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="md:w-3/5 sm:w-full m-5">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-inter font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-green">
                Progress
              </span>
            </div>
            <div className="text-right">
              <span className="text-sm font-inter font-semibold inline-block text-green duration-1000">
                {progress.toFixed(0)}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-stone-800">
            <div
              style={{ width: `${progress}%`, transition: `1000ms` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green"
            ></div>
          </div>
        </div>
        <div className="bg-card border border-stone-700 shadow-md rounded-lg p-6 flex sm:flex-col-reverse sm:justify-center justify-between gap-5">
          <div className="flex-grow">
            <h2 className="font-inter text-xl font-bold text-white mb-4">
              {questions[currentQuestion].question}
            </h2>
            <div className="flex flex-col h-5/6">
              {questions[currentQuestion].type === "input" ? (
                <div className="flex flex-col justify-between h-[100%]">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg focus:outline-green outline-none text-white bg-stone-600"
                  />
                  <div className="flex gap-5">
                    <button
                      onClick={handleInputSubmit}
                      className="mt-3 py-2 px-5 bg-green text-white rounded-lg hover:bg-emerald-500 transition"
                    >
                      Submit
                    </button>
                    {currentQuestion > 0 && (
                      <button
                        onClick={handleBackClick}
                        className="mt-3 py-2 px-5 bg-stone-700 text-white rounded-lg hover:bg-stone-600 transition"
                      >
                        Back
                      </button>
                    )}
                  </div>
                </div>
              ) : questions[currentQuestion].type === "multiple" ? (
                <div className="flex flex-col justify-between h-[100%]">
                  <div>
                    {questions[currentQuestion].answers.map((answer, index) => (
                      <div key={index} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`answer-${index}`}
                          className="mr-3"
                          onChange={(e) => handleCheckboxChange(e, answer.text)}
                        />
                        <label
                          htmlFor={`answer-${index}`}
                          className="text-white"
                        >
                          {answer.text}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-5">
                    <button
                      onClick={handleMultipleSubmit}
                      className="mt-3 py-2 px-5 bg-green text-white rounded-lg hover:bg-emerald-500 transition"
                    >
                      Submit
                    </button>
                    {currentQuestion > 0 && (
                      <button
                        onClick={handleBackClick}
                        className="mt-3 py-2 px-5 bg-stone-700 text-white rounded-lg hover:bg-stone-600 transition"
                      >
                        Back
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  {questions[currentQuestion].answers.map((answer, index) => (
                    <button
                      key={index}
                      className="flex items-center p-3 bg-green text-white rounded-lg my-2 hover:bg-emerald-500 transition"
                      onClick={() => handleAnswerClick(answer.text)}
                    >
                      {answer.icon && (
                        <FontAwesomeIcon icon={answer.icon} className="mr-3" />
                      )}
                      {answer.text}
                    </button>
                  ))}
                  {currentQuestion > 0 && (
                    <button
                      onClick={handleBackClick}
                      className="mt-3 py-2 px-5 w-36 bg-stone-700 text-white rounded-lg hover:bg-stone-600 transition"
                    >
                      Back
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="flex sm:flex-col sm:items-center gap-5">
          <span className="w-[1px] h-[100] sm:hidden bg-white"></span>
          <img src={form_warehouse} alt="" className="md:w-96 sm:w-64 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualify;
