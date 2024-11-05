/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ProductCard from "./ProductCard";


const ProductList = ({ category, searchTerm }) => {


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


    console.log(searchProducts);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;