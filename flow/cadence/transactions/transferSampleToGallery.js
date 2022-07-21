export const transferSampleToGallery = `

import NonFungibleToken from 0x631e88ae7f1d7c20
import Samplers from 0x1ced1d55e1e84456
import MyGallery from 0x1ced1d55e1e84456

// This transction uses the NFTMinter resource to mint a new NFT.
//
// It must be run with the account that has the minter resource
// stored at path /storage/NFTMinter.
transaction(recipient: Address, galleryID: UInt64, samplerID: UInt64) {
    
    // local variable for storing the minter reference
    let myGalleryCollection: &MyGallery.Collection{NonFungibleToken.CollectionPublic, MyGallery.MyGalleryCollectionPublic}

    prepare(signer: AuthAccount) {
        // borrow a reference to the NFTMinter resource in storage
        let samplerCollection = signer.borrow<&Samplers.Collection>(from: Samplers.CollectionStoragePath)
                ?? panic("Could not borrow a reference to the NFT minter")
        
        let samplerNft <- samplerCollection.withdraw(withdrawID: samplerID)

        self.myGalleryCollection = getAccount(recipient).getCapability(MyGallery.CollectionPublicPath)!
                .borrow<&MyGallery.Collection{NonFungibleToken.CollectionPublic, MyGallery.MyGalleryCollectionPublic}>()
                ?? panic("Could not get receiver reference to the NFT Collection")

        let myGalleryNft = self.myGalleryCollection.borrowMyGallery(id: galleryID)!

        myGalleryNft.getCollectionRef(name: "Samplers").deposit(token: <- samplerNft)
    }

    execute {}
}
`;
