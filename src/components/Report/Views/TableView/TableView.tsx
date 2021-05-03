import React from "react";
import DataTable, { IDataTableColumn } from "react-data-table-component";
import { IColunm } from "../../../../types/tableViewType";
import { IReport } from "../../../../types/reportType";
//import { customStyles } from "./CustomStyles";
import CustomCell from "./CustomCell/CustomCell";
import { calcWidths } from "../../../../utils/tableViewUtils";

interface Props {
  rowsStyles?: {};
  items: IReport;
}

const TableView: React.FC<Props> = ({ items, rowsStyles }) => {
  if (items === undefined) {
    return <div></div>;
  } else if (Object.keys(items).length === 0) {
    return <div></div>;
  } else {
    const columns: IColunm[] = [];

    if (items.title) {
      for (const [key, value] of Object.entries(items.title)) {
        const col: IColunm = {
          name: "",
          selector: key,
          wrap: true,
          right: false,
          center: true, // выравнивание по центру
        };

        if (typeof value === "object" && value) {
          col.name = value.name;
          col.width = value.width; // задание ширины
          col.right = value.align === "right";
          col.center = value.align === "center";
        } else {
          col.name = value;
        }

        if (key === "image") {
          const prefix = "http://10.35.49.146:8080/"; // для отладки

          col.cell = (row) => (
            <img
              alt={row.name}
              src={`${prefix}${row.image}`}
              style={{ padding: "1em" }}
            />
          );
        } else {
          col.cell = (row, index, column) => (
            <CustomCell row={row} column={column} />
          );
        }
        columns.push(col);
      }
    }

    const data = items.data;

    const columnsWidth = calcWidths(70, 8, columns);

    const all = columnsWidth.map((item, index) => {
      if (index === 0) {
        return {
          ...columns[index],
          width: `${item}rem`,
          right: false,
          center: false,
        };
      } else {
        if (index < columns.length - 1) {
          return {
            ...columns[index],
            ...{ width: `${item}rem` },
          };
        } else {
          return {
            ...columns[index],
          };
        }
      }
    });

    return (
      <DataTable
        title=""
        columns={all as IDataTableColumn[]}
        data={data}
        fixedHeader
        fixedHeaderScrollHeight="22em"
        noHeader={true}
        customStyles={rowsStyles}
        striped={true}
        noDataComponent="Нет данных"
      />
    );
  }
};
export default TableView;
