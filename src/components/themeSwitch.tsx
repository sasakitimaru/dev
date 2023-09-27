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
    <label className="swap swap-rotate p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600">
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
