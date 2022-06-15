import Catalog from "./components/Catalog";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className='App'>
            <Navbar />
            <main>
                <Catalog />
            </main>
        </div>
    );
}

export default App;
