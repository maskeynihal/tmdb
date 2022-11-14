import "./assets/css/style.css";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="App">
        <Outlet />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
