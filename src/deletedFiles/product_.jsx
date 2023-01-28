// // all images imported from images directory

// import React, { useContext } from "react";
// import ProductContext from "../../context/ProductProvider";

// import airpods from "../images1/airpods.jpg";
// import alexa from "../images1/alexa.jpg";
// import camera from "../images1/camera.jpg";
// import mouse from "../images1/mouse.jpg";
// import phone from "../images1/phone.jpg";
// import playstation from "../images1/playstation.jpg";

// import { url } from "../../store/shopping-cart/api";
// import axios from "axios";

// const GetAllProducts = () => {
//   const [product_, setProduct_] = useContext(ProductContext)

//   const req = async () => {

//     try {
//       const { data } = await axios.get(`${url}/product/`)
//       console.log(data)

//       const num = data.length
//       // console.log(num)

//       var data_ = data

//       // for (let i = 0; i < num; i++) {
//       //   var data_ = []
//       //   data_[i]=data[i]
//       // }
      
//       // const {id, title, price, image, category, color, rating, brand, countInStock} = data_[1]
//       setProduct_(
//         data_
//         // {
//           // id,
//           // title,
//           // price,
//           // image01: airpods,
//           // category,

//           // desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
//         // },
//         // {
//         //   id: "01",
//         //   title: "Smartphone",
//         //   price: 24.0,
//         //   image01: phone,
//         //   category: "Smartphone",

//         //   desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
//         // },
//       )
      
//     } catch (err) {
      
//       // console.log(err.req.data)
//     }
//   }
//   console.log(product_)

//   return (
//     <button onClick={req}>GetAllProducts</button>
//   )

// }

// export default GetAllProducts;
