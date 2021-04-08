import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import ModalWin from "../../UIComponents/ModalWin/ModalWin";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import InfoView from "./Views/InfoView/InfoView";
import TableView from "./Views/TableView/TableView";
import { customStyles as defaultStyles } from "./Views/TableView/CustomStyles";
import { imgStyles } from "./Views/TableView/imgStyles";

const Report: React.FC = () => {
  const { items, loading, error, title } = useTypedSelector(
    (state) => state.report
  );

  const keys = Object.keys(items);

  const customTabs = keys.map((i, index) => {
    switch (i) {
      case "info":
        return (
          <Tab eventKey={i} title={items[i].header} key={index}>
            <InfoView data={items[i].data} />
          </Tab>
        );
      default:
        return (
          <Tab eventKey={i} title={items[i].header} key={index}>
            <TableView
              items={items[i]}
              rowsStyles={
                items[i].header === "Руководство" ? imgStyles : defaultStyles
              }
            />
          </Tab>
        );
    }
  });

  if (error) {
    <ModalWin title={title}>
      <div>
        <h3>{error}</h3>
      </div>
    </ModalWin>;
  }

  if (loading) {
    return (
      <ModalWin title={title}>
        <div>
          <LoaderSpinner
            style={{
              top: "2rem",
              height: "28rem",
              background: "rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
      </ModalWin>
    );
  }

  return (
    <ModalWin title={title}>
      <Tabs defaultActiveKey="info" id="uncontrolled-tab-example">
        {customTabs}
      </Tabs>
    </ModalWin>
  );
};

export default Report;
