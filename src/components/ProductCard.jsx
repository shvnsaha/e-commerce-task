/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Ratings from "./Ratings";
import { FaArrowTrendUp } from "react-icons/fa6";


const ProductCard = ({ product }) => {
    return (
        <div className='col-span-1  cursor-pointer group border-2  hover:shadow-xl rounded-xl p-2'>
            <div className='flex flex-col gap-2 w-full'>
           
                <div
                    className='
            aspect-square 
            relative 
            overflow-hidden 
            rounded-xl
          '
        
                >
                     <div className='font-semibold text-xs absolute bg-blue-900 p-2 rounded-xl text-white'>{product?.category}</div>
                    <img
                        className='
                  h-full 
                  w-full 
                  group-hover:scale-110 
                  transition
            '
                        src={product?.image}
                        alt='Room'
                    />
                    <div
                        className='
            absolute
            top-3
            right-3
          '
                    ></div>
                </div>
                <div className='text-lg font-semibold text-gray-900 mb-2 line-clamp-1'>{product.title}</div>
                <p className="text-gray-700 text-sm line-clamp-2 mb-3">
                    {product.description}
                </p>
              

                <div className='flex items-center text-xs text-gray-700 justify-between'>
                <p className="text-lg font-bold text-blue-600 mb-2">${product.price}</p>
                    <div className='flex items-center text-xs text-gray-700 gap-2'>
                        <Ratings rating={product?.rating?.rate}></Ratings>
                        
                             <span>({product?.rating?.count} reviews)</span> 
                        
                    </div>
                   

                </div> 
               
                
                    <Link to={`/product/${product?.id}`} className='btn btn-outline'>View Details <FaArrowTrendUp ></FaArrowTrendUp> </Link>
                   
              
            </div>
        </div>
    );
};

export default ProductCard;