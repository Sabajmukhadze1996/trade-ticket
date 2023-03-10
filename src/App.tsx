import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Nav from "./components/navigation/Nav";
import Footer from "./components/footer/Footer";

//pages
import HomePage from "./pages/home-page/HomePage";
import NewsPage from "./pages/news/NewsPage";
import PurChasePage from "./pages/purchase-tickets-page/PurChasePage";
import TicketSellPage from "./pages/ticket-sell-page/TicketSellPage";
import SignUp from "./pages/auth/sign-up/SignUp";
import SignIn from "./pages/auth/sign-in/SignIn";

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
              <Route path="/ticket-sell" element={<TicketSellPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
