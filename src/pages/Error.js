import { Link } from "react-router-dom"

function Error() {
    return (
        <section className="error">
            <p>Oups... Cette page n'existe pas !</p>
            <Link to="/">Retourner à la page d'accueil</Link>
        </section>
    )
}

export default Error