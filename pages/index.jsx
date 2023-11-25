import Head from 'next/head'
// Sections
import Landing from '@sections/Landing'
import Details from '@sections/Details'
import Rules from '@sections/Rules'
import OurStory from '@sections/OurStory'
import Footer from '@sections/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Valeria</title>
      </Head>

      <main>
        <Landing />
        <div className=' flex-col justify-end py-12 w-full h-full font-black  hidden sm:flex lg:hidden'>
          <h1 className=' self-center text-black xl:scale-125 pr-20  z-20'>
            <span className='block text-8xl'>Valeria</span>
            <span className='block text-right text-3xl -mr-16 relative'>15s Birthday</span>
          </h1>
        </div>
        <OurStory num={'01'} />
        <Details num={'02'} />
        <Rules num={'03'} />
        <Footer />
      </main>
    </div>
  )
}
