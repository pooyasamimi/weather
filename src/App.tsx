import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import {WeatherDashboard} from "./pages/Dashboard";
import { CityPage } from "./pages/CityPage";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <div>
        <Layout>
          <Routes>
            <Route path="/" element={<WeatherDashboard />} />
            <Route path="/city/:cityName" element={<CityPage />} />
          </Routes>
        </Layout>
        <Toaster/>
      </div>
    </>
  );
}

export default App;
