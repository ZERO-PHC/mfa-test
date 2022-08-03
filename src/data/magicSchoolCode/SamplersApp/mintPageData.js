//import { CssCode } from "../src/codeSnippets/CssCode"

export const MintPageDataSamplers = [
  {
    title: "Welcome",
    subtitle: "Mint NFT guide",
    subtitle2:
      "At the end of this guide your application will be able to mint nfts and fetch and display the nfts that the address has",
    codeSnippet: [
      {
        professorText: { title: "Let's build the ming page of your Dapp!" },
      },
    ],
    completed: true,
  },
  {
    title: "Step 1",
    subtitle:
      "Create a new Context to call transactions and scripts to the Flow Blockchain",
    subtitle2: "Create a new folder inside /contexts/NftsContext.js",
    content: "Inside of it import FCL and the useAuth from /AuthContext.js",
    codeSnippet: [
      {
        code: `import React, { useState, useContext, useEffect } from "react"`,
        match: false,
        percent: 0,
        professorText: { title: "Import the react dependencies!" },
      },
      {
        code: `import * as fcl from "@onflow/fcl";`,
        match: false,
        percent: 0,
        professorText: { 
          title: "Import the fcl to your NFT context!" },
      },
      {
        code: `import { useAuth } from "./AuthContext";`,
        match: false,
        percent: 0,
        professorText: { title: "Import the hook useAuth that we create on the past step" },
      },
      {
        code: `export const NftsContext = React.createContext("");`,
        match: false,
        percent: 0,
        professorText: { title: "We will export this context to our application!" },
      },
      {
        code: `export const useNFTs = () => useContext(NftsContext);`,
        match: false,
        percent: 0,
        professorText: { title: "Export the hook useNFTs that we will use to get the data and function from this context!" },
      },
      {
        code: `export const NftsProvider = ({ children }) => {`,
        match: false,
        percent: 0,
        professorText: { title: "Create your NftsProvider!" },
      },
      {
        code: `const value = {};`,
        match: false,
        percent: 0,
        professorText: { title: "Here we will store our functions and data! Leave it empty for now!" },
      },
      {
        code: `return (`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize the return!" },
      },
      {
        code: `<NftsContext.Provider value={value}> {children} </NftsContext.Provider>`,
        match: false,
        percent: 0,
        professorText: { title: "Inside our return we will share our NftsContext.Provider with the value declared before and the children!" },
      },
    ],
    completed: false,
    allCode: `
        import React, { useState, useContext, useEffect } from "react";
        import * as fcl from "@onflow/fcl";
        
        import { useAuth } from "./AuthContext";
        
        export const NftsContext = React.createContext("");
        export const useNFTs = () => useContext(NftsContext);
        
        export const NftsProvider = ({ children }) => {
        
        //Here we will add the functions that will:
        
        //GET THE NFTs from the Wallet
        //MINT new NFTs
        
        const value = {};
        
          return (
            <NftsContext.Provider value={value}> {children} </NftsContext.Provider>
          );
        }
        `,
  },
  {
    title: "Step 2",
    subtitle: "Now we will import and use this new context in our application",
    subtitle2: "Inside of /pages/_app.js import the new NftsContext",
    codeSnippet: [
      {
        code: `import "../styles/globals.css";`,
        match: false,
        percent: 0,
        professorText: { title: "Import the css from globals!" },
      },
      {
        code: `import AuthProvider from "../contexts/AuthContext"`,
        match: false,
        percent: 0,
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
        match: false,
        percent: 0,
        professorText: { title: "Create your MyApp function!" },
      },
      {
        code: `return (`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize the return!" },
      },
      {
        code: `<AuthProvider>`,
        match: false,
        percent: 0,
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
        match: false,
        percent: 0,
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
        match: false,
        percent: 0,
        professorText: { title: "Inside our return we will share the AuthProvider with the children!" },
      },
      {
        code: `)}`,
        match: false,
        percent: 0,
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
    title: "Step 3",
    subtitle: "Get back to you NftsContext.js file",
    subtitle2:
      "Inside of it we will create some states to handle with the NFTs",
    codeSnippet: [
      {
        code: `import React, { useState, useContext, useEffect } from "react";`,
        match: false,
        percent: 0,
        professorText: { title: "Import the React library!" },
      },
      {
        code: `import * as fcl from "@onflow/fcl";`,
        match: false,
        percent: 0,
        professorText: { title: "Import the fcl library!" },
      },
      {
        code: `import { useAuth } from "./AuthContext";`,
        match: false,
        percent: 0,
        professorText: { title: "Import the useAuth hook from the AuthContext!" },
      },
      {
        code: `export const NftsContext = React.createContext("");`,
        match: false,
        percent: 0,
        professorText: { title: "Create your NftsContext!" },
      },
      {
        code: `export const useNFTs = () => useContext(NftsContext);`,
        match: false,
        percent: 0,
        professorText: { title: "Create your useNFTs hook!" },
      },
      {
        code: `export const NftsProvider = ({ children }) => {`,
        match: false,
        percent: 0,
        professorText: { title: "Create your NftsProvider!" },
      },
      {
        code: `const [Samplers, setSamplers] = useState([]);`,
        match: false,
        percent: 0,
        professorText: { title: "Create your Samplers state!" },
      },
      {
        code: `const [SelectedRarity, setSelectedRarity] = useState("common");`,
        match: false,
        percent: 0,
        professorText: { title: "Create your SelectedRarity state!" },
      },
      {
        code: `const [IsLoading, setIsLoading] = useState(false);`,
        match: false,
        percent: 0,
        professorText: { title: "Create your IsLoading state!" },
      },
      {
        code: `const value = {};`,
        match: false,
        percent: 0,
        professorText: { title: "Create your value object!" },
      },
      {
        code: `return (`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize the return!" },
      },
      {
        code: `<NftsContext.Provider value={value}> {children} </NftsContext.Provider>`,
        match: false,
        percent: 0,
        professorText: { title: "Inside of the return we will share the NftsContext with the children!" },
      },
      {
        code: `)};`,
        match: false,
        percent: 0,
        professorText: { title: "Inside of the return we will share the NftsProvider with the children!" },
      },
    ],
    completed: false,
    allCode: `
        import React, { useState, useContext, useEffect } from "react";
        import * as fcl from "@onflow/fcl";

        import { useAuth } from "./AuthContext";

        export const NftsContext = React.createContext("");
        export const useNFTs = () => useContext(NftsContext);

        export const NftsProvider = ({ children }) => {

        const [Samplers, setSamplers] = useState([]);
        const [SelectedRarity, setSelectedRarity] = useState("common");
        const [IsLoading, setIsLoading] = useState(false);

        //Here we will add the functions that will:

        //GET THE NFTs from the Wallet
        //MINT new NFTs

        const value = {};

        return (
            <NftsContext.Provider value={value}> {children} </NftsContext.Provider>
        );
        }
        `,
  },
  {
    title: "Step 4",
    subtitle: "Create a folder with your scripts",
    subtitle2: "Inside your flow folder create /flow/cadence/scripts",
    content: "Inside of it create a file get_samplers.js",
    codeSnippet: [
      {
        code: `import Samplers from 0xDeployer`,
        match: false,
        percent: 0,
        professorText: { title: "Import the Samplers from the 0xDeployer library!" },
      },
      {
        code: `import MetadataViews from 0xDeployer`,
        match: false,
        percent: 0,
        professorText: { title: "Import the MetadataViews from the 0xDeployer library!" },
      },
      {
        code: `pub fun main(address: Address): [Samplers.NFTMetaData] {`,
        match: false,
        percent: 0,
        professorText: { title: "This it's a script! Create your main function!" },
      },
      {
        code: `let collection = getAccount(address).getCapability(Samplers.CollectionPublicPath)`,
        match: false,
        percent: 0,
        professorText: { title: "Inside of the main function we will get the Samplers collection stored inside the user public storage!" },
      },
      {
        code: `.borrow<&Samplers.Collection{MetadataViews.ResolverCollection}>()`,
        match: false,
        percent: 0,
        professorText: { title: "With the Public Collection path let's borrow it!" },
      },
      {
        code: `?? panic("Could not borrow a reference to the nft collection")`,
        match: false,
        percent: 0,
        professorText: { title: "If we couldn't borrow the collection we will panic!" },
      },
      {
        code: `let ids = collection.getIDs()`,
        match: false,
        percent: 0,
        professorText: { title: "Let's get the Samplers NFTs Ids that are inside user colletion!" },
      },
      {
        code: `let answer: [Samplers.NFTMetaData] = []`,
        match: false,
        percent: 0,
        professorText: { title: "Let's create an empty array to store the NFTs meta data!" },
      },
      {
        code: `for id in ids {`,
        match: false,
        percent: 0,
        professorText: { title: "For each id in the ids array we will get the NFT meta data!" },
      },
      {
        code: `let nft = collection.borrowViewResolver(id: id)`,
        match: false,
        percent: 0,
        professorText: { title: "With the id let's borrow the NFT meta data!" },
      },
      {
        code: `let view = nft.resolveView(Type<Samplers.NFTMetaData>())!`,
        match: false,
        percent: 0,
        professorText: { title: "With the NFT meta data let's resolve the view!" },
      },
      {
        code: `let display = view as! Samplers.NFTMetaData`,
        match: false,
        percent: 0,
        professorText: { title: "With the view let's cast it to the NFT meta data!" },
      },
      {
        code: `answer.append(display)`,
        match: false,
        percent: 0,
        professorText: { title: "With the NFT meta data(display) let's append it to the answer array!" },
      },
      {
        code: `}`,
        match: false,
        percent: 0,
        professorText: { title: "Close the for loop" },
      },
      {
        code: `return answer`,
        match: false,
        percent: 0,
        professorText: { title: "With the answer array let's return it!" },
      },
      {
        code: `}`,
        match: false,
        percent: 0,
        professorText: { title: "Close your main function!" },
      },
      
    ],
    completed: false,
    allCode: `
        import Samplers from 0xDeployer
        import MetadataViews from 0xDeployer

        pub fun main(address: Address): [Samplers.NFTMetaData] {
            let collection = getAccount(address).getCapability(Samplers.CollectionPublicPath)
                            .borrow<&Samplers.Collection{MetadataViews.ResolverCollection}>()
                            ?? panic("Could not borrow a reference to the nft collection")

            let ids = collection.getIDs()

            let answer: [Samplers.NFTMetaData] = []

            for id in ids {
            
            let nft = collection.borrowViewResolver(id: id)
            let view = nft.resolveView(Type<Samplers.NFTMetaData>())!

            let display = view as! Samplers.NFTMetaData
            answer.append(display)
            }
            
            return answer
        }
        `,
  },
  {
    title: "Step 5",
    subtitle: "Create a folder with your transactions",
    subtitle2: "Inside your flow folder create /flow/cadence/transactions",
    content: "Inside of it create a file mint_sampler.js",
    codeSnippet: [
      {
        code: `import Samplers from 0xDeployer`,
        match: false,
        percent: 0,
        professorText: { title: "Le'ts create our transaction! Import the Samplers from the 0xDeployer library!" },
      },
      {
        code: `import NonFungibleToken from 0x631e88ae7f1d7c20`,
        match: false,
        percent: 0,
        professorText: { title: "Import the NonFungibleToken from the 0x631e88ae7f1d7c20! This one it's the testnet address that stores the NonFungibleToken Standart! On mainnet you should use the address 0x1d7e57aa55817448!" },
      },
      {
        code: `import MetadataViews from 0x631e88ae7f1d7c20`,
        match: false,
        percent: 0,
        professorText: { title: "Import the MetadataViews Standart from the 0x631e88ae7f1d7c20! This one it's the testnet address that stores the NonFungibleToken Standart! On mainnet you should use the address 0x1d7e57aa55817448!" },
      },
      {
        code: `transaction(name: String, description: String, thumbnail: String, type: String) {`,
        match: false,
        percent: 0,
        professorText: { title: "Create your transaction! Let's get as arguments the name, description, thumbnail and type!" },
      },
      {
        code: `let RecipientCollection: &Samplers.Collection{NonFungibleToken.CollectionPublic}`,
        match: false,
        percent: 0,
        professorText: { title: "Let's create a variable to store the Samplers Collection Public Reference!" },
      },
      {
        code: `prepare(signer: AuthAccount) {`,
        match: false,
        percent: 0,
        professorText: { 
          title: "Initialize the prepare transaction phase. There we will receive the AuthAccount as argument! Learn more about it here:",
          links: [{
            title: "Transaction Prepare Phase",
            link: "https://docs.onflow.org/cadence/language/transactions/#prepare-phase"
          }]
        },
      },
      {
        code: `if signer.borrow<&Samplers.Collection>(from: Samplers.CollectionStoragePath) == nil {`,
        match: false,
        percent: 0,
        professorText: { title: "If we couldn't borrow the Samplers Collection Reference from the user account it does not exists yet, let's create!" },
      },
      {
        code: `signer.save(<- Samplers.createEmptyCollection(), to: Samplers.CollectionStoragePath)`,
        match: false,
        percent: 0,
        professorText: { title: "With the signer let's create and save the empty Samplers Collection Reference to the user account!" },
      },
      {
        code: `signer.link<&Samplers.Collection{NonFungibleToken.CollectionPublic, MetadataViews.ResolverCollection}>(Samplers.CollectionPublicPath, target: Samplers.CollectionStoragePath)`,
        match: false,
        percent: 0,
        professorText: { title: "With the signer let's link the Samplers Collection Public Reference to the public storage inside user account!" },
      },
      {
        code: `}`,
        match: false,
        percent: 0,
        professorText: { title: "Close the if statement!" },
      },
      {
        code: `self.RecipientCollection = signer.getCapability(Samplers.CollectionPublicPath)`,
        match: false,
        percent: 0,
        professorText: { 
          title: "With the signer let's get the Samplers Collection Public Capability from the user account! Learn more about Capabilities here:",
          links: [{
            title: "Capability Docs",
            link: "https://docs.onflow.org/cadence/tutorial/04-capabilities/#gatsby-focus-wrapper"
          }]
        },
      },
      {
        code: `.borrow<&Samplers.Collection{NonFungibleToken.CollectionPublic}>()!`,
        match: false,
        percent: 0,
        professorText: { title: "With the  Samplers Collection Public Capability let's borrow the NonFungibleToken.CollectionPublic Reference!" },
      },
      {
        code: `}`,
        match: false,
        percent: 0,
        professorText: { title: "Close the prepare transaction phase!" },
      },
      {
        code: `execute {`,
        match: false,
        percent: 0,
        professorText: { title: "Initialize the execute transaction phase! Learn more about the execute phase here:",
          links: [{
            title: "Transaction Execute Phase",
            link: "https://docs.onflow.org/cadence/language/transactions/#execute-phase"
          }]
           },
      },
      {
        code: `Samplers.mintNFT(recipient: self.RecipientCollection, name: name, description: description, thumbnail: thumbnail, type: type)`,
        match: false,
        percent: 0,
        professorText: { title: "Call the mintNFT function! Let's pass the arguments recipient, name, description, thumbnail and type!" },
      },
      {
        code: `}}`,
        match: false,
        percent: 0,
        professorText: { title: "Close the execute transaction phase and the transaction!" },
      },
    ],
    completed: false,
    allCode: `
        import Samplers from 0xDeployer
        import NonFungibleToken from 0xDeployer
        import MetadataViews from 0xDeployer
        
        transaction(name: String, description: String, thumbnail: String, type: String) {
            let RecipientCollection: &Samplers.Collection{NonFungibleToken.CollectionPublic}
        
            prepare(signer: AuthAccount) {
        
            //SETUP EXAMPLE NFT COLLECTION
            if signer.borrow<&Samplers.Collection>(from: Samplers.CollectionStoragePath) == nil {
                signer.save(<- Samplers.createEmptyCollection(), to: Samplers.CollectionStoragePath)
                signer.link<&Samplers.Collection{NonFungibleToken.CollectionPublic, MetadataViews.ResolverCollection}>(Samplers.CollectionPublicPath, target: Samplers.CollectionStoragePath)
            }
        
            self.RecipientCollection = signer.getCapability(Samplers.CollectionPublicPath)
                                        .borrow<&Samplers.Collection{NonFungibleToken.CollectionPublic}>()!
            }
        
            execute {
                Samplers.mintNFT(recipient: self.RecipientCollection, name: name, description: description, thumbnail: thumbnail, type: type)
            }
            }
        `,
  },
  {
    title: "Step 6",
    subtitle:
      "Now we can add the functions that will get the NFTs and mint the NFTs",
    subtitle2:
      "Import the script and transactions (created in the “todo → cadenceApp”)",
    content: "We will export them inside our values object",
    codeSnippet: [
      {
        code: `import React, { useState, useContext, useEffect } from "react";`,
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
        code: `import { getSamplersScript } from "../flow/cadence/scripts/get_samplers";`,
        match: false,
        percent: 0,
        professorText: { title: "Import the getSamplersScript function!" },
      },
      {
        code: `import { MINT_SAMPLER } from "../flow/cadence/transactions/mint_sampler";`,
        match: false,
        percent: 0,
        professorText: { title: "Import the MINT_SAMPLER transaction!" },
      },
      {
        code: `import { useAuth } from "./AuthContext";`,
        match: false,
        percent: 0,
        professorText: { title: "Import the useAuth hook!" },
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
        code: `const [Samplers, setSamplers] = useState([]);`,
        match: false,
        percent: 0,
        professorText: { title: "Create a state variable for the Samplers and set it to an empty array!" },
      },
      {
        code: `const [SelectedRarity, setSelectedRarity] = useState("common");`,
        match: false,
        percent: 0,
        professorText: { title: "Create a state variable for the SelectedRarity and set it to 'common'!" },
      },
      {
        code: `const [IsLoading, setIsLoading] = useState(false);`,
        match: false,
        percent: 0,
        professorText: { title: "Create a state variable for the IsLoading and set it to false!" },
      },
      {
        code: `const getSamplers = async (addr) => {   `,
        match: false,
        percent: 0,
        professorText: { title: "Create a function called getSamplers that takes an address as an argument!" },
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
        code: `cadence: getSamplersScript,`,
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
        code: `const mintSampler = async (name, description, thumbnail, type, addr) => {`,
        match: false,
        percent: 0,
        professorText: { title: "Create a function called mintSampler that takes a name, description, thumbnail, type and address as arguments!" },
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
        code: `cadence: MINT_SAMPLER,`,
        match: false,
        percent: 0,
        professorText: { title: "Pass the transaction through the MINT_SAMPLER to the mutate!" },
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
        code: `],limit: 999,`,
        match: false,
        percent: 0,
        professorText: { title: "Pass the execution effort limit to the transaction! Learn more about it here:",
        links: [{
          text: "Execution Effort Docs",
          url: "https://docs.onflow.org/concepts/variable-transaction-fees/#configuring-execution-limits",
        }]
      },
      },
      {
        code: `});`,
        match: false,
        percent: 0,
        professorText: { title: "Close the mutate!" },
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
        code: `getSamplers(addr)`,
        match: false,
        percent: 0,
        professorText: { title: "Call the getSamplers function!" },
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
        code: `Samplers, SelectedRarity, setSelectedRarity, getSamplers, mintSampler, IsLoading`,
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
    allCode: `
        import React, { useState, useContext, useEffect } from "react";
        import * as fcl from "@onflow/fcl";
        
        // ----------- SCRIPTS  -----------
        import { getSamplersScript } from "../flow/cadence/scripts/get_samplers";
        import { MINT_SAMPLER } from "../flow/cadence/transactions/mint_sampler";
        import { useAuth } from "./AuthContext";
        
        export const NftsContext = React.createContext("");
        export const useNFTs = () => useContext(NftsContext);
        
        export default function NftsProvider({ children }){
            
            const [Samplers, setSamplers] = useState([]);
            const [SelectedRarity, setSelectedRarity] = useState("common");
            const [IsLoading, setIsLoading] = useState(false);
        
            const getSamplers = async (addr) => {   
            try {
                const res = await fcl.query({
                cadence: getSamplersScript,
                args: (arg, t) => [arg(addr, t.Address)],
                });
        
            } catch (error) {
                console.log("err:", error);
            }
            }
        
            const mintSampler = async (name, description, thumbnail, type, addr) => {
            console.log("minting sampler");
            setIsLoading(true);
        
            try {
                const txid = await fcl.mutate({
                cadence: MINT_SAMPLER,
                args: (arg, t) => [
                    arg(name, t.String),
                    arg(description, t.String),
                    arg(thumbnail, t.String),
                    arg(type, t.String),
                ],
                limit: 999,
                });
        
                fcl.tx(txid).subscribe((res) => {
                if (res.status === 4) {
                    setIsLoading(false);
                getSamplers(addr)
                }
                });
        
                console.log("txid", txid);
            } catch (error) {
                console.log("err", error);
            }
            };
        
            const value = {
            Samplers,
            SelectedRarity,
            setSelectedRarity,
            getSamplers,
            mintSampler,
            IsLoading
            };
        
            return (
            <NftsContext.Provider value={value}> {children} </NftsContext.Provider>
            );
        };
        `,
  },
  {
    title: "Step 6",
    subtitle:
      "Inside your page/component where you will mint and show the nfts that the address has:",
    subtitle2: "Import the NftsContext ",
    codeSnippet: [
      {
        code: `import React, { useEffect } from "react";`,
        match: false,
        percent: 0,
        professorText: { title: "Import React!" },
      },
      {
        code: `import { useAuth } from "../contexts/AuthContext";`,
        match: false,
        percent: 0,
        professorText: { title: "Import the AuthContext!" },
      },
      {
        code: `import { useNFTs } from "../contexts/NftsContext";`,
        match: false,
        percent: 0,
        professorText: { title: "Import the useNFTs hooks!" },
      },
      {
        code: `export default function Home() {`,
        match: false,
        percent: 0,
        professorText: { title: "Export the Home component!" },
      },
      {
        code: `const { logIn, logOut, user } = useAuth();`,
        match: false,
        percent: 0,
        professorText: { title: "Get the logIn, logOut and user from useAuth hook" },
      },
      {
        code: `const { getSamplers, SelectedRarity, Samplers, mintSampler } = useNFTs();`,
        match: false,
        percent: 0,
        professorText: { title: "Get the getSamplers, SelectedRarity, Samplers, and mintSampler from useNFTs hook" },
      },
      {
        code: `useEffect(() => {`,
        match: false,
        percent: 0,
        professorText: { title: "Create a useEffect hook!" },
      },
      {
        code: `if (user) getSamplers(user?.addr);`,
        match: false,
        percent: 0,
        professorText: { title: "If we have the user information, call the getSamplers function give the user address as argument!" },
      },
      {
        code: `}, [user]);`,
        match: false,
        percent: 0,
        professorText: { title: "Close the useEffect hook!" },
      },
      {
        code: `const handleMint = async () => {`,
        match: false,
        percent: 0,
        professorText: { title: "Create a handleMint function!" },
      },
      {
        code: `mintSampler("nft", "lvl 1 nft", "t1", SelectedRarity, user?.addr);`,
        match: false,
        percent: 0,
        professorText: { title: "Call the mintSampler function, as arguments we will use basic data just to exemplify!" },
      },
      {
        code: `};`,
        match: false,
        percent: 0,
        professorText: { title: "Close the handleMint function!" },
      },
      {
        code: `const formattedSamplers = Object.values(Samplers)`,
        match: false,
        percent: 0,
        professorText: { title: "Create a formattedSamplers variable and set it to the Samplers object as an array!" },
      },
      {
        code: `return (`,
        match: false,
        percent: 0,
        professorText: { title: "Create a return statement!" },
      },
      {
        code: `<>`,
        match: false,
        percent: 0,
        professorText: { title: "Create a <> tag!" },
      },
      {
        code: `<div>`,
        match: false,
        percent: 0,
        professorText: { title: "Create a <div> tag!" },
      },
      {
        code: `<button onClick={logIn}>Login</button>`,
        match: false,
        percent: 0,
        professorText: { title: "Create a <button> tag with the logIn function as onClick!" },
      },
      {
        code: `<button onClick={logOut}>Logout</button>`,
        match: false,
        percent: 0,
        professorText: { title: "Create a <button> tag with the logOut function as onClick!" },
      },
      {
        code: `<p>User Address - {user.addr}</p>`,
        match: false,
        percent: 0,
        professorText: { title: "Create a <p> tag with the user address!" },
      },
      {
        code: `</div>`,
        match: false,
        percent: 0,
        professorText: { title: "Close the <div> tag!" },
      },
      {
        code: `<div>`,
        match: false,
        percent: 0,
        professorText: { title: "Create another <div> tag!" },
      },
      {
        code: `<button onClick={() => handleMint()}>`,
        match: false,
        percent: 0,
        professorText: { title: "Create a <button> tag with the handleMint function as onClick!" },
      },
      {
        code: `MINT`,
        match: false,
        percent: 0,
        professorText: { title: "Create a <button> tag with the MINT text!" },
      },
      {
        code: `</button>`,
        match: false,
        percent: 0,
        professorText: { title: "Close the <button> tag!" },
      },
      {
        code: `<div>`,
        match: false,
        percent: 0,
        professorText: { title: "Create another <div> tag!" },
      },
      {
        code: `{ formattedSamplers.map((sampler, i) => (`,
        match: false,
        percent: 0,
        professorText: { title: "Create a map function to iterate over the Samplers array!" },
      },
      {
        code: `<div key={i}>`,
        match: false,
        percent: 0,
        professorText: { title: "Create a <div> tag with the sampler index as key!" },
      },
      {
        code: `<h1>{sampler.id}</h1>`,
        match: false,
        percent: 0,
        professorText: { title: "Create a <h1> tag with the sampler id!" },
      },
      {
        code: `<h2>{sampler.name}</h2>`,
        match: false,
        percent: 0,
        professorText: { title: "Create a <h2> tag with the sampler name!" },
      },
      {
        code: `<h3>{sampler.type}</h3>`,
        match: false,
        percent: 0,
        professorText: { title: "Create a <h3> tag with the sampler type!" },
      },
      {
        code: `</div>`,
        match: false,
        percent: 0,
        professorText: { title: "Close the <div> tag!" },
      },
      {
        code: `))}`,
        match: false,
        percent: 0,
        professorText: { title: "Close the map function!" },
      },
      {
        code: `</div>`,
        match: false,
        percent: 0,
        professorText: { title: "Close the <div> tag!" },
      },
      {
        code: `</div>`,
        match: false,
        percent: 0,
        professorText: { title: "Close the <div> tag!" },
      },
      {
        code: `</>`,
        match: false,
        percent: 0,
        professorText: { title: "Close the <> tag!" },
      },
      {
        code: `)}`,
        match: false,
        percent: 0,
        professorText: { title: "Close the return statement!" },
      },
    ],
    completed: false,
    allCode: `
        import React, { useEffect } from "react";
        import { useAuth } from "../contexts/AuthContext";
        import { useNFTs } from "../contexts/NftsContext";
        
        export default function Home() {
            const { logIn, logOut, user } = useAuth();
            const { getSamplers, SelectedRarity, Samplers, mintSampler } = useNFTs();
        
            useEffect(() => {
                if (user) getSamplers(user?.addr);
                }, [user]);
        
            const handleMint = async () => {
                mintSampler("nft", "lvl 1 nft", "t1", SelectedRarity, user?.addr);
                };
        
            console.log("my samplers", Samplers )
            const formattedSamplers = Object.values(Samplers)
            console.log("samps", formattedSamplers)
        
            return (
            <>
            <div>
                <button onClick={logIn}>Login</button>
                <button onClick={logOut}>Logout</button>
                <p>User Address - {user.addr}</p>
            </div>
        
            <div>
                    <button onClick={() => handleMint()}>
                    MINT
                </button>
        
                    <div>
                    { formattedSamplers.map((sampler, i) => (
                        <div key={i}>
                        <h1>{sampler.id}</h1>
                        <h2>{sampler.name}</h2>
                        <h3>{sampler.type}</h3>
                        </div>
                    ))}
                </div>
            </div>
        
            </>
            )
        }
        `,
  },
  {
    title: "Done",
    subtitle:
      "You got it! Your application is already minting and showing all the nfts that the authenticated address has",
    subtitle2: "",
    codeSnippet: [""],
    lastStep: true,
    path: "/samplers",
  },
];
