import { ambassadors, AmbassadorType } from '../../data/ambassadors';

const Ambassador = ({ ambassador } : {ambassador: AmbassadorType}) => {
    return (
        <div className='max-w-[350px] flex flex-col px-6 py-10 items-center text-center  rounded-xl border-2 border-primary'>
            <img src={ambassador.imgSrc} alt={ambassador.name} className='w-[175px] h-auto' />
            <h3 className='text-xl font-medium pt-4'>{ambassador.name}</h3>
            <p className='pt-4'>{ambassador.description}</p>
        </div>
    );
}

const Ambassadors = () => {
  return (
          <div className='w-full flex justify-center'>
            <div className='w-full max-w-[1200px] mx-4 md:mx-8 pt-12'>
                <h2 className='text-2xl font-medium pb-8'>Our Ambassadors</h2>
              <div className='flex flex-col items-center lg:flex-row gap-4 justify-between'>
              {ambassadors.map((ambassador) => (
                        <Ambassador key={ambassador.id} ambassador={ambassador} />
                    ))}
              </div>
            </div>
          </div>
        );
      };
      

export default Ambassadors

