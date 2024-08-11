import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Section from './components/Section'
import LatestPost from './components/LatestPost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Header />
      <Banner />
      <LatestPost />
      <Section />
    </main>
  )
}

export default App
