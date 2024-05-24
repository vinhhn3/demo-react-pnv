import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Body from "./layout/Body";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Body />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
