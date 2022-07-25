export const LoginPageData = [
    {
        "title": "Welcome",
        "subtitle": "Authentication page guide",
        "subtitle2": "In this guide you will learn how to create an authentication page using FCL",
        "codeSnippet": [""],
        "completed": true
    },
    {
        "title": "Step 1",
        "subtitle": "Create a next js app",
        "subtitle2": "Install the flow fcl and types dependencies",
        "footer": "We used in our application some styling dependencies has well, feel free to use whatever you want in your app",
        "codeSnippet": [
            {
                "code": "npm create next-app",
                "match": false,
                "percent": 0
            },
            {
                "code": "npm i @onflow/fcl @onflow/types ",
                "match": false,
                "percent": 0
            }
        ],
        "completed": false
    },
    {
        "title": "Step 2",
        "subtitle": "Add the styles inside /styles/globals.css",
        "codeSnippet": [""],
        "completed": false
    },
    {
        "title": "Step 3",
        "subtitle": "Create a new Folder /flow",
        "subtitle2": "Inside of it create a file config.js",
        "codeSnippet": [
            {
                "code": `const fcl = require("@onflow/fcl");`,
                "match": false,
                "percent": 0
            },
            {
                "code": "fcl.config({",
                "match": false,
                "percent": 0
            },
            {
                "code": `"app.detail.title": "App name",`,
                "match": false,
                "percent": 0
            },
            {
                "code": `"app.detail.icon": "imagelink",`,
                "match": false,
                "percent": 0
            },
            {
                "code": `"accessNode.api": "https://rest-testnet.onflow.org",`,
                "match": false,
                "percent": 0
            },
            {
                "code": `"discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",`,
                "match": false,
                "percent": 0
            },
            {
                "code": `"0xDeployer": "0x4ba0ed5a326eef6b",`,
                "match": false,
                "percent": 0
            },
            {
                "code": `"0xCORE": "0x4ba0ed5a326eef6b"`,
                "match": false,
                "percent": 0
            },
            {
                "code": `})`,
                "match": false,
                "percent": 0
            },
        ],
        "completed": false
    },
    {
        "title": "Step 4",
        "subtitle": "Create a new folder contexts",
        "subtitle2": "Inside of it create a file /AuthContext.js",
        "content": "In our application we use contexts from React to interact with the blockchain through FCL",
        "codeSnippet": [
            {
                "code": `import * as fcl from "@onflow/fcl";`,
                "match": false,
                "percent": 0
            },
            {
                "code": `import { createContext, useContext, useEffect, useState } from "react";`,
                "match": false,
                "percent": 0
            },
            {
                "code": `import "../flow/config";`,
                "match": false,
                "percent": 0
            },
            {
                "code": `export const AuthContext = createContext({});`,
                "match": false,
                "percent": 0
            },
            {
                "code": `export const useAuth = () => useContext(AuthContext);`,
                "match": false,
                "percent": 0
            },
            {
                "code": `export default function AuthProvider({ children }) {`,
                "match": false,
                "percent": 0
            },
            {
                "code": `const [user, setUser] = useState({ loggedIn: false, addr: undefined });`,
                "match": false,
                "percent": 0
            },
            {
                "code": `useEffect(() => fcl.currentUser.subscribe(setUser), []);`,
                "match": false,
                "percent": 0
            },
            {
                "code": `const logOut = async () => {`,
                "match": false,
                "percent": 0
            },
            {
                "code": `await fcl.unauthenticate();`,
                "match": false,
                "percent": 0
            },
            {
                "code": `setUser({ addr: undefined, loggedIn: false });`,
                "match": false,
                "percent": 0
            },
            {
                "code": `};`,
                "match": false,
                "percent": 0
            },
            {
                "code": `const logIn = async () => {`,
                "match": false,
                "percent": 0
            },
            {
                "code": `const res = await fcl.authenticate();`,
                "match": false,
                "percent": 0
            },
            {
                "code": `};`,
                "match": false,
                "percent": 0
            },
            {
                "code": `const signUp = () => {`,
                "match": false,
                "percent": 0
            },
            {
                "code": `fcl.signUp();`,
                "match": false,
                "percent": 0
            },
            {
                "code": `};`,
                "match": false,
                "percent": 0
            },
            {
                "code": `const value = { logOut, logIn, signUp, user };`,
                "match": false,
                "percent": 0
            },
            {
                "code": `return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;`,
                "match": false,
                "percent": 0
            },
        ],
        "completed": false
    },
    {
        "title": "Step 5",
        "subtitle": "Inside pages/_app.js add the AuthProvider",
        "codeSnippet": [
            {
                "code": `import "../../styles/globals.css";`,
                "match": false,
                "percent": 0
            },
            {
                "code": `import AuthProvider from "../contexts/AuthContext"`,
                "match": false,
                "percent": 0
            },
            {
                "code": `function MyApp({ Component, pageProps }) {`,
                "match": false,
                "percent": 0
            },
            {
                "code": `return (`,
                "match": false,
                "percent": 0
            },
            {
                "code": `<AuthProvider>`,
                "match": false,
                "percent": 0
            },
            {
                "code": `<Component {...pageProps} />`,
                "match": false,
                "percent": 0
            },
            {
                "code": ``,
                "match": false,
                "percent": 0
            },
            {
                "code": `</AuthProvider>`,
                "match": false,
                "percent": 0
            },
            {
                "code": `)}`,
                "match": false,
                "percent": 0
            },
            {
                "code": `export default MyApp;`,
                "match": false,
                "percent": 0
            },
        ],
        "completed": false
    },
    {
        "title": "Step 6",
        "subtitle": "Inside your component/page that you will add the buttons to login and logout",
        "subtitle2": "Now we just need to import the Auth Context to our page or component and use the functions we created earlier",
        "codeSnippet": [
            {
                "code": `import { useAuth } from "../contexts/AuthContext";`,
                "match": false,
                "percent": 0
            },
            {
                "code": `const Component = () => {`,
                "match": false,
                "percent": 0
            },
            {
                "code": `const { logIn, logOut, user } = useAuth();`,
                "match": false,
                "percent": 0
            },
            {
                "code": `return (`,
                "match": false,
                "percent": 0
            },
            {
                "code": `<>`,
                "match": false,
                "percent": 0
            },
            {
                "code": `<button onClick={logIn}>Login</button>`,
                "match": false,
                "percent": 0
            },
            {
                "code": `<button onClick={logOut}>Logout</button>`,
                "match": false,
                "percent": 0
            },
            {
                "code": `<p>User Address - {user.addr}</p>`,
                "match": false,
                "percent": 0
            },
            {
                "code": `</>`,
                "match": false,
                "percent": 0
            },
            {
                "code": `)}`,
                "match": false,
                "percent": 0
            },
            {
                "code": `export default Component;`,
                "match": false,
                "percent": 0
            },
        ],
        "completed": false
    },
    {
        "title": "Done",
        "subtitle": "You got it! Your application is already authenticating the users!",
        "subtitle2": "The next step is to login!",
        "codeSnippet": [""],
        "lastStep": true
    }
]