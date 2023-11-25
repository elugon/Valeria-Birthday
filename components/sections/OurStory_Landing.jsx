import Image from 'next/image'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

function OurStory_Landing() {
  let el = useRef()
  let q = gsap.utils.selector(el)

  useEffect(() => {
    gsap.set(q('.fadeIn'), { y: -5 })
    gsap.to(q('.fadeIn'), {
      delay: 1,
      autoAlpha: 1,
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'sine.inOut',
      stagger: 0.25,
    })
    return () => {}
  })
  return (
    <section className='w-screen bg-cream-light max-h-screen relative mt-0 px-14  py-24 '>
      <div className='max-w-2xl md:max-w-xl lg:max-w-8xl mx-auto' ref={el}>
        <h1 className='flex justify-center items-center font-semibold tracking-widest text-black text-2xl sm:text-4xl md:text-4xl opacity-0 fadeIn'>
          Valeria
        </h1>

        <div className='flex justify-center items-center max-h-[750px] h-screen'>
        <div className='w-full h-full opacity-0 fadeIn'>
            <Image
              placeholder='blur'
              blurDataURL={'Valeria 5.jpg'}
              src={'/img/Valeria 5.jpg'}
              alt={'Valeria 5'}
              layout={'fill'}
              objectFit={'contain'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default OurStory_Landing
