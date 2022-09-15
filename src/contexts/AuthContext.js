import * as fcl from "@onflow/fcl";
import { createContext, useContext, useEffect, useState } from "react";

import "../../flow/config";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
export const AuthContext = createContext({});
import { auth, db } from "../firebase";
import {
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  collection,
  getDocs,
} from "firebase/firestore";

// import next router 
import { useRouter } from "next/router";

export const useAuth = () => useContext(AuthContext);

fcl.config({
  "app.detail.title": "Magic Academy Testnet App", // this adds a custom name to our wallet
  "app.detail.icon": "https://res.cloudinary.com/do4mactw0/image/upload/v1655577809/Logo_m6ofww.png", // this adds a custom image to our wallet
  "accessNode.api": "https://rest-testnet.onflow.org", // this is for the local emulator
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn", // this is for the local dev wallet
  "0xDeployer": process.env.NEXT_PUBLIC_CONTRACT_ADDRESS, // this auto configures `0xDeployer` to be replaced by the address in txs and scripts
})


export default function AuthProvider({ children }) {
  const [user, setUser] = useState({ loggedIn: false, addr: undefined });
  const [FirestoreUser, setFirestoreUser] = useState(null);
  
  const [flow, setFlow] = useState(0);
  const router = useRouter();


  useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          setUser(user);
          // navigate to home page
          router.push("/viewSamplers");
          console.log({ user });
        } else {
          setUser(null);
          console.log("no user");
        }
      });
    // fcl.currentUser.subscribe(setUser)
    // console.log(user.addr)
    // if(user.addr != "") getFlow(user.addr)
  }, []);

  // useEffect(() => {
  //   if (user) {
  //     const userRef = doc(db, "users", user.email);
  //     const unsub = onSnapshot(userRef, (snapshot) => {
  //       if (snapshot.exists) {
  //         const userObj = snapshot.data();
  //         console.log("userObj", userObj);
  //         setFirestoreUser(userObj);
  //         setCoins(userObj.coins);
  //       }
  //     });
  //     return () => {
  //       // clean up the listener
  //       unsub();
  //     };
  //   }
  // }, [user]);

  const provider = new GoogleAuthProvider();
  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        createFirestoreUser(user);
        console.log({ credential, token, user });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({ errorCode, errorMessage, email, credential });
      });
  };

  const getRandomPseudonym = () => {
    const randomIndex = Math.floor(Math.random() * pseudonyms.length);
    return pseudonyms[randomIndex];
  };

  // create createFirestoreUser function
  const createFirestoreUser = async (user) => {
    const userRef = doc(db, "users", user.email);
    // const userDoc = await userRef.get();
    // if (!userDoc.exists) {
    const userObj = {
      // name: user.displayName,
      email: user.email,
      coins: 0,
      // photoURL: user.photoURL,
      uid: user.uid,
      createdAt: new Date(),
      name: 'test',
      postedArtworks: [],
      bookmarkedArtworks: [],
    };
    await setDoc(userRef, userObj);
    // }
  };


  const logout = async () => {
    await auth.signOut();
    router.push("/");
  };



  // const logOut = async () => {
  //   await fcl.unauthenticate();
  //   setUser({ addr: undefined, loggedIn: false });
  // };

  // const logIn = async () => {
  //   const res = await fcl.authenticate();
  // };


  const signUp = () => {
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
        }`,
        args: (arg, t) => [arg(address, t.Address)],
      });
      setFlow(res)
    } catch (error) {
      console.log("err:", error);
    }
  }

  const value = {
    logout,
    login,
    signUp,
    user,
    flow,
    getFlow
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
