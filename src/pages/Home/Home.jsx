import MoviesList from "../../features/movies/MoviesList";
import Hero from "./components/Hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />

      <div className="container">
        <MoviesList />
      </div>
    </>
  );
};

export default Home;
