export const getSamplersScript = `

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
}
`