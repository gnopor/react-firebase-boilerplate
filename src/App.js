import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <div id="app">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}
