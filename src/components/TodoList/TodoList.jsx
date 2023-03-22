<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

const TodoList = ({ filter }) => {
  //하드코딩 된 ListItem이 아닌 로컬스토리지에 있는 getItem을 이용해서 todos에 있는 값을 가져와야함
  // const [todos, setTodos] = useState(ListItem);
  //아래처럼 불러오면 JSON형식으로 바꾸고 코드가 길어지므로 함수를 추가로 작성하여 불러오는것이 가독성 좋음
  // const [todos, setTodos] = useState(localStorage.getItem('todos'));

  // const [todos, setTodos] = useState(readTodosFromLocalStorage());
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

  const handleAdd = (todo) => {
    // 새로운 todo를 todos에 추가 해야 함
=======
import React, { useState } from "react";
import Todo from "../Todo/Todo";
import AddTodo from "../AddTodo/AddTodo";
import styles from "./TodoList.module.css";

const TodoList = ({ filter }) => {
  const [todos, setTodos] = useState(ListItem);

  const handleAdd = (todo) => {
>>>>>>> e9000dd6b6699c94ebf93d552a3393a502a949f7
    setTodos([...todos, todo]);
  };

  const handleUpdate = (updated) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  };

<<<<<<< HEAD
  const handleDelet = (deleted) => {
    //삭제하고자 하는것이 아닌것만 배열로 나타내라
    setTodos(todos.filter((t) => t.id !== deleted.id));
  };

  //todolist 로컬스토리지 저장
  useEffect(() => {
    //1. 로컬스토리지에 있는 setItem을 이용하여 todos라는 key에 object 저장할건데
    //2. todos의 배열을 저장하기 위해 JSON으로 변환해줘야 함
    //3. JSON에 있는 stringify API를 이용하여 todos를 JSON으로 변환함
    //4. 변환한 JSON을 todos에 저장함
    localStorage.setItem("todos", JSON.stringify(todos));
    //todo가 변경이 될때마다 위에 코드가 실행 됨
  }, [todos]);

  //filter 된 아이템만 받아와서 기존 todo와 필터에 해당하는 것만
  //필터에 전달해줘서 필터를 받아올 수 있게 할거임
  const filtered = getFilteredItems(todos, filter);
=======
  const handleDelete = (deleted) => {
    setTodos(todos.filter((t) => t.id !== deleted.id));
  };

  const filtered = getFilterItem(todos, filter);
>>>>>>> e9000dd6b6699c94ebf93d552a3393a502a949f7

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
<<<<<<< HEAD
            onDelete={handleDelet}
          />
        ))}
      </ul>
      {/* onAdd가 되면 나의 callback함수인 handleAdd 호출해줘  */}
=======
            onDelete={handleDelete}
          />
        ))}
      </ul>
>>>>>>> e9000dd6b6699c94ebf93d552a3393a502a949f7
      <AddTodo onAdd={handleAdd} />
    </section>
  );
};

<<<<<<< HEAD
//getFilteredItems 함수는 현재 todo배열과 어떤 것을
//필터 적용해야하는지 데이터를 받아옴
const getFilteredItems = (todos, filter) => {
  if (filter === "all") {
    return todos;
  }
  // 만약 filter가 all 아니면 기존 todos의 filter를 이용하여
  // 각각 todo를 받아와서 todo의 상태가 filter에 해당하는것만 보여줘라
=======
const getFilterItem = (todos, filter) => {
  if (filter === "all") {
    return todos;
  }
>>>>>>> e9000dd6b6699c94ebf93d552a3393a502a949f7
  return todos.filter((todo) => todo.status === filter);
};

export default TodoList;

<<<<<<< HEAD
const readTodosFromLocalStorage = () => {
  console.log("readTodosFromLocalStorage 함수 실행");
  const todos = localStorage.getItem("todos");
  //로컬스토리지에 가져온 todos가 있다면 JSON으로 todos를 parse()하여 배열로 만들어주고
  // 없다면 빈 배열로 반환해줘라
  return todos ? JSON.parse(todos) : [];
};

// const ListItem = [
//   {
//     id: 1,
//     text: "잠자기",
//     status: "active",
//   },
//   {
//     id: 2,
//     text: "공부하기",
//     status: "active",
//   },
// ];
=======
const ListItem = [
  {
    id: 1,
    text: "잠자기",
    status: "active",
  },
  {
    id: 2,
    text: "놀기",
    status: "active",
  },
];
>>>>>>> e9000dd6b6699c94ebf93d552a3393a502a949f7
