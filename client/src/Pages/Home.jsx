import Features from '../Components/Features'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import HomeAnalytics from '../Components/HomeAnalytics'
import HomeImapct from '../Components/HomeImapct'
export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Hero />

      {/* <RotatingCard/> */}
      <HomeImapct/>
      <HomeAnalytics/>
      <Features />
      <Footer />
    </main>
  )
}
