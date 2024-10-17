const AboutSection = () => {
  return (
    <div className='w-full flex justify-center relative items-center'>
      <div className='mx-4 md:mx-8 max-w-[1200px] flex-col pt-12 pb-12 md:pt-24 relative h-full'>
        <div className='mt-12 md:mt-0 flex flex-col md:flex-row items-center relative'>
          <div className='flex-1 w-full space-y-4  pt-12 pb-12 md:pt-12'>
            <h3 className='text-2xl leading-normal md:text-2xl md:leading-normal font-medium max-w-[950px] pb-1'>
              Discover Timeless Design and Innovation with Casio Watches
            </h3>
            <p className='text-base font-light leading-relaxed md:text-base md:leading-realxed max-w-[550px]'>
              At Casio, we believe a watch is more than just a way to tell
              time—it’s an expression of personal style and innovation. Whether
              you're drawn to elegant designs, retro-inspired looks, or
              cutting-edge modern technology, we have the perfect watch for you.
            </p>
            <ul className='ml-2 font-light'>
              <li>Find watches that blend fashion and function seamlessly</li>
              <li className='pt-2'>Durable designs for every lifestyle, from casual to professional</li>
              <li className='pt-2'>Advanced technology meets timeless craftsmanship</li>
              <li className='pt-2'>A legacy of quality, precision, and style</li>
            </ul>
          </div>
          <div className='w-full flex md:flex-1 mt-0 md:mt-0 justify-center'>
            <img
              src='Clockwork.jpg'
              alt='Clockwork'
              className='w-3/4 md:w-[450px] h-auto object-cover rounded-lg'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
