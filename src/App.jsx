import React, { useEffect } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
const App = () => {

  useEffect(() => {
  
          if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
          }
    let ctx = gsap.context(() => {

      // let t1 = gsap.timeline()
      // t1.to('.sect1', { xPercent: -100 })
      //   .to('.sect2', { xPercent: -100 })
      //   .to('.sect3', { yPercent: -100 })
      //   .to('.sect4', { yPercent:-100})
      
      gsap.utils.toArray('section').forEach((section) => {
        ScrollTrigger.create({
        
          
    trigger: section,
    start: 'top top',
         
      
    pinSpacing:false,
    scrub: 1,
    pin: true,
  })
    })
    })

      return () => ctx.revert();
},[])
  return (
    <>
      <section className="grid grid-cols-2 gap-4 h-screen bg-[#AB9B88]  grid-rows-1 text-white items-center sect1">
        <div>
          <img src="/pics/img1.jpg" alt="" className="rounded-full" />
        </div>
        <div>
          <p className="text-5xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
            neque!
          </p>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-4 h-screen  bg-sky-600 grid-rows-1 text-white items-center sect2">
        <div>
          <img src="/pics/img2.jpg" alt="" className="rounded-full" />
        </div>
        <div>
          <p className="text-5xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
            neque!
          </p>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-4 h-screen bg-orange-400 grid-rows-1 text-white items-center sect2">
        <div>
          <img src="/pics/img3.jpg" alt="" className="rounded-full" />
        </div>
        <div>
          <p className="text-5xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
            neque!
          </p>
        </div>
      </section>
      <section className="grid grid-cols-2 gap-4 h-screen bg-red-600 grid-rows-1 text-white items-center sect4">
        <div>
          <img src="/pics/img4.jpg" alt="" className="rounded-full" />
        </div>
        <div>
          <p className="text-5xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
            neque!
          </p>
        </div>
      </section>
    </>
  );
}

export default App
