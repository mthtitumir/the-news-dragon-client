import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button} from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee pauseOnHover={true} className='text-danger'>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            
        </div>
    );
};

export default Header;