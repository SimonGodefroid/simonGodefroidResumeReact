import React from "react";
import {
  PieChart, Pie, Tooltip, Radar, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

import { css } from 'glamor';
let chartsHide = css({

  "@media(max-width: 698px)": {
    display: "none"
  }
});

const dataGE01 = [{ name: 'React-Native', value: 60, fill: 'blue' }, { name: 'React', value: 40, fill: 'red' }];

const dataGE02 = [
  { subject: 'Business Dev.', A: 120, B: 110, fullMark: 150 },
  { subject: 'Project Management', A: 98, B: 130, fullMark: 150 },
  { subject: 'Sales ', A: 86, B: 130, fullMark: 150 },
  { subject: 'English', A: 150, B: 150, fullMark: 150 },
  { subject: 'Mobile App Development', A: 85, B: 90, fullMark: 150 },
  { subject: 'Web App Development', A: 65, B: 85, fullMark: 150 },
];
const dataGE03 = [{ name: 'Cinema', value: 33 }, { name: 'Running', value: 33 }, { name: 'Side-Projects', value: 33 }];

const dataZA01 = [{ name: 'React-Native', value: 60 }, { name: 'React', value: 40 }];
const dataZA02 = [
  { subject: 'Business Dev.', A: 120, B: 110, fullMark: 150 },
  { subject: 'Project Management', A: 98, B: 130, fullMark: 150 },
  { subject: 'Sales ', A: 86, B: 130, fullMark: 150 },
  { subject: 'English', A: 150, B: 150, fullMark: 150 },
  { subject: 'Mobile App Development', A: 85, B: 90, fullMark: 150 },
  { subject: 'Web App Development', A: 65, B: 85, fullMark: 150 },
];
const dataZA03 = [{ name: 'Cinema', value: 33 }, { name: 'Running', value: 33 }, { name: 'Side-Projects', value: 33 }];


const dataRE01 = [{ name: 'React-Native', value: 70 }, { name: 'React', value: 30 }];
const dataRE02 = [
  { subject: 'Business Dev.', A: 120, B: 110, fullMark: 150 },
  { subject: 'Project Management', A: 98, B: 130, fullMark: 150 },
  { subject: 'Sales ', A: 86, B: 130, fullMark: 150 },
  { subject: 'English', A: 150, B: 150, fullMark: 150 },
  { subject: 'Mobile App Development', A: 85, B: 90, fullMark: 150 },
  { subject: 'Web App Development', A: 65, B: 85, fullMark: 150 },
];
const dataRE03 = [{ name: 'Cinema', value: 33 }, { name: 'Running', value: 33 }, { name: 'Side-Projects', value: 33 }];


export default class PieChartSkills extends React.Component {
  getDataSet1(dataSet) {
    let dataSource = "";
    switch (dataSet) {
      case "ge":
        dataSource = dataGE01;
        break
      case "zalora":
        dataSource = dataZA01;
        break;
      case "reacteur":
        dataSource = dataRE01;
        break;
      default:
        dataSource = "";
    }
    return dataSource;
  }
  getDataSet2(dataSet) {
    let dataSource = "";
    switch (dataSet) {
      case "ge":
        dataSource = dataGE02;
        break;
      case "zalora":
        dataSource = dataZA02;
        break;
      case "reacteur":
        dataSource = dataRE02;
        break;
      default:
        dataSource = "";
    }
    return dataSource;
  }
  getDataSet3(dataSet) {
    let dataSource = "";
    switch (dataSet) {
      case "ge":
        dataSource = dataGE03;
        break;
      case "zalora":
        dataSource = dataZA03;
        break;
      case "reacteur":
        dataSource = dataRE03;
        break;
      default:
        dataSource = "";
    }
    return dataSource;
  }


  render() {
    return (
      <div style={{ textAlign: 'center', margin: '80px 0 0 20px' }} {...chartsHide}>
        <div>
          <div style={{ float: 'left', marginLeft: '10px', }}>
            <PieChart width={(window.innerWidth / 3) - 60} height={250}>
              <Pie data={this.getDataSet1(this.props.dataSource)} dataKey={"value"} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="rgba(0,0,0,0.8)" label={(name, value) => `${name.name}: ${name.value} %`} />
              <Tooltip />
            </PieChart>
          </div>
          <div>
            <div style={{ float: 'left', marginLeft: '10px', }}>
              <RadarChart cx={'50%'} cy={'50%'} outerRadius={80} width={(window.innerWidth / 3) - 60} height={250} data={this.getDataSet2(this.props.dataSource)}>
                <Radar dataKey="A" stroke="black" fill="black" fillOpacity={0.6} />
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
              </RadarChart>
            </div>
          </div>
          <div style={{ float: 'left', marginLeft: '10px', }}>
            <PieChart width={(window.innerWidth / 3) - 60} height={250}>
              <Pie data={this.getDataSet3(this.props.dataSource)} keyName={"v"} dataKey={"value"} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="black" label={(name, value) => `${name.name}: ${name.value}%`} />
              <Tooltip />
            </PieChart>
          </div>
          <div style={{ clear: 'both' }} />
        </div>
      </div>
    );
  }
}
