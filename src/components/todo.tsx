import { todo } from "../Types/todos";

interface todoItemProps {

    todo: todo
 }


 export default function TodoItem( {todo} :todoItemProps){
    return (
        <div
        key={todo.id}
        className="flex items-center gap-2 border rounded-md p-2"
        > 
        <label><input type="checkbox" className="scale-125" />
        
        <span className={todo.completed? "line-through text-gray-400":""}>{todo.title}</span>
        
        </label></div>
    )
 }