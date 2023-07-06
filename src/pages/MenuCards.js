import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

function MenuCards() {
    const [images, setImages] = useState({})
    
    useEffect(() => {
        fetchImages()
    }, [])

    const fetchImages = async () => {
        try {
            const response = await fetch('datas2.json')
            const data = await response.json()
            const imgUrl = data.map((img) => img.url)
            setImages(imgUrl)
        } 
        catch (error) {
            console.error('Error fetching images:', error)
        }
    } 

    return (
        <section className="menu-cards" id="menu">
            <ul>
                <li className="entrees">
                    <Link to="/la-carte/entrees">
                        <img src={images[0]} alt="Entrées"/>
                        <h3>Entrées</h3>
                    </Link>
                </li>
                <li className="plats">
                    <Link to="/la-carte/plats">
                        <img src={images[1]} alt="Plats"/>
                        <h3>Plats</h3>
                    </Link>
                </li>
                <li className="desserts">
                    <Link to="/la-carte/desserts">
                        <img src={images[2]} alt="Desserts"/>
                        <h3>Desserts</h3>
                    </Link>
                </li>
                <li className="boissons">
                    <Link to="/la-carte/boissons">
                        <img src={images[3]} alt="Boissons"/>
                        <h3>Boissons</h3>
                    </Link>
                </li>
            </ul>
        </section>
    )
}

export default MenuCards 