import AuthProvider from "../contexts/AuthContext";
import AuthMainnetProvider from "../contexts/AuthMainnetContext";
import TransactionProvider from "../contexts/TransactionContext";
import { NftsProvider } from "../contexts/NftsContext";
import { StepsProvider } from "../contexts/MagicSchoolStepsContext";

import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider>
        <AuthProvider>
          <AuthMainnetProvider>
            <TransactionProvider>
              <NftsProvider>
                <StepsProvider>
                  <Component {...pageProps} />
                </StepsProvider>
              </NftsProvider>
            </TransactionProvider>
          </AuthMainnetProvider>
        </AuthProvider>
      </ChakraProvider>
  )
}

export default MyApp