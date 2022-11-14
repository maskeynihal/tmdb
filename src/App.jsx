import "./assets/css/style.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import MoviesList from "./features/movies/MoviesList";

function App() {
  return (
    <>
      <div className="App">
        <MoviesList />
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
