function Loader() {
    setTimeout(() => {
        const loaderPage = document.querySelector('.loader-page')
        loaderPage.classList.add('fade-out')
    }, 2500)

    return (
        <div className="loader-page">
            <svg height="100" stroke="black" strokeWidth="1" className="text-line" width="100%">
                <text x="50%" dominantBaseline="middle" textAnchor="middle" y="50%">Le Délice des Sens</text>
            </svg>
        </div>
    )
}

export default Loader