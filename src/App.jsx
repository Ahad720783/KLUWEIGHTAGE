import React from "react";
import "./App.css";
import Header from "./Header";
import MarksCalculator from "./MarksCalculator";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />  {/* full width */}

      <div className="app-container">
        <MarksCalculator />
        <Footer />
      </div>
    </>
  );
}

export default App;
