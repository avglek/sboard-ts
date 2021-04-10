import React from "react";
import classes from "./Search.module.css";
import SearchIcon from "./SearchIcon";

type Props = {
  inputRef: React.Ref<HTMLInputElement>;
  input: string;
  onChange: (value: string) => void;
  onClick: () => void;
  onKeyPress: (key: string) => void;
};

const SearchBar: React.FC<Props> = ({
  inputRef,
  input,
  onChange,
  onClick,
  onKeyPress,
}) => {
  // const BarStyling = {
  //   with: "100%",
  //   background: "#F2F1F9",
  //   border: "none",
  //   padding: "0.5rem",
  // };
  return (
    <div className={classes.searchBar}>
      <input
        ref={inputRef}
        type="text"
        key="random1"
        value={input}
        placeholder={"поиск станции"}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={(e) => onKeyPress(e.key)}
      />
      <div className={classes.searchButton} onClick={onClick}>
        <SearchIcon className={classes.searchIcon} fill={"#777"} />
      </div>
    </div>
  );
};

export default SearchBar;
