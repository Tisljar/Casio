const Hero = () => {
  return (
    <div className=' bg-black w-full flex justify-center relative items-center min-h-dvh'>
      <div className='w-full absolute top-0 left-0 flex justify-center'>
        <div className='w-full max-w-[1200px] mx-4 md:mx-8'>
          <img
            src='Casio-logo.svg'
            alt='Casio Logo'
            className='w-20 h-20'
          />
        </div>
      </div>
      <div className='mx-4 md:mx-8 max-w-[1200px] flex-col pt-12 pb-12 md:pt-32 relative h-full'>
        <div className='mt-12 md:mt-0 flex flex-col md:flex-row items-start relative'>
          <div className='flex-1 w-full text-white space-y-4  pt-12 pb-12 md:pt-20'>
            <h1 className='text-4xl leading-normal md:text-5xl md:leading-normal font-medium max-w-[950px] pb-2'>
              Discover The Latest Brand Watches
            </h1>
            <p className='text-lg leading-relaxed md:text-lg md:leading-realxed max-w-[550px] pb-2'>
              At Casio you can find a watch that suits you. If you are looking
              for elegance, a retro feel or something modern there is something
              for everyone
            </p>
            <button className='px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-gray-800'>
              Check out our collection
            </button>
          </div>
          <div className='w-full md:flex-1 mt-8 md:mt-0'>
            <div className='mt-0 mb:mt-20 flex justify-center md:justify-center'>
              <img
                src='Hero-Casio.png'
                alt='Casio Watch'
                className='w-3/4 md:w-[450px] h-auto object-cover rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
