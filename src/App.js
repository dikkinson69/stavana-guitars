import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import Home from "./pages/Home";

import Guitars from "./pages/Guitars";
import Lamps from "./pages/Lamps";
import Other from "./pages/Other";
import Contact from "./pages/Contact";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("home");
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="container">
      <Header />
      <Navbar onSelectCategory={setSelectedCategory} />

      {selectedCategory === "home" && <Home />}

      {selectedCategory === "guitars" && (
        <Guitars onSelectItem={setSelectedItem} />
      )}
      {selectedCategory === "lamps" && <Lamps onSelectItem={setSelectedItem} />}
      {selectedCategory === "other" && <Other onSelectItem={setSelectedItem} />}
      {selectedCategory === "contact" && <Contact />}

      <Footer />

      {selectedItem && (
        <ImageSlider
          guitar={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}

export default App;
