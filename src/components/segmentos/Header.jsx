import React from 'react'
import { Link } from 'react-router-dom'
import { CustomLi, HeaderStyles } from '../../styles/Styles'
import { HashLink } from 'react-router-hash-link';

const Header = ({ logo }) => {
    return (
        <HeaderStyles>
            <div className="menu-container">
                <ul>
                    <li className="logo">
                        <HashLink to="/#home">
                            <img src={`${logo}`} alt="Logo" />
                        </HashLink>
                    </li>
                    <CustomLi icon={"vinos"} className='activeMenu'>
                        <Link to="/vinos-y-licores">Vinos y Licores</Link>
                    </CustomLi>
                    <CustomLi>
                        <Link to="/alimentos-y-bebidas">Alimentos y bebidas</Link>
                    </CustomLi>
                    <CustomLi>
                        <Link to="/salud-y-belleza">Salud y belleza</Link>
                    </CustomLi>
                    <CustomLi>
                        <Link to="/industrial">Industrial</Link>
                    </CustomLi>
                    <CustomLi>
                        <Link to="/retail">Retail</Link>
                    </CustomLi>
                    <CustomLi>
                        <Link to="/boletaje">Boletaje</Link>
                    </CustomLi>
                </ul>
            </div>
        </HeaderStyles>
    )
}

export default Header