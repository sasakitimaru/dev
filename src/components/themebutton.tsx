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
  return (
    <button
      className={`inline-flex flex-row justify-center items-center rounded-2xl p-1
       ${mode === "dark" && "mr-1"} 
       ${selected[mode] && "bg-gray-400"}
        bg-opacity-50
       `}
      disabled={selected[mode]}
      onClick={() => handleSetSelected(mode)}
    >
      {mode === "dark" && <NightIcon />}
      {mode === "light" && <LightIcon />}
      {mode === "system" && <SystemIcon />}
    </button>
  );
};
export default ThemeButton;
