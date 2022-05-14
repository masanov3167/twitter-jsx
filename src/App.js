import Login from "./pages/Login/Login";


import "./assets/main.css";
import Sitebar from "./components/Sitebar";
import Search  from "./components/Search";
import Home from "./pages/Home/Home";
import React from "react";
import { Context } from "./components/Context";
import Main from "./pages/Main";

function App() {

  const {token} = React.useContext(Context);
    
    {
      if(token){
      return <Main/>
    }else{
      return <Login />
    }
  }
}

export default App;
