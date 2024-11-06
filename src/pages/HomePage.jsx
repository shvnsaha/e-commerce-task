import { Helmet } from "react-helmet-async";
import SearchFilter from "../components/SearchFilter";
import { useState } from "react";
import ProductList from "../components/ProductList";


const HomePage = () => {
    const [category, setCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="max-w-7xl mx-auto my-10">
            <Helmet>
                <title>Home | E-commerce</title>
            </Helmet>
            <SearchFilter setSearchTerm={setSearchTerm} setCategory={setCategory} searchTerm={searchTerm}/>
            <ProductList category={category} searchTerm={searchTerm} />
        </div>
    );
};

export default HomePage;