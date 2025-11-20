// Copyright (c) 2025 Kaif Azmi
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Hero from "./components/Hero";
import EssentialTools from "./components/EssentialTools";
import PortfolioHighlights from "./components/PortfolioHighlights";
import Handles from "./components/Handles";
import Blog from "./components/Blog";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <Hero />
        <EssentialTools />
        <PortfolioHighlights />
        <Handles />
        <Blog />
        <ContactMe />
      </main>
      <Footer />
    </>
  );
};

export default App;