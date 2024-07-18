import { CartContextProvider } from "@/components/CartContext";
import { ThemeContextProvider } from '@/components/ThemeContext'
import Head from 'next/head'
import '@/styles/switcher.scss'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Business Website</title>
      </Head>
      <CartContextProvider>
        <ThemeContextProvider>
          <Component {...pageProps} />
        </ThemeContextProvider>  
      </CartContextProvider>
    </>
  )
}
