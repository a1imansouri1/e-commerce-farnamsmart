import React from 'react'
import Slider from "react-slick";

// import firstImg from '../../../assets/images1/first-img.png'
// import secondImg from '../../../assets/images1/second-img.png'
// import thirdImg from '../../../assets/images1/third-img.png'

import '../../../styles/slider.css'

const TestimonialSlider1 = () => {
    const settings = {
        autoplay: true,
        infinite: true,
        speed: 3000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <Slider className='slider_content' {...settings}>
            <div className='slider_content1'>
                    <img src='https://i.postimg.cc/Fs81Xxhw/first-img.png' alt="avatar" />
            </div>
            <div className='slider_content2'>
                    <img src='https://i.postimg.cc/wMLHKngB/second-img.png' alt="avatar" />
            </div>
            <div className='slider_content3'>
                    <img src='https://i.postimg.cc/SRS05RTg/third-img.png' alt="avatar" />
            </div>
        </Slider>
    )
}

export default TestimonialSlider1