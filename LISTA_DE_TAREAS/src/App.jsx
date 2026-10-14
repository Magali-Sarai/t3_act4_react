import { useState } from "react";
import "./index.css";
import TodoApp from "./components/TodoApp";
import Contador from "./components/Contador/Contador";

function App() {
    // Estado para alternar entre el Contador y la App de Notas
    const [vistaActiva, setVistaActiva] = useState("contador");

    return (
        <section className="containerTodoApp">
            <nav style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "30px" }}>
                <button
                    onClick={() => setVistaActiva("contador")}
                    style={{
                        padding: "10px 20px",
                        borderRadius: "8px",
                        backgroundColor: vistaActiva === "contador" ? "orange" : "#374151",
                        color: vistaActiva === "contador" ? "#111" : "#fff",
                        fontWeight: "bold",
                        cursor: "pointer",
                        fontSize: "1rem",
                        transition: "all 0.2s ease"
                    }}
                >
                    Contador
                </button>
                <button
                    onClick={() => setVistaActiva("notas")}
                    style={{
                        padding: "10px 20px",
                        borderRadius: "8px",
                        backgroundColor: vistaActiva === "notas" ? "orange" : "#374151",
                        color: vistaActiva === "notas" ? "#111" : "#fff",
                        fontWeight: "bold",
                        cursor: "pointer",
                        fontSize: "1rem",
                        transition: "all 0.2s ease"
                    }}
                >
                    Notas
                </button>
            </nav>

            {vistaActiva === "contador" ? <Contador /> : <TodoApp />}
        </section>
    );
}

export default App;