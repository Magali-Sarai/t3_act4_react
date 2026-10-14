import { useState } from "react";
import styles from "./contador.module.css";
import ContadorDisplay from "./ContadorDisplay";
import HistorialList from "./HistorialList";
import { Plus, Minus, RotateCcw } from "lucide-react";

function Contador() {
    const [cuenta, setCuenta] = useState(0);
    const [paso, setPaso] = useState(1);
    const [historial, setHistorial] = useState([]);

    const agregarAlHistorial = (accion, resultado) => {
        const nuevoRegistro = {
            id: Date.now() + Math.random(),
            texto: `${accion} ➔ Total: ${resultado}`,
        };
        // Inmutabilidad con arrays: agregamos al inicio
        setHistorial((prev) => [nuevoRegistro, ...prev]);
    };

    const incrementar = () => {
        const nuevoValor = cuenta + paso;
        setCuenta(nuevoValor);
        agregarAlHistorial(`Sumó ${paso}`, nuevoValor);
    };

    const decrementar = () => {
        const nuevoValor = cuenta - paso;
        setCuenta(nuevoValor);
        agregarAlHistorial(`Restó ${paso}`, nuevoValor);
    };

    const reiniciar = () => {
        if (cuenta === 0) return;
        setCuenta(0);
        agregarAlHistorial("Reinició a 0", 0);
    };

    const eliminarRegistro = (id) => {
        setHistorial(historial.filter((item) => item.id !== id));
    };

    const limpiarHistorial = () => {
        setHistorial([]);
    };

    return (
        <div>
            <h1 className={styles.titulo}>Contador</h1>

            <ContadorDisplay cuenta={cuenta} />

            <div className={styles.controlesContainer}>
                <button onClick={decrementar}>
                    <Minus size={18} /> Restar {paso}
                </button>
                <button onClick={reiniciar}>
                    <RotateCcw size={18} /> Reiniciar
                </button>
                <button onClick={incrementar}>
                    <Plus size={18} /> Sumar {paso}
                </button>
            </div>

            <div className={styles.pasoContainer}>
                <label htmlFor="pasoInput">Paso:</label>
                <input
                    id="pasoInput"
                    type="number"
                    min="1"
                    value={paso}
                    onChange={(e) => setPaso(Number(e.target.value) || 1)}
                />
            </div>

            <HistorialList
                historial={historial}
                onEliminarRegistro={eliminarRegistro}
                onLimpiarHistorial={limpiarHistorial}
            />
        </div>
    );
}

export default Contador;
