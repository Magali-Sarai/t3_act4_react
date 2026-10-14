import styles from "./contador.module.css";

function ContadorDisplay({ cuenta }) {
    return (
        <div className={styles.displayContador}>
            Cuenta actual: <span className={styles.numero}>{cuenta}</span>
        </div>
    );
}

export default ContadorDisplay;
