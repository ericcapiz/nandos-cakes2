import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

const Contact = () => {
    return (
        <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit">Contact Me</motion.div>
    );
}

export default Contact;