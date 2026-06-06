import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Shop-Task/Pages/Home";
import ItemsPage from "./Shop-Task/Pages/ItemsPage";
import UnitsPage from "./Shop-Task/Pages/UnitsPage";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/items" element={<ItemsPage/>} />
                <Route path="/units" element={<UnitsPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;