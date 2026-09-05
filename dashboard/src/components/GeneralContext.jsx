import React, { useContext, useState } from "react";

import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid, orderType) => { },
  closeBuyWindow: () => { },
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [orderType, setOrderType] = useState("BUY");

  const handleOpenBuyWindow = (uid, selectedOrderType) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setOrderType(selectedOrderType);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} orderType={orderType} />}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => useContext(GeneralContext);

export default GeneralContext;