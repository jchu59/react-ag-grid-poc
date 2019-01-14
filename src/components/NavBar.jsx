import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PortalPage from "../PortalPage.jsx";

class NavBar extends Component {
  constructor() {
    super();
    this.state = { tabIndex: 0 };
  }
  render() {
    return (
      <Tabs
        selectedIndex={this.state.tabIndex}
        onSelect={tabIndex => this.setState({ tabIndex })}
      >
        <TabList>
          <Tab>New Order</Tab>
          <Tab>Pending Orders</Tab>
          <Tab>Active Cases</Tab>
          <Tab>Physical Inventory</Tab>
          <Tab>Completed Cases</Tab>
          <Tab>Index</Tab>
          <Tab>Proof of Concept</Tab>
        </TabList>
        <TabPanel>New Order Form</TabPanel>
        <TabPanel>Pending Orders Form</TabPanel>
        <TabPanel>Active Cases Form</TabPanel>
        <TabPanel>Physical Inventory Form</TabPanel>
        <TabPanel>Completed Cases Form</TabPanel>
        <TabPanel>Index Form</TabPanel>
        <TabPanel>
          <PortalPage />
        </TabPanel>
      </Tabs>
    );
  }
}

export default NavBar;
