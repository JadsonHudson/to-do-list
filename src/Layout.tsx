import { PlusCircle } from "phosphor-react";
import styles from "./Layout.module.css";
import { TodoList } from "./TodoList";

export function Layout() {
    return (
        <div className={styles.container}>
            <form>
                <div className={styles.field}>
                    <label htmlFor="title" hidden>
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Adicione uma nova tarefa"
                    />
                    <button type="submit">
                        Criar
                        <PlusCircle size={16} weight="bold" />
                    </button>
                </div>
            </form>
            <TodoList />
        </div>
    );
}
