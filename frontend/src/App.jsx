import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import About from "./Pages/About/About";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
            </Routes>

            <h1>test</h1>
        </>
    );
}

export default App;
