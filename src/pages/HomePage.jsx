import { Helmet } from "react-helmet-async";


const HomePage = () => {
    return (
        <div className="max-w-7xl mx-auto my-10">
            <Helmet>
                <title>Home | E-commerce</title>
            </Helmet>
            <h1 className="mx-3 lg:mx-0 text-xl md:text-2xl text-center md:text-left font-semibold">
                E-Commerce Product Browser
            </h1>
            {/* <SearchFilter handleSearch={handleSearch} setCategory={setCategory} />
            <ProductList category={category} searchTerm={searchTerm} /> */}
        </div>
    );
};

export default HomePage;