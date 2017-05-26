import React from "react";
import { ReactTabs, Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
export default class TabsComponent extends React.Component {
  handleSelect(index, last) {
    console.log("Selected tab: " + index + ", Last tab: " + last);
  }
  render() {
    return (
      <Tabs onSelect={this.handleSelected}>
        <TabList>
          <Tab>Foo</Tab>
          <Tab>Bar</Tab>
          <Tab>Baz</Tab>
        </TabList>
        <TabPanel>
          <h2>Hello from Foo</h2>
        </TabPanel>
        <TabPanel>
          <h2>Hello from Bar</h2>
        </TabPanel>
        <TabPanel>
          <h2>Hello from Baz</h2>
        </TabPanel>
      </Tabs>
    );
  }
}
