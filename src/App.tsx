import { useState } from "react"
import TodoItem from "./components/todo"
import { dummyData } from "./data/todo"
import AddTodoForm from "./components/AddTodoForm"
import TodosList from "./components/TodosList"



function App() {
const [todos,setTodos]=useState(dummyData) 

 const onCompleteChange=(id:number,completed:boolean)=>{

  alert(`todo with id ${id} is now ${completed?"completed":"not complteted"}`)
  setTodos(prev=>prev.map(to=>(to.id===id?{...to,completed}:to)))
 }

 const onSubmit=(title:string)=>{
  
  setTodos(prev=>[...prev,{id:prev.length+1,title:title,completed:false}])

 }
 const onDelete=(id:number)=>{
  
  setTodos(prev=>prev.filter(tod=>tod.id!=id))

 }

  return (
    <>
    <main className='p-10 h-screen  w-screen'>
      <h1 className="font-bold text-3xl text-center mb-20">Your Todos</h1>

      <div className="max-w-lg mx-auto">
        <AddTodoForm onSubmit={onSubmit}/>
   <TodosList onCompleteChange={onCompleteChange} todos={todos} onDelete={onDelete}/>
{!todos.length && (<div className="text-gray-300 font-bold font-italic">No Task List</div>)}
    </div>
    </main>
        
    </>
  )
}

export default App
