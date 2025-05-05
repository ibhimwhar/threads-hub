import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { ValueContext } from '../component/Context';

const Shop = () => {
    const [selectedImages, setSelectedImages] = useState({});

    const handleThumbnailClick = (productId, image) => {
        setSelectedImages((prev) => ({
            ...prev,
            [productId]: image,
        }));
    };

    const { Products } = useContext(ValueContext);

    return (
        <div className='py-30 md:py-50 bg-[#f1f5f9] text-[#0f172a]'>
            <h1 className='text-2xl font-semibold text-center mt-10'>Shop</h1>
            <p className='text-center mt-4'>Explore our collection of threads and accessories.</p>

            <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6'>
                {Products.map((product, index) => {
                    const currentImage = selectedImages[product.id] || product.imageUrl[0];

                    return (
                        <React.Fragment key={product.id}>
                            <div className='p-3 hover:ring-1 ring-[#38bdf8] transition duration-300 bg-[#f1f5f9]/60 backdrop-blur-md border rounded-2xl border-[#e2e8f0]'>
                                <img
                                    src={currentImage}
                                    alt={product.name}
                                    className="w-full h-64 object-cover rounded-lg"
                                />

                                <div className="bg-white p-3 rounded-xl mt-4 flex flex-col gap-4">
                                    <div className='grid grid-cols-5'>
                                        {product.imageUrl.map((image, index) => (
                                            <img
                                                key={index}
                                                src={image}
                                                alt={`${product.name} thumbnail ${index + 1}`}
                                                onClick={() => handleThumbnailClick(product.id, image)}
                                                className={`w-10 h-10 object-cover rounded-lg border cursor-pointer transition-all duration-200 ${currentImage === image
                                                    ? 'border-[#38bdf8] ring-1 ring-[#38bdf8]'
                                                    : 'border-gray-200'
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    <h2 className="text-xl font-semibold">{product.name}</h2>

                                    <div className='flex justify-between items-center'>
                                        <span className="font-semibold text-black">
                                            ${product.price.toFixed(2)} USD
                                        </span>

                                        <Link to={`/shop/product/${product.id}`}>
                                            <button className='bg-[#38bdf8] text-white cursor-pointer text-sm px-4 py-2 rounded-lg mt-2 hover:bg-[#38bdf8]/80 transition duration-200'>
                                                View Product
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {index === 1 && (
                                <div className="p-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-2xl shadow-md">
                                    <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl h-full flex flex-col justify-between">
                                        <div>
                                            <h2 className="text-xl font-bold">🚨 Limited Drop Alert</h2>
                                            <p className="mt-2 text-sm text-white/90">
                                                Get ready for something special coming soon.
                                            </p>
                                        </div>
                                        <Link to="/about">
                                            <button className="bg-white text-blue-500 cursor-pointer px-4 py-2 rounded-lg mt-4 hover:bg-gray-200 transition duration-200">
                                                Know More
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default Shop;
