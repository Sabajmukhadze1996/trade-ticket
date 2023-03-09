import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Nav from "./components/navigation/Nav";
import Footer from "./components/footer/Footer";

//pages
import HomePage from "./pages/home-page/HomePage";
import NewsPage from "./pages/news/NewsPage";
import PurChasePage from "./pages/purchase-tickets-page/PurChasePage";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="main-app-container">
          <Header />
          <Nav />
          <main id="main">
            <Routes>
              <Route path="/*" element={<HomePage />} />
              <Route path="/purchase" element={<PurChasePage />} />
              <Route path="/news" element={<NewsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
