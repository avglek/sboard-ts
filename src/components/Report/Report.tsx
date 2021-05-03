import React, { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import ModalWin from "../../UIComponents/ModalWin/ModalWin";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import InfoView from "./Views/InfoView/InfoView";
import TableView from "./Views/TableView/TableView";
import ListView from "./Views/ListView/ListView";
import { customStyles as defaultStyles } from "./Views/TableView/CustomStyles";
import { imgStyles } from "./Views/TableView/imgStyles";
import { setModalTitle } from "../../store/actions/reportAction";
import { IReport } from "../../types/reportType";
import { useDispatch } from "react-redux";

const Report: React.FC = () => {
  const { items, loading, error, title } = useTypedSelector(
    (state) => state.report
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (items["head"]) {
      const head = items["head"] as string;
      dispatch(setModalTitle(head));
    }
  }, [items, dispatch]);

  const customTabs = (): React.ReactNode => {
    const keys = Object.keys(items);

    return keys.map((i, index) => {
      const report = items[i] as IReport;
      const viewKey = report.view ? report.view : "other";

      switch (viewKey) {
        case "info":
          return (
            <Tab eventKey={i} title={report.header} key={index}>
              <InfoView data={report.data} />
            </Tab>
          );
        case "list":
          return (
            <Tab eventKey={i} title={report.header} key={index}>
              <ListView title={report.title} data={report.data} />
            </Tab>
          );

        default:
          if (i === "head") return null;
          return (
            <Tab eventKey={i} title={report.header} key={index}>
              <TableView
                items={report}
                rowsStyles={
                  report.header === "Руководство" ? imgStyles : defaultStyles
                }
              />
            </Tab>
          );
      }
    });
  };

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
        {customTabs()}
      </Tabs>
    </ModalWin>
  );
};

export default Report;
