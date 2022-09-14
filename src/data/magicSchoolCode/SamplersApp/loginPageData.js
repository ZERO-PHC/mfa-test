import { CssCode } from "./cssCode";

export const LoginPageDataSamplers = [
  {
    title: "Welcome",
    subtitle: "Authentication page guide",
    subtitle2:
      "In this guide you will learn how to create an authentication page using FCL",
    codeSnippet: ["dn"],
    completed: true,
  },
  {
    title: "Step 1",
    subtitle: "Create a next js app",
    subtitle2: "Install the flow fcl and types dependencies",
    footer:
      "We used in our application some styling dependencies has well, feel free to use whatever you want in your app",
    codeSnippet: [
      {
        code: "npm create next-app",
        match: false,
        percent: 0,
        professorText: {
          title: "Create a new next js app",
        },
      },
      {
        code: "npm i @onflow/fcl @onflow/types",
        match: false,
        percent: 0,
        professorText: {
          title: "Install the flow fcl and types dependencies",
        },
      },
    ],
    completed: false,
    allCode: `
            npm create next-app
            npm i @onflow/fcl @onflow/types 
        `,
  },
  {
    title: "Step 2",
    subtitle: "Add the styles inside /styles/globals.css",
    codeSnippet: [
      {
        professorText: {
          title:
            "Our focus it's not CSS, but if you want learn more about it you can check the link below: https://www.w3schools.com/css/default.asp",
        },
      },
    ],
    completed: true,
    allCode: `${CssCode.Globals}`,
  },
  {
    title: "Step 3",
    subtitle: "Create a new Folder /flow",
    subtitle2: "Inside of it create a file config.js",
    codeSnippet: [
      {
        code: `const fcl = require("@onflow/fcl");`,
        match: false,
        percent: 0,
        professorText: {
          title: "Create a new Folder /flow",
        },
      },
      {
        code: "fcl.config({",
        match: false,
        percent: 0,
        professorText: { title: "Call the config method of fcl" },
      },
      {
        code: `"app.detail.title": "App name",`,
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
        code: `"0xDeployer": "0x4ba0ed5a326eef6b",`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Set the deployer address here and we will use just 0xDeployer in our scripts and transactions",
        },
      },
      {
        code: `"0xCORE": "0x4ba0ed5a326eef6b"`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Set the core address here and we will use just 0xCORE in our scripts and transactions",
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
            "0xDeployer": "0x4ba0ed5a326eef6b",
            "0xCORE": "0x4ba0ed5a326eef6b"
            })
        `,
  },
  {
    title: "Step 4",
    subtitle: "Create a new folder contexts",
    subtitle2: "Inside of it create a file /AuthContext.js",
    content:
      "In our application we use contexts from React to interact with the blockchain through FCL",
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
        professorText: { title: "Create a new hook called useAuth" },
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
        code: `useEffect(() => fcl.currentUser.subscribe(setUser), []);`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Subscribe to the currentUser event of fcl and set the user state",
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
        code: `const value = { logOut, logIn, signUp, user };`,
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
        
            useEffect(() => fcl.currentUser.subscribe(setUser), []);
        
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
        
            const value = {
                logOut,
                logIn,
                signUp,
                user,
                };
        
            return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
        }
        `,
  },
  {
    title: "Step 5",
    subtitle: "Inside pages/_app.js add the AuthProvider",
    codeSnippet: [
      {
        code: `import "../../styles/globals.css";`,
        match: false,
        percent: 0,
        professorText: {
          title: "Step 5! Almost there! Import the globals css file",
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
    allCode: `
        import "../../styles/globals.css";
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
    title: "Step 6",
    subtitle:
      "Inside your component/page that you will add the buttons to login and logout",
    subtitle2:
      "Now we just need to import the Auth Context to our page or component and use the functions we created earlier",
    codeSnippet: [
      {
        code: `import { useAuth } from "../contexts/AuthContext";`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Step 6! Almost there! Import the useAuth hook from the contexts folder",
        },
      },
      {
        code: `const Component = () => {`,
        match: false,
        percent: 0,
        professorText: "Create a new function called Component",
      },
      {
        code: `const { logIn, logOut, user } = useAuth();`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Lets get the logIn, logOut and user functions from the useAuth hook",
        },
      },
      {
        code: `return (`,
        match: false,
        percent: 0,
        professorText: { title: "Create a new return statement" },
      },
      {
        code: `<>`,
        match: false,
        percent: 0,
        professorText: { title: "Create a new empty tag" },
      },
      {
        code: `<button onClick={logIn}>Login</button>`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Create a new button with the logIn function, onClick we want to call the function logIn created earlier",
        },
      },
      {
        code: `<button onClick={logOut}>Logout</button>`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Create a new button with the logOut function, onClick we want to call the function logOut created earlier",
        },
      },
      {
        code: `<p>User Address - {user.addr}</p>`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Create a new paragraph with the user address, when logged in we want to display the user address",
        },
      },
      {
        code: `</>`,
        match: false,
        percent: 0,
        professorText: { title: "Close the empty tag" },
      },
      {
        code: `)}`,
        match: false,
        percent: 0,
        professorText: { title: "Close the Component function" },
      },
      {
        code: `export default Component;`,
        match: false,
        percent: 0,
        professorText: { title: "Export the Component function" },
      },
    ],
    completed: false,
    allCode: `
        import { useAuth } from "../contexts/AuthContext";

        const Component = () => {
            const { logIn, logOut, user } = useAuth();

            return (
                <>
                    <button onClick={logIn}>Login</button>
                    <button onClick={logOut}>Logout</button>
                    <p>User Address - {user.addr}</p>
                </>
            )
        }

        export default Component;
        `,
  },
  {
    title: "Done",
    subtitle:
      "You got it! Your application is already authenticating the users!",
    subtitle2: "The next step is to login!",
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
