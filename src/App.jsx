import "./App.css";
import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import { useSelector } from "react-redux";
import { selectIsLoading } from "./redux/selectors";
import MovieDetailsModal from "./components/Hero/MovieDetailsModal";
import MovieTrailerModal from "./components/Hero/MovieTrailerModal";

const Layout = lazy(() => import("./components/Layout/Layout"));
const Home = lazy(() => import("./pages/Home"));
const Catalog = lazy(() => import("./pages/Catalog"));
const Library = lazy(() => import("./pages/Library"));

function App() {
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:movieId" element={<MovieDetailsModal />} />
            <Route path="/trailer/:movieId" element={<MovieTrailerModal />} />
            <Route path="/mylibrary" element={<Library />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
      {isLoading && <Loader />}
    </>
  );
}

export default App;
