import { Routes, Route } from "react-router-dom";
import FrontendLayout from "./components/frontend/FrontendLayout";
import AdminLayout from "./components/admin/AdminLayout";
import Home from "./pages/frontend/Home";
import Dashboard from "./pages/admin/Dashboard";
import Checkout from "./pages/frontend/Checkout";
import Shop from "./pages/frontend/Shop";
import AdminNotFoundPage from "./pages/admin/AdminNotFoundPage";

function App() {
  return (
    <>
      <Routes>
        {/* frontend  */}
        <Route path="/" element={<FrontendLayout />}>
          {/* all frontend routes  */}
          <Route index element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shop" element={<Shop />} />
        </Route>

        {/* admin  */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* admin routes  */}
          <Route index element={<Dashboard />} />
          <Route path="/admin/*" element={<AdminNotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
