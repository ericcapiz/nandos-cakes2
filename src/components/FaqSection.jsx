import {About} from '../styles';
import styled from 'styled-components';

const FaqSection = () => {
    return (
        <Faq>
            <h2>Questions?</h2>
            <div className="question">
                <h4>How Do I Place An Order?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, aliquam.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>When Can I Expect My Order?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, aliquam.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>How Do I Pay?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, aliquam.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What Pastries/Baked Foods Do You Make?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, aliquam.</p>
                </div>
                <div className="faq-line"></div>
            </div>
        </Faq>
    );
}

const Faq = styled(About)`
    display:block;
    span{
        display:block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #063b42;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`

export default FaqSection;