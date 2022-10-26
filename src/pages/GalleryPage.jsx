import React from 'react'
import img1 from '../assets/imgOne.png'
import img2 from '../assets/imgTwo.png'
import img3 from '../assets/imgThree.png'
import { useState } from 'react'

const tabContent = [
    {
        id: 0,
        image: img1,
        category: 'residence'
    },
    {
        id: 1,
        image: img2,
        category: 'residence'
    },
    {
        id: 2,
        image: img3,
        category: 'amenities'
    },
    {
        id: 3,
        image: img1,
        category: 'amenities'
    },
    {
        id: 4,
        image: img2,
        category: 'neighborhood'
    },
    {
        id: 5,
        image: img3,
        category: 'neighborhood'
    },

]
const tabNav = [
    {
        id: 0,
        name: 'all',
    },
    {
        id: 1,
        name: 'residence',
    },
    {
        id: 2,
        name: 'amenities',
    },
    {
        id: 3,
        name: 'neighborhood',
    },

]


function GalleryPage() {
    const [images, setImages] = useState(tabContent);

    const [active, setActive] = useState(0);

    const filterImages = (category) => {
        const filtered = tabContent.filter((element) => {
            return element.category === category;
        })
        setImages(filtered);
    }
    const switchTabItems = (item) => {
        item.name === 'all' ? setImages(tabContent) : filterImages(item.name);
        setActive(item.id)
    }
    const fullScreenImage = ({ imgSource }) => {
        const lightBox = document.createElement('div');
        lightBox.id = 'lightBox'
        document.body.appendChild(lightBox);
        lightBox.classList.add('active')
        const img = document.createElement('img');
        console.log(imgSource)
        // img.src = imgSource;
        // lightBox.appendChild(img);


    }

    return (
        <section className='galleryPage'>

            <div className="galleryTabs">
                {
                    tabNav.map((item) => {

                        return <h1 key={item.id} className={`tabMenu ${item.id === active ? 'active' : 'inactive'}`} onClick={() => switchTabItems(item)}>{item.name.toString().toUpperCase()}</h1>
                    })

                }
            </div>
            <div className="tabContent">
                {
                    images.map((item) => {
                        return <div key={item.id} className='tabImages' style={{ background: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} onClick={() => fullScreenImage(item.image)}></div>

                    })
                }

            </div>


        </section>
    )
}

export default GalleryPage