/**
 * Created by Admin on 1/17/2017.
 */
import React from 'react'

class MenuBlock extends React.Component {
    render() {
        return (
            <div className="menu-toggler-w">
                <a href="#" className="menu-toggler">
                    <i className="os-new-icon os-new-icon-menu"></i>
                    <span className="menu-toggler-label">Menu</span>
                </a>
                <a href="http://pluto.pinsupreme.com/" className="logo">
                    <img src={"http://pluto.pinsupreme.com/wp-content/uploads/2014/06/logo@2x.png"} alt={""}/>
                    <span>PLUTO</span>
                </a>
                <a href="#" className="sidebar-toggler">
                    <i className="os-new-icon os-new-icon-grid"></i>
                    <span className="sidebar-toggler-label">Sidebar</span>
                </a>
            </div>
        )
    }
}

export default MenuBlock;
