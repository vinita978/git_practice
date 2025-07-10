import BookList from "./components/BookList";
import Search from "./components/Search";
import "./components/style.css";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import { Outlet } from "react-router-dom";
import { Books } from "./utils/mockdata";
import { useState } from "react";
import userContext from "./utils/useContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const [user, setUser] = useState("vinita");
  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: user }}>
        <Header />
        <Outlet />
      </userContext.Provider>
    </Provider>
  );
}

export default App;
