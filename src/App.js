
import { useState } from "react";
import "./App.css";
import Jobs from "./components/Jobs";
import Admin from "./components/Admin";
export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      {loggedIn ? (
        <Jobs />
      ) : (
        <Admin setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
      )}
    </div>
  );
}