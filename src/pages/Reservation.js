import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import emailjs from '@emailjs/browser'

function Reservations() {
    const [buttonText, setButtonText] = useState("Réserver par téléphone")
    const [errors, setErrors] = useState({})
    const [showConfirmation, setShowConfirmation] = useState(false)

    const form = useRef()

    const [formValues, setFormValues] = useState({
        lastName: "",
        firstName: "",
        email: "",
        date: "",
        time: "",
        numberOfGuests: "",
    })

    const handleTextClick = () => {
        setButtonText("01 76 93 28 34")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm()

        if (Object.keys(validationErrors).length === 0) {
            console.log("Formulaire valide :", formValues)
            sendDatasToEmail()
            setShowConfirmation(true)
        } 
        else {
            setErrors(validationErrors)
        }
    }

    const closeConfirmation = () => {
        setShowConfirmation(false)
    }

    const validateForm = () => {
        let errors = {}

        if (!formValues.lastName) {
            errors.lastName = "Veuillez entrer votre nom."
        }

        if (!formValues.firstName) {
            errors.firstName = "Veuillez entrer votre prénom."
        }

        if (!formValues.email) {
            errors.email = "Veuillez entrer votre adresse e-mail."
        } 
        else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            errors.email = "Veuillez entrer une adresse e-mail valide."
        }

        if (!formValues.date) {
            errors.date = "Veuillez sélectionner une date."
        }

        if (!formValues.time) {
            errors.time = "Veuillez sélectionner une heure."
        }

        if (!formValues.numberOfGuests) {
            errors.numberOfGuests = "Veuillez entrer le nombre de personnes."
        }

        return errors
    }

    const sendDatasToEmail = () => {
        const templateParams = {
            from_name: formValues.firstName + " " + formValues.lastName,
            to_name: 'Monsieur le gérant du restaurant',
            name: formValues.firstName + "" + formValues.lastName,
            message: `Nouvelle réservation : ${formValues.firstName} ${formValues.lastName} a réservé pour ${formValues.numberOfGuests} personnes le ${formValues.date} à ${formValues.time}.`
        }

        emailjs.send('le-delice-des-sens', 'template_ub1j18q', templateParams, '755kBu-R7PW4I1R0u')
            .then((response) => {
                console.log('E-mail envoyé avec succès', response.status, response.text);
            })
            .catch((error) => {
                console.error('Erreur lors de l\'envoi de l\'e-mail', error);
            })
    }

    return (
        <section className="reservations">
            <form ref={form} onSubmit={handleSubmit} id="form">
                <div className="container-form">
                    <h2>Réservation</h2>
                    <div className="formulaire">
                        <div className="part1">
                        <input
                            type="text"
                            placeholder="Votre nom"
                            name="lastName"
                            value={formValues.lastName}
                            onChange={(e) =>
                                setFormValues({ ...formValues, lastName: e.target.value })
                            }
                        />
                        {errors.lastName && <span className="error">{errors.lastName}</span>}
                        <br></br>
                        <input
                            type="text"
                            placeholder="Votre prénom"
                            name="firstName"
                            value={formValues.firstName}
                            onChange={(e) =>
                                setFormValues({ ...formValues, firstName: e.target.value })
                            }
                        />
                        {errors.firstName && <span className="error">{errors.firstName}</span>}
                        <br></br>
                        <input
                            type="email"
                            placeholder="Votre e-mail"
                            name="email"
                            value={formValues.email}
                            onChange={(e) =>
                                setFormValues({ ...formValues, email: e.target.value })
                            }
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                        <br></br>
                        <input
                            type="number"
                            placeholder="Nombre de personnes"
                            name="numberOfGuests"
                            value={formValues.numberOfGuests}
                            onChange={(e) =>
                                setFormValues({ ...formValues, numberOfGuests: e.target.value })
                            }
                        />
                        {errors.numberOfGuests && <span className="error">{errors.numberOfGuests}</span>}
                        <br></br>
                        </div>
                        <div className="part2">
                        <label for="time">Pour quelle date ?</label><br></br>
                        <input
                            type="date"
                            name="date"
                            value={formValues.date}
                            onChange={(e) =>
                                setFormValues({ ...formValues, date: e.target.value })
                            }
                        />
                        
                        {errors.date && <span className="error">{errors.date}</span>}
                        <br></br>
                        <label for="time">À quelle heure ?</label><br></br>
                        <input
                            type="time"
                            name="time"
                            value={formValues.time}
                            onChange={(e) =>
                                setFormValues({ ...formValues, time: e.target.value })
                            }
                        />
                        {errors.time && <span className="error">{errors.time}</span>}
                        <br></br>
                        <button type="submit" className="submit-btn">Confirmer la réservation</button>
                        </div>
                    </div>
                    
                </div>

                <div className="contacts">
                        <div className="reserved-tel button" onClick={handleTextClick}>
                            {buttonText} <i className="fas fa-phone"></i>
                        </div>
                        <div className="contact-email button">
                            <Link to="mailto:contact@ledelicedessens.fr">contact@ledelicedessens.fr </Link>
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="adresse button">
                            <p>7 Rue Saint-Sylvestre<br></br>
                                75002 PARIS
                            </p>
                        </div>
                </div>
            </form>

            {showConfirmation && (
                <div className="confirmation">
                    <div className="confirmation-content">
                        <p>Votre réservation a bien été confirmée.</p>
                        <button onClick={closeConfirmation}><i className="fas fa-times"></i></button>
                    </div>
                </div>
            )}

        </section>
    )
}

export default Reservations
