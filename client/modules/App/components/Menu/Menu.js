/**
 * Created by Admin on 1/17/2017.
 */
import React from 'react'
import MenuBlock from './MenuBlock'
import MenuToggle from './MenuToggle'
import MenuMobile from './MenuMobile'
class Menu extends React.Component {
    render() {
        return (
            <div>
                <MenuBlock/>
                <MenuToggle/>
                <MenuMobile/>
            </div>
        )
    }
}

export default Menu;