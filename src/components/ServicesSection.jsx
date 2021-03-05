import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock, faMoneyBillWave, faBirthdayCake, faUserTie } from '@fortawesome/free-solid-svg-icons';
import bake from '../img/bake.jfif';
const ServicesSection = () => {
    return ( 
        <div className="services">
            <div className="description">
                <h2>High <span>Quality</span>Cakes</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faClock} />
                            <h3>Fast Service</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faMoneyBillWave} />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faBirthdayCake} />
                            <h3>Custom Made Baked Goods</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FontAwesomeIcon icon={faUserTie} />
                            <h3>Professional Service</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={bake} alt='bake' />
            </div>
        </div>
     );
}
 
export default ServicesSection;