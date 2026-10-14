import styles from "./contador.module.css";
import { Trash } from "lucide-react";

function HistorialList({ historial, onEliminarRegistro, onLimpiarHistorial }) {
    if (historial.length === 0) {
        return <p className={styles.vacio}>No hay movimientos en el historial.</p>;
    }

    return (
        <div>
            <div className={styles.historialHeader}>
                <h2 className={styles.subtitulo}>Historial ({historial.length})</h2>
                <button onClick={onLimpiarHistorial}>Limpiar todo</button>
            </div>
            <ul className={styles.historialList}>
                {historial.map((item) => (
                    <li className={styles.historialItem} key={item.id}>
                        <span>{item.texto}</span>
                        <div className={styles.iconsContainer}>
                            <Trash
                                onClick={() => onEliminarRegistro(item.id)}
                                size={22}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HistorialList;
