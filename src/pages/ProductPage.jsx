import axios from "axios";
import { ScaleLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ProductDetail from "../components/ProductDetail";

const ProductPage = () => {
  const { id } = useParams();
  const { data: product = {}, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      return res?.data;
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <ScaleLoader size={100} color="red" />
      </div>
    );

  return <ProductDetail product={product} />;
};

export default ProductPage;