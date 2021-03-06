// import cake1 from '../img/Cakes/cake1.jpg';
import cake2 from '../img/Cakes/cake2.jpg';
import cake3 from '../img/Cakes/cake3.jpg';
import cake4 from '../img/Cakes/cake4.jpg';
// import cake5 from '../img/Cakes/cake5.jpg';
// import cake6 from '../img/Cakes/cake6.jpg';
// import cake7 from '../img/Cakes/cake7.jpg';
// import cake8 from '../img/Cakes/cake8.jpg';
// import cake9 from '../img/Cakes/cake9.jpg';
// import cake10 from '../img/Cakes/cake10.jpg';
// import cake11 from '../img/Cakes/cake11.jpg';
// import cake12 from '../img/Cakes/cake12.jpg';
// import cake13 from '../img/Cakes/cake13.jpg';
// import cake14 from '../img/Cakes/cake14.jpg';
// import cake15 from '../img/Cakes/cake15.jpg';
// import cake16 from '../img/Cakes/cake16.jpg';
// import cake17 from '../img/Cakes/cake17.jpg';

import {Link} from 'react-router-dom';

import styled from 'styled-components';

const MyWork = () => {
    return ( 
        
        <Work>
            <Movie>
                <h2>Cake 1</h2> 
                <div className="line"> </div>
                    <Link>
                        <img src={cake2} alt="cake" />
                    </Link>
               
            </Movie>
            <Movie>
                <h2>Cake 2</h2>
                <div className="line"></div>
                    <Link>
                        <img src={cake3} alt="cake" />
                    </Link>
                
            </Movie>
            <Movie>
                <h2>Cake 3</h2>
                <div className="line"></div>
                    <Link>
                        <img src={cake4} alt="cake" />
                    </Link>
                
            </Movie>
        </Work>
     );
}

const Work = styled.div `
    min-height: 100vh;
    overflow:hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
`
const Movie = styled.div `
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