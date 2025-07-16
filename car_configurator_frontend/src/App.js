import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Car3DViewer from "./components/Car3DViewer";
import CarPreview from "./components/CarPreview";
import Footer from "./components/Footer";
import Auth from "./components/Auth";
import PaymentPlaceholder from "./components/PaymentPlaceholder";

// PUBLIC_INTERFACE
/**
 * Main App for Car Configurator with minimalistic, responsive layout.
 */
function App() {
  // Layout/theme
  const [theme, setTheme] = useState("light");
  const [route, setRoute] = useState("configurator"); // 'configurator', 'auth', 'payment', 'profile'
  // Car config state
  const carColors = [
    "#1a73e8", // primary blue
    "#fbbc05", // secondary yellow
    "#ea4335", // accent red
    "#232323",
    "#ffffff",
    "#8c8c8c",
    "#2ecc40", // green
    "#e87a41", // orange
  ];
  const [selectedColor, setSelectedColor] = useState(carColors[0]);

  const componentsList = [
    {
      id: "wheels",
      name: "Wheels",
      options: ["Standard", "Sport", "Alloy", "Chrome"],
    },
    {
      id: "interior",
      name: "Interior",
      options: ["Fabric", "Leather", "Vegan Leather"],
    },
    {
      id: "infotainment",
      name: "Infotainment",
      options: ["Standard", "Premium Sound", "Ultra Premium"],
    },
  ];
  const [selectedComponents, setSelectedComponents] = useState({});
  // Derived price calculation
  const basePrice = 32000;
  const extraPrice =
    Object.values(selectedComponents)
      .filter(Boolean)
      .length * 1200 +
    (selectedColor === "#ea4335" ? 800 : 0); // Red is premium
  const estimatedPrice = basePrice + extraPrice;

  // Auth state/placeholder
  // ... (could add UI state for loggedIn, userProfile, etc.)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  // PUBLIC_INTERFACE
  const handleComponentChange = (compId, value) => {
    setSelectedComponents((prev) => ({
      ...prev,
      [compId]: value,
    }));
  };

  // Layout
  return (
    <div className="App" style={{ minHeight: "100vh" }}>
      <Header
        onThemeToggle={toggleTheme}
        theme={theme}
      />
      <main className="main-layout">
        {route === "auth" ? (
          <Auth />
        ) : route === "payment" ? (
          <PaymentPlaceholder
            price={estimatedPrice}
            onBack={() => setRoute("configurator")}
          />
        ) : (
          <>
            <Sidebar
              colors={carColors}
              selectedColor={selectedColor}
              onColorSelect={setSelectedColor}
              components={componentsList}
              selectedComponents={selectedComponents}
              onComponentChange={handleComponentChange}
            />
            <section className="main-content">
              <Car3DViewer
                color={selectedColor}
                componentsConfig={selectedComponents}
              />
              <CarPreview
                color={selectedColor}
                componentsConfig={selectedComponents}
                price={estimatedPrice}
              />
              {/* Payment trigger button */}
              <button
                onClick={() => setRoute("payment")}
                className="main-action-btn"
                style={{
                  marginTop: "2em",
                  background: "var(--accent, #ea4335)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "0.8em 2em",
                  fontSize: "1.14em",
                  fontWeight: "bold",
                  cursor: "pointer",
                  boxShadow: "0 1.5px 6px rgba(200,80,70,0.08)",
                  transition: "background 0.18s",
                }}
              >
                Reserve & Continue to Payment
              </button>
            </section>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
