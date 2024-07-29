import React from 'react';
import '../nav/nav.css';
import { Link } from 'react-router-dom';

import  Button  from '@mui/material/Button';
import {KeyboardArrowDown} from '@mui/icons-material';
import PhoneIcon from '@mui/icons-material/Call';
const Nav = () => {
    return(
        <div className='nav d-flex align-items-center'>
            <div className='container-fluid'>
                <div className='row'>
                    {/* <div className="col-sm-3 part1">

                    </div> */}
                    <div className='col-sm-7 part2 '>
                        <nav>
                            <ul className='list list-inline mb-0'>
                                <li className='list-inline-item '> 
                                    <Button><Link to="">Home</Link></Button> 
                                </li>
                                <li className='list-inline-item '> 
                                    <Button><Link to="">About</Link></Button> 
                                </li>
                                <li className='list-inline-item '> 
                                    <Button><Link to="">Shop</Link></Button> 
                                </li>
                                <li className='list-inline-item '> 
                                    <Button><Link to="">Vendors</Link></Button> 
                                </li>
                                <li className='list-inline-item '> 
                                    <Button><Link to="">Deals</Link></Button> 
                                </li>
                                <li className='list-inline-item '> 
                                    <Button><Link to="">Pages <KeyboardArrowDown/></Link>
                                    </Button> 
                                
                                {/* dropdown menu starts for pages */}
                                <div className='dropdown_menu'>
                                    <ul>
                                        <li><Button><Link to = "/about">About us</Link></Button></li>
                                        <li><Button><Link to = "/about">Contact</Link></Button></li>
                                        <li><Button><Link to = "/about">My Account</Link></Button></li>
                                        <li><Button><Link to = "/about">Login</Link></Button></li>
                                        <li><Button><Link to = "/about">Register</Link></Button></li>
                                        <li><Button><Link to = "/about">Purchase Guide</Link></Button></li>
                                        <li><Button><Link to = "/about">Private Policy</Link></Button></li>
                                        <li><Button><Link to = "/about">Terms of Service</Link></Button></li>


                                    </ul>

                                </div>
                                {/* dropdown menu ends for pages */}



                                </li>
                                <li className='list-inline-item '> 
                                    <Button><Link>Contact</Link></Button> 
                                </li>
                                
                            </ul>
                        </nav>

                    </div>
                    <div className='col-sm-5 part3 d-flex align-items-center '>
                        <div className='phNo d-flex align-items-center ml-auto'>
                            <span><PhoneIcon/></span>
                            <div className='info ml-3'>
                                <h3 className='text-g mb-0'>000000000</h3>
                                <p className='mb-0'>24/7 Support Center</p>
                            </div>

                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    )

}

export default Nav;