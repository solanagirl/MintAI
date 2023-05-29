import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Title your project</title>
        <meta name="description" content="Description of your project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className='text-4xl text-center font-bold'>Week 1 Setup Complete</p>
    </div>
  )
}
