import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import imgEntrees from '../assets/entrees.png'
import imgPlats from '../assets/plats.png'
import imgDesserts from '../assets/desserts.png'
import imgBoissons from '../assets/boissons.png'

function LaCarte() {
    const { typeOfCard } = useParams()
    const [imageUrl, setImageUrl] = useState(null)

    useEffect(() => {
        if (typeOfCard === "entrees") {
            setImageUrl(imgEntrees)
        } else if (typeOfCard === "plats") {
            setImageUrl(imgPlats)
        } else if (typeOfCard === "desserts") {
            setImageUrl(imgDesserts)
        } else if (typeOfCard === "boissons") {
            setImageUrl(imgBoissons)
        }
    }, [typeOfCard])

    return (
        <section className="la-carte">
            {imageUrl && <img src={imageUrl} alt={typeOfCard} />}
        </section>
    )
  
}

export default LaCarte

    /*
  const [imageData, setImageData] = useState([])
  const { typeOfCard } = useParams()

  useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/datas4.json`)
                const data = await response.json()
                const imgUrl = data.map((img) => img.url)
                setImageData(imgUrl)
            }
            catch (error){
                console.error("Erreur img;", error)
            }
        }
    
        fetchData()
    }, [])

    
    const matchingImageUrls = imageData.filter((img) => img.includes(typeOfCard));

    return (
        <div className="la-carte">
        {matchingImageUrls.length > 0 ? (
            matchingImageUrls.map((imageUrl) => (
            <img key={imageUrl} src={imageUrl} alt={imageUrl}/>
            ))
        ) : (
            <p>Aucune image correspondante.</p>
        )}
        </div>
    );
    */