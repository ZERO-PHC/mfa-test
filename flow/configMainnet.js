const fcl = require("@onflow/fcl");

fcl.config({
  "app.detail.title": "My Galleryz", // this adds a custom name to our wallet
  "app.detail.icon": "https://res.cloudinary.com/do4mactw0/image/upload/v1655577809/Logo_m6ofww.png", // this adds a custom image to our wallet
  "accessNode.api": "https://rest-mainnet.onflow.org",
  "discovery.wallet": "https://fcl-discovery.onflow.org/authn", // this is for the local dev wallet
  "0xDeployer": process.env.NEXT_PUBLIC_CONTRACT_ADDRESS, // this auto configures `0xDeployer` to be replaced by the address in txs and scripts
})