import { useState } from "react"

 interface addTodoProps{
    onSubmit: (title:string)=>void
 }

const AddTodoForm = ({onSubmit}:addTodoProps) => {
const [input,setInput]=useState("")

const handleSubmit=(event : React.FormEvent <HTMLFormElement>)=>{
  event.preventDefault()

  if(!input.trim()) return
 
  onSubmit(input)
  setInput("")


}

  return (
    <div className="w-full  flex content-center my-10">

        <input type="text" placeholder="what do you want to add to your task list? " className="w-full px-5 border outline-none" value={input} onChange={e=>setInput(e.target.value)}  />
        <button className="bg-black h-full" onClick={(e:React.FormEvent)=>handleSubmit(e)}>Add</button>
    </div>
  )
}

export default AddTodoForm