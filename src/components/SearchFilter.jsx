/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const SearchFilter = ({ setSearchTerm, setCategory, searchTerm }) => {

    return (
        <>
            <div className="banner h-52 bg-blend-overlay rounded-lg" >
                <h2 className='text-2xl text-center ml-2 sm:ml-0 lg:text-5xl font-bold text-green-600 pt-10' >Find Your Desired Product</h2>
                <div className='flex flex-col sm:flex-row justify-between  pt-8 items-center' >
                    <input id="search" type="text" placeholder='Search Here' className='w-[50%] md:w-[30%] h-[50px] p-3 rounded-full border-2 border-[#DEDEDE]' onChange={(e)=>setSearchTerm(e.target.value)} />
                    <div>
                        <div className='flex gap-2 rounded-sm items-center'>
                            <label className="text-lg font-semibold">
                                Sort:
                            </label>
                            <select 
                            onChange={(e)=>setCategory(e.target.value)}
                            className=" select max-w-xs focus:outline-none text-base font-medium border-green-700   select-bordered w-full "
                            >
                                <option value="All">All</option>
                                <option value="electronics">Electronics</option>
                                <option value="jewelery">Jewelery</option>
                                <option value="men's clothing">Men's Clothing</option>
                                <option value="women's clothing">Women's Clothing</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

          
        </>
    );
};

export default SearchFilter;