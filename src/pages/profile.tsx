import React from 'react';

export default function profile() {
  return (
    <div>
      <div className='relative mb-[160px] flex flex-col bg-background lg:pl-[68px] pl-[50px] pt-[80px] md:mb-[70px] lg:pb-[150px] md:pb-10'>
        <div className=' absolute bottom-[10px] left-0 flex text-5xl md:p-10 lg:p-[90px] lg:text-7xl'>
          <span className='text-white select-none  '>Profile</span>
        </div>
      </div>
      <div className='px-[30px] md:px-[50px] '>
        <div className='z-0 mb-20 rounded-[50px] bg-grey px-[50px]  md:px-[30px]'>
          <div className='flex flex-col lg:flex-row lg:pl-[0px] lg:pt-4 lg:pb-4   pb-10 '>
            <div className='mt-[-150px] flex flex-col'>
              <div className='h-[250px] w-[250px] select-none self-center rounded-full border-4 border-red bg-background lg:self-start'></div>
              <div className='flex flex-col  lg:w-[500px] lg:pl-[20px] '>
                <p className='text-white flex select-none flex-wrap self-center text-center lg:text-[50px] text-[30px] font-bold lg:self-start lg:text-left'>
                  Amuse Bouche Sharma
                </p>
                <p className='text-white flex select-none flex-wrap self-center lg:text-[20px] text-[15px] lg:self-start'>
                  Hello I am a keen enthusiast in Machine Learning, Meko IG mein
                  lelo plz I do bohot saara machine learning with my machine.{' '}
                </p>
              </div>
            </div>
            <div className='h-[2px] w-auto bg-red lg:h-[400px] lg:self-center lg:w-[2px] m-6 '></div>
            <div className='flex grow flex-col justify-center gap-[8px] self-center   lg:w-[200px] lg:pl-[30px] lg:pr-[30px] '>
              <div className='mr-[10px] flex flex-row gap-[10px] rounded-[25px] bg-black2  p-6 md:rounded-[50px]'>
                <p className='text-white select-none font-bold text-[15px] '>
                  College:
                </p>
                <p className='text-white select-none sm:text-[15px] text-right'>
                  IIT BHU, they hate your guts
                </p>
              </div>
              <div className='mr-[10px] flex flex-row gap-[10px] rounded-[25px] bg-black2 p-6 md:rounded-[50px]'>
                <p className='text-white select-none  font-bold text-[15px] '>
                  Email-id:
                </p>
                <p className='text-white select-none text-[15px] text-right'>
                  random.mat 22@itbhu.ac.in
                </p>
              </div>

              <div className='mr-[10px] flex flex-row gap-[15px] rounded-[25px] bg-black2 p-6 md:rounded-[50px]'>
                <p className='text-white select-none  font-bold text-[15px] '>
                  Phone No:
                </p>
                <p className='text-white select-none text-right text-[15px]'>
                  9004189582
                </p>
              </div>
              <div className='mr-[10px] flex flex-row gap-[10px] rounded-[25px] bg-black2 p-6 md:rounded-[50px]'>
                <p className='text-white select-none font-bold text-[15px] '>
                  Address:
                </p>
                <p className='text-white select-none text-right '>
                  At home, IITB, Powai, Bombay
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto mb-[100px] flex w-[100px] items-center justify-center rounded-full bg-red p-6 md:w-[200px] md:p-6 lg:w-[393px] lg:p-6 '>
        <button className='sm:text-xl lg:text-4xl'>Dashboard</button>
      </div>
    </div>
  );
}