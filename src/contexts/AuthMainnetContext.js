import * as fcl from "@onflow/fcl";
import { createContext, useContext, useEffect, useState } from "react";

// import "../../flow/configMainnet";

export const AuthMainnetContext = createContext({});

export const useMainnetAuth = () => useContext(AuthMainnetContext);

// fcl.config({
//   "app.detail.title": "My Galleryz", // this adds a custom name to our wallet
//   "app.detail.icon": "https://res.cloudinary.com/do4mactw0/image/upload/v1655577809/Logo_m6ofww.png", // this adds a custom image to our wallet
//   "accessNode.api": "https://rest-mainnet.onflow.org",
//   "discovery.wallet": "https://fcl-discovery.onflow.org/authn", // this is for the local dev wallet
//   "0xDeployer": process.env.NEXT_PUBLIC_CONTRACT_ADDRESS, // this auto configures `0xDeployer` to be replaced by the address in txs and scripts
// })

export default function AuthMainnetProvider({ children }) {
  const [user, setUser] = useState({ loggedIn: false, addr: undefined });
  const [flow, setFlow] = useState(0);


  useEffect(() => {
    // fcl.currentUser.subscribe(setUser)
    // console.log(user.addr)
    // if(user.addr != "") getFlow(user.addr)
  }, []);


  const logOutMainnet = async () => {
    await fcl.unauthenticate();
    setUser({ addr: undefined, loggedIn: false });
  };

  const logInMainnet = async () => {
    const res = await fcl.authenticate();
  };

  const signUpMainnet = () => {
    fcl.signUp();
  };

  async function getFlow(address) {
   
    try {
      const res = await fcl.query({
        cadence: `
        import FlowToken from 0x7e60df042a9c0868
        import FungibleToken from 0x9a0766d93b6608b7

        pub fun main(address: Address): UFix64{
          let balanceVault =  getAccount(address).getCapability(/public/flowTokenBalance).borrow<&FlowToken.Vault{FungibleToken.Balance}>()!
          return balanceVault.balance
        }
        `,
        args: (arg, t) => [arg(address, t.Address)],
      });

      console.log("Flow Token", res);
      setFlow(res)
    } catch (error) {
      console.log("err:", error);
    }
  }


  const value = {
    logOutMainnet,
    logInMainnet,
    signUpMainnet,
    user,
    flow
  };

  // console.log("AuthProvider", value);

  return <AuthMainnetContext.Provider value={value}>{children}</AuthMainnetContext.Provider>;
}
