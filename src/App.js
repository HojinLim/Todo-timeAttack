import logo from "./logo.svg";
import "./App.css";
import uuid from "react-uuid";
import { useState } from "react";
import { TodoList } from "./components/TodoList";


function App() {
  const initState = [
    { id: uuid(), title: "공부하기", contents: "리액트", isDone: false },
    { id: uuid(), title: "낮잠자기", contents: "30분", isDone: true },
    { id: uuid(), title: "밥먹기", contents: "점심", isDone: false },
  ];

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [todos, setTodos] = useState(initState);

  const borderStyle= {
    border: "1px solid black",
    padding: "10px",
    borderRadius: "5px",
    margin:"5px"
  }

  return (
    <>
      <header
        style={{
          border: "1px solid black",
          backgroundColor: "#dead26",
          padding: "10px",
        }}
      >
        header입니다.
      </header>
      <main
        style={{
          border: "1px solid black",
          backgroundColor: "#26de79",
          padding: "10px",
        }}
      >
        main입니다.
        <div style={borderStyle}>
          <h3>입력폼입니다.</h3>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              // 유효성 검사
              if(title===""|| contents===""){
                alert("빈값이 있습니다!");
                return
              }
              const newTodo = {
                id: uuid(),
                title,
                contents,
                isDone: false,
              };

              setTitle("");
              setContents("");
              setTodos([...todos, newTodo]);
            }}
          >
          <input
          className="input"
            placeholder="제목"
            type="text"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          ></input>
          <input
          className="input"
            placeholder="내용"
            type="text"
            value={contents}
            onChange={(event) => {
              setContents(event.target.value);
            }}
          ></input>
          <button type="submit">입력완료</button>
          </form>
        </div>
        <div>
          <h2>[TODO-LIST 영역]</h2>
          {/* 컴포넌트 분리 */}
            <TodoList todos={todos} setTodos={setTodos} isDone={false} borderStyle={borderStyle}/>
            
            <TodoList todos={todos} setTodos={setTodos} isDone={true} borderStyle={borderStyle}/>
          
        </div>
      </main>
      <footer
        style={{
          border: "1px solid black",
          backgroundColor: "#26a4de",
          padding: "10px",
        }}
      >
        footer입니다.
      </footer>
    </>
  );
}

export default App;
