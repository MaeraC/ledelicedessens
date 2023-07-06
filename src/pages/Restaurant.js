import { Link } from "react-router-dom"

function Restaurant() {
    return (
        <section className="restaurant">
            <h2 className="displayNone">title</h2>
            <div className="img"></div>
            <div className="articles">
                <article className="article1 fade-in">
                    <h3 className="displayNone">title</h3>
                    <p>Bienvenue chez <span>Le Délice des Sens</span>, un lieu où la gastronomie rencontre la convivialité ! Lorsque vous franchissez nos portes, vous êtes immédiatement enveloppé d'une atmosphère chaleureuse et accueillante, créant l'environnement parfait pour des moments de partage et de délices culinaires.</p>
                    <Link to="/reservations" className="button">Réserver une table</Link>
                </article>
                <article className="article2 fade-in">
                    <h3 className="displayNone">title</h3>
                    <p>Notre cuisine est le cœur de notre restaurant, où nous explorons une palette de saveurs inspirantes et de produits frais de saison en vous offrant des plats délicieux et créatifs, mêlant habilement les traditions culinaires classiques et les nouvelles tendances gastronomiques</p>
                    <Link to="/menu" className="button">Voir la carte</Link>
                </article>
            </div>
        </section>
    )
}

export default Restaurant