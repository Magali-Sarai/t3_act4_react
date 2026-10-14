

# Aplicación de Contador con Historial (React + Vite)

Mini aplicación interactiva desarrollada en **React 19** y **Vite**, construida siguiendo las bases del curso de React. Funciona **sin APIs externas**, gestionando todo su flujo de datos mediante estado local con React Hooks.

---

## Cumplimiento de Requisitos del Proyecto

La aplicación cumple con 4 conceptos fundamentales de React:

### a) Componente funcional simple
* **[`ContadorDisplay.jsx`](src/components/Contador/ContadorDisplay.jsx)**: Es un componente funcional *stateless* (sin estado propio ni efectos secundarios). Su única responsabilidad es recibir información y retornar la estructura JSX correspondiente.

### b) Componente que recibe y muestra props
* **[`ContadorDisplay.jsx`](src/components/Contador/ContadorDisplay.jsx)**: Recibe la prop `{ cuenta }` enviada por el componente padre y la muestra en pantalla.
* **[`HistorialList.jsx`](src/components/Contador/HistorialList.jsx)**: Recibe por props `{ historial, onEliminarRegistro, onLimpiarHistorial }` para renderizar el listado y comunicar eventos hacia el padre.

### c) Componente que usa estado (`useState`) para cambiar algo en pantalla
* **[`Contador.jsx`](src/components/Contador/Contador.jsx)**: Gestiona 3 estados principales:
  * `cuenta`: Número actual mostrado en pantalla. Al sumar, restar o reiniciar, React re-renderiza el valor de inmediato.
  * `paso`: Valor numérico controlado por un `<input>` que determina la magnitud de cada suma o resta.
  * `historial`: Arreglo de registros que cambia dinámicamente cada vez que el usuario realiza una acción.

### d) Lista renderizada dinámicamente a partir de un arreglo (usando `.map()`)
* **[`HistorialList.jsx`](src/components/Contador/HistorialList.jsx)**: Utiliza la función `.map()` sobre el arreglo de `historial` para generar dinámicamente elementos `<li>` asignando un `key={item.id}` único a cada uno, permitiendo además eliminar registros individuales.

---

## Estructura de Archivos

```text
src/
├── App.jsx                                  # Contenedor principal con selector de vistas
├── index.css                                # Estilos globales y reset
└── components/
    └── Contador/
        ├── Contador.jsx                     # Componente principal con lógica y estados
        ├── ContadorDisplay.jsx              # Subcomponente para visualización del valor
        ├── HistorialList.jsx                # Subcomponente para iteración del historial (.map)
        └── contador.module.css              # Estilos modulares (estilo básico y limpio)
```

---

## Funcionalidades de la Aplicación

1. **Sumar y Restar con Paso Configurable:**
   * Botones interactivos con iconos de `lucide-react` (`Plus` y `Minus`).
   * Campo de entrada numérico para definir el valor del paso (ej. sumar/restar de 1 en 1, de 5 en 5, de 10 en 10, etc.).
2. **Reinicio (Reset):**
   * Botón con icono `RotateCcw` para restablecer la cuenta a 0.
3. **Historial de Acciones en Tiempo Real:**
   * Cada movimiento genera un registro inmutable (`[nuevoRegistro, ...prev]`).
   * Visualización del tipo de operación realizada y el resultado acumulado.
4. **Gestión del Historial:**
   * Botón con icono `Trash` por cada elemento para eliminarlo individualmente mediante filtrado (`.filter()`).
   * Botón "Limpiar todo" para vaciar el historial por completo.
5. **Navegación Integrada en `App.jsx`:**
   * Botones que permite alternar entre la aplicación del **Contador** y la aplicación de **Notas** (JSON-Server).

---

## Cómo Ejecutar el Proyecto

### 1. Instalar dependencias
```bash
npm install
```
### 2. Iniciar el servidor de desarrollo (Frontend)
```bash
npm run dev
```
Abrir en el navegador la URL indicada por Vite (como: `http://localhost:5173/` o `http://localhost:5174/`).

---

## Preguntas

### a) ¿Qué diferencia hay entre props y state en React?
* **Props (Propiedades):** Son datos que se pasan de un componente padre a un componente hijo (flujo unidireccional descendente). Son **inmutables (de solo lectura)** para el componente que las recibe; el componente hijo no debe modificarlas. Permiten parametrizar y reutilizar componentes.
* **State (Estado):** Es la memoria interna y privada de un componente. Es **mutable** a través de su función actualizadora (`setEstado`). Cuando el estado cambia, React automáticamente vuelve a renderizar el componente para reflejar los nuevos datos en pantalla.
En resumen, las *props* se reciben desde afuera (como argumentos de una función); el *state* se administra y modifica internamente dentro del componente.

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?
La prop `key` proporciona un identificador único y estable a cada elemento de la lista para el Virtual DOM de React. 

Es importante porque:
1. **Optimización del rendimiento:** Permite a React identificar qué elementos fueron agregados, modificados o eliminados sin necesidad de reconstruir y re-renderizar toda la lista.
2. **Consistencia de la interfaz:** Sin una `key` única (o si se utiliza el índice del arreglo al haber eliminaciones/reordenamientos), React puede confundir los elementos de la lista y mostrar estados desactualizados o incorrectos en pantalla.

### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.
* **Explicación:** `useState` es un Hook que le otorga memoria a los componentes funcionales de React. Devuelve un arreglo con dos elementos: la variable con el valor actual del estado y una función actualizadora. Al llamar a la función actualizadora con un nuevo valor, React detecta la modificación y redibuja la pantalla con los datos actualizados.
* **Ejemplo en la mini aplicación:**
  En [`Contador.jsx`](src/components/Contador/Contador.jsx):
  ```jsx
  const [cuenta, setCuenta] = useState(0);

  const incrementar = () => {
      const nuevoValor = cuenta + paso;
      setCuenta(nuevoValor); // React detecta el cambio y actualiza el número en pantalla
  };
  ```
  Inicia `cuenta` con valor `0`. Al hacer clic en el botón de sumar, se invoca `setCuenta(nuevoValor)`, lo que actualiza inmediatamente el valor renderizado por `ContadorDisplay.jsx`

### d) Enlace del repositorio de GitHub
https://github.com/Magali-Sarai/t3_act4_react.git

### e) Enlace del proyecto ya desplegado en GitHub Pages
https://magali-sarai.github.io/t3_act4_react/

