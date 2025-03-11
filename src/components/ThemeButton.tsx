"use client";
import { useTheme } from "next-themes"
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button variant="outline" size="icon" className="rounded-full border" onClick=
      {() => {
        if (theme === "light") {
          setTheme("dark")
        } else {
          setTheme("light")
        }
      }}
    >{
        theme === "light" ? <SunIcon /> : <MoonIcon />
      }</Button>
  )
}

export default ThemeButton