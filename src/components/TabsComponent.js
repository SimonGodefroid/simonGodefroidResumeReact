import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
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
          <h2>GE Capital</h2>
          <ul>
            <li>Financial Planning Analyst</li>
            <li>Credit Risk Analyst</li>
          </ul>
        </TabPanel>
        <TabPanel>
          <h2>Rocket Internet - ZALORA SEA</h2>
          <ul>
            <li>Financial Planning Analyst</li>
            <li>Credit Risk Analyst</li>
          </ul>
        </TabPanel>
        <TabPanel>
          <h2>Le Reacteur + Moveet</h2>
          <ul>
            <li>Formation Developpeur ReactJS / React Native</li>
            <li>Developpement de mon MVP</li>
          </ul>
        </TabPanel>
      </Tabs>
    );
  }
}
