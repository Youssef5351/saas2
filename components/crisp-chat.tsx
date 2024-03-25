"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("3739506d-3e0f-40dd-ab91-5442c3f1b8a7");
  }, []);

  return null;
};