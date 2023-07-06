import { useState , useEffect } from "react"

function Galerie() {
    const [images, setImages] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        fetchImages()
    }, [])
    
    const fetchImages = async () => {
        try {
            const response = await fetch('datas.json')
            const data = await response.json()
            const imgUrl = data.map((img) => img.url)
            setImages(imgUrl)
        } 
        catch (error) {
            console.error('Error fetching images:', error)
        }
    }
    
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
       
    }

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        
       
    }   

    return (
        <section className="galerie" id="galerie">
            <h2 className="displayNone">title</h2>
            <div className="galerie-content">
                <img src={images[currentIndex]} alt="Carousel"
                />
            </div>
            <i className="fas fa-chevron-left" onClick={goToPrevious}></i>
            <i className="fas fa-chevron-right" onClick={goToNext}></i>
        </section>
    )
}

export default Galerie