import { Trash } from "phosphor-react";
import styles from "./TodoList.module.css";

export function TodoList() {
    return (
        <div className={styles.containerTodo}>
            <header className={styles.titlesTodo}>
                <strong>
                    Tarefas Criadas <span>5</span>
                </strong>
                <strong>
                    Concluídas <span>2 de 5</span>
                </strong>
            </header>
            <ul className={styles.todoList}>
                <li className={styles.todoElement}>
                    <label htmlFor="itodo001" className={styles.container}>
                        Integer urna interdum massa libero auctor neque turpis
                        turpis semper. Duis vel sed fames integer.
                        <input type="checkbox" name="todo" id="itodo001" />
                        <span className={styles.checkmark}></span>
                    </label>
                    <button title="Deletar TODO">
                        <Trash size={14} />
                    </button>
                </li>
                <li className={styles.todoElement}>
                    <label htmlFor="itodo002" className={styles.container}>
                        Integer urna interdum massa libero auctor neque turpis
                        turpis semper. Duis vel sed fames integer.
                        <input type="checkbox" name="todo" id="itodo002" />
                        <span className={styles.checkmark}></span>
                    </label>
                    <button title="Deletar TODO">
                        <Trash size={14} />
                    </button>
                </li>
                <li className={styles.todoElement}>
                    <label htmlFor="itodo003" className={styles.container}>
                        Integer urna interdum massa libero auctor neque turpis
                        turpis semper. Duis vel sed fames integer.
                        <input type="checkbox" name="todo" id="itodo003" />
                        <span className={styles.checkmark}></span>
                    </label>
                    <button title="Deletar TODO">
                        <Trash size={14} />
                    </button>
                </li>
                <li className={styles.todoElement}>
                    <label htmlFor="itodo004" className={styles.container}>
                        Integer urna interdum massa libero auctor neque turpis
                        turpis semper. Duis vel sed fames integer.
                        <input type="checkbox" name="todo" id="itodo004" />
                        <span className={styles.checkmark}></span>
                    </label>
                    <button title="Deletar TODO">
                        <Trash size={14} />
                    </button>
                </li>
                <li className={styles.todoElement}>
                    <label htmlFor="itodo005" className={styles.container}>
                        Integer urna interdum massa libero auctor neque turpis
                        turpis semper. Duis vel sed fames integer.
                        <input type="checkbox" name="todo" id="itodo005" />
                        <span className={styles.checkmark}></span>
                    </label>
                    <button title="Deletar TODO">
                        <Trash size={14} />
                    </button>
                </li>
            </ul>
        </div>
    );
}
