import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faShippingFast, faStore, faBolt, faTruck, faWarehouse } from '@fortawesome/free-solid-svg-icons';
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
    question: "Which industry are you in?",
    answers: [
      { text: "Manufacturing", icon: faIndustry },
      { text: "Logistics and Supply Chain", icon: faShippingFast },
      { text: "Retail and Online Grocers", icon: faStore },
      { text: "Energy and Utilities", icon: faBolt },
      { text: "Transportation", icon: faTruck },
      { text: "Fulfillment Centers", icon: faWarehouse },
    ],
  },
  // Add more questions here as needed
];

function Qualify() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleAnswerClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setProgress(((currentQuestion + 1) / questions.length) * 100);
    }
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
            {questions[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                className="flex items-center p-3 bg-green text-white rounded-lg hover:bg-emerald-500 transition"
                onClick={handleAnswerClick}
              >
                <FontAwesomeIcon icon={answer.icon} className="mr-3" />
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualify;
