import React from "react";
import Table from "react-bootstrap/Table";
import parse from "html-react-parser";
import classes from "./InfoView.module.css";

interface Props {
  data: Info[];
}

interface Info {
  index: number;
  name: string;
  value: string;
  style?: string;
  type?: string;
  nowindow?: string | null | undefined;
  link_name?: string | null | undefined;
}

const InfoView: React.FC<Props> = ({ data }) => {
  if (data === undefined) {
    return null;
  }

  const renderDefault = (item: Info, index: number) => {
    let str = item.value;

    if (item.style) {
      str = item.style === "bold" ? `<b>${str}</b>` : str;
    }

    const text = str.split("\n");

    return (
      <tr key={index.toString()}>
        <td>{item.name}</td>
        <td>
          {text.map((i, index) => (
            <p key={index.toString()}>
              <span style={{ paddingLeft: "1em" }}></span>
              {parse(i)}
            </p>
          ))}
        </td>
      </tr>
    );
  };

  const renderRowItems = () =>
    data.map((item, index) => {
      if (item.type) {
        switch (item.type) {
          case "link":
            return (
              <tr key={index.toString()}>
                <td>{item.name}</td>
                <td>
                  <span
                    className={classes.vlink}
                    onClick={
                      item.nowindow
                        ? () => handleClickLink(item.value, false)
                        : () => handleClickLink(item.value, true)
                    }
                  >
                    {item.link_name ? item.link_name : "Выписка из ТРА"}
                  </span>
                </td>
              </tr>
            );
          default:
            return renderDefault(item, index);
        }
      } else {
        return renderDefault(item, index);
      }
    });

  return (
    <div className={classes.scrollTable}>
      <Table striped bordered hover size="sm">
        <tbody>{renderRowItems()}</tbody>
      </Table>
    </div>
  );
};

function handleClickLink(href: string, newWin = false): void {
  console.log("click:", href);
}

export default InfoView;
