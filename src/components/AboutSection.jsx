import cake1 from '../img/Cakes/cake1.jpg'
import {About, Description, Image, Hide} from '../styles';
import {motion} from 'framer-motion';



const AboutSection = () => {

    

    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2>The More
                            <span> Cake</span>,</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>The Batter</motion.h2>
                    </Hide>
                </motion.div>
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