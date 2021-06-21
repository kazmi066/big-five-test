import React from "react";
import CanvasJSReact from "./assets/canvasjs.react";
import "./clusters.css";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class clusters extends React.Component {
  render() {
    const options = {
      title: {
        text: "Personality Cluster",
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { label: "extroversion", y: 3.07983 },
            { label: "neurotic", y: 3.582258 },
            { label: "agreeable", y: 3.346111 },
            { label: "conscientious", y: 3.282625 },
            { label: "open", y: 3.414009 },
          ],
        },
      ],
    };
    const options2 = {
      title: {
        text: "Personality Cluster",
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { label: "extroversion", y: 3.08043 },
            { label: "neurotic", y: 3.071495 },
            { label: "agreeable", y: 3.156754 },
            { label: "conscientious", y: 3.041339 },
            { label: "open", y: 3.001308 },
          ],
        },
      ],
    };
    const options3 = {
      title: {
        text: "Personality Cluster",
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { label: "extroversion", y: 2.950268 },
            { label: "neurotic", y: 2.707181 },
            { label: "agreeable", y: 2.87582 },
            { label: "conscientious", y: 3.100583 },
            { label: "open", y: 3.406149 },
          ],
        },
      ],
    };
    const options4 = {
      title: {
        text: "Personality Cluster",
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { label: "extroversion", y: 3.057476 },
            { label: "neurotic", y: 2.54957 },
            { label: "agreeable", y: 3.184424 },
            { label: "conscientious", y: 3.037291 },
            { label: "open", y: 3.361438 },
          ],
        },
      ],
    };
    const options5 = {
      title: {
        text: "Personality Cluster",
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { label: "extroversion", y: 0.469701 },
            { label: "neurotic", y: 0.409441 },
            { label: "agreeable", y: 0.442157 },
            { label: "conscientious", y: 0.419197 },
            { label: "open", y: 0.386543 },
          ],
        },
      ],
    };
    const options6 = {
      title: {
        text: "Personality Cluster",
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { label: "extroversion", y: 3.08762 },
            { label: "neurotic", y: 2.452397 },
            { label: "agreeable", y: 3.222493 },
            { label: "conscientious", y: 3.147003 },
            { label: "open", y: 3.33297 },
          ],
        },
      ],
    };
    const options7 = {
      title: {
        text: "Personality Cluster",
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { label: "extroversion", y: 3.00691 },
            { label: "neurotic", y: 3.43168 },
            { label: "agreeable", y: 3.214365 },
            { label: "conscientious", y: 3.228778 },
            { label: "open", y: 3.338876 },
          ],
        },
      ],
    };
    const options8 = {
      title: {
        text: "Personality Cluster",
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { label: "extroversion", y: 3.072133 },
            { label: "neurotic", y: 2.477554 },
            { label: "agreeable", y: 3.12045 },
            { label: "conscientious", y: 3.061396 },
            { label: "open", y: 3.206682 },
          ],
        },
      ],
    };
    const options9 = {
      title: {
        text: "Personality Cluster",
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { label: "extroversion", y: 2.959192 },
            { label: "neurotic", y: 3.512078 },
            { label: "agreeable", y: 3.204756 },
            { label: "conscientious", y: 3.197905 },
            { label: "open", y: 3.37097 },
          ],
        },
      ],
    };
    const options10 = {
      title: {
        text: "Personality Cluster",
      },
      data: [
        {
          type: "column",
          dataPoints: [
            { label: "extroversion", y: 2.975502 },
            { label: "neurotic", y: 3.636564 },
            { label: "agreeable", y: 3.078137 },
            { label: "conscientious", y: 3.103672 },
            { label: "open", y: 3.093972 },
          ],
        },
      ],
    };
    return (
      <div className="graphs">
        <CanvasJSChart
          options={options}
          onRef={(ref) => (this.chart = ref)}
          style={{ width: "300px", height: "300px" }}
        />
        <CanvasJSChart options={options2} onRef={(ref) => (this.chart = ref)} />
        <CanvasJSChart options={options3} onRef={(ref) => (this.chart = ref)} />
        <CanvasJSChart options={options4} onRef={(ref) => (this.chart = ref)} />
        <CanvasJSChart options={options5} onRef={(ref) => (this.chart = ref)} />
        <CanvasJSChart options={options6} onRef={(ref) => (this.chart = ref)} />
        <CanvasJSChart options={options7} onRef={(ref) => (this.chart = ref)} />
        <CanvasJSChart options={options8} onRef={(ref) => (this.chart = ref)} />
        <CanvasJSChart options={options9} onRef={(ref) => (this.chart = ref)} />
        <CanvasJSChart
          options={options10}
          onRef={(ref) => (this.chart = ref)}
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

//   //   let body = [
//   //     ["3.056986", "2.553079", "3.184217", "3.037001", "3.362656"],
//   //     ["2.949854", "2.713351", "2.875343", "3.101367", "3.405669"],
//   //     ["2.976702", "3.636093", "3.080375", "3.101693", "3.088571"],
//   //     ["0.469701", "0.409441", "0.442157", "0.419197", "0.386543"],
//   //   ];

export default clusters;
