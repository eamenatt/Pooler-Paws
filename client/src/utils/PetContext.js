import React from "react";

const PetContext = React.createContext({
  pet: {},
  petss: [],
  handleBtnClick: () => {},
});

export default PetContext;