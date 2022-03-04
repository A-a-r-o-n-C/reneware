import { Head, BlitzLayout } from "blitz"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

const Layout: BlitzLayout<{ title?: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "reneware"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
