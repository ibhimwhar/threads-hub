import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router';
import Products from '../products container/Products';
import { ValueContext } from '../component/Context';

const ProductDetails = () => {
    const { id } = useParams();
    const product = Products.find((item) => item.id.toString() === id);

    const [selectedImage, setSelectedImage] = useState(product?.imageUrl[0]);

    if (!product) {
        return (
            <div className="py-30 text-center min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl font-semibold">Product not found</h2>
                <p className="mt-2">Please check the link or return to the <a href="/shop" className='text-[#38bdf8]'>shop</a>.</p>
            </div>
        );
    }

    const { addToCart } = useContext(ValueContext);



    return (
        <div className="max-w-6xl mx-auto px-6 py-30 md:grid md:grid-cols-2 gap-10">
            {/* Main Image */}
            <div>
                <img
                    src={selectedImage}
                    alt={product.name}
                    className="w-full h-[300px] md:h-[500px] object-cover rounded-xl shadow-md"
                />
                <div className="flex justify-center gap-3 mt-4">
                    {product.imageUrl.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`thumbnail-${index}`}
                            onClick={() => setSelectedImage(image)}
                            className={`w-14 h-14 object-cover rounded-lg cursor-pointer border ${selectedImage === image
                                ? 'border-[#38bdf8] ring-2 ring-[#38bdf8]'
                                : 'border-gray-200'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Product Info */}
            <div className='mt-5 md:mt-0'>
                <div className="sticky top-30 flex flex-col gap-6">
                    <h1 className="text-3xl font-bold text-[#0f172a]">{product.name}</h1>
                    <p className="text-lg">${product.price.toFixed(2)} USD</p>
                    <p >
                        {product.description || "No description available, but it's fire 🔥."}
                    </p>


                    {/* View in Cart Button */}
                    <button onClick={() => addToCart(product)} className="cursor-pointer bg-[#38bdf8] text-white font-medium px-6 py-3 rounded-lg mt-4 hover:bg-[#38bdf8]/80 transition">
                        Add to Cart
                    </button>

                </div>
            </div>

            {/* Other Products */}
            <div className="col-span-2 mt-20">
                <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Products.filter((item) => item.id !== product.id).slice(0, 3).map((relatedProduct) => (
                        <Link key={relatedProduct.id} to={`/shop/product/${relatedProduct.id}`}>
                            <div className="p-3 hover:ring-1 ring-[#38bdf8] transition duration-300 bg-[#f1f5f9]/60 backdrop-blur-md border rounded-2xl border-[#e2e8f0]">
                                <img
                                    src={relatedProduct.imageUrl[0]}
                                    alt={relatedProduct.name}
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                                <h3 className="text-xl font-semibold mt-4">{relatedProduct.name}</h3>
                                <p className="text-lg">${relatedProduct.price.toFixed(2)} USD</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
