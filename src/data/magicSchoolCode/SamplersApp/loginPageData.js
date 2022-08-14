import { CssCode } from "./cssCode";
import {deployerAddress} from "../../../contexts/MagicSchoolStepsContext"

export const LoginPageDataSamplers = [
  {
    title: "Welcome",
    professorName: "I'm Zerø,",
    introduction: "I will be your React and FCL Professor!",
    subtitle: "On this teaching you will learn how to create the Orbie Authentication page on Flow Blockchain Testnet!",
    subtitle2: "At the end of this challenge you will win:",
    rewards1: "- +1500 XP",
    rewards2: "- UNLOCK Orbie Login Page Float",
    codeSnippet: [""],
    professorAvatar:"/magicSchoolModal/profZero.png",
    completed: true,
  },
  {
    title: "Step 1",
    subtitle: "We love React and NextJS, let's use it!",
    subtitle2: "Create a next js app",
    codeSnippet: [
      {
        code: "npm create next-app",
        match: false,
        percent: 0,
        professorText: {
          title: "Create a new next js app",
        },
      },
    ],
    completed: false,
    allCode: `
            npm create next-app 
        `,
  },
  {
    title: "Step 2",
    subtitle: "Inside your app file let's install the flow dependencies",
    subtitle2: "Use the command bellow on your terminal",
    codeSnippet: [
      {
        code: "npm i @onflow/fcl @onflow/types",
        match: false,
        percent: 0,
        professorText: {
          title: "Let's go! Install the flow dependencies on your project!",
        },
      }
    ],
    completed: false,
    allCode: `
            npm i @onflow/fcl @onflow/types 
        `,
  },
  {
    title: "Step 3",
    subtitle: "Add the styles inside /styles/globals.css",
    subtitle2: "You can remove all the code inside globals.css and paste the code below",
    codeSnippet: [
      {
        professorText: {
          title:
            "Our focus it's not CSS, but if you want learn more about it you can check the link below:",
          link: [
            {
              text: "CSS Docs",
              href: "https://www.w3schools.com/css/default.asp"
            }
          ]
        },
      },
    ],
    completed: true,
    allCode: `${CssCode.Globals}`,
  },
  {
    title: "Step 4",
    subtitle: "Create a new Folder /flow inside root NextJS app!",
    subtitle2: "Inside /flow create a new file named config.js! Write the code below to be able to copy it!",
    codeSnippet: [
      {
        code: `const fcl = require("@onflow/fcl");`,
        match: false,
        percent: 0,
        professorText: {
          title: "Let's start the step 3, Initialize the FCL!",
        },
      },
      {
        code: "fcl.config({",
        match: false,
        percent: 0,
        professorText: { title: "Call the config method of fcl" },
      },
      {
        code: `"app.detail.title": "Orbies App",`,
        match: false,
        percent: 0,
        professorText: { title: "Set the title of your app" },
      },
      {
        code: `"app.detail.icon": "imagelink",`,
        match: false,
        percent: 0,
        professorText: { title: "Set the icon of your app" },
      },
      {
        code: `"accessNode.api": "https://rest-testnet.onflow.org",`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Set the access node of your app, we will use testnet for this guide, if you want mainnet use https://rest.mainnet.onflow.org",
        },
      },
      {
        code: `"discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Set the discovery wallet of your app, we will use testnet for this guide, if you want mainnet use https://fcl-discovery.onflow.org/authn",
        },
      },
      {
        code: `"0xDeployer": "YOUR DEPLOYER ADDRESS",`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Set the deployer address here and we will use just 0xDeployer in our scripts and transactions",
        },
      },
      {
        code: `})`,
        match: false,
        percent: 0,
        professorText: { title: "Close the config method of fcl" },
      },
    ],
    completed: false,
    allCode: `
        const fcl = require("@onflow/fcl");

        fcl.config({
            "app.detail.title": "App name",
            "app.detail.icon": "imagelink",
            "accessNode.api": "https://rest-testnet.onflow.org",
            "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
            "0xDeployer": "YOUR-DEPLOYER-ADDRESS"",
            })
        `,
  },
  {
    title: "Step 5",
    subtitle: "We will use contexts from React to interact with the blockchain through FCL",
    subtitle2: " Create a new folder named contexts and Inside of /contexts create a file named AuthContext.js",
    codeSnippet: [
      {
        code: `import * as fcl from "@onflow/fcl";`,
        match: false,
        percent: 0,
        professorText: {
          title: "Step 4! Almost there! Import the fcl library",
        },
      },
      {
        code: `import { createContext, useContext, useEffect, useState } from "react";`,
        match: false,
        percent: 0,
        professorText: {
          title: "Import the React library and the hooks that we will use",
        },
      },
      {
        code: `import "../flow/config";`,
        match: false,
        percent: 0,
        professorText: {
          title: "Import the config file that we created in the previous step",
        },
      },
      {
        code: `export const AuthContext = createContext({});`,
        match: false,
        percent: 0,
        professorText: { title: "Create a new context called AuthContext" },
      },
      {
        code: `export const useAuth = () => useContext(AuthContext);`,
        match: false,
        percent: 0,
        professorText: { 
          title: "Create a new hook called useAuth, React Context it's a way to manage state globally, learn more about it:",
          links: [{
            title: "React Context Docs",
            href: "https://www.w3schools.com/react/react_usecontext.asp"
          }]
       },
      },
      {
        code: `export default function AuthProvider({ children }) {`,
        match: false,
        percent: 0,
        professorText: { title: "Create a new provider called AuthProvider" },
      },
      {
        code: `const [user, setUser] = useState({ loggedIn: false, addr: undefined });`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Create a new state called user and set the loggedIn and addr to false, here we will store the user info after login",
        },
      },
      {
        code: `const [flow, setFlow] = useState(0);`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Create a new state called flow and set the flow to 0, here we will store the flow inside user account after login",
        },
      },
      {
        code: `useEffect(() => {`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Create a new useEffect, useEffect is a hook that will run after the component is rendered",
        },
      },
      {
        code: `fcl.currentUser.subscribe(setUser)`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Subscribe to the currentUser of fcl, this will update the user state when the user login or logout",
        },
      },
      {
        code: `if(user.addr != "") getFlow(user.addr)`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "If the user is logged in, call the getFlow function and pass the user address",
        },
      },
      {
        code: `}, [user.addr]);`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Add the user.addr to the useEffect dependencies, this will run the useEffect when the user.addr change",
        },
      },
      {
        code: `const logOut = async () => {`,
        match: false,
        percent: 0,
        professorText: { title: "Create a new function called logOut" },
      },
      {
        code: `await fcl.unauthenticate();`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Call the unauthenticate method of fcl, fcl will do the magic for us and unathenticate the user when we call this function",
        },
      },
      {
        code: `setUser({ addr: undefined, loggedIn: false });`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "When the user logout we want to clean their data inside our state, right? Set the user state to the loggedIn and addr to undefined",
        },
      },
      {
        code: `};`,
        match: false,
        percent: 0,
        professorText: { title: "Close the logOut function" },
      },
      {
        code: `const logIn = async () => {`,
        match: false,
        percent: 0,
        professorText: { title: "Create a new function called logIn" },
      },
      {
        code: `const res = await fcl.authenticate();`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Call the authenticate method of fcl, fcl will do the magic for us and authenticate the user when we call this function",
        },
      },
      {
        code: `};`,
        match: false,
        percent: 0,
        professorText: { title: "Close the logIn function" },
      },
      {
        code: `const signUp = () => {`,
        match: false,
        percent: 0,
        professorText: { title: "Create a new function called signUp" },
      },
      {
        code: `fcl.signUp();`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Call the signUp method of fcl, fcl will do the magic for us and sign up the user when we call this function",
        },
      },
      {
        code: `};`,
        match: false,
        percent: 0,
        professorText: { title: "Close the signUp function" },
      },
      {
        code: `async function getFlow(address) {`,
        match: false,
        percent: 0,
        professorText: { title: "Create a new async function called getFlow" },
      },
      {
        code: `try {`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a try catch" },
      },
      {
        code: `const res = await fcl.query({`,
        match: false,
        percent: 0,
        professorText: { title: "Call the query method of fcl" },
      },
      {
        code: `cadence: \``,
        match: false,
        percent: 0,
        professorText: { title: "Create a new script" },
      },
      {
        code: `import FlowToken from 0x7e60df042a9c0868`,
        match: false,
        percent: 0,
        professorText: { title: "Import the FlowToken contract" },
      },
      {
        code: `import FungibleToken from 0x9a0766d93b6608b7`,
        match: false,
        percent: 0,
        professorText: { title: "Import the FungibleToken contract" },
      },
      {
        code: `pub fun main(address: Address): UFix64{`,
        match: false,
        percent: 0,
        professorText: { title: "Create a new function called main" },
      },
      {
        code: `let balanceVault =  getAccount(address).getCapability(/public/flowTokenBalance)`,
        match: false,
        percent: 0,
        professorText: { title: "Create a new variable that get the balance of the user" },
      },
      {
        code: `.borrow<&FlowToken.Vault{FungibleToken.Balance}>()!`,
        match: false,
        percent: 0,
        professorText: { title: "Create a new variable that get the balance of the user" },
      },
      {
        code: `return balanceVault.balance`,
        match: false,
        percent: 0,
        professorText: { title: "Return the balance of the user" },
      },
      {
        code: `}\`,`,
        match: false,
        percent: 0,
        professorText: { title: "Close the script" },
      },
      {
        code: `args: (arg, t) => [arg(address, t.Address)],`,
        match: false,
        percent: 0,
        professorText: { title: "Add the address as an argument, the cadence type will be Address" },
      },
      {
        code: `});`,
        match: false,
        percent: 0,
        professorText: { title: "Close the query method" },
      },
      {
        code: `setFlow(res)`,
        match: false,
        percent: 0,
        professorText: { title: "Set the flow state to the result of the query" },
      },
      {
        code: `} catch (error) { console.log("err:", error) }`,
        match: false,
        percent: 0,
        professorText: { title: "Catch the error and log it" },
      },
      {
        code: `}`,
        match: false,
        percent: 0,
        professorText: { title: "Close the getFlow function" },
      },
      {
        code: `const value = { logOut, logIn, signUp, user, flow, getFlow };`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Create a new value called value and set the logOut, logIn, signUp and user functions",
        },
      },
      {
        code: `return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Return the provider with the value of the user and the children of the application",
        },
      },
    ],
    completed: false,
    allCode: `
import * as fcl from "@onflow/fcl";
import { createContext, useContext, useEffect, useState } from "react";

import "../flow/config";

export const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({ loggedIn: false, addr: undefined });
  const [flow, setFlow] = useState(0);

  useEffect(() => {
    fcl.currentUser.subscribe(setUser);
    if (user.addr != "") getFlow(user.addr);
  }, [user.addr]);

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
        cadence: \`
              import FlowToken from 0x7e60df042a9c0868
              import FungibleToken from 0x9a0766d93b6608b7

              pub fun main(address: Address): UFix64{
                let balanceVault =  getAccount(address).getCapability(/public/flowTokenBalance).borrow<&FlowToken.Vault{FungibleToken.Balance}>()!
                return balanceVault.balance
              }\`,
        args: (arg, t) => [arg(address, t.Address)],
      });
      setFlow(res);
    } catch (error) {
      console.log("err:", error);
    }
  }

  const value = {
    logOut,
    logIn,
    signUp,
    user,
    flow,
    getFlow
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}    
`,
  },
  {
    title: "Step 6",
    subtitle: "Inside pages/_app.js add the AuthProvider",
    subtitle2: "Fill in the code below, copy and paste it into your /_app.js",
    codeSnippet: [
      {
        code: `import "../styles/globals.css";`,
        match: false,
        percent: 0,
        professorText: {
          title: "Step 6! Almost there! Import the globals css file",
        },
      },
      {
        code: `import AuthProvider from "../contexts/AuthContext"`,
        match: false,
        percent: 0,
        professorText: {
          title: "Import the AuthProvider from the contexts folder",
        },
      },
      {
        code: `function MyApp({ Component, pageProps }) {`,
        match: false,
        percent: 0,
        professorText: { title: "Create a new function called MyApp" },
      },
      {
        code: `return (`,
        match: false,
        percent: 0,
        professorText: { title: "Create a new return statement" },
      },
      {
        code: `<AuthProvider>`,
        match: false,
        percent: 0,
        professorText: { title: "Create a new AuthProvider" },
      },
      {
        code: `<Component {...pageProps} />`,
        match: false,
        percent: 0,
        professorText: { title: "Create a new Component with the pageProps" },
      },
      {
        code: `</AuthProvider>`,
        match: false,
        percent: 0,
        professorText: { title: "Close the AuthProvider" },
      },
      {
        code: `)}`,
        match: false,
        percent: 0,
        professorText: { title: "Close the MyApp function" },
      },
      {
        code: `export default MyApp;`,
        match: false,
        percent: 0,
        professorText: { title: "Export the MyApp function" },
      },
    ],
    completed: false,
    allCode: 
`import "../styles/globals.css";
import AuthProvider from "../contexts/AuthContext"

function MyApp({ Component, pageProps }) {
    return (
    <AuthProvider>
        <Component {...pageProps} />
    </AuthProvider>
    )
}

export default MyApp;   
        `,
  },
  {
    title: "Step 7",
    subtitle:
      "Create a new folder named components and inside it create a new file called Navbar.jsx",
    subtitle2:
      "Let's create the Navbar Comp! Import the Auth Context to your component and use the functions we created earlier",
    codeSnippet: [
      {
        code: `import { useAuth } from "../contexts/AuthContext";`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Step 7! Almost there! Import the useAuth hook from the contexts folder",
        },
      },
      {
        code: `const Navbar = () => {`,
        match: false,
        percent: 0,
        professorText: "Create a new arrow function called Navbar",
      },
      {
        code: `const { logIn, logOut, user, flow } = useAuth();`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Lets get the logIn, logOut, user functions and flow value from the useAuth hook",
        },
      },
      {
        code: `return (`,
        match: false,
        percent: 0,
        professorText: { title: "Create a new return statement" },
      },
      {
        code: `<nav>`,
        match: false,
        percent: 0,
        professorText: { title: "Create a new nav tag" },
      },
      {
        code: `<div className="logo">`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Create a new div with className logo, this will be div with the logo of our application",
        },
      },
      {
        code: `<img src="logoLink" alt="orbiesLogo" />`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Create a img tag! The src will link to the orbies logo when you copy the text! Don't worry about it now!",
        },
      },
      {
        code: `<h2>ORBIES</h2>`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Orbies it's the name of your project, right!?",
        },
      },
      {
        code: `</div>`,
        match: false,
        percent: 0,
        professorText: { title: "Close the dev tag" },
      },
      {
        code: `{user.addr ? (`,
        match: false,
        percent: 0,
        professorText: { title: "We will use a conditional to check if the user it's logged" },
      },
      {
        code: `<div className="logged">`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a div to logged user case" },
      },
      {
        code: `{flow.slice(0,6)} FLOW | {\`0x...\${user.addr.slice(14)}\`}`,
        match: false,
        percent: 0,
        professorText: { title: "Let's show the user Address inside the navbar!" },
      },
      {
        code: `<button onClick={logOut}>Logout</button>`,
        match: false,
        percent: 0,
        professorText: { title: "Logout button, when clicked we will call the logOut function create on past steps!" },
      },
      {
        code: `</div>`,
        match: false,
        percent: 0,
        professorText: { title: "Close the div!" },
      },
      {
        code: `) : (`,
        match: false,
        percent: 0,
        professorText: { title: "This was the first conditional, when the user was logged in, let's now to the coditional when user is not logged yet!" },
      },
      {
        code: `<div className="notLogged">`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a div to not logged user case" },
      },
      {
        code: `<button onClick={logIn}>LOG IN / SIGN UP</button>`,
        match: false,
        percent: 0,
        professorText: { title: "Login button, once clicked we will call the logIn function created on past steps!" },
      },
      {
        code: `</div>`,
        match: false,
        percent: 0,
        professorText: { title: "Close the div!" },
      },
      {
        code: `)}`,
        match: false,
        percent: 0,
        professorText: { title: "Close the conditional!" },
      },
      {
        code: `</nav>`,
        match: false,
        percent: 0,
        professorText: { title: "Close the nav tag!" },
      },
      {
        code: `)}`,
        match: false,
        percent: 0,
        professorText: { title: "Close the Navbar function!" },
      },
      {
        code: `export default Navbar;`,
        match: false,
        percent: 0,
        professorText: { title: "Export it, so we will be able to call on index.js!" },
      },
    ],
    completed: false,
    allCode: 
`import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { logIn, logOut, user, flow } = useAuth();

  return (
    <nav>
      <div className="logo">
        <img src="https://magic-flow-academy.s3.sa-east-1.amazonaws.com/orbies/logo.png" alt="orbiesLogo" />
        <h2>ORBIES</h2>
      </div>
      {user.addr ? (
        <div className="logged">
          <span>{flow.slice(0,6)} FLOW | {\`0x...\${user.addr.slice(14)}\`}</span>
          <button onClick={logOut}>Logout</button>
        </div>
      ) : (
        <div className="notLogged">
          <button onClick={logIn}>LOG IN / SIGN UP</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
        `,
  },
  {
    title: "Step 8",
    subtitle:
      "Create a new file named OrbiesSection.jsx",
    subtitle2:
      "Inside this component we will mint and show the orbies!",
    codeSnippet: [
      {
        code: `import { useEffect, useState } from "react";`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Import the useEffect and useState react dependencies!",
        },
      },
      {
        code: `import { useAuth } from "../contexts/AuthContext";`,
        match: false,
        percent: 0,
        professorText: "Import the useAuth hook from the contexts folder",
      },
      {
        code: `const selectedOrbies = { common: false, legendary: false, rare: false }`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Initialize a object to store the selected orbies state, all them as false, we will change the common to true soon!",
        },
      },
      {
        code: `const OrbiesSection = () => {`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize your OrbiesSection component" },
      },
      {
        code: `const { logIn, user } = useAuth();`,
        match: false,
        percent: 0,
        professorText: { title: "Let's get the logIn and user from our useAuth context!" },
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
        code: `useEffect(() => { handleSelect('common') }, [])`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "This useEffect will be called in the first page rendering! He will change the common state to true with the function that we will create in next line!",
        },
      },
      {
        code: `const handleSelect = (type) => {setSelected({ ...selectedOrbies, [type]: !selected.type })}`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "This function will be called when the user click on one of the orbies types, we will change the state of the selected orbies!",
        },
      },
      {
        code: `return (`,
        match: false,
        percent: 0,
        professorText: { title: "Let's return the component!" },
      },
      {
        code: `<div className="orbiesSection">`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a div to our orbies section!" },
      },
      {
        code: `<div className="orbiesTab">`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a div to our orbies tab!" },
      },
      {
        code: `<div className={ selected.common ? "commonTab" : "inactive"}`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a div to our common orbies tab!" },
      },
      {
        code: `onClick={() => handleSelect("common")}/>`,
        match: false,
        percent: 0,
        professorText: { title: "Once clicked we will call the handleSelect function with common has parameter!" },
      },
      {
        code: `<div className={ selected.legendary ? "legendaryTab" : "inactive"}`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a div to our legendary orbies tab!" },
      },
      {
        code: `onClick={() => handleSelect("legendary")} />`,
        match: false,
        percent: 0,
        professorText: { title: "Once clicked we will call the handleSelect function with common has parameter!" },
      },
      {
        code: `<div className={ selected.rare ? "rareTab" : "inactive"}`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a div to our rare orbies tab!" },
      },
      {
        code: `onClick={() => handleSelect("rare")} />`,
        match: false,
        percent: 0,
        professorText: { title: "Once clicked we will call the handleSelect function with common has parameter!" },
      },
      {
        code: `</div>`,
        match: false,
        percent: 0,
        professorText: { title: "Close the orbies tab div!" },
      },
      {
        code: `<div className="orbiesContent">`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a div to our orbies content!" },
      },
      {
        code: `{!user.addr ? (`,
        match: false,
        percent: 0,
        professorText: { title: "If the user is not logged in, we will show a message to him!" },
      },
      {
        code: `<div className="orbiesText"> `,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a div to our orbies text!" },
      },
      {
        code: `<h2>Welcome</h2>`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a h2 with a Welcome message!" },
      },
      {
        code: `<p>Sign up to get your Orbie NFT</p>`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a p with a Sign up message!" },
      },
      {
        code: `<button onClick={logIn} className="signUpBtn">SIGN UP</button>`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a button to sign up!" },
      },
      {
        code: `</div>`,
        match: false,
        percent: 0,
        professorText: { title: "Close the orbies text div!" },
      },
      {
        code: `) : (`,
        match: false,
        percent: 0,
        professorText: { title: "That was the component in no logged user case, when logged we will show the mint option, but this will be in the next challenges!" },
      },
      {
        code: `<div className="orbiesMintText"></div>`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a div to our orbies mint text!" },
      },
      {
        code: `)}`,
        match: false,
        percent: 0,
        professorText: { title: "Close the ternary operator!" },
      },
      {
        code: `<div className="orbieImg">`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a div to our orbie image!" },
      },
      {
        code: `{selected.common && <img src="imgLink" alt="" />}`,
        match: false,
        percent: 0,
        professorText: { title: "If the common state is true, we will show the common orbie image! Do not worry with the img src! It will be complete when you copy the code!" },
      },
      {
        code: `{selected.legendary && <img src="imgLink" alt="" />}`,
        match: false,
        percent: 0,
        professorText: { title: "If the legendary state is true, we will show the common orbie image! Do not worry with the img src! It will be complete when you copy the code!" },
      },
      {
        code: `{selected.rare && <img src="imglink" alt="" />}`,
        match: false,
        percent: 0,
        professorText: { title: "If the rare state is true, we will show the common orbie image! Do not worry with the img src! It will be complete when you copy the code!" },
      },
      {
        code: `</div>`,
        match: false,
        percent: 0,
        professorText: { title: "Close the orbie image div!" },
      },
      {
        code: `</div>`,
        match: false,
        percent: 0,
        professorText: { title: "Close the orbies content div!" },
      },
      {
        code: `<div className="divider" />`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a div to our divider!" },
      },
      {
        code: `<div className="orbies"></div>`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize a div to our orbies! We will show the user orbies here!" },
      },
      {
        code: `</div>`,
        match: false,
        percent: 0,
        professorText: { title: "Close the orbies section div!" },
      },
      {
        code: `)}`,
        match: false,
        percent: 0,
        professorText: { title: "Close the component!" },
      },
      {
        code: `export default OrbiesSection;`,
        match: false,
        percent: 0,
        professorText: { title: "Export the component!" },
      },
    ],
    completed: false,
    allCode: `
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const selectedOrbies = {
    common: false,
    legendary: false,
    rare: false
}

const OrbiesSection = () => {
    const { logIn, user } = useAuth();
    const [selected, setSelected] = useState(selectedOrbies);

    useEffect(() => {
        handleSelect('common')
    }, [])

    const handleSelect = (type) => {
        setSelected({ ...selectedOrbies, [type]: !selected.type })
    }


    return (
        <div className="orbiesSection">
            <div className="orbiesTab">
                <div className={ selected.common ? "commonTab" : "inactive"} onClick={() => handleSelect("common")}/>
                <div className={ selected.legendary ? "legendaryTab" : "inactive"} onClick={() => handleSelect("legendary")} />
                <div className={ selected.rare ? "rareTab" : "inactive"} onClick={() => handleSelect("rare")} />
          </div>
            <div className="orbiesContent">
                {!user.addr ? (
                <div className="orbiesText"> 
                    <h2>Welcome</h2>
                    <p>Sign up to get your Orbie NFT</p>
                    <button onClick={logIn} className="signUpBtn">SIGN UP</button>
                </div>
                ) : (
                <div className="orbiesMintText"></div>
                )}
                <div className="orbieImg">
                    {selected.common && <img src="https://magic-flow-academy.s3.sa-east-1.amazonaws.com/orbies/orbieCommon.png" alt="" />}
                    {selected.legendary && <img src="https://magic-flow-academy.s3.sa-east-1.amazonaws.com/orbies/orbieLegendary.png" alt="" />}
                    {selected.rare && <img src="https://magic-flow-academy.s3.sa-east-1.amazonaws.com/orbies/orbieRare.png" alt="" />}
                </div>
            </div>
            <div className="divider"></div>
            <div className="orbies"></div>
        </div>
    )
}

export default OrbiesSection;
        `,
  },
  {
    title: "Step 9",
    subtitle: "Go to your index.js file and clean it up!",
    subtitle2: "Let's initialize the Home component and import the code that we made on past steps!",
    codeSnippet: [
      {
        code: `import Navbar from "../components/Navbar";`,
        match: false,
        percent: 0,
        professorText: {
          title: "Import the Navbar component!",
        },
      },
      {
        code: `import OrbiesSection from "../components/OrbiesSection";`,
        match: false,
        percent: 0,
        professorText: { 
          title: "Import the Orbies Section component" 
        },
      },
      {
        code: `const Home = () => {`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize the Home component!" },
      },
      {
        code: `return (`,
        match: false,
        percent: 0,
        professorText: { title: "Return the component!" },
      },
      {
        code: `<div className="page">`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Initialize a div to our page! We will use this div to style our page!",
        },
      },
      {
        code: `<Navbar />`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Call the Navbar component! We will use this component to show our navbar!",
        },
      },
      {
        code: `<OrbiesSection />`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Call the Orbies Section component! We will use this component to show our orbies section!",
        },
      },
      {
        code: `</div>`,
        match: false,
        percent: 0,
        professorText: { title: "Close the page div!" },
      },
      {
        code: `)}`,
        match: false,
        percent: 0,
        professorText: { title: "Close the component!" },
      },
      {
        code: `export default Home;`,
        match: false,
        percent: 0,
        professorText: { title: "Export the component!" },
      },
    ],
    completed: false,
    allCode: `
import Navbar from "../components/Navbar";
import OrbiesSection from "../components/OrbiesSection";

const Home = () => {
  return (
    <div className="page">
      <Navbar />
      <OrbiesSection />
    </div>
  );
};

export default Home;    
        `,
  },
  {
    title: "Done",
    subtitle:
      "You got it! Your application is already authenticating the users!",
    subtitle2: "The next step is the mint page!",
    codeSnippet: [
      {
        professorText: {
          title:
            "Yooo, you made it! I have an gift for you! Click on the button bellow and mint your soulbound NFT to prove you made it!",
        },
      },
    ],
    lastStep: true,
    path: "/samplers/login",
  },
];
