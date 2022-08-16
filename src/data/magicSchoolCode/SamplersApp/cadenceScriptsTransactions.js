
export const CadenceScriptsTransactions = [
  {
    title: "Welcome",
    professorName: "I'm FR LABS,",
    introduction: "I will be your Cadence Professor!",
    subtitle: "On this teaching you will learn how to create the Orbies Scripts and Transactions!",
    subtitle2: "At the end of this challenge you will win:",
    rewards1: "- +1000 XP",
    rewards2: "- UNLOCK Orbies Cadence Scripts and Transactions Float",
    codeSnippet: [
      {
        professorText: { title: "Let's build the scripts to get the Orbies from the user Wallet and the Transactions to mint them!" },
      },
    ],
    professorAvatar:"/magicSchoolModal/profFrlabs.png",
    completed: true,
  },
  {
    title: "Step 1",
    subtitle: "Create a folder named cadence inside flow folder",
    subtitle2: "Inside your cadence folder create a file named getOrbiesScript.js",
    structureLink: "https://magic-flow-academy.s3.sa-east-1.amazonaws.com/MFA-orbies/transactions/orbies-transactions-step1.png",
    codeSnippet: [
      {
        code: `export const getOrbiesScript = \``,
        match: false,
        percent: 0,
        professorText: { title: "Initialize and export the script code, we will import it to our component later!" },
      },
      {
        code: `import Orbies from 0xDeployer`,
        match: false,
        percent: 0,
        professorText: { title: "Import the Orbies from the 0xDeployer library!" },
      },
      {
        code: `import MetadataViews from 0x631e88ae7f1d7c20`,
        match: false,
        percent: 0,
        professorText: { title: "Import the testnet MetadataViews Standard contract, this standard contract is used to resolve the metadata of the NFT" },
      },
      {
        code: `pub fun main(address: Address): [Orbies.NFTMetaData] {`,
        match: false,
        percent: 0,
        professorText: { title: "This it's a script! Create your main function!" },
      },
      {
        code: `let collection = getAccount(address).getCapability(Orbies.CollectionPublicPath)`,
        match: false,
        percent: 0,
        professorText: { title: "Inside of the main function we will get the Orbies collection stored inside the user public storage!" },
      },
      {
        code: `.borrow<&Orbies.Collection{MetadataViews.ResolverCollection}>()`,
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
        professorText: { title: "Let's get the Orbies NFTs Ids that are inside user colletion!" },
      },
      {
        code: `let answer: [Orbies.NFTMetaData] = []`,
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
        code: `let view = nft.resolveView(Type<Orbies.NFTMetaData>())!`,
        match: false,
        percent: 0,
        professorText: { title: "With the NFT meta data let's resolve the view!" },
      },
      {
        code: `let display = view as! Orbies.NFTMetaData`,
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
        code: `}\``,
        match: false,
        percent: 0,
        professorText: { title: "Close your main function!" },
      },
      
    ],
    completed: false,
    allCode: 
`export const getOrbiesScript = \`

import Orbies from 0xDeployer
import MetadataViews from 0x631e88ae7f1d7c20

pub fun main(address: Address): [Orbies.NFTMetaData] {
  let collection = getAccount(address).getCapability(Orbies.CollectionPublicPath)
                    .borrow<&Orbies.Collection{MetadataViews.ResolverCollection}>()
                    ?? panic("Could not borrow a reference to the nft collection")

  let ids = collection.getIDs()

  let answer: [Orbies.NFTMetaData] = []

  for id in ids {
    
    let nft = collection.borrowViewResolver(id: id)
    let view = nft.resolveView(Type<Orbies.NFTMetaData>())!

    let display = view as! Orbies.NFTMetaData
    answer.append(display)
  }
    
  return answer
}\``,
  },
  {
    title: "Step 2",
    subtitle: "Let's create the transaction file to mint the Orbies NFTs",
    subtitle2: "Inside your cadence folder create a file named mintOrbieTransaction.js",
    structureLink: "https://magic-flow-academy.s3.sa-east-1.amazonaws.com/MFA-orbies/transactions/orbies-transactions-step2.png",
    codeSnippet: [
      {
        code: `export const mintOrbieTransaction = \``,
        match: false,
        percent: 0,
        professorText: { title: "Export and initialize the mintOrbieTransaction, we will import it to our component later!" },
      },
      {
        code: `import Orbies from 0xDeployer`,
        match: false,
        percent: 0,
        professorText: { title: "Let's create our transaction! Import the Orbies from the 0xDeployer library!" },
      },
      {
        code: `import NonFungibleToken from 0x631e88ae7f1d7c20`,
        match: false,
        percent: 0,
        professorText: { title: "Import the NonFungibleToken from the 0x631e88ae7f1d7c20! This one it's the testnet address that stores the NonFungibleToken Standard! On mainnet you should use the address 0x1d7e57aa55817448!" },
      },
      {
        code: `import FungibleToken from 0x9a0766d93b6608b7`,
        match: false,
        percent: 0,
        professorText: { title: "Import the FungibleToken from the 0x9a0766d93b6608b7! This one it's the testnet address that stores the FungibleToken Standard! On mainnet you should use the address 0xf233dcee88fe0abe!" },
      },
      {
        code: `import FlowToken from 0x7e60df042a9c0868`,
        match: false,
        percent: 0,
        professorText: { title: "Import the FlowToken from the 0x7e60df042a9c0868! This one it's the testnet address that stores the FlowToken contract! On mainnet you should use the address 0x1654653399040a61!" },
      },
      {
        code: `import MetadataViews from 0x631e88ae7f1d7c20`,
        match: false,
        percent: 0,
        professorText: { title: "Import the MetadataViews Standard from the 0x631e88ae7f1d7c20! This one it's the testnet address that stores the NonFungibleToken Standard! On mainnet you should use the address 0x1d7e57aa55817448!" },
      },
      {
        code: `transaction(name: String, description: String, thumbnail: String, type: String) {`,
        match: false,
        percent: 0,
        professorText: { title: "Create your transaction! Let's get as arguments the name, description, thumbnail and type!" },
      },
      {
        code: `let RecipientCollection: &Orbies.Collection{NonFungibleToken.CollectionPublic}`,
        match: false,
        percent: 0,
        professorText: { title: "Let's create a variable to store the Orbies Collection Public Reference!" },
      },
      {
        code: `prepare(signer: AuthAccount, admin: AuthAccount) {`,
        match: false,
        percent: 0,
        professorText: { 
          title: "Initialize the prepare transaction phase. There we will receive the AuthAccounts as arguments! Learn more about it here:",
          links: [{
            title: "Transaction Prepare Phase",
            link: "https://docs.onflow.org/cadence/language/transactions/#prepare-phase"
          }]
        },
      },
      {
        code: `self.adminMinter = admin.borrow<&Orbies.NFTMinter>`,
        match: false,
        percent: 0,
        professorText: { 
          title: "Let's borrow the NFTMinter from the admin account!",
        },
      },
      {
        code: `(from: Orbies.MinterStoragePath)!`,
        match: false,
        percent: 0,
        professorText: { 
          title: "Let's borrow the NFTMinter from the admin account!",
        },
      },
      {
        code: `let paymentReceiverAcct = getAccount(admin.address)`,
        match: false,
        percent: 0,
        professorText: { 
          title: "Let's get the admin account!",
        },
      },
      {
        code: `let receiverCap = paymentReceiverAcct.getCapability`,
        match: false,
        percent: 0,
        professorText: { 
          title: "Let's get the FlowToken Vault Receiver Capability!",
        },
      },
      {
        code: `<&FlowToken.Vault{FungibleToken.Receiver}>(/public/flowTokenReceiver)`,
        match: false,
        percent: 0,
        professorText: { 
          title: "Let's get the FlowToken Vault Receiver Capability!",
        },
      },
      {
        code: `self.flowTokenReceiver = receiverCap.borrow()!`,
        match: false,
        percent: 0,
        professorText: { 
          title: "Let's borrow the FlowToken Vault from Receiver!",
        },
      },
      {
        code: `if signer.borrow<&Orbies.Collection>(from: Orbies.CollectionStoragePath) == nil {`,
        match: false,
        percent: 0,
        professorText: { title: "If we couldn't borrow the Orbies Collection Reference from the user account it does not exists yet, let's create!" },
      },
      {
        code: `signer.save(<- Orbies.createEmptyCollection(), to: Orbies.CollectionStoragePath)`,
        match: false,
        percent: 0,
        professorText: { title: "With the signer let's create and save the empty Orbies Collection Reference to the user account!" },
      },
      {
        code: `signer.link<&Orbies.Collection{NonFungibleToken.CollectionPublic,`,
        match: false,
        percent: 0,
        professorText: { title: "With the signer let's link the Orbies Collection Public Reference to the public storage inside user account!" },
      },
      {
        code: `MetadataViews.ResolverCollection}>(Orbies.CollectionPublicPath,`,
        match: false,
        percent: 0,
        professorText: { title: "With the signer let's link the Orbies Collection Public Reference to the public storage inside user account!" },
      },
      {
        code: `target: Orbies.CollectionStoragePath)`,
        match: false,
        percent: 0,
        professorText: { title: "With the signer let's link the Orbies Collection Public Reference to the public storage inside user account!" },
      },
      {
        code: `}`,
        match: false,
        percent: 0,
        professorText: { title: "Close the if statement!" },
      },
      {
        code: `self.RecipientCollection = signer.getCapability(Orbies.CollectionPublicPath)`,
        match: false,
        percent: 0,
        professorText: { 
          title: "With the signer let's get the Orbies Collection Public Capability from the user account! Learn more about Capabilities here:",
          links: [{
            title: "Capability Docs",
            link: "https://docs.onflow.org/cadence/tutorial/04-capabilities/#gatsby-focus-wrapper"
          }]
        },
      },
      {
        code: `.borrow<&Orbies.Collection{NonFungibleToken.CollectionPublic}>()!`,
        match: false,
        percent: 0,
        professorText: { title: "With the  Orbies Collection Public Capability let's borrow the NonFungibleToken.CollectionPublic Reference!" },
      },
      {
        code: `let vaultRef = signer.borrow<&FlowToken.Vault>(from: /storage/flowTokenVault)`,
        match: false,
        percent: 0,
        professorText: { title: "Let's borrow the FlowToken Vault Reference from the signer account!" },
      },
      {
        code: `?? panic("Could not borrow owner''s Vault reference")`,
        match: false,
        percent: 0,
        professorText: { title: "If we couldn't borrow the FlowToken Vault Reference from the signer account it does not exists yet, let's panic!" },
      },
      {
        code: `var price = 0.0`,
        match: false,
        percent: 0,
        professorText: { title: "Let's create a variable to store the price!" },
      },
      {
        code: `switch type {`,
        match: false,
        percent: 0,
        professorText: { title: "Let's create a switch statement to check the type of the orb!" },
      },
      {
        code: `case "common" as String:`,
        match: false,
        percent: 0,
        professorText: { title: "First case it's common and we will get it as a string" },
      },
      {
        code: `price = UFix64(10)`,
        match: false,
        percent: 0,
        professorText: { title: "If the type is common, let's set the price to 10!" },
      },
      {
        code: `case "rare" as String:`,
        match: false,
        percent: 0,
        professorText: { title: "Second case it's rare and we will get it as a string" },
      },
      {
        code: `price = UFix64(30)`,
        match: false,
        percent: 0,
        professorText: { title: "If the type is rare, let's set the price to 30!" },
      },
      {
        code: `case "legendary" as String:`,
        match: false,
        percent: 0,
        professorText: { title: "Third case it's legendary and we will get it as a string" },
      },
      {
        code: `price = UFix64(50)`,
        match: false,
        percent: 0,
        professorText: { title: "If the type is legendary, let's set the price to 50!" },
      },
      {
        code: `}`,
        match: false,
        percent: 0,
        professorText: { title: "Close the switch statement!" },
      },
      {
        code: `self.temporaryVault <- vaultRef.withdraw(amount: price) `,
        match: false,
        percent: 0,
        professorText: { title: "Let's withdraw the Orbie price value from the FlowToken Vault Reference!" },
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
        code: `self.flowTokenReceiver.deposit(from: <- self.temporaryVault)`,
        match: false,
        percent: 0,
        professorText: { title: "Let's deposit the FlowToken Vault Reference to the FlowToken Receiver!" },
      },
      {
        code: `self.adminMinter.mintNFT(recipient: self.recipientCollection,`,
        match: false,
        percent: 0,
        professorText: { title: "Call the mintNFT function! Let's pass the arguments recipient, name, description, thumbnail and type!" },
      },
      {
        code: `name: name, description: description, thumbnail: thumbnail, type: type)`,
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
    allCode: 
`export const getOrbiesTransaction = \`

import Orbies from 0xDeployer
import NonFungibleToken from 0x631e88ae7f1d7c20
import FungibleToken from 0x9a0766d93b6608b7
import FlowToken from 0x7e60df042a9c0868
import MetadataViews from 0x631e88ae7f1d7c20

transaction( name: String, description: String, thumbnail: String, type: String) {
  let recipientCollection: &Orbies.Collection{NonFungibleToken.CollectionPublic}
  let flowTokenReceiver: &FlowToken.Vault{FungibleToken.Receiver}
  let temporaryVault: @FungibleToken.Vault
  let adminMinter: &Orbies.NFTMinter

  prepare(signer: AuthAccount, admin: AuthAccount) {

    self.adminMinter = admin.borrow<&Orbies.NFTMinter>(from: Orbies.MinterStoragePath)!

    let paymentReceiverAcct = getAccount(admin.address)
    let receiverCap = paymentReceiverAcct.getCapability<&FlowToken.Vault{FungibleToken.Receiver}>(/public/flowTokenReceiver)
    self.flowTokenReceiver = receiverCap.borrow()!

    //SETUP EXAMPLE NFT COLLECTION
    if signer.borrow<&Orbies.Collection>(from: Orbies.CollectionStoragePath) == nil {
      signer.save(<- Orbies.createEmptyCollection(), to: Orbies.CollectionStoragePath)
      signer.link<&Orbies.Collection{NonFungibleToken.CollectionPublic, MetadataViews.ResolverCollection}>(Orbies.CollectionPublicPath, target: Orbies.CollectionStoragePath)
    }

    self.recipientCollection = signer.getCapability(Orbies.CollectionPublicPath)
                                .borrow<&Orbies.Collection{NonFungibleToken.CollectionPublic}>()!
  
    let vaultRef = signer.borrow<&FlowToken.Vault>(from: /storage/flowTokenVault) ?? panic("Could not borrow owner''s Vault reference")
    
    var price = 0.0
    switch type {
      case "common" as String:
        price = UFix64(10)
      case "rare" as String:
        price = UFix64(30)
      case "legendary" as String:
        price = UFix64(50)
    }

    self.temporaryVault <- vaultRef.withdraw(amount: price)  
  }
  
  
  execute {
    self.flowTokenReceiver.deposit(from: <- self.temporaryVault)
    self.adminMinter.mintNFT(recipient: self.recipientCollection, name: name, description: description, thumbnail: thumbnail, type: type)
  }
}
\`
`,
  },
  {
    title: "Done",
    subtitle:
      "You got it! You now have the Scripts and Transactions! Let's go to your next step!",
    subtitle2: "",
    codeSnippet: [
      {
        professorText: {
          title:
            "Yooo, that one was fast, right? This is the Cadence Magic my friend!",
        },
      },
    ],
    lastStep: true,
    path: "/",
  },
];
