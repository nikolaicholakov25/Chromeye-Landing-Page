import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ children }) => {
  return <section className="section-container">{children}</section>;
};
