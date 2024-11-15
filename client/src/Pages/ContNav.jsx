import { useState } from 'react'
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../assets/images/logo-a.png'
import Profile from '../assets/images/profile.png'
import '../assets/css/contnav.css'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom'


export default function ContNav() {


    return (
        <>
            <header className=" static  inset-x-0 top-0 z-50 shadow-md">
                <nav
                    class=" flex w-full flex-nowrap items-center justify-between  shadow-dark-mild bg-gradient-to-r from-yellow-700 to-yellow-950 lg:flex-wrap lg:justify-start "
                    data-twe-navbar-ref>
                    <div class="mx-auto max-w-7xl px-5 lg:px-8      flex w-full flex-wrap items-center justify-between px-3">

                        {/* <!-- Collapsible navbar container --> */}
                        <div
                            class="!visible  hidden flex-grow basis-[100%] items-center  lg:mt-0 lg:!flex lg:basis-auto"
                            id="navbarSupportedContent15"
                            data-twe-collapse-item>
                            {/* <!-- Left links --> */}
                            <ul
                                class="list-style-none me-auto flex flex-col ps-0   lg:flex-row"
                                data-twe-navbar-nav-ref>
                                {/* <!-- SEARCH ICON link --> */}
                                {/* <li
                                    class="my-4 ps-2 lg:my-0 list lg:pe-1 lg:ps-2"
                                    data-twe-nav-item-ref>
                                    <a
                                        class="lg:px-2"
                                        aria-current="page"
                                        href="#"
                                        data-twe-nav-link-ref
                                    >SEARCH</a
                                    >
                                </li> */}
                                {/* <!-- About link --> */}
                                <li
                                    class="my-4 ps-2 lg:my-0 list lg:pe-1 left-item left-item lg:ps-2"
                                    data-twe-nav-item-ref>
                                   <Link to={'/aboutus'}> <a
                                        class=" lg:px-2 "
                                        aria-current="page"
                                        href="#"
                                        data-twe-nav-link-ref
                                    >ABOUT</a
                                    ></Link>
                                </li>
                                {/* <!-- FAQ link --> */}
                                <li
                                    class="my-4 ps-2 lg:my-0 list lg:pe-1 left-item lg:ps-2"
                                    data-twe-nav-item-ref>
                                    <Link to={'/faq'}><a
                                        class="lg:px-2 "
                                        aria-current="page"
                                        href="#"
                                        data-twe-nav-link-ref
                                    >FAQ</a
                                    ></Link>
                                </li>
                                {/* <!-- Contact link --> */}
                                <li
                                    class="my-4 ps-2 lg:my-0 list lg:pe-1 left-item lg:ps-2"
                                    data-twe-nav-item-ref>
                                    <Link to={'/contactus'}><a
                                        class="lg:px-2 "
                                        aria-current="page"
                                        href="#"
                                        data-twe-nav-link-ref
                                    >CONTACT</a
                                    ></Link>
                                </li>
                            </ul>
                            <div class="lg:pe-2">
                                <div class="relative flex w-full flex-wrap items-stretch">
                                    {/* <!-- Left links --> */}
                                    <ul
                                        class="list-style-none me-auto flex flex-col ps-0  lg:flex-row"
                                        data-twe-navbar-nav-ref>
                                        {/* <!-- CONTACT NUMBER link --> */}
                                        <li
                                            class="my-4 ps-2 lg:my-0 list right-item lg:pe-1 lg:ps-2"
                                            data-twe-nav-item-ref>
                                            <a
                                                class="lg:px-2 "
                                                aria-current="page"
                                                href="#"
                                                data-twe-nav-link-ref
                                            >+19 2345 656</a
                                            >
                                        </li>
                                        {/* <!-- FAQ link --> */}
                                        <li
                                            class="my-4 ps-2 lg:my-0 list right-item  lg:pe-1 lg:ps-2"
                                            data-twe-nav-item-ref>
                                            <a
                                                class="lg:px-2 "
                                                aria-current="page"
                                                href="#"
                                                data-twe-nav-link-ref
                                            >Help@matrimony.com</a
                                            >
                                        </li>
                                        {/* <!-- Contact link --> */}
                                        <li
                                            class="my-4 ps-2 lg:my-0 list right-item lg:pe-1 lg:ps-2"
                                            data-twe-nav-item-ref>
                                            <a
                                                class="lg:px-2 "
                                                aria-current="page"
                                                href="#"
                                                data-twe-nav-link-ref
                                            >facebook</a
                                            >
                                        </li>
                                        {/* <!-- Contact link --> */}
                                        <li
                                            class="my-4 ps-2 lg:my-0 list right-item lg:pe-1 lg:ps-2"
                                            data-twe-nav-item-ref>
                                            <a
                                                class="lg:px-2 "
                                                aria-current="page"
                                                href="#"
                                                data-twe-nav-link-ref
                                            >Twitter</a
                                            >
                                        </li>

                                        {/* <!-- WATS APP ICON link --> */}
                                        <li
                                            class="my-4 ps-2 lg:my-0 list lg:pe-1 lg:ps-2"
                                            data-twe-nav-item-ref>
                                            <a
                                                class=""
                                                aria-current="page"
                                                href="#"
                                                data-twe-nav-link-ref
                                            >WATS APP </a
                                            >
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
