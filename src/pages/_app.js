import AuthProvider from "../contexts/AuthContext";
import AuthMainnetProvider from "../contexts/AuthMainnetContext";
import TransactionProvider from "../contexts/TransactionContext";
import { NftsProvider } from "../contexts/NftsContext";

import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider>
        <AuthProvider>
          <AuthMainnetProvider>
            <TransactionProvider>
              <NftsProvider>
                <Component {...pageProps} />
              </NftsProvider>
            </TransactionProvider>
          </AuthMainnetProvider>
        </AuthProvider>
      </ChakraProvider>
  )
}

export default MyApp