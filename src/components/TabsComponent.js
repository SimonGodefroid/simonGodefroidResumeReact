import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
//import { css } from 'glamor';
import Image from './Image';
import "react-tabs/style/react-tabs.css";
import PieChartSkills from "../components/PieChartSkills";
import { css } from 'glamor';

let tabContent = css({
  height: '100px'
})

let date = css({
  fontWeight: 700
})

let roleTitle = css({
  padding: '2px'
})

let mission = css({
  padding: '2px'
})

export default class TabsComponent extends React.Component {
  handleSelect(index, last) {
    console.log("Selected tab: " + index + ", Last tab: " + last);
  }
  render() {
    return (
      <Tabs onSelect={this.handleSelected}>
        <TabList style={{ textAlign: "center" }}>
          <Tab>Finance</Tab>
          <Tab>Project Management / Business Development</Tab>
          <Tab>Development</Tab>
        </TabList>
        <TabPanel>
          <div style={{ textAlign: 'center' }}>
            <Image
              source={"./assets/img/ge_logo.png"}
              height={70}
              maxHeight={70}
              padding={"10px 20px"}
              verticalAlign="middle"
              alt={"Logo General Electric"}
            />
            <h2>GE Capital</h2>
          </div>
          <div {...tabContent}>
            <ul>
              <li {...date}>03/2012 - 01/2013</li>
              <li {...roleTitle}>Financial Planning Analyst</li>
              <p {...mission}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque obcaecati ducimus architecto minima, magni vitae, vel laborum et libero molestiae, modi placeat omnis. Nostrum commodi fuga, quaerat aliquam accusantium impedit?</p>
              <li {...date}>06/2010 - 08/2011</li>
              <li>Credit Risk Analyst</li>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque obcaecati ducimus architecto minima, magni vitae, vel laborum et libero molestiae, modi placeat omnis. Nostrum commodi fuga, quaerat aliquam accusantium impedit?</p>
            </ul>
          </div>
          <PieChartSkills dataSource={"ge"} />
        </TabPanel>
        <TabPanel>
          <div style={{ textAlign: 'center' }}>
            <Image
              source={"./assets/img/rocket_logo.png"}
              height={70}
              maxHeight={70}
              padding={"10px 20px"}
              verticalAlign="middle"
              alt={"Logo Rocket Internet"}
            />
            <h2>Rocket Internet - ZALORA SEA</h2>
          </div>
          <div {...tabContent}>
            <ul>
              <li>Financial Planning Analyst</li>
              <li>Credit Risk Analyst</li>
            </ul>
          </div>
          <PieChartSkills dataSource={"zalora"} />
        </TabPanel>
        <TabPanel>
          <div style={{ textAlign: 'center' }}>
            <Image
              source={"./assets/img/lereacteur_logo.png"}
              height={70}
              maxHeight={70}
              padding={"10px 20px"}
              verticalAlign="middle"
              alt={"Logo Le Reacteur"}
            />
            <h2>Le Reacteur + Moveet</h2>
          </div>
          <div {...tabContent}>
            <ul>
              <li>Formation Developpeur ReactJS / React Native</li>
              <li>Developpement de mon MVP</li>
            </ul>
          </div>
          <PieChartSkills dataSource={"reacteur"} />
        </TabPanel>
      </Tabs>
    );
  }
}
