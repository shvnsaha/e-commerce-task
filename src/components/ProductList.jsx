/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";


const ProductList = ({ category, searchTerm }) => {

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(6);


    const productUrl = category === "All" ? "https://fakestoreapi.com/products" : `https://fakestoreapi.com/products/category/${category}`;

    const { data: products = [], isLoading } = useQuery({
        queryKey: ["product", category],
        queryFn: async () => {
            const { data } = await axios.get(productUrl);
            return data;
        },
    });

    const searchProducts = products?.filter((product) => {
        const matchProducts = product.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchProducts;
    });

    const totalProducts = searchProducts.length;
    const totalPages = Math.ceil(totalProducts / limit);
    const productsPerPage = searchProducts.slice(
      (page - 1) * limit,
      page * limit
    );
  
    useEffect(() => {
      setPage(1);
    }, [category, searchTerm]);


    console.log(searchProducts);


    const Pginetionclass =
    "join-item  btn text-lg font-bold hover:bg-green-600 hover:text-white font-Montserrat bg-green-200";

    if (isLoading) {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="p-4 border rounded shadow animate-pulse">
                <div className="h-48 w-full bg-gray-300 mb-2 rounded"></div>
                <div className="h-6 w-3/4 bg-gray-300 mb-2 rounded"></div>
                <div className="h-4 w-1/2 bg-gray-300 mb-1 rounded"></div>
                <div className="h-6 w-1/4 bg-gray-300 mb-2 rounded"></div>
                <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        );
      }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {productsPerPage.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            {
                productsPerPage.length > 0 ? 
                <div className="paginetion flex mb-20">
                <div className="join border-green-300 border mx-auto ">
                    <button
                        onClick={() => setPage((old) => old - 1)}
                        disabled={1 === page}
                        className={`${Pginetionclass} disabled:bg-green-100`}
                    >
                        «
                    </button>
                    {[...Array(Math.ceil(totalPages)).keys()].map(
                        (ele) => {
                            return (
                                <button
                                    onClick={() => setPage(ele + 1)}
                                    key={ele + 1}
                                    className={`${Pginetionclass} ${ele + 1 === parseInt(page) ? "bg-yellow-300" : ""
                                        } `}
                                >
                                    {ele + 1}
                                </button>
                            );
                        }
                    )}

                    <button
                        onClick={() => setPage((old) => old + 1)}
                        disabled={page === Math.ceil(totalPages)}
                        className={`${Pginetionclass} disabled:bg-green-100`}
                    >
                        »
                    </button>
                </div>
            </div> : 
            (
                <p className="flex justify-center items-center h-[67vh] text-red-500">
                  No product found!
                </p>
              )
            }
        </div>
    );
};

export default ProductList;