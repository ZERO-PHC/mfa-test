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
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

// import next router
import { useRouter } from "next/router";

export const useAuth = () => useContext(AuthContext);

fcl.config({
  "app.detail.title": "Magic Academy Testnet App", // this adds a custom name to our wallet
  "app.detail.icon":
    "https://res.cloudinary.com/do4mactw0/image/upload/v1655577809/Logo_m6ofww.png", // this adds a custom image to our wallet
  "accessNode.api": "https://rest-testnet.onflow.org", // this is for the local emulator
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn", // this is for the local dev wallet
  "0xDeployer": process.env.NEXT_PUBLIC_CONTRACT_ADDRESS, // this auto configures `0xDeployer` to be replaced by the address in txs and scripts
});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({ loggedIn: false, addr: undefined });
  const [FirestoreUser, setFirestoreUser] = useState(null);
  const [GoogleUser, setGoogleUser] = useState(null);
  const [CurrentStep, setCurrentStep] = useState(null);
  const [CurrentLesson, setCurrentLesson] = useState(null);
  const [CurrentLine, setCurrentLine] = useState(null);
  const [Lesson, setLesson] = useState();
  const [Step, setStep] = useState(null);
  const [flow, setFlow] = useState(0);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (googleUser) => {
      if (googleUser) {
        setGoogleUser(googleUser);
        // navigate to home page
        router.push("/viewSamplers");
        // console.log({ googleUser });
      } else {
        router.push("/");

        setGoogleUser(null);
        console.log("no googleUser");
      }
    });
    // fcl.currentUser.subscribe(setUser)
    // console.log(user.addr)
    // if(user.addr != "") getFlow(user.addr)
  }, []);

  useEffect(() => {
    if (GoogleUser) {
      const userRef = doc(db, "users", GoogleUser.uid);
      const unsub = onSnapshot(userRef, (snapshot) => {
        if (snapshot.exists) {
          const userObj = snapshot.data();
          if (userObj) {
            const currentLesson = userObj.currentLesson;
            console.log("userObj", userObj);
            setFirestoreUser(userObj);

            setCurrentLine(userObj.currentLine);

            setCurrentStep(userObj.currentStep);
            setCurrentLesson(currentLesson);
            console.log("CurrentLesson", userObj.currentLesson);
            console.log("currentStep", userObj.currentStep);


            const currentStep = userObj.currentStep.toString();
            const stepRef = doc(
              db,
              "lessons",
              getCurrentLesson(currentLesson),
              "steps",
              currentStep
            );

            getDoc(stepRef)
              .then((doc) => {
                if (doc.exists()) {
                  // console.log("Document data:", doc.data());
                  if (CurrentStep !== userObj.currentStep) {
                    setStep(doc.data());
                  }
                } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");
                }
              })
              .catch((error) => {
                console.log("Error getting document:", error);
              });
          }
        }
      });
      return () => {
        // clean up the listener
        unsub();
      };
    }
  }, [GoogleUser]);

  const getCurrentLesson = (currentLesson) => {
    switch (currentLesson) {
      case 1:
        return "orbies_auth";
      case 2:
        return "orbies_cadence";
      case 3:
        return "orbies_interactions";
      case 4:
        return "orbies_mint";
      default:
        return "orbies_auth";
    }
  };

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
    const userRef = doc(db, "users", user.uid);
    // const userDoc = await userRef.get();
    // if (!userDoc.exists) {
    const userObj = {
      // name: user.displayName,
      email: user.email,
      xp: 0,
      // photoURL: user.photoURL,
      uid: user.uid,
      createdAt: new Date(),
      name: "test",
      currentStep: 1,
      currentLesson: 1,
    };
    await setDoc(userRef, userObj);
    // }
  };

  const logout = async () => {
    await auth.signOut();
    router.push("/");
  };

  const logOut = async () => {
    await fcl.unauthenticate();
    setUser({ addr: undefined, loggedIn: false });
  };

  const logIn = async () => {
    const res = await fcl.authenticate();
  };

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
      setFlow(res);
    } catch (error) {
      // console.log("err:", error);
    }
  }

  const updateStep = async (e, guideline, idx) => {
    const userValue = e.target.value;

    setStep((prevState) => ({
      ...prevState,
      codeSnippet: getNewSnippet(
        prevState.codeSnippet,
        userValue,
        guideline,
        idx
      ),
      completed: checkStepCompletion(
        getNewSnippet(prevState.codeSnippet, userValue, guideline, idx)
      ),
    }));
  };

  const completeStep = async () => {
    // update the steps in the database of the user
    console.log("user", GoogleUser.uid);
    const docRef = doc(db, "users", GoogleUser.uid);
    await updateDoc(docRef, {
      currentStep: CurrentStep + 1,
    })
      .catch((error) => {
        console.error("Error adding document: ", error);
      })
      .then(() => {
        console.log("Document successfully written!");
        setStep(null);
      });
  };

  const getNewSnippet = (prevCodeSnippet, userValue, guideline, idx) => {
    const splitedUserValue = userValue.split("");
    const splitedLine = guideline.code.split("");
    let length = splitedUserValue.length;

    const newCodeSnippet = prevCodeSnippet;
    const actualLine = getActualLine(newCodeSnippet, guideline);
    const isMatched = checkMatch(splitedUserValue, splitedLine, length);
    actualLine.match = isMatched;
    actualLine.percent = getPercent(splitedLine, length);
    actualLine.isCompleted = checkLineCompletion(actualLine.percent, idx);
    actualLine.input = userValue;

    // console.log("newCodeSnippet", newCodeSnippet);
    return newCodeSnippet;
  };

  const getPercent = (splitedLine, length) => {
    return length / splitedLine.length;
  };

  const getActualLine = (codelines, guideline) => {
    const actualLine = codelines.find((line) => line.code === guideline.code);
    console.log("actualLine", actualLine);
    return actualLine;
  };

  const checkMatch = (splitedUserValue, splitedLine, length) => {
    let passed = true;

    for (let i = 0; i < length; i++) {
      if (splitedUserValue[i] != splitedLine[i]) {
        passed = false;
      }
    }

    return passed;
  };

  const checkStepCompletion = (codeSnippet) => {
    console.log("snippet in completion", codeSnippet);
    const isCompleted = codeSnippet.every((line) => line.isCompleted);
    console.log("isCompleted", isCompleted);
    return isCompleted;
  };

  const checkLineCompletion = (percent, idx) => {
    if (percent === 1) {
      updateCurrentLine(idx);
      return true;
    }
  };

  const updateCurrentLine = (idx) => {
    // get user ref from firestore
    const CurrentLineRef = doc(db, "users", GoogleUser.uid);

    // update the completed lines
    updateDoc(CurrentLineRef, {
      currentLine: idx + 1,
    })
      .catch((error) => {
        console.error("Error adding document: ", error);
      })
      .then(() => {
        console.log("Document successfully updated!");
      });

    // const completedLine = {
    //   lesson: CurrentLesson,
    //   step: CurrentStep,
    //   line: idx,
    // };

    // setDoc(CurrentLineRef, completedLine, { merge: true })
    //   .catch((error) => {
    //     console.error("Error adding document: ", error);
    //   })
    //   .then(() => {
    //     console.log("Document successfully written!");
    //   });
  };

  const handleLessonCompletion = async () => {
    // update the steps in the database of the user
    console.log("user", GoogleUser.uid);
    const docRef = doc(db, "users", GoogleUser.uid);
    await updateDoc(docRef, {
      currentLesson: CurrentLesson + 1,
    })
      .catch((error) => {
        console.error("Error adding document: ", error);
      })
      .then(() => {
        console.log("Completed successfully written!");
        resetCurrentStep();
      });
  };

  const resetCurrentStep = async () => {
    // update the steps in the database of the user
    console.log("user", GoogleUser.uid);
    const docRef = doc(db, "users", GoogleUser.uid);
    await updateDoc(docRef, {
      currentStep: 1,
    })
      .catch((error) => {
        console.error("Error resetting document: ", error);
      })
      .then(() => {
        console.log("Completed reset written!");
      });
  };

  const value = {
    CurrentLine,
    handleLessonCompletion,
    completeStep,
    updateStep,
    Step,
    GoogleUser,
    CurrentLesson,
    CurrentStep,
    FirestoreUser,
    logout,
    login,
    signUp,
    user,
    flow,
    getFlow,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
