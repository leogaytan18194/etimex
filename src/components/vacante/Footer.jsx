import styled from 'styled-components'
import img from '../../assets/vacante/arrow2.png';
import { Mail } from '@styled-icons/entypo/Mail';

const MailC = styled(Mail)`
      color: #fff;
    `
export const Footer = ({onSubmit}) => {
    return (
        <div className="footer">
            <div className="footer-container">

                <div className="footer-btn">
                    <button className='apply-now-btn' onClick={onSubmit}>Apply <b>Now</b> </button>
                </div>
                <div className="footer-arrow">
                    <img src={img} alt="" />
                </div>
                <div className="footer-info">
                    <div className="footer-info-img">
                        <MailC />
                    </div>
                    <div className="footer-info-txt">
                        <h3>Recursos Humanos</h3>
                        <a href="mailto:cgarcia@besta.mx">
                            cgarcia@besta.mx
                        </a>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <p className='website'>
                    www.besta.mx
                </p>
            </div>
        </div>
    )
};

export default Footer;