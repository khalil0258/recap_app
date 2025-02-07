import { Trash } from "lucide-react";
import { todo } from "../Types/todos";

interface todoItemProps {

    todo: todo,
    onCompleteChange:(id:number,isCompleted:boolean)=>void;
    onDelete:(id:number)=>void
 }


 export default function TodoItem( {todo,onCompleteChange,onDelete} :todoItemProps){
    return (
        <div
        key={todo.id}
        className="flex border rounded-md p-2 "
        > 
        <label className="flex items-center gap-2 w-[95%] ">
            <input type="checkbox" className="scale-125 mx-5" 
            checked={todo.completed}
            onChange={(e)=>onCompleteChange(todo.id,e.target.checked)}
            />
        
        <span className={todo.completed? "line-through text-gray-400":""}>{todo.title}</span>

        
        </label>
        <Trash size={20} className="text-gray-300 cursor-pointer hover:text-gray-500" onClick={()=>onDelete(todo.id)} />
        </div>
    )
 }