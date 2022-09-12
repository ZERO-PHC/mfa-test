export const getGalleriesFromAccount = `

import NonFungibleToken from 0x631e88ae7f1d7c20
import MyGallery from 0x1ced1d55e1e84456

pub fun main(address: Address): [&NonFungibleToken.NFT] {
  let collection = getAccount(address).getCapability(MyGallery.CollectionPublicPath)!
                          .borrow<&{NonFungibleToken.CollectionPublic, MyGallery.MyGalleryCollectionPublic}>()
                          ?? panic("Could not get receiver reference to the NFT Collection")
  
  let ids = collection.getIDs()
  
  let answer: [&NonFungibleToken.NFT] = []
  
  for id in ids {
      answer.append(
      collection.borrowNFT(id: id) 
      )
  }
  
  return answer
  }
`