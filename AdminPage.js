import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './style.css';
import { Link, Outlet } from 'react-router-dom';
import Profile from './Profile';
import Entry from './Entry';
import View from './View';

export default function AdminPage() {
  return (
    <span>
    <div style={{width:'100%', display: 'flex'}}>
        {/* <nav > */}
            <Sidebar style={{position: 'fixed'}}>
                <Menu>
                <SubMenu label="Clients" style={{ color: 'black' }}>
                    <Link to="/admin/profile" element={<Profile/>}><MenuItem style={{ color: 'black' }}> View Client </MenuItem></Link>
                    <Link to="#" element={<Entry/>}><MenuItem style={{ color: 'black' }}> Add Client </MenuItem></Link>
                </SubMenu>
                <SubMenu label="Hotel Management" style={{ color: 'black' }}>
                    <Link to="/admin/entry" element={<Entry/>}><MenuItem style={{ color: 'black' }}> Add Rooms </MenuItem></Link>
                    <Link to="/admin/viewHotel" element={<View/>}><MenuItem style={{ color: 'black' }}> View Rooms </MenuItem></Link>
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
