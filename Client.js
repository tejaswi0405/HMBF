import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './style.css';
import { Link, Outlet } from 'react-router-dom';
import Deluxe from './rooms/Deluxe';
import NonDeluxe from './rooms/NonDeluxe';
import FarmHouse from './rooms/FarmHouse';
import Resorts from './rooms/Resorts';

export default function Client() {
  return (
    <span>
    <div style={{width:'100%', display: 'flex'}}>
        {/* <nav > */}
            <Sidebar style={{position: 'fixed'}}>
                <Menu>
                <SubMenu label="View Hotel rooms" style={{ color: 'black' }}>
                    <Link to="/client/deluxe" element={<Deluxe/>}><MenuItem style={{ color: 'black' }}> Deluxe Rooms </MenuItem></Link>
                    <Link to="/client/nondeluxe" element={<NonDeluxe/>}><MenuItem style={{ color: 'black' }}> Non Deluxe Rooms </MenuItem></Link>
                </SubMenu>
                <SubMenu label="View Properties" style={{ color: 'black' }}>
                    <Link to="/client/farm" element={<FarmHouse/>}><MenuItem style={{ color: 'black' }}> Farm House </MenuItem></Link>
                    <Link to="/client/resorts" element={<Resorts/>}><MenuItem style={{ color: 'black' }}> Resorts </MenuItem></Link>
                </SubMenu>
                </Menu>
            </Sidebar>
        {/* </nav> */}
        <div style={{marginLeft: '250px'}}>
            <Outlet/>
        </div>
    </div>
    </span>
  );
}
