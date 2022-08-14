//import { CssCode } from "../src/codeSnippets/CssCode"

export const MintPageDataSamplers = [
  {
    title: "Welcome",
    professorName: "I'm Zerø,",
    introduction: "I will be your React and FCL Professor!",
    subtitle: "On this teaching you will learn how to create the Orbie Mint page on Flow Blockchain Testnet!",
    subtitle2: "At the end of this challenge you will win:",
    rewards1: "- +2000 XP",
    rewards2: "- UNLOCK Seven Dragons Challenge",
    codeSnippet: [
      {
        professorText: { title: "Let's build the mint page of your Dapp!" },
      },
    ],
    professorAvatar:"/magicSchoolModal/profZero.png",
    completed: true,
  },
  {
    title: "Step 1",
    subtitle: "Let's install some dependencies to be able to handle with authorizations",
    subtitle2: "Open your terminal inside your project path",
    codeSnippet: [
      {
        code: `npm i sha3 elliptic`,
        match: false,
        percent: 0,
        professorText: { title: "Import the css from globals!" },
      },
    ],
    completed: false,
    allCode: `npm i sha3 elliptic`,
  },
  {
    title: "Step 2",
    subtitle: "We need a function to authorize our transaction to mint a new sampler.",
    subtitle2: "Create a new util folder and create the Authorization.js file inside of it",
    codeSnippet: [
      {
        code: `import * as fcl from "@onflow/fcl";`,
        match: false,
        percent: 0,
        professorText: { title: "Import the fcl library!" },
      },
      {
        code: `const { SHA3 } = require("sha3");`,
        match: false,
        percent: 0,
        professorText: { title: "Import the SHA3 library!" },
      },
      {
        code: `var EC = require('elliptic').ec;`,
        match: false,
        percent: 0,
        professorText: { title: "Import the elliptic library!" },
      },
      {
        code: `var ec = new EC('p256');`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize the elliptic library!" },
      },
      {
        code: `const PRIVATE_KEY = "Your private key here";`,
        match: false,
        percent: 0,
        professorText: { title:  "Create a constant for your private key!" },
      },
      {
        code: `const ADDRESS = "Deployer address here"`,
        match: false,
        percent: 0,
        professorText: { title: "Create a constant for your address!" },
      },
      {
        code: `const sign = (message) => {`,
        match: false,
        percent: 0,
        professorText: { title: "Create a sign function!" },
      },
      {
        code: `const key = ec.keyFromPrivate(Buffer.from(PRIVATE_KEY, "hex"));`,
        match: false,
        percent: 0,
        professorText: { title: "Create a key constant! Call the ec function keyFromPrivate to buffer the private key" },
      },
      {
        code: `const sig = key.sign(hash(message));`,
        match: false,
        percent: 0,
        professorText: { title: "Create a sig constant! Call the key function sign to hash the message" },
      },
      {
        code: `const n = 32;`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a constante n with 32 as the value" },
      },
      {
        code: `const r = sig.r.toArrayLike(Buffer, "be", n);`,
        match: false,
        percent: 0,
        professorText: { title: "Create a r constant! Call the sig function r to toArrayLike Buffer, be and n" },
      },
      {
        code: `const s = sig.s.toArrayLike(Buffer, "be", n);`,
        match: false,
        percent: 0,
        professorText: { title: "Create a s constant! Call the sig function s to toArrayLike Buffer, be and n" },
      },
      {
        code: `return Buffer.concat([r, s]).toString("hex");`,
        match: false,
        percent: 0,
        professorText: { title: "Return the Buffer function concat with r and s to toString hex" },
      },
      {
        code: `}`,
        match: false,
        percent: 0,
        professorText: { title: "Close the sign function!" },
      },
      {
        code: `const hash = (message) => {`,
        match: false,
        percent: 0,
        professorText: { title: "Create a hash function!" },
      },
      {
        code: `const sha = new SHA3(256);`,
        match: false,
        percent: 0,
        professorText: { title: "Create a sha constant! Call the SHA3 function with 256 as the value" },
      },
      {
        code: `sha.update(Buffer.from(message, "hex"));`,
        match: false,
        percent: 0,
        professorText: { title: "Call the sha function update to Buffer from message to hex" },
      },
      {
        code: `return sha.digest();`,
        match: false,
        percent: 0,
        professorText: { title: "Return the sha function digest" },
      },
      {
        code: `}`,
        match: false,
        percent: 0,
        professorText: { title: "Close the hash function!" },
      },
      {
        code: `const serverAuthorization = async (account) => {`,
        match: false,
        percent: 0,
        professorText: { title: "Create a serverAuthorization function!" },
      },
      {
        code: `const addr = ADDRESS;`,
        match: false,
        percent: 0,
        professorText: { title: "Create a addr constant! Call the ADDRESS constant" },
      },
      {
        code: `const keyId = 0;`,
        match: false,
        percent: 0,
        professorText: { title: "Create a keyId constant! Call the 0 constant" },
      },
      {
        code: `return {`,
        match: false,
        percent: 0,
        professorText: { title: "Return the object!" },
      },
      {
        code: `...account,`,
        match: false,
        percent: 0,
        professorText: { title: "Spread the account!" },
      },
      {
        code: `tempId: \`\${addr}-\${keyId}\`,`,
        match: false,
        percent: 0,
        professorText: { title: "Create a tempId constant! Call the addr and keyId constants" },
      },
      {
        code: `addr: fcl.sansPrefix(ADDRESS),`,
        match: false,
        percent: 0,
        professorText: { title: "Create a addr constant! Call the fcl function sansPrefix to ADDRESS constant" },
      },
      {
        code: `keyId: Number(keyId),`,
        match: false,
        percent: 0,
        professorText: { title: "Create a keyId constant! Call the Number function to keyId constant" },
      },
      {
        code: `signingFunction: async (signable) => {`,
        match: false,
        percent: 0,
        professorText: { title: "Create a signingFunction function!" },
      },
      {
        code: `return {`,
        match: false,
        percent: 0,
        professorText: { title: "Return the object!" },
      },
      {
        code: `addr: fcl.withPrefix(addr),`,
        match: false,
        percent: 0,
        professorText: { title: "Create a addr constant! Call the fcl function withPrefix to addr constant" },
      },
      {
        code: `keyId: Number(keyId),`,
        match: false,
        percent: 0,
        professorText: { title: "Create a keyId constant! Call the Number function to keyId constant" },
      },
      {
        code: `signature: sign(signable.message)`,
        match: false,
        percent: 0,
        professorText: { title: "Create a signature constant! Call the sign function to signable message" },
      },
      {
        code: `}}}}`,
        match: false,
        percent: 0,
        professorText: { title: "Close the signingFunction function!" },
      },
      {
        code: `export default serverAuthorization;`,
        match: false,
        percent: 0,
        professorText: { title: "Export the serverAuthorization function!" },
      },
    ],
    completed: false,
    allCode: `
import * as fcl from "@onflow/fcl";
const { SHA3 } = require("sha3");
var EC = require('elliptic').ec;
var ec = new EC('p256');

const PRIVATE_KEY = YOUR_DEPLOYER_PRIVATE_KEY
const ADDRESS = YOUR_DEPLOYER_ADDRESS

const sign = (message) => {
  const key = ec.keyFromPrivate(Buffer.from(PRIVATE_KEY, "hex"));
  const sig = key.sign(hash(message)); // hashMsgHex -> hash
  const n = 32;
  const r = sig.r.toArrayLike(Buffer, "be", n);
  const s = sig.s.toArrayLike(Buffer, "be", n);
  return Buffer.concat([r, s]).toString("hex");
}

const hash = (message) => {
  const sha = new SHA3(256);
  sha.update(Buffer.from(message, "hex"));
  return sha.digest();
}

const serverAuthorization = async (account) => {

  const addr = ADDRESS;
  const keyId = 0;

  return {
    ...account,
    tempId: \`\${addr}-\${keyId}\`,
    addr: fcl.sansPrefix(ADDRESS),
    keyId: Number(keyId),
    signingFunction: async (signable) => {
      return {
        addr: fcl.withPrefix(addr),
        keyId: Number(keyId),
        signature: sign(signable.message)
      }
    }
  }
}

export default serverAuthorization;
        `,
  },
  {
    title: "Step 3",
    subtitle:
      "Let's create a new context!",
    subtitle2:
      "Inside contexts folder create the NftContext.js file",
    codeSnippet: [
      {
        code: `import React, { useState, useContext } from "react";`,
        match: false,
        percent: 0,
        professorText: { title: "Import React and useState, useContext and useEffect!" },
      },
      {
        code: `import * as fcl from "@onflow/fcl";`,
        match: false,
        percent: 0,
        professorText: { title: "Import the fcl library!" },
      },
      {
        code: `import { getOrbiesScript } from "../flow/cadence/getOrbiescript";`,
        match: false,
        percent: 0,
        professorText: { title: "Import the getOrbiesScript script!" },
      },
      {
        code: `import { getOrbiesTransaction } from "../flow/cadence/mintOrbieTransaction";`,
        match: false,
        percent: 0,
        professorText: { title: "Import the getOrbiesTransaction transaction!" },
      },
      {
        code: `import serverAuthorization from "../util/Authorization";`,
        match: false,
        percent: 0,
        professorText: { title: "Import the serverAuthorization!" },
      },
      {
        code: `import "../flow/config";`,
        match: false,
        percent: 0,
        professorText: { title: "Import the flow config created on past steps!" },
      },
      {
        code: `export const NftsContext = React.createContext("");`,
        match: false,
        percent: 0,
        professorText: { title: "Export the NftsContext context!" },
      },
      {
        code: `export const useNFTs = () => useContext(NftsContext);`,
        match: false,
        percent: 0,
        professorText: { title: "Export the useNFTs hook!" },
      },
      {
        code: `export default function NftsProvider({ children }){`,
        match: false,
        percent: 0,
        professorText: { title: "Export the NftsProvider component!" },
      },
      {
        code: `const [Orbies, setOrbies] = useState([]);`,
        match: false,
        percent: 0,
        professorText: { title: "Create a state variable for the Samplers and set it to an empty array!" },
      },
      {
        code: `const [IsLoading, setIsLoading] = useState(false);`,
        match: false,
        percent: 0,
        professorText: { title: "Create a state variable for the IsLoading and set it to false!" },
      },
      {
        code: `const getOrbies = async (addr) => {`,
        match: false,
        percent: 0,
        professorText: { title: "Create a function called getOrbies that takes an address as an argument!" },
      },
      {
        code: `try {`,
        match: false,
        percent: 0,
        professorText: { title: "Try to get the Samplers!" },
      },
      {
        code: `const res = await fcl.query({`,
        match: false,
        percent: 0,
        professorText: { title: "Call the FCL query function!" },
      },
      {
        code: `cadence: getOrbiesScript,`,
        match: false,
        percent: 0,
        professorText: { title: "Pass the script through the getSamplersScript to the query!" },
      },
      {
        code: `args: (arg, t) => [arg(addr, t.Address)],`,
        match: false,
        percent: 0,
        professorText: { title: "Pass the address param to the query!" },
      },
      {
        code: `});`,
        match: false,
        percent: 0,
        professorText: { title: "Close the query!" },
      },
      {
        code: `setOrbies(res);`,
        match: false,
        percent: 0,
        professorText: { title: "Set the Samplers state variable to the response!" },
      },
      {
        code: `} catch (error) {`,
        match: false,
        percent: 0,
        professorText: { title: "Catch the error!" },
      },
      {
        code: `console.log("err:", error);`,
        match: false,
        percent: 0,
        professorText: { title: "Log the error!" },
      },
      {
        code: `}}`,
        match: false,
        percent: 0,
        professorText: { title: "Close the getSamplers function!" },
      },
      {
        code: `const mintOrbie = async (name, description, thumbnail, type, addr) => {`,
        match: false,
        percent: 0,
        professorText: { title: "Create a function called mintOrbie that takes a name, description, thumbnail, type and address as arguments!" },
      },
      {
        code: `setIsLoading(true);`,
        match: false,
        percent: 0,
        professorText: { title: "Set the IsLoading state to true!" },
      },
      {
        code: `try {`,
        match: false,
        percent: 0,
        professorText: { title: "Try to mint the Sampler!" },
      },
      {
        code: `const txid = await fcl.mutate({`,
        match: false,
        percent: 0,
        professorText: { title: "Call the FCL mutate function!" },
      },
      {
        code: `cadence: getOrbiesTransaction,`,
        match: false,
        percent: 0,
        professorText: { title: "Pass the transaction through the getOrbiesTransaction to the mutate!" },
      },
      {
        code: `args: (arg, t) => [`,
        match: false,
        percent: 0,
        professorText: { title: "Pass the arguments to the mutate!" },
      },
      {
        code: `arg(name, t.String),`,
        match: false,
        percent: 0,
        professorText: { title: "Pass the name argument and define the type as String!" },
      },
      {
        code: `arg(description, t.String),`,
        match: false,
        percent: 0,
        professorText: { title: "Pass the description argument and define the type as String!" },
      },
      {
        code: `arg(thumbnail, t.String),`,
        match: false,
        percent: 0,
        professorText: { title: "Pass the thumbnail argument and define the type as String!" },
      },
      {
        code: `arg(type, t.String),`,
        match: false,
        percent: 0,
        professorText: { title: "Pass the type argument and define the type as String!" },
      },
      {
        code: `],`,
        match: false,
        percent: 0,
        professorText: { title: "Close the arguments!" },
        links: [{
          text: "Execution Effort Docs",
          url: "https://docs.onflow.org/concepts/variable-transaction-fees/#configuring-execution-limits",
        }]
      },
      {
        code: `proposer: fcl.currentUser,`,
        match: false,
        percent: 0,
        professorText: { title: "Pass the current user as the proposer!" },
        links: [{
          text: "Execution Effort Docs",
          url: "https://docs.onflow.org/concepts/variable-transaction-fees/#configuring-execution-limits",
        }]
      },
      {
        code: `payer: fcl.currentUser,`,
        match: false,
        percent: 0,
        professorText: { title: "Pass the current user as the payer!" },
        links: [{
          text: "Execution Effort Docs",
          url: "https://docs.onflow.org/concepts/variable-transaction-fees/#configuring-execution-limits",
        }]
      },
      {
        code: `authorizations: [fcl.currentUser, serverAuthorization],`,
        match: false,
        percent: 0,
        professorText: { title: "Pass the current user and serverAuthorization as the authorizations!" },
        links: [{
          text: "Execution Effort Docs",
          url: "https://docs.onflow.org/concepts/variable-transaction-fees/#configuring-execution-limits",
        }]
      },
      {
        code: `limit: 999,`,
        match: false,
        percent: 0,
        professorText: { title: "Close the arguments!" },
        links: [{
          text: "Execution Effort Docs",
          url: "https://docs.onflow.org/concepts/variable-transaction-fees/#configuring-execution-limits",
        }]
      },
      {
        code: `});`,
        match: false,
        percent: 0,
        professorText: { title: "Close the fcl.mutate!" },
      },
      {
        code: `fcl.tx(txid).subscribe((res) => {`,
        match: false,
        percent: 0,
        professorText: { title: "Subscribe to the transaction!" },
      },
      {
        code: `if (res.status === 4) {`,
        match: false,
        percent: 0,
        professorText: { title: "If the transaction is successful!" },
      },
      {
        code: `setIsLoading(false);`,
        match: false,
        percent: 0,
        professorText: { title: "Set the IsLoading state to false!" },
      },
      {
        code: `getOrbies(addr)`,
        match: false,
        percent: 0,
        professorText: { title: "Call the getOrbies function to update the orbies of screen!" },
      },
      {
        code: `}});`,
        match: false,
        percent: 0,
        professorText: { title: "Close the subscription!" },
      },
      {
        code: `} catch (error) {`,
        match: false,
        percent: 0,
        professorText: { title: "Catch the error!" },
      },
      {
        code: `setIsLoading(false);`,
        match: false,
        percent: 0,
        professorText: { title: "Set the Loading as false to stop the Spinner!" },
      },
      {
        code: `console.log("err", error);`,
        match: false,
        percent: 0,
        professorText: { title: "Log the error!" },
      },
      {
        code: `}};`,
        match: false,
        percent: 0,
        professorText: { title: "Close the functions!" },
      },
      {
        code: `const value = {`,
        match: false,
        percent: 0,
        professorText: { title: "Create a value object!" },
      },
      {
        code: `Orbies, getOrbies, mintOrbie, IsLoading`,
        match: false,
        percent: 0,
        professorText: { title: "Add the variables to the value object!" },
      },
      {
        code: `};`,
        match: false,
        percent: 0,
        professorText: { title: "Close the value object!" },
      },
      {
        code: `return (<NftsContext.Provider value={value}> {children} </NftsContext.Provider>);`,
        match: false,
        percent: 0,
        professorText: { title: "Return the NftsContext.Provider!" },
      },
      {
        code: `};`,
        match: false,
        percent: 0,
        professorText: { title: "Close the NftsProvider!" },
      },
    ],
    completed: false,
    allCode: 
`import React, { useState, useContext } from "react";
import * as fcl from "@onflow/fcl";

// ----------- SCRIPTS  -----------
import { getOrbiesScript } from "../flow/cadence/getOrbiescript";
import { getOrbiesTransaction } from "../flow/cadence/mintOrbieTransaction";
import serverAuthorization from "../util/Authorization";

import "../flow/config";

export const NftsContext = React.createContext("");
export const useNFTs = () => useContext(NftsContext);

export default function NftsProvider({ children }){
    const [Orbies, setOrbies] = useState([]);
    const [IsLoading, setIsLoading] = useState(false);

    const getOrbies = async (addr) => {   
    try {
        const res = await fcl.query({
        cadence: getOrbiesScript,
        args: (arg, t) => [arg(addr, t.Address)],
        });
        setOrbies(res);
    } catch (error) {
        console.log("err:", error);
    }}

    const mintOrbie = async (name, description, thumbnail, type, addr) => {
    setIsLoading(true);

    try {
        const txid = await fcl.mutate({
        cadence: getOrbiesTransaction,
        args: (arg, t) => [
            arg(name, t.String),
            arg(description, t.String),
            arg(thumbnail, t.String),
            arg(type, t.String),
        ],
        proposer: fcl.currentUser,
        payer: fcl.currentUser,
        authorizations: [fcl.currentUser, serverAuthorization],
        limit: 999,
        });

        fcl.tx(txid).subscribe((res) => {
        if (res.status === 4) {
            setIsLoading(false);
            getOrbies(addr)
        }
        });
        console.log("txid", txid);
    } catch (error) {
        setIsLoading(false);
        console.log("err", error);
    }
    };

    const value = {
    Orbies,
    getOrbies,
    mintOrbie,
    IsLoading
    };

    return (
    <NftsContext.Provider value={value}> {children} </NftsContext.Provider>
    );
};      
`,
  },
  {
    title: "Step 4",
    subtitle: "Now we will import and use this new context in our _app.js file.",
    subtitle2: "Inside of /pages/_app.js import the new NftsContext",
    codeSnippet: [
      {
        code: `import "../styles/globals.css";`,
        match: true,
        percent: 1,
        professorText: { title: "Import the css from globals!" },
      },
      {
        code: `import AuthProvider from "../contexts/AuthContext"`,
        match: true,
        percent: 1,
        professorText: { title: "Import the AuthProvider created on past steps" },
      },
      {
        code: `import NftsProvider from "../contexts/NftsContext"`,
        match: false,
        percent: 0,
        "professorText": { title: "Import the NftsProvider created on past steps" },
      },
      {
        code: `function MyApp({ Component, pageProps }) {`,
        match: true,
        percent: 1,
        professorText: { title: "Create your MyApp function!" },
      },
      {
        code: `return (`,
        match: true,
        percent: 1,
        professorText: { title: "Initialize the return!" },
      },
      {
        code: `<AuthProvider>`,
        match: true,
        percent: 1,
        professorText: { title: "Inside our return we will share the AuthProvider with the children!" },
      },
      {
        code: `<NftsProvider>`,
        match: false,
        percent: 0,
        professorText: { title: "Inside our return we will share the NftsProvider with the children!" },
      },
      {
        code: `<Component {...pageProps} />`,
        match: true,
        percent: 1,
        professorText: { title: "Inside our return we will share the Component with the children!" },
      },
      {
        code: `</NftsProvider>`,
        match: false,
        percent: 0,
        professorText: { title: "Inside our return we will share the NftsProvider with the children!" },
      },
      {
        code: `</AuthProvider>`,
        match: true,
        percent: 1,
        professorText: { title: "Inside our return we will share the AuthProvider with the children!" },
      },
      {
        code: `)}`,
        match: true,
        percent: 1,
        professorText: { title: "Inside our return we will share the MyApp function with the children!" },
      },
      {
        code: `export default MyApp;`,
        match: false,
        percent: 0,
        professorText: { title: "Export the MyApp function!" },
      },
    ],
    completed: false,
    allCode: `
import "../styles/globals.css";
import AuthProvider from "../contexts/AuthContext"
import NftsProvider  from "../contexts/NftsContext"

function MyApp({ Component, pageProps }) {
return (
    <AuthProvider>
      <NftsProvider>
        <Component {...pageProps} />
      </NftsProvider>
    </AuthProvider>
)
}

export default MyApp;
`,
  },
  {
    title: "Step 5",
    subtitle: "Ok, let's create a new component to your app!",
    subtitle2: "Create the file MintOrbieType.jsx inside of /components",
    codeSnippet: [
      {
        code: `const MintOrbieType = ({type, description, price, isLoading, mintFn}) => {`,
        match: false,
        percent: 0,
        professorText: { title: "Declare your component component and add the props that he will receive!" },
      },
      {
        code: `return (`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize the return!" },
      },
      {
        code: `<div className="orbiesText">`,
        match: false,
        percent: 0,
        professorText: { title: "Create a div with the class orbiesText!" },
      },
      {
        code: `<h2>{type}</h2>`,
        match: false,
        percent: 0,
        professorText: { title: "Create a h2 with the type prop!" },
      },
      {
        code: ``,
        match: false,
        percent: 0,
        professorText: { title: "" },
      },
      {
        code: `<p>{description}</p>`,
        match: false,
        percent: 0,
        professorText: { title: "Create a p with the description prop!" },
      },
      {
        code: `<p>{price} FLOW</p>`,
        match: false,
        percent: 0,
        professorText: { title: "Create a p with the price prop!" },
      },
      {
        code: `{isLoading ? <p>Loading...</p> : ""}`,
        match: false,
        percent: 0,
        professorText: { title: "Create a conditional to check if the transaction it's loading!" },
      },
      {
        code: `<button onClick={mintFn}>BUY</button>`,
        match: false,
        percent: 0,
        professorText: { title: "Create a button with the mintFn prop!" },
      },
      {
        code: `</div>`,
        match: false,
        percent: 0,
        professorText: { title: "Close the div with the class orbiesText!" },
      },
      {
        code: `)};`,
        match: false,
        percent: 0,
        professorText: { title: "Close the component!" },
      },
      {
        code: `export default MintOrbieType;`,
        match: false,
        percent: 0,
        professorText: { title: "Export the component!" },
      },
    ],
    completed: false,
    allCode: 
`const MintOrbieType = ({type, description, price, isLoading, mintFn}) => {

return (
  <div className="orbiesText">
    <h2>{type}</h2>
    <p>{description}</p>
    <p>{price} FLOW</p>
    {isLoading ? <p>Loading...</p> : ""}
    <button onClick={mintFn}>BUY</button>
  </div>
);
};

export default MintOrbieType;
`,
  },
  {
    title: "Step 6",
    subtitle:
      "Let's get back to the OrbiesSection component and add edit your mint page!",
    subtitle2: "Import the NftsContext their functions and the MintOrbieType component",
    codeSnippet: [
      {
        code: `import { useEffect, useState } from "react";`,
        match: true,
        percent: 1,
        professorText: {
          title:
            "Import the useEffect and useState react dependencies!",
        },
      },
      {
        code: `import { useAuth } from "../contexts/AuthContext";`,
        match: true,
        percent: 1,
        professorText: "Import the useAuth hook from the contexts folder",
      },
      {
        code: `import { useNFTs } from "../contexts/NftsContext";`,
        match: false,
        percent: 0,
        professorText: "Import the useNFTs hook from the contexts folder",
      },
      {
        code: `import MintOrbieType from "./MintOrbieType";`,
        match: false,
        percent: 0,
        professorText: "Import the MintOrbieType component from the components folder",
      },
      {
        code: `const selectedOrbies = { common: false, legendary: false, rare: false }`,
        match: true,
        percent: 1,
        professorText: {
          title:
            "Initialize a object to store the selected orbies state, all them as false, we will change the common to true soon!",
        },
      },
      {
        code: `const OrbiesSection = () => {`,
        match: true,
        percent: 1,
        professorText: { title: "Initialize your OrbiesSection component" },
      },
      {
        code: `const { logIn, user, getFlow } = useAuth();`,
        match: false,
        percent: 0,
        professorText: { title: "Let's get the logIn and user from our useAuth context!" },
      },
      {
        code: `const { Orbies, mintOrbie, IsLoading, getOrbies } = useNFTs();`,
        match: false,
        percent: 0,
        professorText: { title: "Let's get the Orbies, mintOrbie, IsLoading and getOrbies from our useNFTs context!" },
      },
      {
        code: `const [selected, setSelected] = useState(selectedOrbies);`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Initialize a new state to store the selected orbies, we will use the selectedOrbies object as initial value!",
        },
      },
      {
        code: `let common =  ["Common Orbie", "The common Orbie", "imagelink", "common", user.addr];`,
        match: false,
        percent: 0,
        professorText: { title: "Let's create a array with the common Orbie data! We will pass it as argument to our mint function! Do not worry with the imagelink it will be there when you copy the code!" },
      },
      {
        code: `let legendary = ["Legendary Orbie", "The legendary Orbie", "imagelink", "legendary", user.addr];`,
        match: false,
        percent: 0,
        professorText: { title: "Let's create a array with the legendary Orbie data! We will pass it as argument to our mint function! Do not worry with the imagelink it will be there when you copy the code!" },
      },
      {
        code: `let rare = ["Rare Orbie", "The rare Orbie", "imagelink", "rare", user.addr];`,
        match: false,
        percent: 0,
        professorText: { title: "Let's create a array with the rare Orbie data! We will pass it as argument to our mint function! Do not worry with the imagelink it will be there when you copy the code!" },
      },
      {
        code: `const handleMint = (args) => {`,
        match: false,
        percent: 0,
        professorText: { title: "Let's create a function to handle the minting of the orbies!" },
      },
      {
        code: `mintOrbie(args[0], args[1], args[2], args[3], args[4]);`,
        match: false,
        percent: 0,
        professorText: { title: "Call the mintOrbie function and pass the args as arguments!" },
      },
      {
        code: `getOrbies(user.addr);`,
        match: false,
        percent: 0,
        professorText: { title: "Call the getOrbies function and pass the user address as argument!" },
      },
      {
        code: `}`,
        match: false,
        percent: 0,
        professorText: { title: "Close the handleMint function!" },
      },
      {
        code: `useEffect(() => { handleSelect('common') }, [])`,
        match: true,
        percent: 1,
        professorText: {
          title:
            "This useEffect will be called in the first page rendering! He will change the common state to true with the function that we will create in next line!",
        },
      },
      {
        code: `useEffect(() => {`,
        match: false,
        percent: 0,
        professorText: { title: "Let's create a useEffect to get the orbies when the user change!" },
      },
      {
        code: `getOrbies(user.addr);`,
        match: false,
        percent: 0,
        professorText: { title: "Call the getOrbies function and pass the user address as argument!" },
      },
      {
        code: `getFlow(user.addr);`,
        match: false,
        percent: 0,
        professorText: { title: "Call the getFlow function and pass the user address as argument!" },
      },
      {
        code: `}, [Orbies, getOrbies, getFlow, user.addr]);`,
        match: false,
        percent: 0,
        professorText: { title: "Add the Orbies, getOrbies, getFlow and user.addr as dependencies!" },
      },
      {
        code: `const handleSelect = (type) => {setSelected({ ...selectedOrbies, [type]: !selected.type })}`,
        match: true,
        percent: 1,
        professorText: {
          title:
            "This function will be called when the user click on one of the orbies types, we will change the state of the selected orbies!",
        },
      },
      {
        code: `return (`,
        match: true,
        percent: 1,
        professorText: { title: "Let's return the component!" },
      },
      {
        code: `<div className="orbiesSection">`,
        match: true,
        percent: 1,
        professorText: { title: "Initialize a div to our orbies section!" },
      },
      {
        code: `<div className="orbiesTab">`,
        match: true,
        percent: 1,
        professorText: { title: "Initialize a div to our orbies tab!" },
      },
      {
        code: `<div className={ selected.common ? "commonTab" : "inactive"}`,
        match: true,
        percent: 1,
        professorText: { title: "Initialize a div to our common orbies tab!" },
      },
      {
        code: `onClick={() => handleSelect("common")}/>`,
        match: true,
        percent: 1,
        professorText: { title: "Once clicked we will call the handleSelect function with common has parameter!" },
      },
      {
        code: `<div className={ selected.legendary ? "legendaryTab" : "inactive"}`,
        match: true,
        percent: 1,
        professorText: { title: "Initialize a div to our legendary orbies tab!" },
      },
      {
        code: `onClick={() => handleSelect("legendary")} />`,
        match: true,
        percent: 1,
        professorText: { title: "Once clicked we will call the handleSelect function with common has parameter!" },
      },
      {
        code: `<div className={ selected.rare ? "rareTab" : "inactive"}`,
        match: true,
        percent: 1,
        professorText: { title: "Initialize a div to our rare orbies tab!" },
      },
      {
        code: `onClick={() => handleSelect("rare")} />`,
        match: true,
        percent: 1,
        professorText: { title: "Once clicked we will call the handleSelect function with common has parameter!" },
      },
      {
        code: `</div>`,
        match: true,
        percent: 1,
        professorText: { title: "Close the orbies tab div!" },
      },
      {
        code: `<div className="orbiesContent">`,
        match: true,
        percent: 1,
        professorText: { title: "Initialize a div to our orbies content!" },
      },
      {
        code: `{!user.addr ? (`,
        match: true,
        percent: 1,
        professorText: { title: "If the user is not logged in, we will show a message to him!" },
      },
      {
        code: `<div className="orbiesText"> `,
        match: true,
        percent: 1,
        professorText: { title: "Initialize a div to our orbies text!" },
      },
      {
        code: `<h2>Welcome</h2>`,
        match: true,
        percent: 1,
        professorText: { title: "Initialize a h2 with a Welcome message!" },
      },
      {
        code: `<p>Sign up to get your Orbie NFT</p>`,
        match: true,
        percent: 1,
        professorText: { title: "Initialize a p with a Sign up message!" },
      },
      {
        code: `<button onClick={logIn} className="signUpBtn">SIGN UP</button>`,
        match: true,
        percent: 1,
        professorText: { title: "Initialize a button to sign up!" },
      },
      {
        code: `</div>`,
        match: true,
        percent: 1,
        professorText: { title: "Close the orbies text div!" },
      },
      {
        code: `) : (`,
        match: true,
        percent: 1,
        professorText: { title: "That was the component in no logged user case, when logged we will show the mint option, but this will be in the next challenges!" },
      },
      {
        code: `<div>`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a div to our orbies text!" },
      },
      {
        code: `{selected.common && `,
        match: false,
        percent: 0,
        professorText: { title: "If the common orbies are selected we will show the orbies!" },
      },
      {
        code: `<MintOrbieType type="COMMON"`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a MintOrbieType component with the type as common!" },
      },
      {
        code: `description="Mint your Common Orbie NFT" price="10"`,
        match: false,
        percent: 0,
        professorText: { title: "Add the description and price as props!" },
      },
      {
        code: `isLoading={IsLoading} mintFn={() => handleMint(common)}`,
        match: false,
        percent: 0,
        professorText: { title: "Add the isLoading and mintFn as props!" },
      },
      {
        code: `/> }`,
        match: false,
        percent: 0,
        professorText: { title: "Close the MintOrbieType component!" },
      },
      {
        code: `{selected.legendary &&`,
        match: false,
        percent: 0,
        professorText: { title: "If the legendary orbies are selected we will show the orbies!" },
      },
      {
        code: `<MintOrbieType type="LEGENDARY"`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a MintOrbieType component with the type as legendary!" },
      },
      {
        code: `description="Mint your Legendary Orbie NFT" price="30"`,
        match: false,
        percent: 0,
        professorText: { title: "Add the description and price as props!" },
      },
      {
        code: `isLoading={IsLoading} mintFn={() => handleMint(legendary)}`,
        match: false,
        percent: 0,
        professorText: { title: "Add the isLoading and mintFn as props!" },
      },
      {
        code: `/> }`,
        match: false,
        percent: 0,
        professorText: { title: "Close the MintOrbieType component!" },
      },
      {
        code: `{selected.rare &&`,
        match: false,
        percent: 0,
        professorText: { title: "If the rare orbies are selected we will show the orbies!" },
      },
      {
        code: `<MintOrbieType type="RARE"`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a MintOrbieType component with the type as rare!" },
      },
      {
        code: `description="Mint your Rare Orbie NFT" price="50"`,
        match: false,
        percent: 0,
        professorText: { title: "Add the description and price as props!" },
      },
      {
        code: `isLoading={IsLoading} mintFn={() => handleMint(rare)}`,
        match: false,
        percent: 0,
        professorText: { title: "Add the isLoading and mintFn as props!" },
      },
      {
        code: `/> }`,
        match: false,
        percent: 0,
        professorText: { title: "Close the MintOrbieType component!" },
      },
      {
        code: `</div>`,
        match: false,
        percent: 0,
        professorText: { title: "Close the orbies content div!" },
      },
      {
        code: `)}`,
        match: true,
        percent: 1,
        professorText: { title: "Close the ternary operator!" },
      },
      {
        code: `<div className="orbieImg">`,
        match: true,
        percent: 1,
        professorText: { title: "Initialize a div to our orbie image!" },
      },
      {
        code: `{selected.common && <img src="imgLink" alt="" />}`,
        match: true,
        percent: 1,
        professorText: { title: "If the common state is true, we will show the common orbie image! Do not worry with the img src! It will be complete when you copy the code!" },
      },
      {
        code: `{selected.legendary && <img src="imgLink" alt="" />}`,
        match: true,
        percent: 1,
        professorText: { title: "If the legendary state is true, we will show the common orbie image! Do not worry with the img src! It will be complete when you copy the code!" },
      },
      {
        code: `{selected.rare && <img src="imglink" alt="" />}`,
        match: true,
        percent: 1,
        professorText: { title: "If the rare state is true, we will show the common orbie image! Do not worry with the img src! It will be complete when you copy the code!" },
      },
      {
        code: `</div>`,
        match: true,
        percent: 1,
        professorText: { title: "Close the orbie image div!" },
      },
      {
        code: `</div>`,
        match: true,
        percent: 1,
        professorText: { title: "Close the orbies content div!" },
      },
      {
        code: `<div className="divider" />`,
        match: true,
        percent: 1,
        professorText: { title: "Initialize a div to our divider!" },
      },
      {
        code: `<div className="orbies">`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a div to our orbies! We will show the user orbies here!" },
      },
      {
        code: `{Orbies.map((orbie, index) => (`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a map function to our orbies!" },
      },
      {
        code: `<div key={index} className={user.addr ? "orbie" : "none"}>`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a div to our orbie! We will show the user orbies here!" },
      },
      {
        code: `<img src={orbie.thumbnail} alt="" />`,
        match: false,
        percent: 0,
        professorText: { title: "Add the orbie thumbnail as src!" },
      },
      {
        code: `</div>`,
        match: false,
        percent: 0,
        professorText: { title: "Close the orbie div!" },
      },
      {
        code: `))}`,
        match: false,
        percent: 0,
        professorText: { title: "Close the map function!" },
      },
      {
        code: `</div>`,
        match: true,
        percent: 1,
        professorText: { title: "Close the orbies div!" },
      },
      {
        code: `</div>`,
        match: true,
        percent: 1,
        professorText: { title: "Close the orbies section div!" },
      },
      {
        code: `)}`,
        match: true,
        percent: 1,
        professorText: { title: "Close the component!" },
      },
      {
        code: `export default OrbiesSection;`,
        match: true,
        percent: 1,
        professorText: { title: "Export the component!" },
      },
    ],
    completed: false,
    allCode: 
`import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNFTs } from "../contexts/NftsContext";
import MintOrbieType from "./MintOrbieType";

const selectedOrbies = {
common: false,
legendary: false,
rare: false,
};

const OrbiesSection = () => {
const { logIn, user, getFlow } = useAuth();
const { Orbies, mintOrbie, IsLoading, getOrbies } = useNFTs();
const [selected, setSelected] = useState(selectedOrbies);

let common =  ["Common Orbie", "The common Orbie", "https://magic-flow-academy.s3.sa-east-1.amazonaws.com/orbies/orbieCommonActive.png", "common", user.addr];
let legendary = ["Legendary Orbie", "The legendary Orbie", "https://magic-flow-academy.s3.sa-east-1.amazonaws.com/orbies/orbieLegendaryActive.png", "legendary", user.addr];
let rare = ["Rare Orbie", "The rare Orbie", "https://magic-flow-academy.s3.sa-east-1.amazonaws.com/orbies/orbieRareActive.png", "rare", user.addr];

  const handleMint = (args) => {
    mintOrbie(args[0], args[1], args[2], args[3], args[4]);
    getOrbies(user.addr);
  }

useEffect(() => {
  handleSelect("common");
}, []);

useEffect(() => {
  getOrbies(user.addr);
  getFlow(user.addr);
}, [Orbies, getOrbies, getFlow, user.addr]);

const handleSelect = (type) => {
  setSelected({ ...selectedOrbies, [type]: !selected.type });
};

return (
  <div className="orbiesSection">
    <div className="orbiesTab">
      <div
        className={selected.common ? "commonTab" : "inactive"}
        onClick={() => handleSelect("common")}
      />
      <div
        className={selected.legendary ? "legendaryTab" : "inactive"}
        onClick={() => handleSelect("legendary")}
      />
      <div
        className={selected.rare ? "rareTab" : "inactive"}
        onClick={() => handleSelect("rare")}
      />
    </div>
    <div className="orbiesContent">
      {!user.addr ? (
        <div className="orbiesText">
          <h2>Welcome</h2>
          <p>Sign up to get your Orbie NFT</p>
          <button onClick={logIn} className="signUpBtn">
            SIGN UP
          </button>
        </div>
      ) : (
        <div>
          {selected.common && 
          <MintOrbieType 
          type="COMMON" 
          description="Mint your Common Orbie NFT"
          price="10"
          isLoading={IsLoading}
          mintFn={() => handleMint(common)}
          />
          }
          {selected.legendary &&
          <MintOrbieType 
          type="LEGENDARY" 
          description="Mint your Legendary Orbie NFT"
          price="30"
          isLoading={IsLoading}
          mintFn={() => handleMint(legendary)}
          />
          }
          {selected.rare &&
          <MintOrbieType 
          type="RARE" 
          description="Mint your Rare Orbie NFT"
          price="50"
          isLoading={IsLoading}
          mintFn={() => handleMint(rare)}
          />
          }
        </div>
      )}
      <div className="orbieImg">
        {selected.common && (
          <img
            src="https://magic-flow-academy.s3.sa-east-1.amazonaws.com/orbies/orbieCommon.png"
            alt=""
          />
        )}
        {selected.legendary && (
          <img
            src="https://magic-flow-academy.s3.sa-east-1.amazonaws.com/orbies/orbieLegendary.png"
            alt=""
          />
        )}
        {selected.rare && (
          <img
            src="https://magic-flow-academy.s3.sa-east-1.amazonaws.com/orbies/orbieRare.png"
            alt=""
          />
        )}
      </div>
    </div>
    <div className="divider"></div>
    <div className="orbies">
      {Orbies.map((orbie, index) => (
        <div key={index} className={user.addr ? "orbie" : "none"}>
          <img src={orbie.thumbnail} alt="" />
        </div>
      ))}
    </div>
  </div>
);
};

export default OrbiesSection;
`
  },
  {
    title: "Done",
    subtitle:
      "You got it! Your application is already minting and showing all the nfts that the authenticated address has",
    subtitle2: "",
    codeSnippet: [
      {
        professorText: {
          title:
            "Yooo, you made it! I have an gift for you! Click on the button bellow and mint your soulbound NFT to prove you made it!",
        },
      },
    ],
    lastStep: true,
    path: "/",
  },
];
