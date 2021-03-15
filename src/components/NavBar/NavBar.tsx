import React, { useEffect } from "react";
import classes from "./NavBar.module.css";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import NavButton from "./NavButton/NavButton";
import { INavbarProps } from "../../types/navbarType";

// Замена наименования стиля с "bg-blue" на "bgBlue"
const translate = (name: string) => {
  const str = name.match(/-(\D)/);
  if (str) {
    return name.replace(/-\D/, str[1].toUpperCase());
  } else {
    return "";
  }
};

const NavBar: React.FC<INavbarProps> = ({ className }) => {
  const { loading, items, error } = useTypedSelector((state) => state.navbar);
  const { fetchNavbar } = useActions();

  useEffect(
    () => {
      fetchNavbar();
    },
    // eslint-disable-next-line
    []
  );

  if (loading) {
    return (
      <div className={className}>
        <h2>Loading ...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className={className}>
        <h2>Error {error}</h2>
      </div>
    );
  }

  items.sort((a, b) => a.order_num - b.order_num);

  return (
    <div className={className + " " + classes.NavBar}>
      {items.map((item) => {
        return (
          <NavButton
            key={item.id}
            styleButton={translate(item.style)}
            path={item.path}
            name={item.name}
            disabled={item.disabled}
          />
        );
      })}
    </div>
  );
};

export default NavBar;
