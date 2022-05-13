import React from 'react';
import footer from '../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{ background: `url(${footer})`, backgroundSize: 'cover' }} class=" pt-16 pb-11 ">
            <div className='footer p-10  text-neutral-content'>
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Emergency Checkup</a>
                    <a class="link link-hover">Monthly Checkup</a>
                    <a class="link link-hover">Weekly Checkup</a>
                    <a class="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span class="footer-title">ORAL HEALTH</span>
                    <a class="link link-hover">Fluoride Treatment</a>
                    <a class="link link-hover">Cavity Filling</a>
                    <a class="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <span class="footer-title">OUR ADDRESS</span>
                    <a class="link link-hover">New York - 101010 Hudson</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </div>
            <p className='text-center my-10'>Copyright © 2022 - All right reserved by Doctors Portals Ltd</p>
        </footer>
    );
};

export default Footer;