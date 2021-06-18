import React, { useState } from "react";
import Header from "./Header/Header";
import axios from "axios";
import MainHeading from "./MainHeading/MainHeading";
import History from "./History/History";
import TestTaken from "./TestTaken/TestTaken";
import { useHistory } from "react-router-dom";
import Footer from "./Footer/Footer";
import questions from "./questions";

export default function Home() {
  const history = useHistory();
  const [question, setQuestion] = useState(questions);
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [selections, setSelections] = useState([
    Object.keys(questions).map((x) => []),
  ]);

  const submitHandler = () => {
    const result = Object.values(selections);
    console.log(enableSubmit);

    function filteration(range1, range2) {
      return result
        .filter((items, index) => index <= range1 && index > range2)
        .reduce((temp, curr) => {
          temp += curr;
          return temp;
        }, 0);
    }

    // All personalities of 10 columns
    const p1 = filteration(10, 0);
    const p2 = filteration(20, 10);
    const p3 = filteration(30, 20);
    const p4 = filteration(40, 30);
    const p5 = filteration(50, 40);

    const firstAverage = p1 / 10;
    const secondAverage = p2 / 10;
    const thirdAverage = p3 / 10;
    const FourthAverage = p4 / 10;
    const FifthAverage = p5 / 10;

    const allAverages = [
      firstAverage,
      secondAverage,
      thirdAverage,
      FourthAverage,
      FifthAverage,
    ];

    if (result.length === 51) {
      setEnableSubmit(true);
      history.push("/prediction", { averages: allAverages });
    }

    // const headers = {
    //   "Content-Type": "application/json",
    // };
    // const myobj = {
    //   text: result,
    // };
    // var test = JSON.stringify(myobj);
    // axios
    //   .post("http://52.188.170.143:5000/", test, { headers: headers })

    //   .then((response) => {
    //     console.log(response);
    //   });
  };
  const handleChange = (selection, index) => {
    let tempState = { ...selections };
    tempState[index] = selection;
    setSelections(tempState);
  };

  return (
    <>
      <Header />
      <MainHeading />
      <History />
      <TestTaken />
      <div id="home">
        <div className="buckle-up">
          Buckle up! 50 MCQs will take some minutes to answer
        </div>
        <ol id="questions">
          {question.map((item, index) => {
            return (
              <div key={item.id}>
                <li
                  className="question"
                  name={`question_${question.indexOf(item)}`}
                >
                  <h3 className="question-text">
                    <span style={{ color: "black" }}>{++index + ") "}</span>
                    {item.question}
                  </h3>
                  <form className="choices">
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="choice"
                          value={item.choices[0]}
                          checked={selections[index] === 1}
                          onChange={() => handleChange(1, index)}
                        />
                        <span>Strongly Disagree</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="choice"
                          value={item.choices[1]}
                          checked={selections[index] === 2}
                          onChange={() => handleChange(2, index)}
                        />
                        <span>Disagree</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="choice"
                          value={item.choices[2]}
                          checked={selections[index] === 3}
                          onChange={() => handleChange(3, index)}
                        />
                        <span>Neutral</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="choice"
                          value={item.choices[3]}
                          checked={selections[index] === 4}
                          onChange={() => handleChange(4, index)}
                        />
                        <span>Agree</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="radio"
                          name="choice"
                          value={item.choices[4]}
                          checked={selections[index] === 5}
                          onChange={() => handleChange(5, index)}
                        />
                        <span>Strongly Agree</span>
                      </label>
                    </div>
                  </form>
                </li>
                <hr />
              </div>
            );
          })}
        </ol>
        <div />
        <div className="button_container">
          {enableSubmit == false && (
            <p className="fill-message">Please fill all questions</p>
          )}
          <button className="btn" onClick={submitHandler}>
            <span>Submit</span>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
