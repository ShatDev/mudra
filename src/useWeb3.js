import { useEffect, useState } from "react";
import Web3 from "web3";

const useWeb3 = () => {
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    var instance;
    if (window.ethereum) {
      // set up a new provider
      try {
        instance = new Web3(window.ethereum);
      } catch (error) {
        console.error(error);
      }
    } else if (window.web3) {
      instance = new Web3(window.web3);
    } else {
      // fallback on localhost provider
      const provider = new Web3.provider.HttpProvider("https://bsc-dataseed1.binance.org:443");
      instance = new Web3(provider);
    }
    setWeb3(instance);
  }, []);
  return web3;
};

export default useWeb3;
