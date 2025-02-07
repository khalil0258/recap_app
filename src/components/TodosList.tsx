import { todo } from "../Types/todos";
import TodoItem from "./todo";

interface todosList{
todos:todo[];
onCompleteChange:(id:number,completed:boolean)=>void;
onDelete:(id:number)=>void

}

const TodosList = ({todos,onCompleteChange,onDelete}:todosList) => {
  return (
   <div className="space-y-2">
   
       {todos?.map(data=>(
        
        <TodoItem todo={data} onCompleteChange={onCompleteChange} onDelete={onDelete}/>
       ))}
       </div>
  )
}

export default TodosList