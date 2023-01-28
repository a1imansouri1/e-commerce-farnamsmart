import React, { useEffect, useState } from "react";
// import airpods from "../images1/airpods.jpg";
// import alexa from "../images1/alexa.jpg";
// import camera from "../images1/camera.jpg";
// import mouse from "../images1/mouse.jpg";
// import phone from "../images1/phone.jpg";
// import playstation from "../images1/playstation.jpg";

import ProductCard from "../../components/UI/product-card/ProductCard";
import { Container, Row, Col } from 'reactstrap'

// import { url } from "../../store/shopping-cart/api";
import axios from "axios";
import '../../styles/home.css'
import '../../styles/intro-section.css'

import { Icon } from '@iconify/react';
import arrowDropRightLine from '@iconify/icons-ri/arrow-drop-right-line';
import shieldCheckLine from '@iconify/icons-ri/shield-check-line';
import cameraFill from '@iconify/icons-ri/camera-fill';
import phoneIcon from '@iconify/icons-gridicons/phone';
import speakerIcon from '@iconify/icons-bi/speaker';
import mouseLine from '@iconify/icons-ri/mouse-line';
import playstationIcon from '@iconify/icons-bi/playstation';
import airpodsIcon from '@iconify/icons-icon-park-outline/airpods';

const ProductsUlt = () => {

  const [loading1, setLoading1] = useState(false)
  const [loading2, setLoading2] = useState(false)
  const [loading3, setLoading3] = useState(false)
  const [loading4, setLoading4] = useState(false)
  const [loading5, setLoading5] = useState(false)
  const [loading6, setLoading6] = useState(false)
  const [loading7, setLoading7] = useState(false)
  const [loading8, setLoading8] = useState(false)
  const [loading9, setLoading9] = useState(false)
  const [loading10, setLoading10] = useState(false)
  const [loading11, setLoading11] = useState(false)
  const [loading12, setLoading12] = useState(false)
  const [loading13, setLoading13] = useState(false)
  const [loading14, setLoading14] = useState(false)
  const [loading15, setLoading15] = useState(false)
  const [loading16, setLoading16] = useState(false)
  const [loading17, setLoading17] = useState(false)
  const [loading18, setLoading18] = useState(false)
  const [loading19, setLoading19] = useState(false)
  const [loading20, setLoading20] = useState(false)
  const [loading21, setLoading21] = useState(false)
  const [loading22, setLoading22] = useState(false)
  const [loading23, setLoading23] = useState(false)
  const [loading24, setLoading24] = useState(false)
  const [loading25, setLoading25] = useState(false)

  const [deal1, setDeal1] = useState([])
  useEffect(() => {
    setLoading1(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/636b5fc219fe6e277f57ed80'
    }).then(res => {
      
      setDeal1(res.data)
      setLoading1(false)
    })
  }, [setDeal1])

  const [deal2, setDeal2] = useState([])
  useEffect(() => {
    setLoading2(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/636bf21c19fe6e277f57f91d'
    }).then(res => {
      setDeal2(res.data)
      setLoading2(false)
    })
  }, [setDeal2])

  const [deal3, setDeal3] = useState([])
  useEffect(() => {
    setLoading3(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/636bf23c19fe6e277f57f921'
    }).then(res => {
      setDeal3(res.data)
      setLoading3(false)
    })
  }, [setDeal3])

  const [deal4, setDeal4] = useState([])
  useEffect(() => {
    setLoading4(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/636bf2da19fe6e277f57f92d'
    }).then(res => {
      setDeal4(res.data)
      setLoading4(false)
    })
  }, [setDeal4])

  const [deal5, setDeal5] = useState([])
  useEffect(() => {
    setLoading5(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/636bf32e19fe6e277f57f934'
    }).then(res => {
      setDeal5(res.data)
      setLoading5(false)
    })
  }, [setDeal5])

  const [deal6, setDeal6] = useState([])
  useEffect(() => {
    setLoading6(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/636bf37b19fe6e277f57f938'
    }).then(res => {
      setDeal6(res.data)
      setLoading6(false)
    })
  }, [setDeal6])

  const [deal7, setDeal7] = useState([])
  useEffect(() => {
    setLoading7(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/636bf41919fe6e277f57f943'
    }).then(res => {
      setDeal7(res.data)
      setLoading7(false)
    })
  }, [setDeal7])

  const [deal8, setDeal8] = useState([])
  useEffect(() => {
    setLoading8(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/636bf5a119fe6e277f57f954'
    }).then(res => {
      setDeal8(res.data)
      setLoading8(false)
    })
  }, [setDeal8])

  const [deal9, setDeal9] = useState([])
  useEffect(() => {
    setLoading9(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/636bf5fd19fe6e277f57f95a'
    }).then(res => {
      setDeal9(res.data)
      setLoading9(false)
    })
  }, [setDeal9])

  const [deal10, setDeal10] = useState([])
  useEffect(() => {
    setLoading10(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/636bf64219fe6e277f57f95e'
    }).then(res => {
      setDeal10(res.data)
      setLoading10(false)
    })
  }, [setDeal10])

  const [deal11, setDeal11] = useState([])
  useEffect(() => {
    setLoading11(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/636bf68519fe6e277f57f963'
    }).then(res => {
      setDeal11(res.data)
      setLoading11(false)
    })
  }, [setDeal11])

  const [deal12, setDeal12] = useState([])
  useEffect(() => {
    setLoading12(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/636bf8a619fe6e277f57f976'
    }).then(res => {
      setDeal12(res.data)
      setLoading12(false)
    })
  }, [setDeal12])

  const [deal13, setDeal13] = useState([])
  useEffect(() => {
    setLoading13(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/636bf8fd19fe6e277f57f97a'
    }).then(res => {
      setDeal13(res.data)
      setLoading13(false)
    })
  }, [setDeal13])

  const [deal14, setDeal14] = useState([])
  useEffect(() => {
    setLoading14(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/636bf90e19fe6e277f57f97e'
    }).then(res => {
      setDeal14(res.data)
      setLoading14(false)
    })
  }, [setDeal14])

  const [deal15, setDeal15] = useState([])
  useEffect(() => {
    setLoading15(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/636bf95419fe6e277f57f982'
    }).then(res => {
      setDeal15(res.data)
      setLoading15(false)
    })
  }, [setDeal15])

  const [deal16, setDeal16] = useState([])
  useEffect(() => {
    setLoading16(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/636bfb4819fe6e277f57f9b4'
    }).then(res => {
      setDeal16(res.data)
      setLoading16(false)
    })
  }, [setDeal16])

  const [deal17, setDeal17] = useState([])
  useEffect(() => {
    setLoading17(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/636bfb5e19fe6e277f57f9b8'
    }).then(res => {
      setDeal17(res.data)
      setLoading17(false)
    })
  }, [setDeal17])

  const [deal18, setDeal18] = useState([])
  useEffect(() => {
    setLoading18(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/636bfbb619fe6e277f57f9bd'
    }).then(res => {
      setDeal18(res.data)
      setLoading18(false)
    })
  }, [setDeal18])

  const [deal19, setDeal19] = useState([])
  useEffect(() => {
    setLoading19(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/636bfc1719fe6e277f57f9c3'
    }).then(res => {
      setDeal19(res.data)
      setLoading19(false)
    })
  }, [setDeal19])

  const [deal20, setDeal20] = useState([])
  useEffect(() => {
    setLoading20(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/636bfca019fe6e277f57f9c9'
    }).then(res => {
      setDeal20(res.data)
      setLoading20(false)
    })
  }, [setDeal20])

  const [deal21, setDeal21] = useState([])
  useEffect(() => {
    setLoading21(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/636bfd4f19fe6e277f57f9cd'
    }).then(res => {
      setDeal21(res.data)
      setLoading21(false)
    })
  }, [setDeal21])

  const [deal22, setDeal22] = useState([])
  useEffect(() => {
    setLoading22(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/636bffc219fe6e277f57f9f1'
    }).then(res => {
      setDeal22(res.data)
      setLoading22(false)
    })
  }, [setDeal22])

  const [deal23, setDeal23] = useState([])
  useEffect(() => {
    setLoading23(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/636c005c19fe6e277f57f9f7'
    }).then(res => {
      setDeal23(res.data)
      setLoading23(false)
    })
  }, [setDeal23])

  const [deal24, setDeal24] = useState([])
  useEffect(() => {
    setLoading24(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/636c042c19fe6e277f57fa2e'
    }).then(res => {
      setDeal24(res.data)
      setLoading24(false)
    })
  }, [setDeal24])

  const [deal25, setDeal25] = useState([])
  useEffect(() => {
    setLoading25(true)
    axios({
      method: 'GET',
      url: 'http://kzico.runflare.run/product/6373bd048b27af4124061dc5'
    }).then(res => {
      setDeal25(res.data)
      setLoading25(false)
    })
  }, [setDeal25])


  const products = [
    {
      id: '636b5fc219fe6e277f57ed80',
      title: `${deal1.name}`,
      price: `${deal1.price}`,
      image01: 'https://m.media-amazon.com/images/I/51ySu55JzAL._AC_SL1500_.jpg',
      category: `Mouse`,
      //  `${deal1.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
      id: '636bf21c19fe6e277f57f91d',
      title: `${deal2.name}`,
      price: `${deal2.price}`,
      image01: 'https://m.media-amazon.com/images/I/71tDhEbyPRL._AC_SL1500_.jpg',
      category: `${deal2.category}`,
      // `${deal2.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
      id: '636bf23c19fe6e277f57f921',
      title: `${deal3.name}`,
      price: `${deal3.price}`,
      image01: 'https://m.media-amazon.com/images/I/71tDhEbyPRL._AC_SL1500_.jpg',
      category: `${deal3.category}`,
      //  `${deal3.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
      id: '636bf2da19fe6e277f57f92d',
      title: `${deal4.name}`,
      price: `${deal4.price}`,
      image01: 'https://microless.ir/wp-content/uploads/2022/02/081yd9W0doL._AC_SL1500_.jpeg',
      category: `${deal4.category}`,
      // `${deal4.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
      id: '636bf32e19fe6e277f57f934',
      title: `${deal5.name}`,
      price: `${deal5.price}`,
      image01: 'https://m.media-amazon.com/images/I/81bRFg8ESVL._SL1500_.jpg',
      category: `${deal5.category}`,
      // `${deal5.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
      id: '636bf37b19fe6e277f57f938',
      title: `${deal6.name}`,
      price: `${deal6.price}`,
      image01: 'https://m.media-amazon.com/images/I/61alu+N14EL._AC_SY450_.jpg',
      category: `${deal6.category}`,
      // `${deal6.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
      id: '636bf41919fe6e277f57f943',
      title: `${deal7.name}`,
      price: `${deal7.price}`,
      image01: 'https://m.media-amazon.com/images/I/71FzOC6gXUL.jpg',
      category: `${deal7.category}`,
      // `${deal6.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
      id: '636bf5a119fe6e277f57f954',
      title: `${deal8.name}`,
      price: `${deal8.price}`,
      image01: 'https://dlcdnwebimgs.asus.com/gain/B8E6E041-2D35-4C49-AE9D-604D8AEF1196/w717/h525',
      category: `${deal8.category}`,
      // `${deal6.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
      id: '636bf5fd19fe6e277f57f95a',
      title: `${deal9.name}`,
      price: `${deal9.price}`,
      image01: 'https://m.media-amazon.com/images/I/81StA5Ss8BL._AC_SL1500_.jpg',
      category: `${deal9.category}`,
      // `${deal6.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
      id: '636bf64219fe6e277f57f95e',
      title: `${deal10.name}`,
      price: `${deal10.price}`,
      image01: 'https://www.rockinit.co.za/wp-content/uploads/2018/06/Corsair-K63-Wireless-Mechanical-Gaming-Keyboard-Blue-LED-Cherry-MX-Red.png',
      category: `${deal10.category}`,
      // `${deal6.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
      id: '636bf68519fe6e277f57f963',
      title: `${deal11.name}`,
      price: `${deal11.price}`,
      image01: 'https://www.ghaemit.com/images/thumbs/0003309_-keyboard-logitech-gaming-g910-orion-spectrum.png',
      category: `${deal11.category}`,
      // `${deal6.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
      id: '636bf8a619fe6e277f57f976',
      title: `${deal12.name}`,
      price: `${deal12.price}`,
      image01: 'https://resource.logitech.com/content/dam/gaming/en/products/g502x-corded/gallery/g502x-corded-gallery-1-white.png',
      category: `${deal12.category}`,
      // `${deal6.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
      id: '636bf8fd19fe6e277f57f97a',
      title: `${deal13.name}`,
      price: `${deal13.price}`,
      image01: 'data:image/jpeg;base64,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',
      category: `${deal13.category}`,
      // `${deal6.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
      id: '636bf90e19fe6e277f57f97e',
      title: `${deal14.name}`,
      price: `${deal14.price}`,
      image01: 'data:image/jpeg;base64,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',
      category: `${deal14.category}`,
      // `${deal6.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
      id: '636bf95419fe6e277f57f982',
      title: `${deal15.name}`,
      price: `${deal15.price}`,
      image01: 'https://files.pccasegear.com/images/1585866684-RZ01-03250100-thb.jpg',
      category: `${deal15.category}`,
      // `${deal6.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
      id: '636bfb4819fe6e277f57f9b4',
      title: `${deal16.name}`,
      price: `${deal16.price}`,
      image01: 'https://static.techspot.com/images/products/2017/mice/org/2017-03-23-product-5.png',
      category: `${deal16.category}`,
      // `${deal6.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
      id: '636bfb5e19fe6e277f57f9b8',
      title: `${deal17.name}`,
      price: `${deal17.price}`,
      image01: 'https://static.techspot.com/images/products/2017/mice/org/2017-03-23-product-5.png',
      category: `${deal17.category}`,
      // `${deal6.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
      id: '636bfbb619fe6e277f57f9bd',
      title: `${deal18.name}`,
      price: `${deal18.price}`,
      image01: 'https://emalls.ir/files/Products/automatic/3365327/ps0dg2gb_thumb3.jpg',
      category: `${deal18.category}`,
      // `${deal6.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
      id: '636bfc1719fe6e277f57f9c3',
      title: `${deal19.name}`,
      price: `${deal19.price}`,
      image01: 'https://www.arcaonline.ir/UploadedFiles/ProductImages/8714.1.png',
      category: `${deal19.category}`,
      // `${deal6.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
      id: '636bfca019fe6e277f57f9c9',
      title: `${deal20.name}`,
      price: `${deal20.price}`,
      image01: 'https://www.arcaonline.ir/UploadedFiles/ProductImages/8679.1.jpg',
      category: `${deal20.category}`,
      // `${deal6.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
      id: '636bfd4f19fe6e277f57f9cd',
      title: `${deal21.name}`,
      price: `${deal21.price}`,
      image01: 'https://pcmod.ir/content/images/thumbs/0037668_-razer-mamba-elite_600.png',
      category: `${deal21.category}`,
      // `${deal6.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
      id: '636bffc219fe6e277f57f9f1',
      title: `${deal22.name}`,
      price: `${deal22.price}`,
      image01: 'https://cdn01.zoomit.ir/2022/3/corsair-m65-pro-rgb-side-view.jpg',
      category: `${deal22.category}`,
      // `${deal6.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
      id: '636c005c19fe6e277f57f9f7',
      title: `${deal23.name}`,
      price: `${deal23.price}`,
      image01: 'https://resource.logitech.com/content/dam/gaming/en/products/g502-lightspeed-gaming-mouse/g502-lightspeed-gallery-1.png',
      category: `${deal23.category}`,
      // `${deal6.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
      id: '636c042c19fe6e277f57fa2e',
      title: `${deal24.name}`,
      price: `${deal24.price}`,
      image01: 'https://m.media-amazon.com/images/I/71SmrOjHDFL._AC_SL1500_.jpg',
      category: `${deal24.category}`,
      // `${deal6.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
    {
      id: '6373bd048b27af4124061dc5',
      title: `${deal25.name}`,
      price: `${deal25.price}`,
      image01: 'https://m.media-amazon.com/images/I/71SmrOjHDFL._AC_SL1500_.jpg',
      category: `${deal25.category}`,
      // `${deal6.category}`,

      desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    },
  ];

  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }



    // if (category === "mouse") {
    //   const filteredProducts = products.filter((item) => item.category === "mouse");

    //   setAllProducts(filteredProducts);
    // }

    if (category === "Keyboard") {
      const filteredProducts = products.filter((item) => item.category === "Keyboard");

      setAllProducts(filteredProducts);
    }

    if (category === "Mouse") {
      const filteredProducts = products.filter((item) => item.category === "Mouse");

      setAllProducts(filteredProducts);
    }
    // if (category === "camera") {
    //   const filteredProducts = products.filter((item) => item.category === "camera");

    //   setAllProducts(filteredProducts);
    // }

    // if (category === "mouse") {
    //   const filteredProducts = products.filter((item) => item.category === "mouse");

    //   setAllProducts(filteredProducts);
    // }


    // if (category === "phone") {
    //   const filteredProducts = products.filter((item) => item.category === "phone");

    //   setAllProducts(filteredProducts);
    // }

    // if (category === "playstation") {
    //   const filteredProducts = products.filter((item) => item.category === "playstation");

    //   setAllProducts(filteredProducts);
    // }
  }, [category]);

  const Loading = () => {
    return (
      <>
        Loading...
      </>
    )
  }

  const ShowProducts = () => {
    return (
      < section >
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='title_center'>Products</h2>
            </Col>

            <Col lg='12'>
              <div className="food_category d-flex align-items-center justify-content-center gap-4">
                <button className={`${category === 'ALL' ? 'foodBtnActive' : ''}`} onClick={() => setCategory("ALL")}>All</button>
                {/* <button className={`d-flex align-items-center gap-2 ${category === 'mouse' ? 'foodBtnActive' : ''}`} onClick={() => setCategory("mouse")}><Icon icon={phoneIcon} height='25' />mouse</button> */}
                <button className={`d-flex align-items-center gap-2 ${category === 'Keyboard' ? 'foodBtnActive' : ''}`} onClick={() => setCategory("Keyboard")}><Icon icon={airpodsIcon} height='20' />Keyboard</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'Mouse' ? 'foodBtnActive' : ''}`} onClick={() => setCategory("Mouse")}><Icon icon={airpodsIcon} height='20' />Mouse</button>
                {/* <button className={`d-flex align-items-center gap-2 ${category === 'camera' ? 'foodBtnActive' : ''}`} onClick={() => setCategory("camera")}><Icon icon={cameraFill} height='20' />camera</button>
              <button className={`d-flex align-items-center gap-2 ${category === 'mouse' ? 'foodBtnActive' : ''}`} onClick={() => setCategory("mouse")}><Icon icon={mouseLine} height='25' />mouse</button>
              <button className={`d-flex align-items-center gap-2 ${category === 'phone' ? 'foodBtnActive' : ''}`} onClick={() => setCategory("phone")}><Icon icon={speakerIcon} height='20' />phone</button>
              <button className={`d-flex align-items-center gap-2 ${category === 'playstation' ? 'foodBtnActive' : ''}`} onClick={() => setCategory("playstation")}><Icon icon={playstationIcon} height='25' />playstation</button> */}
              </div>
            </Col>

            {
              allProducts.map(item => (

                <Col lg='3' md='4' sm='6' xs='6' key={item._id} className='mt-5 mb-5'>
                  <ProductCard item={item} />
                </Col>

              ))
            }

          </Row>
        </Container>
      </section >
    )
  }

  return (

    (loading1 && loading2 && loading3 && loading4 && loading5
      && loading6 && loading7 && loading8 && loading9 && loading10
      && loading11 && loading12 && loading13 && loading14 && loading15
      && loading16 && loading17 && loading18 && loading19 && loading20
      && loading21 && loading22 && loading23 && loading24 && loading25
      ? <Loading /> : <ShowProducts />)

  )

}
export default ProductsUlt;
