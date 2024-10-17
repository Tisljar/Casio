import { useState } from 'react';
import { watches, WatchVariationType } from '../../data/watches';
import { WatchType } from '../../data/watches';
import { getColorClasses } from '../../utils/getColorClasses';

const ColorButton = ({ variation, setCurrentColor }: { variation : WatchVariationType, setCurrentColor: (variation : WatchVariationType) => void;
}) => {
  const { bgColor, borderColor } = getColorClasses(variation.color);
  return (
    <div
    className='relative h-10 w-10 flex items-center justify-center cursor-pointer'
    onClick={() => setCurrentColor(variation)}
  >
    <div className={`absolute h-10 w-10 rounded-full border-2 ${borderColor}`}></div>
    <div className={`relative h-8 w-8 rounded-full ${bgColor}`}></div>
  </div>
  );
};

const WatchSizeButton = ({ size }: { size: string }) => {
  return (
    <div className='rounded-lg border-2 border-solid p-2'>
      <p className='text-base'>{size}</p>
    </div>
  );
};

const ChangeWatchButton = ({
  watch,
  setCurrentPreview,
}: {
  watch: WatchType;
  setCurrentPreview: (watch: WatchType) => void;
}) => {
  return (
    <div
      className='flex flex-col items-center gap-4 p-2 rounded-xl border-2 border-solid border-gray-500 cursor-pointer'
      onClick={() => setCurrentPreview(watch)}
    >
      <img
        src={watch.variations[0].imgSrc}
        alt={watch.name}
        className='w-12 h-auto'
      />
      <h4 className='text-lg font-medium w-20 text-center'>{watch.name}</h4>
    </div>
  );
};

const WatchPreview = () => {
  const [currentPreview, setCurrentPreview] = useState(watches[0]);
  const [currentColor, setCurrentColor] = useState(
    currentPreview.variations[0]
  );
  const handleSetCurrentPreview = (watch: WatchType) => {
    setCurrentPreview(watch);
    setCurrentColor(watch.variations[0]);
  };
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full max-w-[1200px] mx-4 md:mx-8 pt-12'>
        <h2 className='text-2xl font-medium pb-8'>Our Models</h2>
        <div className='flex flex-col lg:flex-row items-center gap-4'>
          <div className='flex flex-col md:flex-row items center gap-4'>
          <img
            src={currentColor.imgSrc}
            alt={currentColor.name}
            className='w-[95%] max-w-[400px] h-auto'
          />
          <div className='flex flex-col w-full max-w-[500px]'>
            <h3 className='text-3xl pb-6'>{currentPreview.name}</h3>
            <p className='text-base font-light pb-4'>
              {currentPreview.description}
            </p>
            <p className='text-xl text-primary font-medium pb-2'>{currentPreview.price}</p>
            <div className='w-full max-w-[500px] h-0.5 bg-gray-600 mb-4' />
            <div className='flex flex-row gap-4 pb-6 items-center'>
              <p className='font-medium text-lg'>WATCH SIZE:</p>
              {currentPreview.sizes.map((size, index) => (
                <WatchSizeButton size={size} key={index} />
              ))}
            </div>
            <div className='flex flex-row gap-4 items-center'>
              <p className='font-medium text-lg'>COLOR:</p>
              {currentPreview.variations.map((variation, index) => (
                <ColorButton setCurrentColor={setCurrentColor} variation={variation} key={index} />
              ))}
            </div>
            </div>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-1 gap-4 mt-4 md:mt-0'>
            {watches.map((watch) => (
              <ChangeWatchButton
                key={watch.id}
                watch={watch}
                setCurrentPreview={handleSetCurrentPreview}
              />
            ))}
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default WatchPreview;
