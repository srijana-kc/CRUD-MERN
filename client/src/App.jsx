import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Corrected import path for Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Corrected import path for Bootstrap JS
import { Toaster } from "react-hot-toast";
import UserTable from "./table/UserTable.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Toaster></Toaster>
      <UserTable />
    </>
  );
}

export default App;
