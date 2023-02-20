import { createRoot } from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => { 
    return ( 
        <main> 
            <Header />
            <Body />
            <Footer />
        </main> 
    ) 
}

const appElement = document.getElementById("app")
const root = createRoot(appElement)
root.render(<App />)

