import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Product from "./pages/Product.jsx";
import Pricing from "./pages/Pricing.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import "./App.css";
import Homepage from "./pages/homepage.jsx";
import Login from "./components/Login.jsx";
import Countries from "./pages/Countries.jsx";
import Form from "./pages/Form.jsx";
import CityList from "./pages/CityList.jsx";
import City from "./pages/City.jsx";
import { CitiesProvider } from "./Context/CitiesContext.jsx";
function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
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
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
