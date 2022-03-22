import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
    return (
        <div>
            <h1 className="text-2xl">
                <Navbar/>
                <Home/>
                <About/>
                <Skills/>
                <Work/>
                <Contact/>
            </h1>
        </div>
    );
}

export default App;
