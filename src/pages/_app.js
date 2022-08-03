import AuthProvider from "../contexts/AuthContext";
import AuthMainnetProvider from "../contexts/AuthMainnetContext";
import TransactionProvider from "../contexts/TransactionContext";
import { NftsProvider } from "../contexts/NftsContext";
import { StepsProvider } from "../contexts/MagicSchoolStepsContext";
import {SamplersNftsProvider} from "../contexts/Samplers/SamplersNftsContext";

import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider>
        <AuthProvider>
          <AuthMainnetProvider>
            <TransactionProvider>
              <SamplersNftsProvider>
                <NftsProvider>
                  <StepsProvider>
                    <Component {...pageProps} />
                  </StepsProvider>
                </NftsProvider>
              </SamplersNftsProvider>
            </TransactionProvider>
          </AuthMainnetProvider>
        </AuthProvider>
      </ChakraProvider>
  )
}

export default MyApp