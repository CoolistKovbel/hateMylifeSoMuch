"use client";
import { useEffect, useState } from "react";
import BuyUserBidModel from "../models/BuyUserBidModel";
import ConnectUserModel from "../models/ConnectUser";
import CreateListModel from "../models/CreateListModel";

export const ModalProvider = () => {
  const [isMounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <BuyUserBidModel />
      <ConnectUserModel />
      <CreateListModel />
    </>
  );
};
