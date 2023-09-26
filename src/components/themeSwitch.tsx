"use client";
import React from "react";
import ThemeButton from "./themebutton";
import { Selected } from "@/types/type";

const ThemeSwitch = () => {
  const [selected, setSelected] = React.useState<Selected>({
    dark: true,
    light: false,
    system: false,
  });
  return (
    <label className="swap swap-rotate">
      {selected.light ? (
        <ThemeButton
          mode="dark"
          selected={selected}
          setSelected={setSelected}
        />
      ) : (
        <ThemeButton
          mode="light"
          selected={selected}
          setSelected={setSelected}
        />
      )}
    </label>
  );
};

export default ThemeSwitch;
