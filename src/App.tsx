import React from "react";
import { Hero, Naviation, OutWork, Services } from "./sections";
import content from "./content.json";

import "./styles/index.module.css";
import "./styles/navigation.css";
import "./styles/hero.css";
import "./styles/services.css";
import "./styles/ourwork.css";

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
      <Hero {...hero} />
      <Services {...services} />
      <OutWork {...portfolio} />
    </main>
  );
}

export default App;
