import React from "react";
import classes from "./StationSearch.module.css";
import Search from "./Search/Search";

const StationSearch: React.FC = () => {
  return (
    <div className={classes.StationSearch}>
      <Search />
    </div>
  );
};

export default StationSearch;
