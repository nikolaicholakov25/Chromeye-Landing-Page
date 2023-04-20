import React from "react";
import "./styles/index.module.css";
import "./styles/navigation.css";
import { Hero, Naviation } from "./sections";
import content from "./content.json";

function App() {
  const {
    agency_services,
    company_data,
    footer_menu,
    hero,
    main_menu,
    portfolio,
    services,
  } = content;

  return (
    <main>
      <Naviation menu={main_menu} />
      <Hero />
    </main>
  );
}

export default App;
