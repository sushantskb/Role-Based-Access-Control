import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Roles from "./pages/Roles";
import Permission from "./pages/Permission";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/permission" element={<Permission />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}