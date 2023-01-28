// import React, { useState, useEffect } from "react"
// import axios from "axios"
// import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
// import { url } from "../../store/shopping-cart/api"



// const productsById = () => {

//     const _id = [
//         '636b5fc219fe6e277f57ed80',
//         '636bf21c19fe6e277f57f91d',
//         '636bf23c19fe6e277f57f921',
//         '636bf2da19fe6e277f57f92d',
//         '636bf32e19fe6e277f57f934',
//         '636bf37b19fe6e277f57f938',
//         '636bf41919fe6e277f57f943',
//         '636bf5a119fe6e277f57f954',
//         '636bf5fd19fe6e277f57f95a',
//         '636bf64219fe6e277f57f95e',
//         '636bf68519fe6e277f57f963',
//         '636bf8a619fe6e277f57f976',
//         '636bf8fd19fe6e277f57f97a',
//         '636bf90e19fe6e277f57f97e',
//         '636bf95419fe6e277f57f982',
//         '636bfb4819fe6e277f57f9b4',
//         '636bfb5e19fe6e277f57f9b8',
//         '636bfbb619fe6e277f57f9bd',
//         '636bfc1719fe6e277f57f9c3',
//         '636bfca019fe6e277f57f9c9',
//         '636bfd4f19fe6e277f57f9cd',
//         '636bffc219fe6e277f57f9f1',
//         '636c005c19fe6e277f57f9f7',
//         '636c042c19fe6e277f57fa2e',
//         '6373bd048b27af4124061dc5',
//     ]

//     const [data, setData] = useState([])
//     const [loading, setLoading] = useState(false)
//     // let componentMounted = true

//     useEffect(() => {
//         const getProducts = async () => {
//             setLoading(true)

//             const response = await axios.get(`${url}/product/${_id[0]}`)
//                 setData(response)
//                 setLoading(false)
//         }
//         getProducts()
//     }, [])

//     const Loading = () => {
//         return (
//             <>
//                 Loading...
//             </>
//         )
//     }

    

//     return (
//         <section>
//             <Container>
//                 <Row>
//                     <Col lg='12' className='text-center'>
//                         <h2 className='title_center'>Products</h2>
//                     </Col>

//                     {loading ? <Loading /> : <ShowProducts />}

//                 </Row>
//             </Container>
//         </section>
//     )

// }

// export default productsById