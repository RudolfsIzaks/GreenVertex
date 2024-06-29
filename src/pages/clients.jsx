import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faShippingFast, faStore, faBolt, faTruck, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import '../index.css';

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
      { text: "Other"},
    ],
  },
  {
    question: "What’s your best email?",
    type: "input",
  },
  {
    question: "What are the primary challenges your business is currently facing?",
    answers: [
      { text: "Bottlenecks in production" },
      { text: "Inefficiencies in logistics and supply chain" },
      { text: "Inventory management issues" },
      { text: "High operational costs" },
      { text: "Customer service challenges" },
      { text: "Predicting future demands" },
      { text: "Other" },
    ],
  },
  {
    question: "What are your goals for optimizing your operations?",
    answers: [
      { text: "Reduce operational costs" },
      { text: "Increase throughput and efficiency" },
      { text: "Improve customer satisfaction" },
      { text: "Enhance decision-making with data-driven insights" },
      { text: "Investor Acquisition" },
      { text: "Make Real-Time Visualizations Of Your Operations" },
      { text: "Other" },
    ],
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
  {
    question: "Are there any specific outcomes you expect from a digital twin simulation solution?",
    type: "input",
  },
  {
    question: "What’s your company website?",
    type: "input",
  },
];

function Qualify() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAnswerClick = (answer) => {
    setAnswers([...answers, answer]);
    setInputValue(""); // Clear input field

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setProgress(((currentQuestion + 1) / questions.length) * 100);
    } else {
      // Handle the end of the quiz here
      alert("Quiz Completed!");
      sendEmail();
    }
  };

  const sendEmail = () => {
    const emailData = {
      email: 'recipient-email@example.com', // Replace with recipient's email
      subject: 'Quiz Answers',
      message: `Quiz answers: ${JSON.stringify(answers)}`,
    };

    axios.post('http://localhost:5000/send-email', emailData)
      .then(response => {
        console.log('Email sent successfully:', response.data);
      })
      .catch(error => {
        console.error('There was an error sending the email:', error);
      });
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputSubmit = () => {
    handleAnswerClick(inputValue);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
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
        <div className="bg-card border border-stone-700 shadow-md rounded-lg p-6">
          <h2 className="font-inter text-xl font-bold text-white mb-4">{questions[currentQuestion].question}</h2>
          <div className="flex flex-col space-y-3">
            {questions[currentQuestion].type === "input" ? (
              <div>
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg"
                />
                <button
                  onClick={handleInputSubmit}
                  className="mt-3 p-3 bg-green text-white rounded-lg hover:bg-emerald-500 transition"
                >
                  Submit
                </button>
              </div>
            ) : (
              questions[currentQuestion].answers.map((answer, index) => (
                <button
                  key={index}
                  className="flex items-center p-3 bg-green text-white rounded-lg hover:bg-emerald-500 transition"
                  onClick={() => handleAnswerClick(answer.text)}
                >
                  {answer.icon && <FontAwesomeIcon icon={answer.icon} className="mr-3" />}
                  {answer.text}
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualify;
