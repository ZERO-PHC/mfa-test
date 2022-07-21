export const minterSampler = `

import Samplers from 0x1ced1d55e1e84456
import NonFungibleToken from 0x631e88ae7f1d7c20

// This transaction uses the NFTMinter resource to mint a new NFT.
//
// It must be run with the account that has the minter resource
// stored at path /storage/NFTMinter.

transaction(recipient: Address, name: String, description: String, thumbnail: String , type: String, mints: UInt64) {
    
    // local variable for storing the minter reference
    let minter: &Samplers.NFTMinter

    prepare(signer: AuthAccount) {

        // borrow a reference to the NFTMinter resource in storage
        self.minter = signer.borrow<&Samplers.NFTMinter>(from: Samplers.MinterStoragePath)
            ?? panic("Could not borrow a reference to the NFT minter")
    }

    execute {
        // get the public account object for the recipient
        let recipient = getAccount(recipient)

        // borrow the recipient''s public NFT collection reference
        let receiver = recipient
            .getCapability(Samplers.CollectionPublicPath)!
            .borrow<&{NonFungibleToken.CollectionPublic}>()
            ?? panic("Could not get receiver reference to the NFT Collection")

        // mint the NFT and deposit it to the recipient''s collection
        self.minter.batchMintNFT(recipient: receiver, name: name, description: description, thumbnail: thumbnail , type: type, mints: mints)
    }
}
`;
