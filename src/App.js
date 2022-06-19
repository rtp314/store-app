import React, { useEffect, useState } from "react";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Popup, { usePopup } from "./components/Popup";

function App() {
    const [location, setLocation] = useState("");
    const { show, hide } = usePopup("New Title", "New Contents");

    useEffect(() => {
        setLocation(window.location.pathname);
    }, []);

    return (
        <div className='App'>
            <Navbar />
            <main>
                <Popup />
                <button onClick={show}>Click Me</button>
                <Catalog />
            </main>
            <Footer />
        </div>
    );
}

export default App;
