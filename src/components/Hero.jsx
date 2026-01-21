import { Link } from 'react-router-dom';

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
    return (
        <>
            <div className='grid lg:grid-cols-2 gap-24 items-center'>
                {/* Hero info */}
                <div>
                    <h1 className='text-4xl sm:text-5xl font-bold leading-tight'>
                        We are changing the way you think about Cyber Security
                    </h1>
                    <p className='mt-6 text-lg leading-8 text-gray-600'>
                        Our innovative solutions are designed to protect your
                        digital assets and ensure your peace of mind. Cybersecurity
                        is not just our business, it's our passion. Join us in
                        making the digital world a safer place for everyone.
                    </p>
                    <div className='mt-8 flex flex-wrap gap-4'>
                        <Link to="/products" className='btn btn-primary btn-lg'>
                            Shop Now
                        </Link>
                    </div>
                </div>
                <div className='hidden h-112 lg:flex carousel carousel-center p-4 space-x-4 bg-neutral rounded-box'>
                    {
                        carouselImages.map((image) => {
                            return <div key={image} className='carousel-item'>
                                <img src={image} className='rounded-box h-full w-70 object-cover' />
                            </div>
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Hero;