import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ScrollContextProvider from "./context/ScrollContext";
import Header from "./page/Header";
import HomePage from "./page/Home";
import MoviePage from "./page/Movie";
import MovieInfoPage from "./page/MovieInfo";
import PersonInfoPage from "./page/PersonInfo";

const routers = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/movie", element: <MoviePage /> },
  { path: "/movieInfo/:imdbID", element: <MovieInfoPage /> },
  { path: "/person/:name", element: <PersonInfoPage /> },
]);

function App() {
  return (
    <>
      <ScrollContextProvider>
        <Header />
        <RouterProvider router={routers} />
      </ScrollContextProvider>
    </>
  );
}

export default App;
