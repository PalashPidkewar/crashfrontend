"use client";
import React, { useEffect, useState, useRef } from 'react';
import {
    FaPhoneAlt, FaEnvelope, FaLinkedin, FaInstagram, FaFacebook, FaChevronDown, FaBars, FaTimes
} from 'react-icons/fa';
import { TbGridDots } from 'react-icons/tb';
import { ImBlog } from "react-icons/im";
import { FaRoad } from "react-icons/fa";
import { FaRoadBarrier } from "react-icons/fa6";

import { MdOutlineWarehouse } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { GiCrystalBars } from "react-icons/gi";
import { SiInteractiondesignfoundation } from "react-icons/si";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { GiDeliveryDrone } from "react-icons/gi";
const Navbar = () => {
    const [showSocialBar, setShowSocialBar] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [aboutDropdown, setAboutDropdown] = useState(false);
    const [productDropdown, setProductDropdown] = useState(false);
    const [applicationDropdown, setApplicationDropdown] = useState(false);
    const [qualityDropdown, setQualityDropdown] = useState(false);
    const [resourcesDropdown, setResourcesDropdown] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [isDesktop, setIsDesktop] = useState(false);
    const prevScrollPosRef = useRef(0);
    const pathname = usePathname();

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    // Handle initial mount for window object
    useEffect(() => {
        setIsDesktop(window.innerWidth >= 768);
        prevScrollPosRef.current = window.scrollY;
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const curr = window.scrollY;
            if (Math.abs(curr - prevScrollPosRef.current) > 10) {
                setShowSocialBar(curr < prevScrollPosRef.current || curr < 50);
                prevScrollPosRef.current = curr;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setAboutDropdown(false);
        setProductDropdown(false);
        setApplicationDropdown(false);
        setQualityDropdown(false);
        setResourcesDropdown(false);
        setMobileMenuOpen(false);
    }, [pathname]);

    const toggleDropdown = (setter, current) => {
        if (!isDesktop) {
            setter(!current);
        }
    };

    const handleMouseEnter = (setter) => {
        if (isDesktop) setter(true);
    };

    const handleMouseLeave = (setter) => {
        if (isDesktop) setter(false);
    };

    const closeAllDropdowns = () => {
        setAboutDropdown(false);
        setProductDropdown(false);
        setApplicationDropdown(false);
        setQualityDropdown(false);
        setResourcesDropdown(false);
    };

    return (
        <>
            {showSocialBar && (
                <div className="bg-gray-100 w-full py-1 px-4 flex items-center text-gray-600 text-sm md:text-base relative">
                    {/* Left - Company Name */}
                    <div className="hidden sm:block font-semibold absolute left-4">
                        Prakash Asphaltings and Toll Highways (INDIA) Ltd.
                    </div>

                    {/* Middle - Contact Info */}
                    <div className="flex items-center gap-4 font-medium whitespace-nowrap justify-start sm:justify-center mx-4 sm:mx-auto">
                        <span className="flex items-center gap-1">
                            <FaPhoneAlt className="text-green-500" /> +91-7324-350100
                        </span>
                        <span className="hidden sm:inline">|</span>
                        <span className="hidden sm:flex items-center gap-1">
                            <FaEnvelope className="text-yellow-400" /> info@pathindia.com
                        </span>
                    </div>

                    {/* Right Side - Social Icons + Dropdown */}
                    <div className="flex items-center space-x-3 sm:space-x-4 absolute right-4">
                        <a
                            href="https://www.linkedin.com/company/path-india-ltd-/?originalSubdomain=in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:animate-bounce transition"
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <a
                            href="https://www.instagram.com/path_india/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-600 hover:animate-bounce transition"
                        >
                            <FaInstagram size={20} />
                        </a>
                        <a
                            href="https://www.facebook.com/pathltd/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:animate-bounce transition"
                        >
                            <FaFacebook size={20} />
                        </a>

                        <Link
                            href="/-Resources/Blog"
                            className="text-gray-600 hover:animate-bounce transition"
                        >
                            <ImBlog size={18} />
                        </Link>

                        {/* Dropdown */}
                        <div
                            ref={dropdownRef}
                            className="relative"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <button
                                className="text-gray-700 hover:text-black transition focus:outline-none mt-1"
                                onClick={() => setIsDropdownOpen(prev => !prev)}
                            >
                                <TbGridDots size={15} />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                    <ul className="py-1 text-sm text-gray-700">
                                        {[
                                            { name: "Path Highway", link: "#", icon: <FaRoad className="inline mr-2 text-blue-500" /> },
                                            { name: "Path Logistic", link: "#", icon: <MdOutlineWarehouse className="inline mr-2 text-green-500" /> },
                                            { name: "Path Recharge", link: "#", icon: <RiHotelLine className="inline mr-2 text-purple-500" /> },
                                            { name: "Path Crushbarrier", link: "#", icon: <FaRoadBarrier className="inline mr-2 text-red-500" /> },
                                            { name: "Path GFRP", link: "#", icon: <GiCrystalBars className="inline mr-2 text-yellow-500" /> },

                                            {
                                                name: "Path Dynamics",
                                                link: "#",
                                                icon: <GiDeliveryDrone className="inline mr-2 text-green-500" />

                                            },
                                            { name: "Path Foundation", link: "#", icon: <SiInteractiondesignfoundation className="inline mr-2 text-indigo-500" /> },
                                        ].map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.link}
                                                    className="flex items-center px-4 py-2 hover:bg-gray-100"
                                                >
                                                    {item.icon} {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <nav className="bg-white sticky top-0 shadow-md z-40">
                <div className="max-w-[1800px] mx-auto flex items-center justify-between px-4 py-5 lg:py-2 relative overflow-x-auto md:overflow-visible">
                    <Link href="/" className="flex-shrink-0 -ml-2 sm:pl-0">
                        <Image
                            src="/Companylogo/pathlogoo4.png"
                            alt="Logo"
                            width={180}
                            height={48}
                            className="h-8 sm:h-10 md:h-12 w-auto max-w-[150px] md:max-w-[180px]"
                            priority
                        />
                    </Link>

                    {/* Mobile menu toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu"
                            className="text-gray-600 focus:outline-none"
                        >
                            {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                        </button>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex flex-wrap text-gray-700 space-x-6 items-center">
                        {/* Path Group Dropdown */}
                        <div className="relative"
                            onMouseEnter={() => handleMouseEnter(setAboutDropdown)}
                            onMouseLeave={() => handleMouseLeave(setAboutDropdown)}
                        >
                            <button
                                onClick={() => toggleDropdown(setAboutDropdown, aboutDropdown)}
                                className="flex items-center hover:text-blue-600 fonty"
                            >
                                Path Group <FaChevronDown className={`ml-1 transition-transform duration-300 ${aboutDropdown ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`absolute -left-28 w-96 bg-white shadow-lg rounded-md z-50 transition-all duration-200 ${aboutDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                <div className="grid grid-cols-2 gap-x-6 relative">
                                    <div className="space-y-4 pr-4 pt-5 pl-5 relative">
                                        <div className="absolute top-4 bottom-4 right-0 border-r border-gray-300"></div>
                                        <Link href="/Path_Group/CompanyOverview" className="block px-2 py-1 hover:text-blue-500">Overview</Link>
                                        <Link href="/Path_Group/Mission&Vission" className="block px-2 py-1 hover:text-blue-500">Mission & Vision</Link>
                                        <Link href="/Path_Group/CoreValues" className="block px-2 py-1 hover:text-blue-500">Core View</Link>
                                    </div>
                                    <div className="space-y-4 pl-4 pt-5">
                                        <Link href="/Path_Group/Boardofdirector" className="block px-2 py-1 hover:text-blue-500">Board of Director</Link>

                                        <Link href="/Path_Group/ESG_Social_Responsibity" className="block px-2 py-1 hover:text-blue-500">ESG</Link>
                                        <Link href="/Path_Group/AwardCertification" className="block px-2 py-1 hover:text-blue-500">Awards and Certification</Link>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product Dropdown */}
                        <div className="relative"
                            onMouseEnter={() => handleMouseEnter(setProductDropdown)}
                            onMouseLeave={() => handleMouseLeave(setProductDropdown)}
                        >
                            <button
                                onClick={() => toggleDropdown(setProductDropdown, productDropdown)}
                                className="flex items-center hover:text-blue-600 fonty"
                            >
                                Product <FaChevronDown className={`ml-1 transition-transform duration-300 ${productDropdown ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`absolute left-0 w-48 bg-white shadow-lg rounded-md z-50 transition-all duration-200 ${productDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                <h2 className="pl-2 text-lg font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Metal Beam Crash Barrier</h2>
                                <h2 className="px-4 py-2 font-semibold text-black">Thrie Beam</h2>
                                <Link href="/Product/CrashbarriersThriewBeam" className="block px-4 py-2 hover:text-blue-500">H2W4 || H2W5</Link>
                                <h2 className="px-4 py-2 font-semibold text-black">W Beam</h2>
                                <Link href="/Product/CrashbarriersWbeam" className="block px-4 py-2 hover:text-blue-500">H1W3 || H1W4</Link>
                                <h2 className="px-4 py-2 font-semibold text-black">Channel Post</h2>
                                <Link href="/Product/CrashBarrier_channel_post" className="block px-4 py-2 hover:text-blue-500">C - Channel Post</Link>
                            </div>
                        </div>

                        {/* Application Area Dropdown */}
                        <div className="relative"
                            onMouseEnter={() => handleMouseEnter(setApplicationDropdown)}
                            onMouseLeave={() => handleMouseLeave(setApplicationDropdown)}
                        >
                            <button
                                onClick={() => toggleDropdown(setApplicationDropdown, applicationDropdown)}
                                className="flex items-center hover:text-blue-600 fonty"
                            >
                                Application Areas <FaChevronDown className={`ml-1 transition-transform duration-300 ${applicationDropdown ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 transition-all duration-200 ${applicationDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 px-4 py-2 font-semibold">Road Safety System</h2>
                                <Link href="/ApplicationArea" className="block px-4 py-2 hover:text-blue-500">Road and Railway Safety</Link>
                            </div>
                        </div>

                        {/* Quality Dropdown */}
                        <div className="relative"
                            onMouseEnter={() => handleMouseEnter(setQualityDropdown)}
                            onMouseLeave={() => handleMouseLeave(setQualityDropdown)}
                        >
                            <button
                                onClick={() => toggleDropdown(setQualityDropdown, qualityDropdown)}
                                className="flex items-center hover:text-blue-600 fonty"
                            >
                                Quality and Infrastructure <FaChevronDown className={`ml-1 transition-transform duration-300 ${qualityDropdown ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md z-50 transition-all duration-200 ${qualityDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                <Link href="/Quality&infra/Quality&Policy" className="block px-4 py-2 hover:text-blue-500">Quality & Policies</Link>
                                <Link href="/Quality&infra/Manufacturing_Unit" className="block px-4 py-2 hover:text-blue-500">Manufacturing Unit</Link>
                                <Link href="/Quality&infra/Certification" className="block px-4 py-2 hover:text-blue-500">Certification</Link>
                                <Link href="/Quality&infra/Reseach_Center" className="block px-4 py-2 hover:text-blue-500">Research Center</Link>
                            </div>
                        </div>

                        <Link href="/Client" className="hover:text-blue-600 fonty">Clients</Link>

                        {/* Resources Dropdown */}
                        <div className="relative"
                            onMouseEnter={() => handleMouseEnter(setResourcesDropdown)}
                            onMouseLeave={() => handleMouseLeave(setResourcesDropdown)}
                        >
                            <button
                                onClick={() => toggleDropdown(setResourcesDropdown, resourcesDropdown)}
                                className="flex items-center hover:text-blue-600 fonty"
                            >
                                Resources <FaChevronDown className={`ml-1 transition-transform duration-300 ${resourcesDropdown ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`absolute left-0 mt-4 w-56 bg-white shadow-lg rounded-md z-50 transition-all duration-200 ${resourcesDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                <a href="/Path_India_crash_barriers.pdf" download className="block px-4 py-2 hover:text-blue-500">PDF DOWNLOAD</a>
                                <Link href="/Resources/Installation_barriers" className="block px-4 py-2 hover:text-blue-500">Install Barriers Gallery</Link>
                                <Link href="/Resources/Blog" className="block px-4 py-2 hover:text-blue-500">Blog</Link>
                            </div>
                        </div>

                        <Link href="/Contactus" className="hover:text-blue-600 fonty">Contact Us</Link>
                    </div>
                </div>

                {/* Mobile Nav Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4 text-gray-500">
                        {/* Path Group */}
                        <div>
                            <button
                                onClick={() => {
                                    closeAllDropdowns();
                                    toggleDropdown(setAboutDropdown, aboutDropdown);
                                }}
                                className="flex justify-between w-full text-left font-semibold"
                            >
                                Path Group
                                <FaChevronDown className={`mr-5 transition-transform duration-300 ${aboutDropdown ? 'rotate-180' : ''}`} />
                            </button>
                            {aboutDropdown && (
                                <div className="pl-4 mt-2 space-y-2 border-l-1 border-sky-300">
                                    <Link href="/Path_Group/CompanyOverview" className="block py-1 hover:text-blue-600">Overview</Link>
                                    <Link href="/Path_Group/Mission&Vission" className="block py-1 hover:text-blue-600">Mission & Vision</Link>
                                    <Link href="/Path_Group/CoreValues" className="block py-1 hover:text-blue-600">Core View</Link>
                                    <Link href="/Path_Group/Boardofdirector" className="block py-1 hover:text-blue-600">Board of Director</Link>
                                    <Link href="/Path_Group/ESG_Social_Responsibity" className="block py-1 hover:text-blue-600">ESG</Link>
                                    <Link href="/Path_Group/AwardCertification" className="block py-1 hover:text-blue-600">Awards and Certification</Link>
                                </div>
                            )}
                        </div>

                        {/* Product */}
                        <div>
                            <button
                                onClick={() => {
                                    closeAllDropdowns();
                                    toggleDropdown(setProductDropdown, productDropdown);
                                }}
                                className="flex justify-between w-full text-left font-semibold"
                            >
                                Product
                                <FaChevronDown className={`mr-5 transition-transform duration-300 ${productDropdown ? 'rotate-180' : ''}`} />
                            </button>
                            {productDropdown && (
                                <div className="pl-4 mt-2 space-y-2 border-l-1 border-sky-300">
                                    <h2 className="text-green-600 font-bold">Metal Beam Crash Barrier</h2>
                                    <h3 className="font-semibold">Thrie Beam</h3>
                                    <Link href="/Product/CrashbarriersThriewBeam" className="block py-1 hover:text-blue-600">H2W4 || H2W5</Link>
                                    <h3 className="font-semibold">W Beam</h3>
                                    <Link href="/Product/CrashbarriersWbeam" className="block py-1 hover:text-blue-600">H1W3 || H1W4</Link>
                                    <h3 className="font-semibold">Channel Post</h3>
                                    <Link href="/Product/CrashBarrier_channel_post" className="block py-1 hover:text-blue-600">C-Channel Post</Link>
                                </div>
                            )}
                        </div>

                        {/* Application Areas */}
                        <div>
                            <button
                                onClick={() => {
                                    closeAllDropdowns();
                                    toggleDropdown(setApplicationDropdown, applicationDropdown);
                                }}
                                className="flex justify-between w-full text-left font-semibold"
                            >
                                Application Areas
                                <FaChevronDown className={`mr-5 transition-transform duration-300 ${applicationDropdown ? 'rotate-180' : ''}`} />
                            </button>
                            {applicationDropdown && (
                                <div className="pl-4 mt-2 space-y-2 border-l-1 border-sky-300">
                                    <Link href="/ApplicationArea" className="block py-1 hover:text-blue-600">Road and Railway Safety</Link>
                                </div>
                            )}
                        </div>

                        {/* Quality and Infrastructure */}
                        <div>
                            <button
                                onClick={() => {
                                    closeAllDropdowns();
                                    toggleDropdown(setQualityDropdown, qualityDropdown);
                                }}
                                className="flex justify-between w-full text-left font-semibold"
                            >
                                Quality and Infrastructure
                                <FaChevronDown className={`mr-5 transition-transform duration-300 ${qualityDropdown ? 'rotate-180' : ''}`} />
                            </button>
                            {qualityDropdown && (
                                <div className="pl-4 mt-2 space-y-2 border-l-1 border-sky-300">
                                    <Link href="/Quality&infra/Quality&Policy" className="block py-1 hover:text-blue-600">Quality & Policies</Link>
                                    <Link href="/Quality&infra/Manufacturing_Unit" className="block py-1 hover:text-blue-600">Manufacturing Unit</Link>
                                    <Link href="/Quality&infra/Certification" className="block py-1 hover:text-blue-600">Certification</Link>
                                    <Link href="/Quality&infra/Reseach_Center" className="block py-1 hover:text-blue-600">Research Center</Link>
                                </div>
                            )}
                        </div>

                        <Link href="/Client" className="block py-2 font-semibold hover:text-blue-600">Clients</Link>

                        {/* Resources */}
                        <div>
                            <button
                                onClick={() => {
                                    closeAllDropdowns();
                                    toggleDropdown(setResourcesDropdown, resourcesDropdown);
                                }}
                                className="flex justify-between w-full text-left font-semibold"
                            >
                                Resources
                                <FaChevronDown className={`mr-5 transition-transform duration-300 ${resourcesDropdown ? 'rotate-180' : ''}`} />
                            </button>
                            {resourcesDropdown && (
                                <div className="pl-4 mt-2 space-y-2 border-l-1 border-sky-300">
                                    <a href="/Path_India_crash_barriers.pdf" download className="block py-1 hover:text-blue-600">PDF DOWNLOAD</a>
                                    <Link href="/Resources/Installation_barriers" className="block py-1 hover:text-blue-600">Install Barriers Gallery</Link>
                                    <Link href="/Resources/Blog" className="block py-1 hover:text-blue-600">Blog</Link>
                                </div>
                            )}
                        </div>

                        <Link href="/Contactus" className="block py-2 font-semibold hover:text-blue-600">Contact Us</Link>

                        <div className="flex justify-between items-center">
                            <a
                                href="https://pathrecharge.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 text-xs hover:text-blue-600"
                            >
                                GFRP M.N.F W/B
                            </a>
                            <a
                                href="https://www.pathltd.com/thermoplastic-road-markings/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 text-xs hover:text-blue-600"
                            >
                                THERMOPLASTIC M.N.F W/B
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;