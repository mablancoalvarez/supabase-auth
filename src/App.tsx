import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { client } from "./api/client";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import AuthRoutes from "./pages/AuthRoutes";
import "./App.css";

function App() {
  const [authSession, setAuthSession] = useState<object | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    client.auth.getSession().then(({ data: { session } }) => {
      console.log("session", session);
      setAuthSession(session);
    });

    const {
      data: { subscription },
    } = client.auth.onAuthStateChange((_event, session) => {
      console.log("_event", _event);
      setAuthSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (authSession) {
      navigate("/");
    }
  }, [authSession, navigate]);

  return (
    <div>
      <Routes>
        <Route element={<AuthRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
