import cake1 from '../img/Cakes/cake1.jpg'
import styled from 'styled-components';

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

const About = styled.div `
    min-height:90vh;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 5rem 10rem;
    color:white;
`;

const Description = styled.div `
    flex:1;
    padding-right:5rem;
    h2{
        font-weight: lighter;
    }
`;

const Image = styled.div `
    flex: 1;
    overflow:hidden;
    img{
        width: 100%;
        height: 80vh;
        object-fit:cover;
        border-radius: 15%;
        opacity: 85%;
    }
`

const Hide = styled.div `
    overflow:hidden;
`

export default AboutSection;