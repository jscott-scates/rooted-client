import "@/styles/globals.css";

export default function TheRootedDeck({ Component, pageProps }) {
  //Use layout defined at the page level, if available

  const getLayout = Component.getLayout || ((page)=>page)

  return getLayout(
    <Component {...pageProps} />
  )
}
