import TodoItem from "./components/todo"
import { dummyData } from "./data/todo"



function App() {
 
  return (
    <>
    <main className='p-10 h-screen  w-screen'>
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>

      <div className="max-w-lg mx-auto">
<div className="space-y-2">

    {dummyData?.map(data=>(
     
     <TodoItem todo={data}/>
    ))}
    </div>

    </div>
    </main>
        
    </>
  )
}

export default App
