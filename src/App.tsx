import "./global.css";
import styles from "./App.module.css";
import { Layout } from "./Layout";
function App() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src="../assets/rocket.svg" alt="Logo rocket" />
                    <h1>
                        to<span>do</span>
                    </h1>
                </div>
            </header>
            <Layout />
        </>
    );
}

export default App;
