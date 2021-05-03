import React from "react";
import classes from "./ListView.module.css";
import Table from "react-bootstrap/Table";

interface Props {
  data: any;
  title: any;
}

const ListView: React.FC<Props> = ({ data, title }) => {
  const listRender = data.map((row: any, index: number) => {
    const text = row.c_name.split("\n");
    return (
      <tr key={index.toString()}>
        <td>
          {text.map((i: string, index: number) => (
            <p key={index.toString()}>
              <span style={{ paddingLeft: "3em" }}></span>
              {i}
            </p>
          ))}
        </td>
      </tr>
    );
  });

  return (
    <div className={classes.ListView}>
      <div className={classes.header}>{title.c_name}</div>
      <div className={classes.scrollTable}>
        <Table striped bordered hover size="sm">
          <tbody>{listRender}</tbody>
        </Table>
      </div>
    </div>
  );
};

export default ListView;
