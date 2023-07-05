import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/NavbarLayout"
import { Container } from '@mui/material'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container maxWidth="lg" sx={{height:"100vh"}}>
    <Layout>
      
        <Component {...pageProps} />
      
    </Layout>
    </Container>
  )
}
