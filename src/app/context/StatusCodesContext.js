"use client";

import React, { createContext, useContext } from "react";

const StatusCodesContext = createContext();

export const useStatusCodes = () => useContext(StatusCodesContext);

export const StatusCodesProvider = ({ children, statusCodes }) => {
  return <StatusCodesContext.Provider value={statusCodes}>{children}</StatusCodesContext.Provider>;
};
