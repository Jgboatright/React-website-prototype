import { createRoot } from "react-dom/client"
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";

const App = () => { 
    return ( 
        <BrowserRouter>
            <main> 
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/AboutMe" element={<AboutMe />} />
                    <Route path="/Portfolio" element={<Portfolio />} />
                </Routes>
            </main> 
        </BrowserRouter>
    ) 
}

const appElement = document.getElementById("app")
const root = createRoot(appElement)
root.render(<App />)

