import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Charts from "./pages/Charts";
import FullTask from "./pages/FullTask";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        {/* <Route index element={<Navigate replace to="dashboard" />} /> */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="chats" element={<Charts />} />
        <Route path="fulltask" element={<FullTask />} />
        <Route path="settings" element={<Settings />} />

        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
