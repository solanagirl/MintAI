import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>MintAI on Solana</title>
        <meta name="description" content="Mint an AI Picture on Solana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='bg-blueTheme h-screen w-screen bg-contain px-24 py-12 space-y-8'>
        <h1 className='text-white text-2xl md:text-4xl font-bold text-center'>MintAI on Solana</h1>
        <div className='w-full bg-blue-300 py-8 px-16 h-2/3 flex flex-col justify-between rounded-xl'>
          <div className='w-full flex flex-row justify-between flex-wrap'>
            <div className='w-full h-fit md:w-1/3 space-y-8'>
              <p className='leading-relaxed shadow-xl px-4 py-2'>Want a unique digital art piece on Solana? Answer some prompts, get an AI-generated image, minted on the Solana blockchain. Show off or sell it! Start now and see what AI can create for you! 🎨</p>
              <div className='w-fit px-8 py-4 border-blue-800 bg-blue-500 border-2 rounded-xl cursor-pointer hover:shadow-lg'>
              <p className='text-2xl text-white'>Start</p>
            </div>
            <div className='flex flex-col space-y-4'>
              <p>Created by Amy Qin</p>
              <a href='https://twitter.com/0xSolanaGirl' className='underline text-blue-500 w-fit'>My Twitter</a>
              <a href='https://github.com/solanagirl' className='underline text-blue-500 w-fit'>My GitHub</a>
            </div>
            </div>
            <Image src='/ender_dragon.png' width={602} height={442}></Image>
          </div>
        </div>
      </div>
    </div>
  )
}
