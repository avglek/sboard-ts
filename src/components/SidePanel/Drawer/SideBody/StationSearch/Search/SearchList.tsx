import React from "react";
import { StantionSearchType } from "../../../../../../types/stantionType";
import classes from "./Search.module.css";

type Props = {
  searchList: StantionSearchType[];
  onClick: (name: string) => void;
};

const SearchList: React.FC<Props> = ({ searchList = [], onClick }) => {
  return (
    <div className={classes.searchList}>
      {searchList.map((data, index) => {
        if (data) {
          return (
            <div key={index}>
              <div
                className={classes.searchItem}
                onClick={() => onClick(data.name)}
              >
                {data.name}
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default SearchList;
