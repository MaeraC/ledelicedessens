
import { Link } from "react-router-dom"


function Home() {

    return (
       
                <section className="home">
                <h2 className="displayNone">title</h2>
                    <div>
                        <p>
                            Plongez dans le paradis des saveurs. <br></br>
                            Un rendez-vous avec la délicatesse, un festin pour les sens...
                        </p>
                        <Link to="/menu" className="button">Voir la carte</Link>
                    </div>
                </section>
         
    )
}

export default Home

