import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Header, RouteGuard } from "./components";
import { ROUTES } from "./constants";

const Home = lazy(() => import("./pages/home/Home"));
const Plans = lazy(() => import("./pages/plans/Plans"));
const Resume = lazy(() => import("./pages/resume/Resume"));

const createRoute = (
  path: string,
  Component: React.ComponentType,
  type: "public" | "protected"
) => (
  <Route
    key={path}
    path={path}
    element={
      <RouteGuard type={type}>
        <Component />
      </RouteGuard>
    }
  />
);

function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense
          fallback={<div className="spinner-loading spinner-loading--plans" />}
        >
          <Routes>
            {createRoute(ROUTES.HOME, Home, "public")}
            {createRoute(ROUTES.PLANS, Plans, "protected")}
            {createRoute(ROUTES.RESUME, Resume, "protected")}
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
