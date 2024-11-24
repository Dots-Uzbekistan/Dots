import React, { createContext, useRef } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const sections = {
    introduction: useRef(null),
    selected: useRef(null),
    projects: useRef(null),
  };

  const scrollToSection = (sectionId) => {
    if (sections[sectionId]?.current) {
      sections[sectionId].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <ScrollContext.Provider value={{ sections, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};
