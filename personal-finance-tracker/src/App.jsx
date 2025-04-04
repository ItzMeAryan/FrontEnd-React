import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import AddTransaction from "./pages/AddTransaction";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<AddTransaction />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}
