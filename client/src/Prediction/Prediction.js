import React from "react";
import { Bar, Line } from "react-chartjs-2";
import "./Prediction.css";
import Table from "../Table/clusters";

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
    // const dominantPersonality = Math.max(...this.state.datasets[0].data);
    return (
      <section>
        <div className="buckle-up">
          Here is a brief information about your personality
        </div>
        <div className="rating-scale">
          <h4 className="dominant">Cluster</h4>
          <div className="rating">
            <span>{this.props.location?.state?.trait}</span>
          </div>
        </div>
        <div id="predict">
          <Bar
            style={{
              maxHeight: "85%",
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
              maxHeight: "85%",
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
        </div>
        <h2 className="cluster-heading" style={{ textAlign: "center" }}>
          All Clusters
        </h2>
        <Table />
      </section>
    );
  }
}
