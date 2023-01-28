import { url } from "../../store/shopping-cart/api";
import axios from "axios";
import { useEffect } from "react";

const findId = () => {

    const [productId, setProductId] = useState([])


    useEffect(() => {
        const req = async () => {
            try {
                const { data } = await axios.get(`${url}/product/`)
                
                const data_ = data
    
                const data__= data_.forEach(myFunction)            
                function myFunction(item, index, arr) {
                  arr[index] = item._id;
                }
    
                setProductId(data__)
            } catch (err) {
    
            }
        }
    })
    

    return (
        console.log(productId)
    )

}



