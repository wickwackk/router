import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { MENUS, users } from "./util/data";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Login from "./pages/Login";
import "./styles/app.css";

function App() {
  function LoginCheck(userName, password) {
    let isMatch = false;

    users.forEach((user) => {
      if (user.username === userName && user.password === password) {
        isMatch = true;
      }
    });
    if (isMatch === true) {
      console.log("logged in");
      alert("Tavtai moril " + userName);
    } else {
      console.error("zail");
    }
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={MENUS[0].url} element={<Home />} />
        <Route path={MENUS[1].url} element={<About />} />
        <Route path={MENUS[2].url} element={<Login setLogin={LoginCheck} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
