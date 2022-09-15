import { SamplersContract } from "./samplersContract";

export const CadencePageData = [
  {
    title: "Welcome",
    subtitle: "Samplers Contract deployment guide",
    content:
      "Our goal is not to teach you all the details of building this smart contract, it is very simple and beginner level. On this page we will show you how to deploy it for the next FCL teachings",
    content2:
      "If you want to learn about Cadence and Smart Contracts, we recommend that you join the next Emerald Academy Bootcamp",
    codeSnippet: [""],
    completed: true,
  },
  {
    title: "Step 1",
    subtitle:
      "Create a new folder inside your preference path named /samplersContract",
    subtitle2: "In your terminal use the follow command inside the path /samplersContract",
    footer:
      "This command will create a flow.json file inside your folder! Copy the command and run it in your terminal!",
    structureLink: "step1-cadence.png",
    codeSnippet: [
      { 
        code: "flow init",  
        match: false,
        percent: 0,
        professorText: {
          title:
            "Initialize a new flow.json file, learn more about flow init here: ",
          link: [
            {
              text: "Flow Cli Initialize",
              href: "https://docs.onflow.org/flow-cli/initialize-configuration/#gatsby-focus-wrapper",
            },
          ],
        },
      },
    ],
    completed: false,
    allCode: `flow init`,
  },
  {
    title: "Step 2",
    subtitle: "Inside of your folder /samplersContract create a new file named Samplers.cdc",
    subtitle2: "You don't need to do anything here, just copy the code and paste it in your Samplers.cdc file, but if you want learn what it's going on, let's go!",
    structureLink: "step2-cadence.png",
    codeSnippet: [
      {
        code: "import NonFungibleToken from 0x4ba0ed5a326eef6b",
        match: false,
        percent: 0,
        professorText: {
          title:
            "So you want to understand more about the Sampelrs Contract? Let's go! Import the testnet NonFungibleToken Standard contract",
        },
      },
      {
        code: "import MetadataViews from 0x4ba0ed5a326eef6b",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Import the testnet MetadataViews Standard contract, this standard contract is used to resolve the metadata of the NFT",
        },
      },
      {
        code: "pub contract Samplers: NonFungibleToken {",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Initialize the Samplers contract, he will implement the NonFungibleToken standard interface contract!",
        },
      },
      {
        code: "pub var totalSupply: UInt64",
        match: false,
        percent: 0,
        professorText: {
          title:
            "We will start with the totalSupply variable, this variable will keep track of the total number of NFTs minted from the Samplers contract",
        },
      },
      {
        code: "pub event ContractInitialized()",
        match: false,
        percent: 0,
        professorText: {
          title:
            "We need to declare a few events, the first one will be the ContractInitialized event, this event will be triggered when the contract is initialized",
        },
      },
      {
        code: "pub event Withdraw(id: UInt64, from: Address?)",
        match: false,
        percent: 0,
        professorText: {
          title:
            "The Withdraw event will be triggered when a withdraw function it's called, this event will have two parameters, the first one is the id of the NFT, the second one is the address of the sender",
        },
      },
      {
        code: "pub event Deposit(id: UInt64, to: Address?)",
        match: false,
        percent: 0,
        professorText: {
          title:
            "The Deposit event will be triggered when a deposit function it's called, this event will have two parameters, the first one is the id of the NFT, the second one is the address of the receiver",
        },
      },
      {
        code: "pub let CollectionStoragePath: StoragePath",
        match: false,
        percent: 0,
        professorText: {
          title:
            "We will declare a new variable called CollectionStoragePath, this variable will be used to store the path of the collection of the Samplers contract",
        },
      },
      {
        code: "pub let CollectionPublicPath: PublicPath",
        match: false,
        percent: 0,
        professorText: {
          title:
            "And the same for the CollectionPublicPath variable, this variable will be used to store the public path of the collection of the Samplers contract",
        },
      },
      {
        code: "pub struct NFTMetaData {",
        match: false,
        percent: 0,
        professorText: {
          title:
            "A struct will be used to store the metadata of the NFT, do you want to learn more about cadence structs? We got you! Check it out here: ",
          link: [
            {
              text: "Structs",
              href: "https://docs.onflow.org/cadence/language/composite-types/",
            }]
        },
      },
      {
        code: "pub let id: UInt64",
        match: false,
        percent: 0,
        professorText: {
          title:
            "We will store the id of the NFT in the id variable, this variable will be used to identify the NFT",
        },
      },
      {
        code: "pub let name: String",
        match: false,
        percent: 0,
        professorText: {
          title:
            "The name of the NFT will be stored in the name variable",
        },
      },
      {
        code: "pub let description: String",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Description of the NFT will be stored in the description variable",
        },
      },
      {
        code: "pub let thumbnail: String",
        match: false,
        percent: 0,
        professorText: {
          title:
            "The thumbnail of the NFT will be stored in the thumbnail variable",
        },
      },
      {
        code: "pub let type: String",
        match: false,
        percent: 0,
        professorText: {
          title:
            "And the type of the NFT will be stored in the type variable",
        },
      },
      {
        code: "init(_id: UInt64, _name: String, _description: String, _thumbnail: String, _type: String) {",
        match: false,
        percent: 0,
        professorText: {
          title:
            "It's a struct, we need to initialize it!",
        },
      },
      {
        code: "self.id = _id",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Initialize the id variable of the NFT struct",
        },
      },
      {
        code: "self.name = _name",
        match: false,
        percent: 0,
        professorText: {
          title: "Initialize the name variable of the NFT struct",
        },
      },
      {
        code: "self.description = _description",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Initialize the description variable of the NFT struct",
        },
      },
      {
        code: "self.thumbnail = _thumbnail",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Initialize the thumbnail variable of the NFT struct",
        },
      },
      {
        code: "self.type = _type",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Initialize the type variable of the NFT struct",
        },
      },
      {
        code: "}}",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Close the NFT struct",
        },
      },
      {
        code: "pub resource NFT: NonFungibleToken.INFT, MetadataViews.Resolver {",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Declare a new resource called NFT, in Flow Blockchain NFTs and Tokens are resources, to Samplers NFT will implement the NonFungibleToken.INFT interface and the MetadataViews.Resolver interface, learn more about resources here:",
          link: [
            {
              text: "Resources",
              href: "https://docs.onflow.org/cadence/language/resources/#gatsby-focus-wrapper",
            }]
        },
      },
      {
        code: "pub let id: UInt64",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Declare a new variable called id, this variable will be used to store the id of the NFT",
        },
      },
      {
        code: "pub let name: String",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Declare a new variable called name, this variable will be used to store the name of the NFT",
        },
      },
      {
        code: "pub let description: String",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Declare a new variable called description, this variable will be used to store the description of the NFT",
        },
      },
      {
        code: "pub let thumbnail: String",
        match: false,
        percent: 0,
        professorText: {
          title:
            "pub let type: String",
        },
      },
      {
        code: "init( name: String, description: String, thumbnail: String, type: String) {",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Initialize the variables of the NFT resource!",
        },
      },
      {
        code: "self.id = self.uuid",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Initialize the id variable of the NFT resource",
        },
      },
      {
        code: "self.name = name",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Initialize the name variable of the NFT resource",
        },
      },
      {
        code: "self.description = description",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Initialize the description variable of the NFT resource",
        },
      },
      {
        code: "self.thumbnail = thumbnail",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Initialize the thumbnail variable of the NFT resource",
        },
      },
      {
        code: "self.type = type",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Initialize the type variable of the NFT resource",
        },
      },
      {
        code: "Samplers.totalSupply = Samplers.totalSupply + 1",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Update the totalSupply variable of the Samplers contract",
        },
      },
      {
        code: "pub fun getViews(): [Type] {",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Initialize the getViews function of the NFT resource",
        },
      },
      {
        code: "return [ Type<MetadataViews.Display>(), Type<NFTMetaData>()]",
        match: false,
        percent: 0,
        professorText: {
          title:
            "We will return 2 different views, the first one is the MetadataViews Display, the second one is the NFT metadata view type that we created",
        },
      },
      {
        code: "}",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Close the getViews function of the NFT resource",
        },
      },
      {
        code: "pub fun resolveView(_ view: Type): AnyStruct? {",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Initialize the resolveView function of the NFT resource",
        },
      },
      {
        code: "switch view {",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Start a switch statement to resolve the view",
        },
      },
      {
        code: "case Type<MetadataViews.Display>():",
        match: false,
        percent: 0,
        professorText: {
          title:
            "If the view is the MetadataViews Display, we will return a MetaDataViews.Display struct",
        },
      },
      {
        code: "return MetadataViews.Display(",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Here we will return a MetadataViews.Display struct with the variables of the NFT resource",
        },
      },
      {
        code: "name: self.name,",
        match: false,
        percent: 0,
        professorText: {
          title:
            "The name variable of the NFT resource",
        },
      },
      {
        code: "description: self.description,",
        match: false,
        percent: 0,
        professorText: {
          title:
            "The description variable of the NFT resource",
        },
      },
      {
        code: "thumbnail: MetadataViews.HTTPFile( url: self.thumbnail )",
        match: false,
        percent: 0,
        professorText: {
          title:
            "The thumbnail variable of the NFT resource",
        },
      },
      {
        code: ")",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Close the MetadataViews.Display case",
        },
      },
      {
        code: "case Type<NFTMetaData>():",
        match: false,
        percent: 0,
        professorText: {
          title:
            "If the view is the NFTMetaData type, we will return a NFTMetaData struct",
        },
      },
      {
        code: "return NFTMetaData(",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Return a NFTMetaData struct with the variables of the NFT resource",
        },
      },
      {
        code: "_id: self.id,",
        match: false,
        percent: 0,
        professorText: {
          title:
            "The id variable of the NFT resource",
        },
      },
      {
        code: "_name: self.name,",
        match: false,
        percent: 0,
        professorText: {
          title:
            "The name variable of the NFT resource",
        },
      },
      {
        code: "_description: self.description,",
        match: false,
        percent: 0,
        professorText: {
          title:
            "The description variable of the NFT resource",
        },
      },
      {
        code: "_thumbnail: self.thumbnail,",
        match: false,
        percent: 0,
        professorText: {
          title:
            "The thumbnail variable of the NFT resource",
        },
      },
      {
        code: "_type: self.type",
        match: false,
        percent: 0,
        professorText: {
          title:
            "The type variable of the NFT resource",
        },
      },
      {
        code: ")}",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Close the NFTMetaData case",
        },
      },
      {
        code: "return nil",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Return nil if the view is not the MetadataViews Display or the NFTMetaData type",
        },
      },
      {
        code: "}",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Close the resolveView function of the NFT resource",
        },
      },
      {
        code: "}",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Close the NFT resource! You made it! Now we can create NFTs resources from our Samplers Contract!",
        },
      },
      {
        code: "pub resource Collection: NonFungibleToken.Provider, NonFungibleToken.Receiver, NonFungibleToken.CollectionPublic, MetadataViews.ResolverCollection {",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Initialize the Collection resource! Collections are sooo important in Flow Blockchain! They handle with the actions that we can do with our NFTs!"
        },
      },
      {
        code: "pub var ownedNFTs: @{UInt64: NonFungibleToken.NFT}",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Declare the ownedNFTs dictionary variable of the Collection resource, the Samplers NFTs will be stored here! Learn more about dictionaries here: ",
          link: [{
            title: "Dictionaries",
            href: "https://docs.onflow.org/cadence/language/values-and-types/#dictionaries"
          }]
        },
      },
      {
        code: "init () { self.ownedNFTs <- {} }",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Initialize a empty ownedNFTs dictionary variable of the Collection resource",
        },
      },
      {
        code: "pub fun withdraw(withdrawID: UInt64): @NonFungibleToken.NFT {",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Declare the withdraw function of the Collection resource, this function will return a resource of NonFungibleToken.NFT type!",
        },
      },
      {
        code: `let token <- self.ownedNFTs.remove(key: withdrawID) ?? panic("missing NFT")`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Declare the token variable of the withdraw function, this variable will contain the NFT resource that we want to withdraw!",
        },
      },
      {
        code: "emit Withdraw(id: token.id, from: self.owner?.address)",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Emit the Withdraw event of the Collection resource, this event will be emitted when we withdraw a NFT from the Collection!",
        },
      },
      {
        code: "return <-token",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Return the token variable of the withdraw function",
        },
      },
      {
        code: "}",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Close the withdraw function of the Collection resource",
        },
      },
      {
        code: "pub fun deposit(token: @NonFungibleToken.NFT) {",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Declare the deposit function of the Collection resource, this function will deposit a NFT in the Collection, we will need to pass the NFT resource as a parameter!",
        },
      },
      {
        code: "let token <- token as! @Samplers.NFT",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Declare the token variable of the deposit function, cast the argument that we got to @Samplers.NFT, if the type does not match our program will panic(stop and close the execution)!",
        },
      },
      {
        code: "let id: UInt64 = token.uuid",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Declare the id variable of the deposit function, this variable will contain the id of the NFT resource that we want to deposit!",
        },
      },
      {
        code: "self.ownedNFTs[id] <-! token",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Add the token variable to the ownedNFTs dictionary variable of the Collection resource!",
        },
      },
      {
        code: "emit Deposit(id: id, to: self.owner?.address)",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Emit the Deposit event of the Collection resource, this event will be emitted when we deposit a NFT in the Collection!",
        },
      },
      {
        code: "}",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Close the deposit function of the Collection resource",
        },
      },
      {
        code: "pub fun getIDs(): [UInt64] { return self.ownedNFTs.keys }",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Declare the getIDs function of the Collection resource, this function will return an array of all NFTs Ids stored inside the Collection!",
        },
      },
      {
        code: "pub fun borrowNFT(id: UInt64): &NonFungibleToken.NFT { ",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Declare the borrowNFT function of the Collection resource, this function will return a reference of the NFT resource that we want to borrow!",
        },
      },
      {
        code: "return (&self.ownedNFTs[id] as &NonFungibleToken.NFT?)! ",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Return the reference of the token variable of the borrowNFT function! A reference is a pointer to a resource, so we can use it to access the resource! Learn more about references here: ",
          link: [{
            title: "References",
            href: "https://docs.onflow.org/cadence/language/references/#gatsby-focus-wrapper"
          }]
        },
      },
      {
        code: "}",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Close the borrowNFT function of the Collection resource",
        },
      },
      {
        code: "pub fun borrowViewResolver(id: UInt64): &AnyResource{MetadataViews.Resolver} {",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Declare the borrowViewResolver function of the Collection resource, this function will return a reference of the ViewResolver resource that we want to borrow!",
        },
      },
      {
        code: "let nft = (&self.ownedNFTs[id] as auth &NonFungibleToken.NFT?)!",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Declare the nft variable of the borrowViewResolver function, this variable will contain the NFT resource that we want to borrow!",
        },
      },
      {
        code: "let samplers = nft as! &Samplers.NFT",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Declare the samplers variable of the borrowViewResolver function, cast the argument that we got to &Samplers.NFT, if the type does not match our program will panic(stop and close the execution)!",
        },
      },
      {
        code: "return samplers as &AnyResource{MetadataViews.Resolver}",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Return the samplers variable of the borrowViewResolver function, this variable will contain the ViewResolver resource that we want to borrow!",
        },
      },
      {
        code: "}",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Close the borrowViewResolver function of the Collection resource",
        },
      },
      {
        code: "destroy() {",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Declare the destroy function of the Collection resource, this function will destroy the Collection resource!",
        },
      },
      {
        code: "destroy self.ownedNFTs",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Destroy the ownedNFTs dictionary variable of the Collection resource!",
        },
      },
      {
        code: "}",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Close the destroy function of the Collection resource",
        },
      },
      {
        code: "}",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Close the Collection resource",
        },
      },
      {
        code: "pub fun createEmptyCollection(): @NonFungibleToken.Collection {",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Declare the createEmptyCollection function of the NonFungibleToken resource, this function will create an empty Collection resource!",
        },
      },
      {
        code: "return <- create Collection()",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Return the Collection resource that we created in the createEmptyCollection function!",
        },
      },
      {
        code: "}",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Close the createEmptyCollection function of the NonFungibleToken resource",
        },
      },
      {
        code: "pub resource NFTMinter {",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Declare the NFTMinter resource, this resource will store the function to mintNFT, only the contract deployer will be able to do it!",
        },
      },
      {
        code: "pub fun mintNFT(",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Declare the mintNFT function of the NonFungibleToken resource, this function will mint a new NFT resource!",
        },
      },
      {
        code: "recipient: &Samplers.Collection{NonFungibleToken.CollectionPublic},",
        match: false,
        percent: 0,
        professorText: {
          title:
            "The first parameter of the mintNFT function is the recipient of the NFT, this parameter will be a reference to the Collection resource that will receive the NFT!",
        },
      },
      {
        code: "name: String,",
        match: false,
        percent: 0,
        professorText: {
          title:
            "The name parameter of the mintNFT function is the name of the NFT, this parameter will be a string!",
        },
      },
      {
        code: "var newNFT <- create NFT( name: name, description: description, thumbnail: thumbnail, type: type )",
        match: false,
        percent: 0,
        professorText: {
          title:
            "The variable newNFT will contain the NFT resource that we created in the mintNFT function!",
        },
      },
      {
        code: "recipient.deposit(token: <-newNFT)",
        match: false,
        percent: 0,
        professorText: {
          title:
            "The recipient variable of the mintNFT function will call the deposit function of the Collection resource, this function will deposit the new NFT resource in the Collection resource!",
        },
      },
      {
        code: "}}",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Close the mintNFT function and the NFTMinter resource",
        },
      },
      {
        code: "init() {",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Initialize your contract, this function will be called when the contract is deployed!",
        },
      },
      {
        code: "self.totalSupply = 0",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Starts with the totalSupply 0!",
        },
      },
      {
        code: "self.CollectionStoragePath = /storage/SamplersCollection",
        match: false,
        percent: 0,
        professorText: {
          title:
            "This it's the path where the Collection resources will be stored inside the user's account storage!",
        },
      },
      {
        code: "self.CollectionPublicPath = /public/SamplersCollection",
        match: false,
        percent: 0,
        professorText: {
          title:
            "This it's the path where the Public Collection will be stored inside the public storage!",
        },
      },
      {
        code: "self.MinterStoragePath = /storage/myGalleryCollectionMinter",
        match: false,
        percent: 0,
        professorText: {
          title:
            "This it's the path where the Minter resource will be stored inside the user's account storage!",
        },
      },
      {
        code: "let minter <- create NFTMinter()",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Create the Minter resource, this resource will be used to mint NFTs!",
        },
      },
      {
        code: "self.account.save(<-minter, to: self.MinterStoragePath)",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Store the Minter resource in the deployer's account storage!",
        },
      },
      {
        code: "emit ContractInitialized()",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Emit the ContractInitialized event, this event will be triggered when the contract is initialized!",
        },
      },
      {
        code: "}",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Close the init function",
        },
      },
      {
        code: "}",
        match: false,
        percent: 0,
        professorText: {
          title:
            "Close the contract! Booom, you made it! Congratulations!",
        },
      }
    ],
    completed: true,
    allCode: `${SamplersContract}`,
  },
  {
    title: "Step 3",
    subtitle:
      "Let's create an account that we will use to deploy the Smart Contract",
    subtitle2:
      "Through the flow cli in your terminal we will generate two keys:",
    subtitle3: "One Private Key and one Public Key",
    content:
      "if you do not know what are these keys you can learn about <a>here</a>",
    path: "In your terminal digit the command bellow:",
    footer: "Save the keys for a moment, we will need them in the next steps.",
    structureLink: "step3-cadence.png",
    codeSnippet: [
      {
        code: `flow keys generate`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Generate a new key pair for the account we will deploy the contract with the flow CLI, learn more about keys here:",
          link: [
            {
              text: "Flow Keys Docs",
              href: "https://docs.onflow.org/flow-cli/generate-keys/#gatsby-focus-wrapper",
            },
          ],
        },
      },
    ],
    completed: false,
    allCode: `flow keys generate`,
  },
  {
    title: "Step 4",
    subtitle:
      "Go to the Flow Faucet Testnet website and past your Public Key that you just generated",
    subtitle2: "You can use the pattern Signature Algorithm and Hash Algorithm",
    subtitle3:
      "Click in create Account and copy the Address that will be generated",
      structureLink: "step4-cadence.png",
    codeSnippet: [
      {
        professorText: {
          title: "Hey, this is the website link:",
          link: [
            {
              text: "Flow Faucet Testnet",
              href: "https://testnet-faucet.onflow.org/",
            },
          ],
        },
      },
    ],
    completed: true,
  },
  {
    title: "Step 5",
    subtitle: "Get back to your IDE and open the file flow.json",
    subtitle2:
      "We need to add the account information to the flow CLI recognize and access our account to deploy the smart contract",
    path: "Inside the json add the testnet-account information like bellow:",
    structureLink: "step2-cadence.png",
    codeSnippet: [
      {
        code: `"testnet-account": {`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "In your flow.json file, declare the testnet-account information",
        },
      },
      {
        code: `"address": "PASTE YOUR ADDRESS HERE!",`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Here in our teach will be empty but you need to paste your address in your code!",
        },
      },
      {
        code: `"key": {`,
        match: false,
        percent: 0,
        professorText: {
          title: "In your flow.json file, declare the key information",
        },
      },
      {
        code: `"type": "hex",`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "In your flow.json file, declare the key type, we will use the pattern hex",
        },
      },
      {
        code: `"index": 0,`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "This is the index of your key, we will use 0, want understand more about this? Check the key index docs here:",
          link: [
            {
              text: "Multiple Keys Docs",
              href: "https://docs.onflow.org/faq/developers/#is-it-possible-to-add-multiple-public-keys-to-a-given-accountaddress-so-that-it-can-be-controlled-by-more-than-one-private-key",
            },
          ],
        },
      },
      {
        code: `"signatureAlgorithm": "ECDSA_P256k",`,
        match: false,
        percent: 0,
        professorText: {
          title: "We will use the pattern ECDSA_P256k",
        },
      },
      {
        code: `"hashAlgorithm": "SHA3_256",`,
        match: false,
        percent: 0,
        professorText: {
          title: "We will use the pattern SHA3_256",
        },
      },
      {
        code: `"privateKey": "PASTE YOUR PRIVATE KEY HERE"`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Here in our teach will be empty but you need to paste your private key in your code!",
        },
      },
      {
        code: `}}}`,
        match: false,
        percent: 0,
        professorText: {
          title: "Close the json file",
        },
      },
    ],
    completed: false,
    allCode: `
                    "testnet-account": {
                        "address": "PASTE YOUR ADDRESS HERE!",
                        "key": {
                            "type": "hex",
                            "index": 0,
                            "signatureAlgorithm": "ECDSA_P256k",
                            "hashAlgorithm": "SHA3_256",
                            "privateKey": "PASTE YOUR PRIVATE KEY HERE"
                        }
                    }
                }
        `,
    alert: true,
  },
  {
    title: "Step 6",
    subtitle: "Now we need to add in our flow.json the contract path",
    path: "Add the path to the contracts json object inside flow.json, just like bellow:",
    structureLink: "step2-cadence.png",
    codeSnippet: [
      {
        code: `"contracts": { "Samplers": "./samplersContract/Samplers.cdc" }`,
        match: false,
        percent: 0,
        professorText: {
          title: "Declare the contract path in your flow.json file",
        },
      },
    ],
    completed: false,
    allCode: `"contracts": { "Samplers": "./samplersContract/Samplers.cdc" }`,
  },
  {
    title: "Step 7",
    subtitle: "And let the flow CLI know that we want to deploy this contract",
    path: "To do it, inside your deployments add the code bellow:",
    structureLink: "step2-cadence.png",
    codeSnippet: [
      {
        code: `"deployments": {`,
        match: false,
        percent: 0,
        professorText: {
          title: "Declare the deployments in your flow.json file",
        },
      },
      {
        code: `"testnet": {`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "We will deploy on testnet, if you want to deploy on mainnet, just change the name of the network",
        },
      },
      {
        code: `"testnet-account": [ "Samplers" ]`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Declare the testnet-account that will deploy the contract and an array with the contracts names to deploy",
        },
      },
      {
        code: `}}`,
        match: false,
        percent: 0,
        professorText: {
          title: "Close the json file",
        },
      },
    ],
    completed: false,
    allCode: `
        "deployments": {
			"testnet": {
				"testnet-account": [
					"Samplers"
				]
			}
		}
        `,
  },
  {
    title: "Step 8",
    subtitle: "There it go! You got it!",
    subtitle2:
      "Now we just need to run in our terminal the command to deploy the contract",
    path: "To do it, inside your terminal run the command bellow:",
    footer:
      "Now we can go to our Samplers Application and learn how to make it!",
    codeSnippet: [
      {
        code: `flow project deploy --network=testnet`,
        match: false,
        percent: 0,
        professorText: {
          title:
            "Run the command to deploy the contract! You are almost there!",
        },
      },
    ],
    completed: false,
    allCode: `flow project deploy --network=testnet`,
  },
  {
    title: "Done",
    subtitle:
      "You made it! First time ever? Let us know in our discord channel!",
    subtitle2: "The contract part it's done, let's make your dapp now?!",
    codeSnippet: [
      {
        professorText: {
          title:
            "Amazing! Congrats! I know you love NFTs, so I'm going to give you a special gift for your first time here!",
        },
      },
    ],
    completed: true,
    lastStep: true,
    path: "/samplers",
  },
];
