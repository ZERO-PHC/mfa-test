export const getNftsFromProjectInsideGallery = `

import NonFungibleToken from 0x631e88ae7f1d7c20
import MyGallery from 0x1ced1d55e1e84456

pub fun main(address: Address, myGalleryId: UInt64, projectCollectionName: String): [&NonFungibleToken.NFT] {
  let collection = getAccount(address).getCapability(MyGallery.CollectionPublicPath)!
                        .borrow<&{NonFungibleToken.CollectionPublic, MyGallery.MyGalleryCollectionPublic}>()
                        ?? panic("Could not get receiver reference to the NFT Collection")

  let myGalerryNft = collection.borrowMyGallery(id: myGalleryId)!
  let projectCollection = myGalerryNft.getCollectionRef(name: projectCollectionName)
  let ids = projectCollection.getIDs()

  let answer: [&NonFungibleToken.NFT] = []

  for id in ids {
    answer.append(projectCollection.borrowNFT(id: id))
  }

  return answer
}
`