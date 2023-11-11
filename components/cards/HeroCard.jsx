import React from 'react';
import Image from 'next/image';
const HeroCard = ({ data, key }) => {
    return (
        <div key={key} className='relative object-cover cardBeforeEffect object-center  bg-black h-[380px]' style={{ backgroundImage: `url(${data?.image})` }}>
            <div className='absolute bottom-0 p-3 pb-5 text-white'>
                <div className='flex items-center'>
                    <div>
                        <h4 className='text-lg'>South Asia</h4>
                    </div>
                    <div className='px-3'>
                        <Image
                            src={"/assets/icons/Line 2.png"}
                            alt="Save"
                            width={50}
                            height={15}
                        />
                    </div>
                </div>
                <h2 className='text-4xl font-bold'>{data.country}</h2>
                <p className='font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin interdum parturient amet libero.</p>
            </div>
        </div>
    )
}
export default HeroCard