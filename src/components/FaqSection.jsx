import {About} from '../styles';
import Toggle from './Toggle';
import styled from 'styled-components';
import{AnimateSharedLayout} from 'framer-motion';
import {useScroll} from './useScroll';
import {scrollReveal} from '../animation';

const FaqSection = () => {
    const [element, control] = useScroll();
    return (
        <Faq variants={scrollReveal} ref={element} animate={control} initial="hidden">
            <h2>Questions?</h2>
            <AnimateSharedLayout>
            <Toggle title="How Do I Place An Order?">
                <div className="answer">

                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, aliquam.</p>

                </div>

            </Toggle>
            <Toggle title="When Can I Expect My Order?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, aliquam.</p>
                </div>

            </Toggle>
            <Toggle title="How Do I Pay?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, aliquam.</p>
                </div>

            </Toggle>
            <Toggle title="What Pastries/Baked Foods Do You Make?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, aliquam.</p>
                </div>

            </Toggle>
            </AnimateSharedLayout>
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