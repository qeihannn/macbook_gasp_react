import { useEffect } from "react";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProductViewer from "./components/ProductViewer.jsx";
import Showcase from "./components/Showcase.jsx";
import Performance from "./components/Performance.jsx";
import Features from "./components/Features.jsx";
import Highlight from "./components/Highlight.jsx";
import Footer from "./components/Footer.jsx";

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {

        useEffect(() => {
        const handle = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);

        return () => clearTimeout(handle);
        }, []);


    return (
        <main>
            <Navbar/>
            <Hero />
            <ProductViewer />
            <Showcase />
            <Performance />
            <Features />
            <Highlight /> 
            <Footer />
        </main>
    );
}

export default App;
