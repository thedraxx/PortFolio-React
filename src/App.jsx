import { useSelector } from "react-redux";
import { HashRouter } from "react-router-dom";
import { Navigator } from "./components/";
import { Rutas } from "./routes";
import "./styles/global.css";
function App() {
  //Usamos UseSelector para obtener el estado de la aplicación
  const { active } = useSelector((state) => state.isActive);

  return (
    // Gracias al uso de useSelector podemos acceder al estado de la aplicación
    // Revisamos si active es true o false y cambiamos el modo de la aplicación
    <div className={active ? "text-light bg-dark" : " text-dark bg-white"}>
      {/* Usamos HashRouter para que las rutas sean hash */}
      <HashRouter>
        {/* Navbar */}
        <Navigator />
        {/* Rutas */}
        <Rutas />
      </HashRouter>
    </div>
  );
}

export default App;
