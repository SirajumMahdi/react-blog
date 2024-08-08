import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import PostCard from './components/PostCard'
import Section from './components/Section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Header />
      <Banner />
      <PostCard />
      <Section />
    </main>
  )
}

export default App
