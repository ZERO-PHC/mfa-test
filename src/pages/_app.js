import AuthProvider from "../contexts/AuthContext";
import AuthMainnetProvider from "../contexts/AuthMainnetContext";
import TransactionProvider from "../contexts/TransactionContext";
import { NftsProvider } from "../contexts/NftsContext";
import { StepsProvider } from "../contexts/MagicSchoolStepsContext";
import { OrbiesNftsProvider } from "../contexts/Orbies/OrbiesNftsContext";
import  Layout  from "../components/Layout";
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider>
        <AuthProvider>
          <AuthMainnetProvider>
            <TransactionProvider>
              <OrbiesNftsProvider>
                <NftsProvider>
                  <StepsProvider>
                    <Layout>
                    <Component {...pageProps} />
                    </Layout>
                  </StepsProvider>
                </NftsProvider>
              </OrbiesNftsProvider>
            </TransactionProvider>
          </AuthMainnetProvider>
        </AuthProvider>
      </ChakraProvider>
  )
}

export default MyApp