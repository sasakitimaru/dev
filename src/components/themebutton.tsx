import React, { useEffect } from "react";
import { default as NightIcon } from "@mui/icons-material/Brightness3";
import { default as LightIcon } from "@mui/icons-material/WbSunny";
import { default as SystemIcon } from "@mui/icons-material/SettingsSuggest";
import { useTheme } from "next-themes";
import { Selected, Mode } from "@/types/type";

interface ThemeButtonProps extends Mode {
  selected: Selected;
  setSelected: React.Dispatch<React.SetStateAction<Selected>>;
}
const ThemeButton: React.FC<ThemeButtonProps> = ({
  mode,
  selected,
  setSelected,
}) => {
  const { theme, setTheme } = useTheme();
  type Theme = typeof theme;

  const handleSetSelected = (theme: Theme) => {
    theme && setTheme(theme);
    setSelected({
      dark: false,
      light: false,
      system: false,
      [mode]: true,
    });
  };
  useEffect(() => {
    if (!mode) mode = "dark";
  }, []);
  console.log(mode);
  return (
    <>
      <input type="checkbox" />
      <svg
        className="swap-on fill-current w-6 h-6"
        // xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        onClick={() => handleSetSelected("light")}
      >
        <NightIcon fontSize="small"/>
      </svg>
      <svg
        className="swap-off fill-current w-6 h-6"
        // xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        onClick={() => handleSetSelected("dark")}
      >
        <LightIcon fontSize="small"/>
      </svg>
    </>
  );
};
export default ThemeButton;
