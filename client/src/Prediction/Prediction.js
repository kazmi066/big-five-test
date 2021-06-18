import React from "react";
import { Bar, Line } from "react-chartjs-2";
import "./Prediction.css";

export default class Prediction extends React.Component {
  state = {
    labels: [
      "Extraversion",
      "Neuroticism",
      "Agreeableness",
      "Conscientiousness",
      "Openness",
    ],
    datasets: [
      {
        label: "Traits Match",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: this.props.location?.state?.averages,
      },
    ],
  };

  render() {
    const dominantPersonality = Math.max(...this.state.datasets[0].data);
    return (
      <section>
        <div className="buckle-up">
          Here is a brief information about your personality
        </div>
        <div className="rating-scale">
          <h4 className="dominant">Dominant Trait</h4>
          <div className="rating">
            <span>
              {dominantPersonality} <small>%</small>
            </span>
          </div>
        </div>
        <div id="predict">
          <Bar
            style={{
              maxHeight: "35%",
              maxWidth: "40%",
              display: "unset",
            }}
            data={this.state}
            options={{
              title: {
                display: true,
                text: "Average Personality traits",
              },

              legend: {
                display: true,
                position: "right",
              },
            }}
          />
          <Bar
            style={{
              maxHeight: "35%",
              maxWidth: "40%",
              display: "unset",
            }}
            data={this.state}
            options={{
              title: {
                display: true,
                text: "Average Personality traits",
              },
              indexAxis: "y",

              legend: {
                display: true,
                position: "right",
              },
            }}
          />
          <Line
            data={this.state}
            options={{
              title: {
                display: true,
                text: "Average Rainfall per month",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>
      </section>
    );
  }
}
