import { useParams } from "react-router-dom";


const ProductPage = () => {
    const { id } = useParams();
    return (
        <div>
             {id} 
        </div>
    );
};

export default ProductPage;