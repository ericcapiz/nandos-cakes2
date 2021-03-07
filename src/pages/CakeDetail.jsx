import {useState,useEffect} from 'react';
import{useHistory} from 'react-router-dom';
import {CakeState} from '../cakeState';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';


const CakeDetails = () => {
    const history = useHistory();
    const url = history.location.pathname;

    //Setting up state
    const [cakes] = useState(CakeState);
    const [cake, setCake] = useState(null);

    useEffect(()=>{
        const currentCake = cakes.filter((stateCake)=> stateCake.url === url);
        setCake(currentCake[0]);
    },[cakes,url])

    return ( 
        <>
        {cake && (
        <Details variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit">
            <Headline>
                <h2>{cake.title}</h2>
                <img src={cake.mainImg} alt="cake" />
            </Headline>
            <h2>Reviews:</h2>
            <Reviews>
            
                {cake.reviews.map((review)=>(
                    <Review title={review.title} description={review.description} key={review.title} />
                ))}
            </Reviews>
            <ImageDisplay>
                <img src={cake.secondaryImg} alt="cake" />
            </ImageDisplay>
        </Details>
        )}
        </>
     );
}

const Details = styled(motion.div) `
    color:white;
    h2{
        position: relative;
        left: 47%;
    }
    @media only screen and (min-width: 350px){
        overflow:hidden;
        h2{
            left: 27%;
        }
    }

`

const Headline = styled.div `
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top:10%;
        left:47%;
        transform: translate(-50% -10%);
    }
    img{
        width:100%;
        height:60vh;
        object-fit:contain;
        
    }
    @media only screen and (min-width: 350px){
        h2{
            left: 30%;
        }
        img{
            width: 100%;
        }
    }
`
const Reviews = styled.div `
    min-height: 80vh;
    display:flex;
    margin: 0rem 10rem;
    align-items:center;
    justify-content: space-around;

    @media only screen and (min-width: 350px){
        display:inline-block;
        text-align:center;
        margin:0;
        padding:0;
    }
`

const AwardStyle = styled.div `
    padding: 5rem;
    h3{
        font-size: 2rem;
    }
    .line{
        width: 100%;
        background:white;
        height:0.5rem;
        margin: 1rem 0rem;
    }
    p{
        padding: 2rem 0rem;
    }
`

const ImageDisplay = styled.div `
    min-height: 50vh;
    img{
        width:100%;
        height:80vh;
        object-fit:contain;
        margin-bottom: 5rem;
    }
`

const Review = ({title, description}) =>{
    return(
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardStyle>
    )
}
export default CakeDetails;