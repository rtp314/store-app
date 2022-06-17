import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className='App'>
            <Navbar />
            <main>
                <Catalog />
            </main>
            <Footer />
        </div>
    );
}

export default App;
