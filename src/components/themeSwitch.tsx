"use client";
import React from "react";
import ThemeButton from "./themebutton";
import { Selected } from "@/types/type";

const ThemeSwitch = () => {
  const [selected, setSelected] = React.useState<Selected>({
    dark: false,
    light: false,
    system: true,
  });
  return (
    <div className="inline-flex flex-row border border-gray-300 rounded-3xl p-1 m-4">
      <ThemeButton mode="dark" selected={selected} setSelected={setSelected}/>
      <ThemeButton mode="light" selected={selected} setSelected={setSelected}/>
    </div>
  );
};

export default ThemeSwitch;
