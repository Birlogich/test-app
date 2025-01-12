// src/features/theme/use-theme.js
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setTheme } from "./theme-slice";

export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);  


  const toggleTheme = (newTheme) => {
    dispatch(setTheme(newTheme));  
  };

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    if (darkModeMediaQuery.matches) {
      dispatch(setTheme("dark"));
    } else {
      dispatch(setTheme("light"));
    }

    const handleChange = (e) => {
      dispatch(setTheme(e.matches ? "dark" : "light"));
    };

    darkModeMediaQuery.addEventListener('change', handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, [dispatch]);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);  
  }, [theme]);

  return [theme, toggleTheme];
};
