import "./styles.css";
import FlashCards from "./FlashCards";
import Header from "./Header";
import Footer from "./Footer";
import Prize from "./Prize";

export default function App() {
    return (
        <div className="app-container">
            <Header />
            <FlashCards />
            <Footer />
            <Prize />
        </div>
    );
}