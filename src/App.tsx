import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useAuth, useUser } from "@clerk/clerk-react";
import SignInPage from "./components/Signin/SignUp";
import { Toaster } from "react-hot-toast";

function App() {

  const {isSignedIn} =useAuth()

  return (
    <BrowserRouter>
    <Toaster/>
      <Routes>
        <Route path="/" element={ isSignedIn ? <Home/> : <SignInPage/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
