import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./Header.module.css";
import { HiMoon, HiSun } from "react-icons/hi";

const Header = ({ filters, filter, onFiltereChange }) => {
<<<<<<< HEAD
  //다크모드
  //다크모드와 토글의 여부를 useDarkMode()함수를 이용해서 값을 받아옴
=======
>>>>>>> e9000dd6b6699c94ebf93d552a3393a502a949f7
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
<<<<<<< HEAD
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
      <ul className={styles.filters}>
        {/* filters를 map을 통해 돌면서 원하는 ui요소로 변환해줄거임 */}
        {filters.map((value, index) => (
          <li key={index}>
            <button
              // 지금 현재 전달받은 filter와 내 버튼의 값이 동일하다면 styles에 있는 selected를 사용하겠다
              // 내가 클릭한 메뉴에만 색상이 조금 더 진하게 들어가는 효과 줌
=======
      <ul className={styles.filters}>
        <button onClick={toggleDarkMode} className={styles.toggle}>
          {!darkMode && <HiMoon />}
          {darkMode && <HiSun />}
        </button>
        {filters.map((value, index) => (
          <li key={index}>
            <button
>>>>>>> e9000dd6b6699c94ebf93d552a3393a502a949f7
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              onClick={() => onFiltereChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
