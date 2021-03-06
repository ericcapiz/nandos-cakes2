import cake1 from '../img/Cakes/cake1.jpg'
import {About, Description, Image, Hide} from '../styles';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>The More
                            <span> Cake</span>,</h2>
                    </Hide>
                    <Hide>
                        <h2>The Batter</h2>
                    </Hide>
                </div>
                <p>Contact me for all your sweet tooth needs!</p>
                <button>Contact Me</button>
            </Description>
            <Image>
                <img src={cake1} alt="cake"/>
            </Image>
        </About>
    );
}


export default AboutSection;