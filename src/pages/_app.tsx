import '../styles/globals.css'
import type { AppProps } from 'next/app'

console.log("You wont find anything useful here\nInspired from 90s websites designs that use only basic html, but in js\n\nand yes, too lazy to design my own website")

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
