import { useSelector } from "react-redux";
import { HashRouter } from "react-router-dom";
import { Navigator } from "./components/";
import { Rutas } from "./routes";

function App() {
  //Usamos UseSelector para obtener el estado de la aplicación
  const { active } = useSelector((state) => state.isActive);
  return (
    <div className={active ? "text-light bg-dark" : " text-dark bg-white"}>
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
