const ThreeCards = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full max-w-[1200px] mx-4 md:mx-8 pt-12'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='flex-col px-4'>
            <div className='flex flex-row gap-4'>
              <img src='watch.svg' alt='watch' className='w-8 h-8' />
              <h3 className='text-xl'>Premium Quality</h3>
            </div>
            <p className='pt-4'>
            Each Casio watch is crafted with precision, ensuring long-lasting performance and style that endures.
            </p>
          </div>
          <div className='mt-8 md:mt-0 flex-col px-4'>
            <div className='flex flex-row gap-4'>
              <img src='warranty.svg' alt='warranty' className='w-8 h-8' />
              <h3 className='text-xl'>Guaranteed Warranty</h3>
            </div>
            <p className='pt-4'>
            We stand behind our products with a comprehensive warranty, giving you peace of mind with every purchase.
            </p>
          </div>
          <div className='mt-8 md:mt-0 flex-col px-4'>
            <div className='flex flex-row gap-4'>
              <img src='shipping.svg' alt='shipping' className='w-8 h-8' />
              <h3 className='text-xl'>Worldwide Shipping</h3>
            </div>
            <p className='pt-4'>
            Enjoy hassle-free shopping with our reliable worldwide shipping, bringing your favorite watches to your door.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeCards;
