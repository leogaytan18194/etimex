import React, { useState } from 'react'
import { NavbTabContainer } from '../../styles/Styles'

const NavTab = ({ tab_title_1, tab_title_2, tab_item_1, tab_item_2, theme }) => {

    const [actualTab, setActualTab] = useState(1);
    return (
        <NavbTabContainer theme={theme}>
            <div className='tab-title'>
                <div className={`tab-btn ${actualTab === 1 && "strokeText"}`}>
                    {tab_title_1}
                </div>
                <div className='tab-divider'>
                    <div className={`tab-divider-item ${actualTab === 1 && "tab-active"}`} onClick={() => setActualTab(1)} ></div>
                    <div className={`tab-divider-item ${actualTab === 2 && "tab-active"}`} onClick={() => setActualTab(2)} ></div>
                </div>
                <div className={`tab-btn ${actualTab === 2 && "strokeText"}`}>
                    {tab_title_2}
                </div>
            </div>

            {
                actualTab === 1 ?
                    <div className='tab-item'>
                        {tab_item_1}
                    </div> :
                    <div className='tab-item'>
                        {tab_item_2}
                    </div>
            }
        </NavbTabContainer>
    )
}

export default NavTab
