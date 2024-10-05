import anosluz from "../assets/anosluz.jpg"

function HeroSection() {
    return (
        <section class="section">
            <div class="hero-section">
                <div class="atual">
                    <img src={anosluz} class="anos-luz" />
                    <div>
                        <p class="matue">Anos luz - Matuê</p>
                        <p class="xov-enzo">Sabadou na XOV com Enzo</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default HeroSection;