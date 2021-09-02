import React from "react"
import Counter from "../components/counter"

//components
import Layout from "../components/layout"

const Home = () => {
  return (
    <Layout>
      <section>
        <h1>Home page</h1>
        <Counter />
      </section>
    </Layout>
  )
}

export default Home
