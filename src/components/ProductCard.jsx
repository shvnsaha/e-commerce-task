/* eslint-disable react/prop-types */


const ProductCard = ({product}) => {
    return (
        <div className='col-span-1  cursor-pointer group border-2  hover:shadow-xl rounded-xl p-2'>
            <div className='flex flex-col gap-2 w-full'>
                <div
                    className='
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          '
                >
                    <img
                        className='
             
               h-64 mt-3 mx-auto object-contain
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
                {/* <div className='font-semibold text-lg'>{name}</div>
                <div className='flex justify-between items-center'>
                    <div className='font-semibold text-xs text-violet-900'>{category}</div>
                    <div className='font-semibold text-xs text-violet-900'>{brand_name}</div>
                </div> */}

                {/* <div className='flex items-center text-xs text-gray-700 justify-between'>
                    <div className='flex items-center text-xs text-gray-700 gap-2'>
                        <Ratings rating={rating}></Ratings>
                        <span>{
                            rating !== 0 ? <span>({rating})</span> : <></>
                        }</span>
                    </div>
                    {
                        product_number > 0 ? <span className='text-xs text-green-900 font-semibold'>In stock</span> : <span className='text-xs text-red-900 font-semibold'>Out of stock</span>
                    }

                </div> */}
                {/* <div className='flex justify-between items-center'>
                    <div className='font-semibold flex items-center text-orange-800'><TbCurrencyTaka size={20}></TbCurrencyTaka> {price}</div>
                    {
                        discount ? <span className='text-xs text-orange-700 font-semibold'>{discount}% off</span> : <></>
                    }
                </div>
                <div className='flex justify-between items-center'>
                    <Link to={`/product/${_id}`} className='btn btn-outline'>View Details <FaArrowTrendUp ></FaArrowTrendUp> </Link>
                    <button onClick={() => handleAddCart(product._id)}><FaCartArrowDown size={20} ></FaCartArrowDown></button>
                </div> */}
            </div>
        </div>
    );
};

export default ProductCard;