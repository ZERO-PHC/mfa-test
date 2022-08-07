
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
    subtitle: "Create a folder with your scripts",
    subtitle2: "Inside your flow folder create /flow/cadence/scripts",
    content: "Inside of it create a file get_samplers.js",
    codeSnippet: [
      {
        code: `export const get_samplers = \``,
        match: false,
        percent: 0,
        professorText: { title: "Initialize and export the script code, we will import it to our component later!" },
      },
      {
        code: `import Samplers from 0xDeployer`,
        match: false,
        percent: 0,
        professorText: { title: "Import the Samplers from the 0xDeployer library!" },
      },
      {
        code: `import MetadataViews from 0x631e88ae7f1d7c20`,
        match: false,
        percent: 0,
        professorText: { title: "Import the testnet MetadataViews Standard contract, this standard contract is used to resolve the metadata of the NFT" },
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
        code: `}\``,
        match: false,
        percent: 0,
        professorText: { title: "Close your main function!" },
      },
      
    ],
    completed: false,
    allCode: `
        export const get_samplers = \`

        import Samplers from 0xDeployer
        import MetadataViews from 0x631e88ae7f1d7c20

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
        \`
        `,
  },
  {
    title: "Step 2",
    subtitle: "Create a folder with your transactions",
    subtitle2: "Inside your flow folder create /flow/cadence/transactions",
    content: "Inside of it create a file mint_sampler.js",
    codeSnippet: [
      {
        code: `export const mintSamplerTransaction = \``,
        match: false,
        percent: 0,
        professorText: { title: "Export and initialize the mintSamplerTransaction, we will import it to our component later!" },
      },
      {
        code: `import Samplers from 0xDeployer`,
        match: false,
        percent: 0,
        professorText: { title: "Let's create our transaction! Import the Samplers from the 0xDeployer library!" },
      },
      {
        code: `import NonFungibleToken from 0x631e88ae7f1d7c20`,
        match: false,
        percent: 0,
        professorText: { title: "Import the NonFungibleToken from the 0x631e88ae7f1d7c20! This one it's the testnet address that stores the NonFungibleToken Standard! On mainnet you should use the address 0x1d7e57aa55817448!" },
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
        code: `== nil {`,
        match: false,
        percent: 0,
        professorText: { title: "If we couldn't borrow the Samplers Collection Reference from the user account it does not exists yet, let's create!" },
      },
      {
        code: `signer.save(`,
        match: false,
        percent: 0,
        professorText: { title: "With the signer let's create and save the empty Samplers Collection Reference to the user account!" },
      },
      {
        code: `<- Samplers.createEmptyCollection(), to: Samplers.CollectionStoragePath)`,
        match: false,
        percent: 0,
        professorText: { title: "With the signer let's create and save the empty Samplers Collection Reference to the user account!" },
      },
      {
        code: `signer.link<&Samplers.Collection{NonFungibleToken.CollectionPublic,`,
        match: false,
        percent: 0,
        professorText: { title: "With the signer let's link the Samplers Collection Public Reference to the public storage inside user account!" },
      },
      {
        code: `MetadataViews.ResolverCollection}>(Samplers.CollectionPublicPath,`,
        match: false,
        percent: 0,
        professorText: { title: "With the signer let's link the Samplers Collection Public Reference to the public storage inside user account!" },
      },
      {
        code: `target: Samplers.CollectionStoragePath)`,
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
        code: `Samplers.mintNFT(recipient: self.RecipientCollection,`,
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
    allCode: `
        export const mintSamplerTransaction = \`

        import Samplers from 0xDeployer
        import NonFungibleToken from 0xDeployer
        import MetadataViews from 0xDeployer
        
        transaction(name: String, description: String, thumbnail: String, type: String) {
            let RecipientCollection: &Samplers.Collection{NonFungibleToken.CollectionPublic}
        
            prepare(signer: AuthAccount, admin: AuthAccount) {
        
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
            }\`
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
