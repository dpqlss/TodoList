import React, { createContext, useContext, useEffect, useState } from "react";

//외부에서 DarkModeContext를 사용할때 일일이 알릴필요 없이
//맨 아래의 함수인 useDarkMode hook를 추가하여 간편하게 사용할 수 있음
const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    //토글을 클릭하면 이전 값과 반대로 적용하겠다
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    //1. Provider 우산안에서 쓰이는 데이터를 담고있는 리액트 내부 state에 업데이트를 해준 후
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);

  return (
    // DarkModeContext darkMode와 toggle모드를 설정해 두면 자식들 중에 필요한 사람들만 해당부분에 접근할거야
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

//2. 웹페이지에 있는 html에 dark라는 클래스을 넣을건지 안넣을건지의 관한 여부를
//판단하는 함수인 updateDarkMode를 위에 추가해줌
const updateDarkMode = (darkMode) => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    //toggleDarkMode 이 될때마다, 업데이트 될때마다 로컬스토리지에도 저장해줌
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
};

export default DarkModeProvider;
//useContext를 이용하여 내부적으로 DarkModeContext를 사용할 수 있게 만들어줌
//사용하는 곳에서 useDarkMode라고 하면 내부적으로 어떤 context를 사용하는지 상관하지 않아도 됨
export const useDarkMode = () => useContext(DarkModeContext);
