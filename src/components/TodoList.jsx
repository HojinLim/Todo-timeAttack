import React from 'react'

export const TodoList = ({todos, setTodos, isDone, borderStyle}) => {
  return (
    <div>
    <h3>{isDone?"완료된":"진행중인"} TODO 영역</h3>

    {todos
      .filter(function (t) {
        return t.isDone === isDone;
      })
      .map((todo) => {
        return (
          <div
            style={borderStyle}
          >
            <p>{todo.id}</p>
            <p>제목:{todo.title}</p>
            <p>내용:{todo.contents}</p>
            <p>완료여부:{todo.isDone.toString()}</p>
            <button className='btn' onClick={()=>{
              const list =todos.map((work)=>{
                if(work.id === todo.id){
                  return {...work, isDone: !work.isDone}
                }else{
                  return work
                }
        
              })
              setTodos(list);
            }
              
            }>{isDone?"완료취소":"취소"}</button>
            <button className='btn' onClick={()=>{
             const list =todos.filter((work)=>{
              return work.id !== todo.id
              
             })
             setTodos(list)

            }}>삭제</button>
          </div>
        );
      })}
  </div>
  )
}
