import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock, faMoneyBillWave, faBirthdayCake, faUserTie } from '@fortawesome/free-solid-svg-icons';
import bake from '../img/bake.jfif';
import {About, Description, Image} from '../styles';
import styled from 'styled-components';
import {scrollReveal} from '../animation';
import {useScroll} from './useScroll'

const ServicesSection = () => {
    const [element, controls] = useScroll();
    const style = {
        fontSize: "1.5rem", 
        color:"#2b737c"
    }
    return ( 
        <Services animate={controls} ref={element} initial="hidden" variants={scrollReveal}>
            <Description>
                <h2>High <span>Quality </span>Cakes</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon style={style} icon={faClock} />
                            <h3>Fast Service</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon style={style} icon={faMoneyBillWave} />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon style={style} icon={faBirthdayCake} />
                            <h3>Custom Made Baked Goods</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon style={style} icon={faUserTie} />
                            <h3>Professional Service</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={bake} alt='bake' />
            </Image>
        </Services>
     );
}

const Services = styled(About)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width:70%;
        padding: 2rem 0rem 4rem 0rem; 
    }
`

const Cards = styled.div `
    display: flex;
    flex-wrap: wrap;
    @media only screen and (max-width: 1300px){
       justify-content:center;
    }
`

const Card = styled.div `
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            padding: 1rem;
        }
    }
`
 
export default ServicesSection;