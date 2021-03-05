import cake1 from '../img/Cakes/cake1.jpg'

const AboutSection = () => {
    return (
        <div className="description">
            <div className="title">
                <div className="hide">
                    <h2>The More</h2>
                </div>
                <div className="hide">
                    <span>Cake</span>
                </div>
                <div className="hide">
                    <span>The Batter</span>
                </div>
                <p>Contact me for all your sweet tooth needs!</p>
                <button>Contact Me</button>
            </div>
            <div className="img">
                <img src={cake1} alt="cake" />
            </div>
        </div>
    );
}

export default AboutSection;