import minimal from '/images/minimal.jpg';
import { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  const options = {
    threshold: 1, 
  };

  const { ref } = useInView(options);

  
  if (!isInView && elementRef.current) {
    const { top, bottom } = (elementRef.current as HTMLElement).getBoundingClientRect();
    if (top < window.innerHeight && bottom >= 0) {
      setIsInView(true);
    }
  }

  return (
    <div className="sticky top-0 xl:bg-fixed bg-center bg-cover px-[10%] " style={{backgroundImage: `url(${minimal})`}} >
      <div >
        <h2 className="py-[5%] font-extrabold text-[42px] md:text-[48px] text-center">Some of my latest work.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10%] py-[5%]">
          <div ref={(el) => {
              ref(el);
              elementRef.current = el;
              }} >
           <a href="https://github.com/Cryxuz/e-commerce-mern" target='_blank'><img style={{ opacity: isInView ? 1 : 0, transition: 'opacity 3s' }} className="mx-auto rounded-xl w-[80%]" src="images/tailoredtails.jpg" alt="tailored-tails project" /></a> 
          </div>
          
          <div>
          <h2 className="text-center lg:text-left text-4xl md:text-[40px] font-semibold hover:text-emerald-400"><a href="https://tailored-tails.onrender.com" target="_blank">Tailored Tails <span className="text-2xl">(Pair Programming)</span></a></h2>
          <br />
            <p className="text-center  lg:text-left md:text-2xl">Tailored Tails, an e-commerce webpage built using the MERN stack, focuses on user authentication & authorization using JWT-auth, user security using bcrypt, Redux and connecting to Stripe for payments</p>
            <br />
            <ul className="hidden lg:flex flex-wrap items-center space-x-2 gap-[5px]">
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ HTML</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ Tailwind CSS</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ JavaScript</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ React</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ Express</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ NodeJs</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ TypeScript</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ MongoDB</li>
            </ul>
          </div>
        </div>
        {/* Burger Dash  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10%] py-[5%]">
            <div >
              <div >
              {/* hidden md */}
              <div>
               <a href="https://burgerdash.netlify.app/" target='_blank'><img style={{ opacity: isInView ? 1 : 0, transition: 'opacity 3s' }} className="mx-auto rounded-xl w-[80%] block md:hidden my-[14%]" src="/images/burger-dash.jpg" alt="burger dash restaurant" /></a> 
              </div>
              {/*  */}
              <h2 className="text-center lg:text-left text-4xl md:text-[40px] font-semibold hover:text-emerald-400"><a href="https://burgerdash.netlify.app/" target="_blank">Burger Dash <span className="text-2xl">(Pair Programming)</span></a></h2>
              <br />
                <p className="md:text-2xl lg:text-left text-center ">
                This small restaurant project primarily emphasizes front-end development, reservation management, and the secure storage of reservation data in the database using SERN stack. </p>
                <br /> 
                <ul className="hidden lg:flex flex-wrap items-center space-x-2 gap-[5px]">
                  <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ HTML</li>
                  <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ CSS</li>
                  <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ JavaScript</li>
                  <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ React</li>
                  <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ Express</li>
                  <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ NodeJs</li>
                  <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ TypeScript</li>
                  <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ SQLite3</li>
                  <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ TailwindCSS</li>
                </ul>
                </div>
              </div>
              {/* hidden 0px */}
              <div style={{ opacity: isInView ? 1 : 0, transition: 'opacity 3s' }}>
               <a href="https://burgerdash.netlify.app/" target='_blank'><img style={{ opacity: isInView ? 1 : 0, transition: 'opacity 3s' }} className="mx-auto rounded-xl hidden md:block" src="images/burger-dash.jpg" alt="burger dash restaurant" /></a> 
              </div>
              {/*  */}
              
            </div>
          {/* TODO Project */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[10%] py-[5%]">
          <div>
           <a href="http://paul-tan-to-do-list.devacademy.nz/" target='_blank'><img style={{ opacity: isInView ? 1 : 0, transition: 'opacity 3s' }} className="mx-auto rounded-xl w-[80%]" src="images/todo.jpg" alt="todo project" /></a> 
          </div>
          
          <div>
          <h2 className="text-center lg:text-left text-4xl md:text-[40px] font-semibold hover:text-emerald-400"><a href="http://paul-tan-to-do-list.devacademy.nz/" target="_blank">Todo List <span className="text-2xl">(Solo)</span></a></h2>
          <br />
            <p className="text-center  lg:text-left md:text-2xl">Introducing my user-friendly todo list, designed to effortlessly assist you in managing your daily tasks and priorities, so you can stay organized and boost your productivity with ease.</p>
            <br />
            <ul className="hidden lg:flex flex-wrap items-center space-x-2 gap-[5px]">
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ HTML</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ CSS</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ JavaScript</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ React</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ Express</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ NodeJs</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ TypeScript</li>
              <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ SQLite3</li>
            </ul>
          </div>
        </div>
        {/* END */}
        {/* TIFFs Donut Project */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10%] py-[5%]">
            <div>
              {/* hidden md */}
              <div>
               <a href="https://tiffs-donuts.devacademy.nz/" target='_blank'><img style={{ opacity: isInView ? 1 : 0, transition: 'opacity 3s' }} className="mx-auto rounded-xl w-[80%] block md:hidden my-[14%]" src="/images/donut.jpg" alt="donut homepage" /></a> 
              </div>
              {/*  */}
              <h2 className="text-center lg:text-left text-4xl md:text-[40px] font-semibold hover:text-emerald-400"><a href="https://tiffs-donuts.devacademy.nz/" target="_blank">Tiffs Donut <span className="text-2xl">(Group Project)</span></a></h2>
              <br />
                <p className="text-center lg:text-left md:text-2xl">
                  This donut shop group project primarily centers around the acquisition and application of skills related to threeJS and tailwind, with a strong emphasis on learning and practical application. </p>
                <br /> 
                <ul className="hidden lg:flex flex-wrap items-center space-x-2 gap-[5px]">
                  <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ HTML</li>
                  <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ CSS</li>
                  <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ JavaScript</li>
                  <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ React</li>
                  <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ Express</li>
                  <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ NodeJs</li>
                  <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ TypeScript</li>
                  <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ SQLite3</li>
                  <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ ThreeJS</li>
                  <li className="bg-green-500 rounded-full py-1 px-3 text-white">▷ TailwindCSS</li>
                </ul>
              </div>
             
              <div>
               <a href="https://tiffs-donuts.devacademy.nz/" target='_blank'><img style={{ opacity: isInView ? 1 : 0, transition: 'opacity 3s' }} className="mx-auto rounded-xl hidden md:block" src="images/donut.jpg" alt="donut homepage" /></a> 
              </div>
            
            </div>
      </div>
    </div>
  )
}

export default Projects