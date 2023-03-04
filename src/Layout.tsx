import { PlusCircle, ClipboardText } from "phosphor-react";
import styles from "./Layout.module.css";
import { Todo, TodoProps } from "./Todo";
import { FormEvent, useState, ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";

export function Layout() {
    const [todos, setTodos] = useState<TodoProps[]>([] as TodoProps[]);
    const [completed, setCompleted] = useState(0);
    const [newTodoTitle, setNewTodoTitle] = useState("");

    function handleCreateTodo(event: FormEvent) {
        event.preventDefault();
        const newTodo = {
            id: uuidv4(),
            title: newTodoTitle,
            completed: false,
        };
        setTodos([newTodo, ...todos]);
        setNewTodoTitle("");
    }
    function handleNewTodoTitleChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTodoTitle(event.target.value);
    }

    function onChangeComplete(id: string): void {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            }
            return todo;
        });
        setTodos(newTodos);
        setCompleted(newTodos.filter((todo) => todo.completed === true).length);
    }

    function handleDeleteTodo(id: string) {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
        setCompleted(newTodos.filter((todo) => todo.completed === true).length);
    }
    return (
        <div className={styles.container}>
            <form onSubmit={handleCreateTodo}>
                <div className={styles.field}>
                    <label htmlFor="title" hidden>
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={newTodoTitle}
                        placeholder="Adicione uma nova tarefa"
                        onChange={handleNewTodoTitleChange}
                        required
                    />
                    <button type="submit">
                        Criar
                        <PlusCircle size={16} weight="bold" />
                    </button>
                </div>
            </form>

            <div className={styles.containerTodo}>
                <header className={styles.titlesTodo}>
                    <strong>
                        Tarefas Criadas <span>{todos.length}</span>
                    </strong>
                    <strong>
                        Concluídas
                        <span>
                            {completed} de {todos.length}
                        </span>
                    </strong>
                </header>
                <ul className={styles.todoList}>
                    {todos.length > 0 ? (
                        todos.map((todo) => {
                            return (
                                <Todo
                                    key={todo.id}
                                    todo={todo}
                                    onChangeComplete={onChangeComplete}
                                    handleDeleteTodo={handleDeleteTodo}
                                />
                            );
                        })
                    ) : (
                        <div className={styles.containerEmpty}>
                            <ClipboardText size={56} />
                            <h3>Você ainda não tem tarefas cadastradas</h3>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    )}
                </ul>
            </div>
        </div>
    );
}
