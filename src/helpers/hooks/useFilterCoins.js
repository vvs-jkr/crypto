import { useEffect, useState } from "react";

export const useFilterCoins = (setCoins, coins) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const filteredCoins = coins.filter((coin) => {
      return coin.name.toLowerCase().includes(value);
    });
    setCoins(filteredCoins);
  }, [value]);

  return {setValue, value}
};
