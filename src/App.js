import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { Routes, Route } from "react-router-dom";
import Single from "./components/single/Single";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Bosh Sahifa");

  // menu function

  return (
    <div className="App">
      <Header />
      <main>
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/single/:id" element={<Single />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
