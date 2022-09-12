import { useState } from "react"
import styled from "styled-components"
import ModalBodyButtons from "../modalBodyButtons/ModalBodyButtons"
import { useMagicSchoolSteps } from "../../../contexts/MagicSchoolStepsContext"

const MagicSchoolFormWrapper = ({step, structDrawerOpen, setStructDrawerOpen, setAddedPrivateKey}) => {
    const {deployerAddress, setDeployerAddress, privateKey, setPrivateKey} = useMagicSchoolSteps()

    const updateAddress = (e) => {
        setDeployerAddress(e.target.value)
    }

    const updatePrivateKey = (e) => {
        setPrivateKey(e.target.value)
        checkPvtKey()
    }

    const checkPvtKey = () => {
      console.log(privateKey)
      console.log(privateKey.length)
      if(privateKey.length == 64){
        setAddedPrivateKey(true)
      }
    }

    const text = `
  {
    "emulators": {
      "default": {
        "port": 3569,
        "serviceAccount": "emulator-account"
      }
    },
    "contracts": {
        "Orbies": "./Orbies.cdc" 
    },
    "networks": {
      "emulator": "127.0.0.1:3569",
      "mainnet": "access.mainnet.nodes.onflow.org:9000",
      "testnet": "access.devnet.nodes.onflow.org:9000"
    },
    "accounts": {
      "emulator-account": {
        "address": "f8d6e0586b0a20c7",
        "key": "67428e633de0118d8c651d078909a71fa7151995d0c8d0c4aebac41b592ba5cc"
      },
      "testnet-account": {
        "address": "${deployerAddress}",
        "key": {
          "type": "hex",
          "index": 0,
          "signatureAlgorithm": "ECDSA_P256",
          "hashAlgorithm": "SHA3_256",
          "privateKey": "${privateKey}"
        }
      }
  
    },
    "deployments": {
      "testnet": {
        "testnet-account": [
          "Orbies"
        ]
      }
    }
  }
  
`
    return (
        <>
        <Wrapper>
            <ul>
            { step.subtitle && <li>{step.subtitle}</li>}
            { step.subtitle2 && <li>{step.subtitle2}</li>}
            </ul>
            <>
            <div className="line">
                <p>ADDRESS:</p>
                <input 
                type="text" 
                placeholder="YOUR ADDRESS" 
                onChange={(e) => updateAddress(e)}
                />
            </div>
            <div className="line">
                <p>PRIVATE KEY:</p>
                <input 
                type="text" 
                placeholder="YOUR PRIVATE KEY" 
                onChange={(e) => updatePrivateKey(e)}
                />
            </div>

        </>
        </Wrapper>
            <ModalBodyButtons
            step={step}
            structDrawerOpen={structDrawerOpen}
            setStructDrawerOpen={setStructDrawerOpen}
            textToCopy={text}
            />
        </>
    )
}

export default MagicSchoolFormWrapper

const Wrapper = styled.div`
    background-color: #141414;
    border: 1px solid #00FFB2;
    padding: 5rem;
    margin: 2rem 0;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    color: #00FFB2;

    .line{
        display: flex;
        gap: 10px;

        input{
            width: 600px;
            padding: 0px 10px;
            background-color: #141414;
            border: 1px solid #00FFB2;
            color: #00FFB2;
        }

        p{
            width: 120px;
        }
    }

    ul{
        margin-bottom: 2rem;
        line-height: 2rem;
    }
`