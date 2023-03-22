import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import DarkModeProvider from "./context/DarkModeContext";

<<<<<<< HEAD
//filters에는 전체, 작업중, 완료 상태를 보여줄거다
const filters = ["all", "active", "completed"];

function App() {
  //filter라는 상태를 이용하여 첫번째 초기값은 filters안에 있는 all을 보여주겠다
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      {/* Header에 전체 필터, 선택된 필터, 필터가 변경이 되었을때
      호출해야하는것까지 전달해줘야함 */}
      {/* 
      1. Header야 우리가 사용할 필터들은 fliters야 
      2. 현재 선택된 filter는 상태값 filter야
      3. 만약에 onFilter가 변경이 되면 변경된 filter를 받아서 변경해줄거야
      */}
      <Header filters={filters} filter={filter} onFiltereChange={setFilter} />
      {/* 변경된 filter는 이거야! 라고 todolist에 말해줘야함 */}
=======
const filters = ["all", "active", "completed"];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFiltereChange={setFilter} />
>>>>>>> e9000dd6b6699c94ebf93d552a3393a502a949f7
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
