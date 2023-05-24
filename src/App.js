import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import './App.css';

import Logo from './assets/Logo.png';
import Check from './assets/check.png';
import Twitter from './assets/twitter.png';
import Linkedin from './assets/linkedin.png';
import Discord from './assets/discord.png';
import Line from './assets/Line.png';
import Sol from './assets/sol.png';
import Euk from './assets/EuK.png';
import Graph from './assets/graph.png';
import ChevronLeft from './assets/arrow 1.png';
import ChevronRight from './assets/arrow 2.png';

function App() {

  const swiperRef = useRef();
   const swiperRefTwo = useRef();

   const sliderSettings = {
      240: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      540: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      680: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    };

  return (
    <div className='backgound-custom'>
      <div className="bg-[#D88331CC] rounded-bl-[18px] rounded-br-[18px] lg:mb-16 mb-8 header-box-shadow"> 
        <div className="max-w-[1280px] flex justify-between items-center m-auto px-4 py-4">
          <a href='/' className='block pl-1'>
            <img src={Logo} alt="site-logo" className='max-w-[60px]'></img>
          </a>
          <button type='button' className='rounded-full py-4 px-5 btn-gradient font-joystix btn-box-shodow text-sm'>Select Wallet</button>
        </div>
      </div>
      <div className="p-4">
        <div className="max-w-[1180px] bg-[#D88331] section-box-shadow text-center m-auto rounded-[16px] text-white py-6 px-3">
          <h2 className='text-[14px] sm:text-[17px] lg:text-[22px] pt-2 font-joystix'>Spin and Win Your Luch</h2>
          <h2 className='text-[14px] sm:text-[17px] lg:text-[22px] pt-2 font-joystix'>Post Your Win and Stand to Win Extra NFT Prizes</h2>
          <h2 className='text-[14px] sm:text-[17px] lg:text-[22px] pt-2 font-joystix'>Our Game Have a 94% Return to Player Payout</h2>
          <div className="mt-[32px] flex items-center flex-col">
            <img src={Check} alt="l"></img>
            <p className='pt-2 font-joystix text-[14px]'>Audited by Experts</p>
            <div className="flex flex-row gap-[0.5rem] pt-2">
              <a href="/"><img src={Discord} alt="l"></img></a>
              <a href="/"><img src={Twitter} alt="l"></img></a>
              <a href="/"><img src={Linkedin} alt="l"></img></a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1180px] m-auto p-4">
        <div className="lg:mt-10 mt-6 text-white font-joystix">
          <Swiper
              grabCursor={true}
              slidesPerView={4}
              breakpoints={sliderSettings}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              speed={1200}
              spaceBetween={15}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
            >
              <SwiperSlide>
                <div className="rounded-[16px] p-4 bg-[#D88331] card-box-shadow">
                  <div className="flex justify-between">
                    <p>0.4%</p>
                    <p>rare</p>
                  </div>
                  <div className='flex items-center justify-center my-8'>
                    <img src={Sol} alt="l" className='max-w-[180px]'></img>
                  </div>
                  <p className='text-center'>2 Sol</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded-[16px] p-4 bg-[#D88331] card-box-shadow">
                  <div className="flex justify-between">
                    <p>0.4%</p>
                    <p>rare</p>
                  </div>
                  <div className='flex items-center justify-center my-8'>
                    <img src={Euk} alt="l" className='max-w-[180px]'></img>
                  </div>
                  <p className='text-center'>2 Sol</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded-[16px] p-4 bg-[#D88331] card-box-shadow">
                  <div className="flex justify-between">
                    <p>0.4%</p>
                    <p>rare</p>
                  </div>
                  <div className='flex items-center justify-center my-8'>
                    <img src={Sol} alt="l" className='max-w-[180px]'></img>
                  </div>
                  <p className='text-center'>2 Sol</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded-[16px] p-4 bg-[#D88331] card-box-shadow">
                  <div className="flex justify-between">
                    <p>0.4%</p>
                    <p>rare</p>
                  </div>
                  <div className='flex items-center justify-center my-8'>
                    <img src={Euk} alt="l" className='max-w-[180px]'></img>
                  </div>
                  <p className='text-center'>2 Sol</p>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="mt-10 flex items-center justify-center gap-[1rem]">
              <button onClick={() => swiperRef.current?.slidePrev()}>
              <img src={ChevronLeft} alt="LeftChevron" className="w-[130px]"/>
            </button>
            <button onClick={() => swiperRef.current?.slideNext()}>
              <img src={ChevronRight} alt="RightChevron" className="w-[130px]"/>
            </button>
            </div>
          </div>
      </div>
      <div className="max-w-[1180px] m-auto p-4">
        <div className="md:flex-row flex-col flex items-center justify-around lg:mt-12 mt-8 py-6 rounded-[16px] font-joystix bg-[#D88331] section-box-shadow">
          <button className='py-3 bg-[#f8d666] rounded-full px-5'>Open Box (0.1 Sol)</button>
          <div className="max-w-[24px] rotate-90 md:rotate-0">
            <img src={Line} alt="l"></img>
          </div>
          <button className='py-3 bg-[#f8d666] rounded-full px-5'>Open Box (0.1 Sol)</button>
        </div>
      </div>
      <div className="text-center max-w-[1100px] m-auto pt-16 pl-4 pr-4">
        <img src={Graph} alt="g"/>
      </div>
      <div className="bg-[#D88331CC] py-6 mt-16 text-white rounded-tl-[18px] rounded-tr-[18px] header-box-shadow flex items-center justify-center">
        <div className="flex flex-row gap-[0.75rem]">
          <a href="/"><img src={Discord} alt="l"></img></a>
          <a href="/"><img src={Twitter} alt="l"></img></a>
          <a href="/"><img src={Linkedin} alt="l"></img></a>
        </div>
      </div>
    </div>
  );
}

export default App;
