import React from "react";
import {
  AgencyServices,
  Hero,
  LetsStart,
  Naviation,
  OurWork,
  Services,
} from "./sections";
import content from "./content.json";

import "./styles/index.module.css";
import "./styles/typography.css";
import "./styles/navigation.css";
import "./styles/hero.css";
import "./styles/services.css";
import "./styles/ourwork.css";
import "./styles/agency-services.css";
import "./styles/letsstart.css";

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
      <OurWork {...portfolio} />
      <AgencyServices {...agency_services} />
      <LetsStart />
    </main>
  );
}

export default App;
