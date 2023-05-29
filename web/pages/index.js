import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [state, setState] = useState('start');
  const [theme, setTheme] = useState('');
  const [reference, setReference] = useState('');

  const Screen = () => {
    switch (state) {
      case 'start': 
        return (
          <div className='w-full md:w-1/3 bg-black text-white px-8 py-4 rounded-xl animate-flicker space-y-8'>
            <p className='text-white'>Press Start</p>
            <div className='w-fit px-8 py-4 animate-rainbow border-2 rounded-xl cursor-pointer hover:shadow-glitch' onClick={() => setState('theme')}>
                <p className='text-2xl text-white'>Start</p>
            </div>
          </div>
        )
      case 'theme':
        return (
          <div className='w-full md:w-1/3 bg-black text-white px-8 py-4 rounded-xl animate-flicker'>
            <p className='text-white text-2xl'>Select a theme</p>
            <div className={`${theme == 'minecraft' ? 'bg-paleBlue' : 'bg-darkBlue'} hover:bg-paleBlue`} onClick={() => setTheme('minecraft')}>
              <p>Minecraft</p>
            </div>
            <div className={`${theme == 'pokemon' ? 'bg-paleBlue' : 'bg-darkBlue'} hover:bg-paleBlue`} onClick={() => setTheme('pokemon')}>
              Pokemon
            </div>
            <div className={`${theme == 'own' ? 'bg-paleBlue' : 'bg-darkBlue'} hover:bg-paleBlue`} onClick={() => setTheme('own')}>
              Choose your own theme
            </div>
            <div className='w-full flex flex-row justify-between items-baseline'>
            <div className='w-fit h-fit px-8 py-4 animate-rainbow border-2 rounded-xl cursor-pointer hover:shadow-glitch' onClick={() => setState('start')}>
                <p className='text-2xl text-white'>Back</p>
            </div>
            {
              theme !== '' ? (
                <div className='w-fit px-8 py-4 animate-rainbow border-2 rounded-xl cursor-pointer hover:shadow-glitch mt-8' onClick={() => setState(theme)}>
                  <p className='text-2xl text-white'>Next</p>
                </div>
              ) : (
                <></>
              )
            }
            </div>
          </div>
        )
      case 'minecraft':
        return (
          <div className='w-full md:w-1/3 bg-black text-white px-8 py-4 rounded-xl animate-flicker flex flex-col items-center'>
            <p className='text-white text-2xl'>Minecraft AI Avatar</p>
            <div className='flex flex-row flex-wrap justify-evenly py-4 w-full'>
              <div onClick={() => setReference('Alex')} className='cursor-pointer'>
                <Image src='/alex_head.jpg' width={100} height={100} />
                <p>Alex Model</p>
              </div>
              <div onClick={() => setReference('Steve')} className='cursor-pointer'>
                <Image src='/steve_head.jpeg' width={100} height={100} />
                <p>Steve Model</p>
              </div>
            </div>
            <p>{reference} selected</p>
            <div className='w-full flex flex-row items-baseline justify-between'>
            <div className='w-fit h-fit px-8 py-4 animate-rainbow border-2 rounded-xl cursor-pointer hover:shadow-glitch' onClick={() => setState('theme')}>
              <p className='text-2xl text-white'>Back</p>
            </div>
            {
              reference !== '' ? (
                <div className='w-fit h-fit px-8 py-4 animate-rainbow border-2 rounded-xl cursor-pointer hover:shadow-glitch mt-8' onClick={() => {}}>
                  <p className='text-2xl text-white'>Generate</p>
                </div>
              ) : (
                <></>
              )
            }
            </div>
          </div>
        )
      case 'pokemon':
        return (
          <div className='w-full md:w-1/3 bg-black text-white px-8 py-4 rounded-xl animate-flicker flex flex-col items-center'>
          <p className='text-white text-2xl'>Pokemon Generator</p>
          <div className='w-full flex flex-row items-baseline justify-between'>
          <div className='w-fit h-fit px-8 py-4 animate-rainbow border-2 rounded-xl cursor-pointer hover:shadow-glitch' onClick={() => setState('theme')}>
              <p className='text-2xl text-white'>Back</p>
            </div>
            {
              reference !== '' ? (
                <div className='w-fit h-fit px-8 py-4 animate-rainbow border-2 rounded-xl cursor-pointer hover:shadow-glitch mt-8' onClick={() => {}}>
                  <p className='text-2xl text-white'>Generate</p>
                </div>
              ) : (
                <></>
              )
            }
            </div>
        </div>
        )
      case 'own':
        return (
          <div className='w-full md:w-1/3 bg-black text-white px-8 py-4 rounded-xl animate-flicker flex flex-col items-center space-y-4'>
          <p className='text-white text-2xl'>Enter a prompt</p>
          <input type='text' className='bg-gray-800 text-white py-2 px-4'/>
          <div className='w-full flex flex-row items-baseline justify-between'>
          <div className='w-fit h-fit px-8 py-4 animate-rainbow border-2 rounded-xl cursor-pointer hover:shadow-glitch' onClick={() => setState('theme')}>
              <p className='text-2xl text-white'>Back</p>
            </div>
            {
              reference !== '' ? (
                <div className='w-fit h-fit px-8 py-4 animate-rainbow border-2 rounded-xl cursor-pointer hover:shadow-glitch mt-8' onClick={() => {}}>
                  <p className='text-2xl text-white'>Generate</p>
                </div>
              ) : (
                <></>
              )
            }
            </div>
        </div>
        )
      default:
        return (
          <div className='w-full md:w-1/3 bg-black text-white px-8 py-4 rounded-xl animate-flicker flex flex-col items-center'>
            <p className='text-2xl text-white' onClick={() => setState('theme')}>Start</p>
        </div>
        )
    }
  }

  return (
    <div>
      <Head>
        <title>MintAI on Solana</title>
        <meta name="description" content="Mint an AI Picture on Solana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='bg-gradient min-h-screen w-screen bg-contain px-24 py-12 space-y-8'>
        <h1 className='text-white text-2xl md:text-4xl font-bold text-center'>MintAI on Solana</h1>
        <div className='w-full border-white border-2 shadow-glitch py-8 px-8 md:px-16 h-full md:h-2/3 flex flex-col justify-between rounded-xl'>
          <div className='w-full flex flex-row flex-wrap-reverse md:flex-wrap space-x-8'>
            <div className='w-full h-fit md:w-1/3 space-y-8 '>
              <p className='leading-relaxed shadow-xl md:px-4 py-2'>Want a unique digital art piece on Solana? Answer some prompts, get an AI-generated image, minted on the Solana blockchain. Show off or sell it! Start now and see what AI can create for you! 🎨</p>
              <div className='flex flex-col space-y-4'>
                <p>Created by Amy Qin</p>
                <a href='https://twitter.com/0xSolanaGirl' className='underline text-paleBlue w-fit'>My Twitter</a>
                <a href='https://github.com/solanagirl' className='underline text-paleBlue w-fit'>My GitHub</a>
              </div>
            </div>
            <Screen></Screen>
          </div>
          <Image src='/ender_dragon.png' width={602} height={442} className='animate-bounce absolute right-0 px-4 w-1/4'></Image>
        </div>
      </div>
    </div>
  )
}
