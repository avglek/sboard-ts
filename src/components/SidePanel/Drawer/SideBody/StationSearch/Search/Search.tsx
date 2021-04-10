import React, { useState, useEffect, useRef } from "react";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";
import classes from "./Search.module.css";
import { useTypedSelector } from "../../../../../../hooks/useTypedSelector";
import { StantionSearchType } from "../../../../../../types/stantionType";
import { useActions } from "../../../../../../hooks/useActions";
import { getMapConfig } from "../../../../../../utils/mapUtils";

const Search: React.FC = () => {
  const [input, setInput] = useState("");
  const [stantionsListDefault, setStantionsListDefault] = useState<
    StantionSearchType[]
  >([]);
  const [stantionsList, setStantionsList] = useState<StantionSearchType[]>([]);

  const { items, loading } = useTypedSelector((state) => state.stantion);
  const { resetZoom } = useTypedSelector((state) => state.layer);
  const stantions = items;

  const inputRef = useRef<HTMLInputElement>(null);

  const { postFindStantion, loadMap } = useActions();

  const replaceInputValue = (value: string, postfix: string): string => {
    const keys = ["ДС", "ДС(ПКО)"];
    if (keys.find((item) => value === item)) {
      return `${value} ${postfix}`;
    } else {
      return value;
    }
  };

  const getStantionList = (): StantionSearchType[] => {
    if (stantions) {
      const result: StantionSearchType[] = [];
      for (let item in stantions) {
        const stn = stantions[item];
        result.push({
          name: stn.ms,
          code: item,
          region: stn.region,
        });
        stn.nodes.forEach((element) => {
          result.push({
            name: replaceInputValue(element.name, stn.ms),
            code: item,
            region: stn.region,
          });
        });
      }
      return result;
    } else {
      return [];
    }
  };

  const updateInput = (input: string) => {
    if (input === "") {
      setInput("");
      setStantionsList([]);
    } else {
      const filtered = stantionsListDefault.filter((item) => {
        return item.name.toLowerCase().includes(input.toLowerCase());
      });

      setInput(input);
      setStantionsList(filtered);
    }
  };

  useEffect(() => {
    if (!loading) {
      setStantionsListDefault(() => getStantionList());
    }
    // eslint-disable-next-line
  }, [loading]);

  const listClick = (value: string) => {
    setInput(value);
    setStantionsList([]);
    inputRef.current!.focus();
  };

  const handlerSearchClick = () => {
    setInput("");
    setStantionsList([]);
    const stn = stantionsListDefault.find(
      (item) => item.name.toLowerCase() === input.toLowerCase()
    );

    if (stn) {
      postFindStantion(stn.code);
      const code = Number.parseInt(stn.region);
      if (code) {
        const findRegion = getMapConfig(code);
        if (findRegion) loadMap(findRegion);
      }
      if (resetZoom) resetZoom();
    }
  };

  const handlerEnter = (key: string) => {
    if (key === "Enter") {
      handlerSearchClick();
    }
  };

  return (
    <div className={classes.Search}>
      <SearchBar
        inputRef={inputRef}
        input={input}
        onChange={updateInput}
        onClick={handlerSearchClick}
        onKeyPress={handlerEnter}
      />
      <SearchList searchList={stantionsList} onClick={listClick} />
    </div>
  );
};

export default Search;
