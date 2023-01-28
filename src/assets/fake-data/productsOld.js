// all images imported from images directory
import airpods from "../images1/airpods.jpg";
import alexa from "../images1/alexa.jpg";
import camera from "../images1/camera.jpg";
import mouse from "../images1/mouse.jpg";
import phone from "../images1/phone.jpg";
import playstation from "../images1/playstation.jpg";


const productsOld = [
  {
    _id: "01",
    name: "Apple iPhone 14 Pro",
    price: 1751.00,
    image: 'https://media.croma.com/image/upload/v1662703105/Croma%20Assets/Communication/Mobiles/Images/261963_oqrd6j.png',
    category: "Smartphone",
    countInStock: '5',
    rating: '4.5',
    // desc: " ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    desc: 'A magical new way to interact with iPhone. iPhone 14 Pro Max features groundbreaking safety features designed to save lives. An innovative 48MP camera for mind-blowing detail. All powered by the ultimate smartphone chip. Contains dual eSim support.'
  },
  {
    _id: "02",
    name: "AirPods (3rd generation)",
    price: 260.00,
    image: 'https://applelandlavasan.ir/uploads/products/a8bcea.jpg',
    category: "Airpods",
    countInStock: '40',
    rating: '4.7',
    // desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    desc: `The 2021 AirPods have been re-designed and enhanced to heighten the music listening experience. They support immersive Spatial Audio content so you're at the heart of a 3D sound-scape for your music and shows. Adaptive EQ fine-tunes the sound for optimum delivery, they're sweat and water-resistant, and they last for up to 6 hours off a single charge, or up to 30 hours with the included MagSafe and wireless compatible charging case.`
  },
  {
    _id: "03",
    name: "Belkin SOUNDFORM ELITE Smart Speaker",
    price: 348.00,
    image: 'https://m.media-amazon.com/images/I/41wxj3voRvL._AC_.jpg',
    category: "Speaker",
    countInStock: '30',
    rating: '4.25',
    // desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    desc: `SOUNDFORM ELITE has been created in partnership with sound pioneers Devialet to deliver an impactful audio experience. Belkin combined their extraordinary acoustic architecture with fast wireless charging and award-winning design to create a high-performing smart speaker for your home. SOUNDFORM ELITE allows you to play and control your music while experiencing stunning, room-filling sound throughout your home. Pair your speaker to Alexa (with AirPlay2) and enjoy hands-free communication through your preferred smart assistant.`
  },
  {
    _id: "04",
    name: "Logitech G502 Hero",
    price: 110.00,
    image: 'https://resource.logitechg.com/w_692,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/non-braid/hyjal-g502-hero/g502-hero-gallery-2-nb.png?v=1',
    category: "Mouse",
    countInStock: '70',
    rating: '4.4',
    // desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    desc: `The Logitech G502 HERO is a brilliant mouse for all things gaming, with its angular design and RGB lighting options helping it fit seamlessly into any setup. With immense accuracy due to the HERO optical sensor, that can reach up to 25,600 dpi, your aim will always be on point. The G502 HERO comes with five 3.6g weights and 11 programmable buttons, so you can customise to your heart’s content, making it the perfect mouse for any true gamer.`
  },
  {
    _id: "05",
    name: "Sony Alpha A7 II",
    price: 998.00,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQVD_BVfYA8UsVxapeRo8ERnN532n1TzE-eT8LStIESCL4MLVDa-N-1A-99KuwLEwxs1YkimZ6BI_69tQW2_qFUZIzeoNh9D_DCNgbYkR5F1XzJ4Guj2qbO4ors4ZiO',
    category: "Camera",
    countInStock: '10',
    rating: '4.5',
    // desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    desc: `Breathtaking image quality meets unrivaled shooting freedom in the Sony Alpha A7 II the worlds first full-frame camera with 5-axis image stabilization. Operation is incredibly intuitive and enhanced Fast Hybrid AF delivers lightning-fast focusing super-wide coverage and tracking performance that captures fast-moving subjects and doesnt let go. Packed with innovation yet compact beyond compare the Alpha A7 II frees you to shoot however you like with confidence. This outfit also comes with the Sony Alpha E-Mount 28-70mm f/3.5-5.6 OSS Zoom Lens an affordable mid-range zoom lens for 35mm full frame format cameras that combines high optical performance with compact lightweight convenience.`
  },
  {
    _id: "06",
    name: "Sony PlayStation 4",
    price: 420,
    image: 'https://i.ebayimg.com/images/g/d8gAAOSwKjhjDTpZ/s-l640.jpg',
    category: "Playstation",
    countInStock: '5',
    rating: '4.0',
    // desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
    desc: `Sony PlayStation 4 Slim 500GB Black. Hard drive 500gb. Dispatch in 3 business days from purchase date. You are buying fully working console ps4 slim with 500gb hard drive in used condition. Console comes with one official controller (random color) and all leads. Free UK postage only.`
  },
];

export default productsOld;