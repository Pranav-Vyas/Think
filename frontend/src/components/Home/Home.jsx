import React from 'react'
import Contact from '../Contact/Contact'
import HomeTitle from '../HomeTitle/HomeTitle'
import Testimonial from '../Testimonial/Testimonial'

function Home() {

    // const [images, setimages] = useState([])
    const img1 = "https://rendering.documents.cimpress.io/v1/vp/preview?width=690&height=690&quality=80&scene=https://scene.products.cimpress.io/v1/scenes/39fff789-7ad5-4b08-8faf-753d0c960f48";
    const img3 = "https://mms-images-prod.imgix.net/mms/images/catalog/641442cde4d7f19dec7c19c75d1954e9/styles/125000/catalog_detail_image.jpg?ixlib=rails-2.1.4&w=200&h=200&sharp=10&q=85&dpr=1&trim=auto&trimmd=0&fit=fill&bg=ffffff&fm=pjpg&auto=format";
    const img4 = "https://media.istockphoto.com/photos/mens-shirt-picture-id488160041?k=20&m=488160041&s=612x612&w=0&h=OH_-skyES8-aeTvDQHdVDZ6GKLsqp6adFJC8u6O6_UY=";
    const img5 = "https://image.shutterstock.com/image-photo/girls-beautiful-yellow-skinny-trousers-260nw-712737529.jpg";
    const img6 = "https://image.shutterstock.com/image-photo/blue-denim-jacket-isolated-over-260nw-310155074.jpg";
    const img7 = "https://media.istockphoto.com/photos/male-dark-blue-blazer-on-isolated-background-picture-id1152838910?k=20&m=1152838910&s=612x612&w=0&h=TWebGfvtYp3IWhqK8spnXiE3qXUBEn1vPGbqP7BQKYQ=";
    const img8 = "https://media.istockphoto.com/photos/stack-of-blue-jeans-on-wooden-shelf-beauty-and-fashion-clothing-picture-id1154077427?k=20&m=1154077427&s=612x612&w=0&h=r3WRF-qN0U_rbdMTIusXngbrn_OEl2z0ERv6iuX96I8=";
    const images = [img1, img3, img4, img5, img6, img7, img8];

    return (
        <div>
            <HomeTitle/>
            <Testimonial images = {images}/>
            <Contact/>
        </div>
    )
}

export default Home
