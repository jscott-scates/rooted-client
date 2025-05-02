import Layout from '../components/layout'
import Navbar from '../components/navbar'
// import landing from './landing'

export default function Index() {
  return (
    <>
      <div className='container text-center mx-auto mt-8 p6'>
        <div>
          Image Placeholder
        </div>
        <div>
          <div><h1>the rooted deck</h1></div>
          <div>Draw inward.</div>
        </div>
        <div>
          <button className="bg-goldenbrown hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded-full">Begin Your Journey</button>
          <button className="bg-goldenbrown hover:bg-emerald-900 text-white font-bold py-2 px-4 rounded-full" >Draw a Card</button>
        </div>
        <div className='flex flex-row'>
          <div>
            <h1>What is The Rooted Deck?</h1>
            <h3>A reflection tool that blends modern journaling with the wisdom of cards.</h3>
          </div>
          <div>
            Image Placeholder #2
          </div>
        </div>
        <div>
          <div>
            <h1>How it Works</h1>
            <div>
              Image Placeholder #3
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}