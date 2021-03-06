import cake2 from '../img/Cakes/cake2.jpg';
import cake3 from '../img/Cakes/cake3.jpg';
import cake4 from '../img/Cakes/cake4.jpg';
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

import {Link} from 'react-router-dom';

import styled from 'styled-components';

const MyWork = () => {
    return ( 
        
        <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <Cake>
                <h2>Cake 1</h2> 
                <div className="line"> </div>
                    <Link to="/work/cake2">
                        <img src={cake2} alt="cake" />
                    </Link>
               
            </Cake>
            <Cake>
                <h2>Cake 2</h2>
                <div className="line"></div>
                    <Link to="/work/cake3">
                        <img src={cake3} alt="cake" />
                    </Link>
                
            </Cake>
            <Cake>
                <h2>Cake 3</h2>
                <div className="line"></div>
                    <Link to="/work/cake4">
                        <img src={cake4} alt="cake" />
                    </Link>
                
            </Cake>
        </Work>
     );
}

const Work = styled(motion.div) `
    min-height: 100vh;
    overflow:hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
`
const Cake = styled.div `
    padding-bottom: 10rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    .line{
        width:60%;
        height: 0.5rem;
        background: white;
        margin-bottom: 3rem;
    }
    img{
        width:100%;
        height:60%;
        object-fit:contain;

    }
`
 
export default MyWork;