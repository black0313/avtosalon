import React from 'react';
import './SIdebar.css'
import {Link} from "react-router-dom";

function Sidebar(props) {
    return (
        <div className={'sidebar bgColor'}>

            <div className={'sidebar-body'}>
                    <ul>
                        <li>
                            <Link to={'/models/asosiy'}>
                                <div className={'li-item'}>
                                    <div className={'icon'}>
                                        <svg  viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.993106 7.10625C0.360964 7.67518 0 8.48567 0 9.33613V17C0 18.6569 1.34315 20 3 20H17C18.6569 20 20 18.6569 20 17V9.33613C20 8.48567 19.639 7.67518 19.0069 7.10625L12.0069 0.80625C10.866 -0.220574 9.13402 -0.220572 7.9931 0.806251L0.993106 7.10625ZM9 11C7.89543 11 7 11.8955 7 13V17C7 17.5523 7.44772 18 8 18H12C12.5523 18 13 17.5523 13 17V13C13 11.8955 12.1046 11 11 11H9Z" fill="#1A1D1F"/>
                                        </svg>
                                    </div>
                                    <span>Asosiy</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/models/elonlar'}>
                                <div className={'li-item'}>
                                    <div className={'icon'}>
                                        <svg  viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.51812 -6.10358e-05C7.50537 -0.00030578 7.49264 -0.000304571 7.47996 -6.10358e-05H5.55221C4.31497 -6.10358e-05 3.20463 0.759484 2.75619 1.9126L0.96825 6.51017C0.533862 7.62716 1.01111 8.85217 2 9.41207V16.9999C2 18.6568 3.34315 19.9999 5 19.9999H17C18.6569 19.9999 20 18.6568 20 16.9999V9.41208C20.9889 8.85218 21.4662 7.62717 21.0318 6.51017L19.2438 1.9126C18.7954 0.759486 17.685 -6.10358e-05 16.4478 -6.10358e-05H14.5201C14.5074 -0.000304571 14.4947 -0.00030578 14.4819 -6.10358e-05H7.51812ZM18 9.73837C17.5515 9.68583 17.1119 9.55587 16.7016 9.35072L16.0005 9.00017L15.9994 9.00017L15.357 9.25716C14.1649 9.73398 12.8351 9.73398 11.6431 9.25716L11 8.99994L10.357 9.25716C9.1649 9.73398 7.83511 9.73398 6.64305 9.25716L6.00058 9.00017L5.99955 9.00017L5.29844 9.35072C4.88814 9.55587 4.44854 9.68583 4 9.73837V16.9999C4 17.5522 4.44772 17.9999 5 17.9999H7V14.9999C7 13.3431 8.34315 11.9999 10 11.9999H12C13.6569 11.9999 15 13.3431 15 14.9999V17.9999H17C17.5523 17.9999 18 17.5522 18 16.9999V9.73837ZM16.8944 7.21108C16.8793 7.20354 16.8642 7.1962 16.849 7.18906L15.737 1.99994H16.4478C16.8602 1.99994 17.2303 2.25312 17.3798 2.63749L19.1678 7.23506C19.2451 7.43404 19.1304 7.65579 18.9233 7.70757C18.4776 7.81898 18.0069 7.7673 17.596 7.56187L16.8944 7.21108ZM14.8303 7.31376L13.6916 1.99994H12V7.24587L12.3858 7.4002C13.1011 7.6863 13.8989 7.6863 14.6142 7.4002L14.8303 7.31376ZM10 1.99994H8.30844L7.16976 7.31378L7.38583 7.4002C8.10107 7.6863 8.89894 7.6863 9.61418 7.4002L10 7.24588V1.99994ZM5.15109 7.18904L6.26304 1.99994H5.55221C5.13979 1.99994 4.76968 2.25312 4.6202 2.63749L2.83226 7.23506C2.75488 7.43404 2.8696 7.65579 3.07673 7.70757C3.52237 7.81898 3.99315 7.7673 4.40401 7.56187L5.10558 7.21108C5.12068 7.20354 5.13585 7.19619 5.15109 7.18904ZM13 14.9999V17.9999H9V14.9999C9 14.4477 9.44772 13.9999 10 13.9999H12C12.5523 13.9999 13 14.4477 13 14.9999Z" fill="#6F767E"/>
                                        </svg>
                                    </div>

                                    <span>E'lonlar</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to={'savollar'}>
                                <div className={'li-item'}>
                                    <div className={'icon'}>
                                        <svg width={'24'} height={'24'}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 4C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V12C19 11.4477 19.4477 11 20 11C20.5523 11 21 11.4477 21 12V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H12C12.5523 2 13 2.44772 13 3C13 3.55228 12.5523 4 12 4H6Z" fill="#6F767E"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06412 11.6638C7.91113 11.8168 7.81188 12.0153 7.78128 12.2295L7.30988 15.5293C7.2156 16.1893 7.78128 16.755 8.44125 16.6607L11.7411 16.1893C11.9553 16.1587 12.1538 16.0595 12.3068 15.9065L19.8492 8.364C21.0208 7.19242 21.0208 5.29293 19.8492 4.12136C18.6777 2.94978 16.7782 2.94978 15.6066 4.12136L8.06412 11.6638ZM16.3137 9.07111L11.1283 14.2566L9.47834 14.4923L9.71404 12.8423L14.8995 7.65689L16.3137 9.07111ZM17.7279 7.65689L16.3137 6.24268L17.0208 5.53557C17.4113 5.14504 18.0445 5.14504 18.435 5.53557C18.8255 5.92609 18.8255 6.55926 18.435 6.94978L17.7279 7.65689Z" fill="#6F767E"/>
                                        </svg>
                                    </div>

                                    <span>Savollar</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
            </div>
            <div className={'sidebar-footer'}>

                <div className={'sidebar-switch'}>
                        <div className={'switch-day'}>
                            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" fill="#1A1D1F"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9952 1.5C12.5475 1.5 12.9952 1.94772 12.9952 2.5V3.5C12.9952 4.05228 12.5475 4.5 11.9952 4.5C11.4429 4.5 10.9952 4.05228 10.9952 3.5V2.5C10.9952 1.94772 11.4429 1.5 11.9952 1.5Z" fill="#1A1D1F"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9952 19.5C12.5475 19.5 12.9952 19.9477 12.9952 20.5V21.4968C12.9952 22.0491 12.5475 22.4968 11.9952 22.4968C11.4429 22.4968 10.9952 22.0491 10.9952 21.4968V20.5C10.9952 19.9477 11.4429 19.5 11.9952 19.5Z" fill="#1A1D1F"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.49683 11.9984C1.49683 11.4461 1.94454 10.9984 2.49683 10.9984H3.49683C4.04911 10.9984 4.49683 11.4461 4.49683 11.9984C4.49683 12.5507 4.04911 12.9984 3.49683 12.9984H2.49683C1.94454 12.9984 1.49683 12.5507 1.49683 11.9984Z" fill="#1A1D1F"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4968 11.9984C19.4968 11.4461 19.9445 10.9984 20.4968 10.9984H21.4936C22.0459 10.9984 22.4936 11.4461 22.4936 11.9984C22.4936 12.5507 22.0459 12.9984 21.4936 12.9984H20.4968C19.9445 12.9984 19.4968 12.5507 19.4968 11.9984Z" fill="#1A1D1F"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.57183 19.4219C4.18131 19.0313 4.18131 18.3982 4.57183 18.0077L5.27894 17.3005C5.66946 16.91 6.30263 16.91 6.69315 17.3005C7.08367 17.6911 7.08367 18.3242 6.69315 18.7148L5.98604 19.4219C5.59552 19.8124 4.96235 19.8124 4.57183 19.4219Z" fill="#1A1D1F"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2998 6.69394C16.9092 6.30342 16.9092 5.67025 17.2998 5.27973L18.0046 4.5749C18.3951 4.18438 19.0283 4.18438 19.4188 4.5749C19.8093 4.96543 19.8093 5.59859 19.4188 5.98911L18.714 6.69394C18.3234 7.08447 17.6903 7.08447 17.2998 6.69394Z" fill="#1A1D1F"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.57183 4.5749C4.96235 4.18438 5.59552 4.18438 5.98604 4.5749L6.69315 5.28201C7.08367 5.67253 7.08367 6.3057 6.69315 6.69622C6.30263 7.08675 5.66946 7.08675 5.27894 6.69622L4.57183 5.98911C4.18131 5.59859 4.18131 4.96543 4.57183 4.5749Z" fill="#1A1D1F"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2998 17.3028C17.6903 16.9123 18.3234 16.9123 18.714 17.3028L19.4188 18.0077C19.8093 18.3982 19.8093 19.0313 19.4188 19.4219C19.0283 19.8124 18.3951 19.8124 18.0046 19.4219L17.2998 18.717C16.9092 18.3265 16.9092 17.6933 17.2998 17.3028Z" fill="#1A1D1F"/>
                            </svg>
                        </div>
                        <div className={'switch-night'}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.06567 6.0256C6.21318 7.28671 5 9.41159 5 11.8167C5 15.6827 8.13401 18.8167 12 18.8167C14.4051 18.8167 16.5299 17.6035 17.7911 15.751C12.6817 15.1925 8.62421 11.1349 8.06567 6.0256ZM19 13.8167C19.866 13.8167 20.6118 14.5799 20.2691 15.3753C18.8898 18.576 15.7066 20.8167 12 20.8167C7.02944 20.8167 3 16.7872 3 11.8167C3 8.11009 5.24067 4.92685 8.4414 3.54758C9.23674 3.20485 10 3.95063 10 4.81667C10 9.78724 14.0294 13.8167 19 13.8167Z" fill="#6F767E"/>
                            </svg>

                        </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
