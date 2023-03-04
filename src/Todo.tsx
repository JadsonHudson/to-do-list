import { Trash } from "phosphor-react";
import styles from "./Todo.module.css";
export interface TodoProps {
    id: string;
    title: string;
    completed: boolean;
}

interface TodoPropsFunction {
    todo: TodoProps;
    onChangeComplete: (id: string) => void;
    handleDeleteTodo: (id: string) => void;
}
export function Todo({
    todo,
    onChangeComplete,
    handleDeleteTodo,
}: TodoPropsFunction) {
    return (
        <li className={styles.todoElement}>
            <label htmlFor={todo.id} className={styles.container}>
                {todo.title}
                <input
                    type="checkbox"
                    name="todo"
                    id={todo.id}
                    onChange={() => onChangeComplete(todo.id)}
                />
                <span className={styles.checkmark}></span>
            </label>
            <button
                title="Deletar TODO"
                onClick={() => handleDeleteTodo(todo.id)}
            >
                <Trash size={16} weight="bold" />
            </button>
        </li>
    );
}
