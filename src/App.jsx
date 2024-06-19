import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { CitiesProvider } from "./Context/CitiesContext.jsx";
import "./App.css";
import Login from "./components/Login.jsx";
import { Suspense, lazy } from "react";

import Countries from "./pages/Countries.jsx";
import Form from "./pages/Form.jsx";
import CityList from "./pages/CityList.jsx";
import City from "./pages/City.jsx";
import Message from "./components/Message.jsx";
import LoadingFallback from "./components/LoadingFallback.jsx";

const Product = lazy(() => import("./pages/Product.jsx"));
const Pricing = lazy(() => import("./pages/Pricing.jsx"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.jsx"));
const AppLayout = lazy(() => import("./pages/AppLayout.jsx"));
const Homepage = lazy(() => import("./pages/Homepage.jsx"));
function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route index element={<Homepage />}></Route>
            <Route path="Product" element={<Product />}></Route>
            <Route path="Pricing" element={<Pricing />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
            <Route path="/App" element={<AppLayout />}>
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities/:id" element={<City />}></Route>
              <Route path="cities" element={<CityList />}></Route>
              <Route path="countries" element={<Countries />}></Route>
              <Route path="form" element={<Form />}></Route>
            </Route>
            <Route path="/Login" element={<Login />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
