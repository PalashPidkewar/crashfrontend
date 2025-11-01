// Footer.jsx
"use client";
import React from "react";
import Link from "next/link";
import { QRCodeCanvas } from "qrcode.react";
import { ImBlog } from "react-icons/im";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaWhatsapp,
    FaTwitter,
} from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import Image from "next/image";

const Footer = () => {
    const websiteURL = "https://www.pathltd.com/";
    
    return (
        <footer className="bg-gradient-to-r from-blue-300 via-green-400 to-blue-300 text-white py-10 px-4 md:px-10 lg:px-20">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                {/* LEFT - LOGO & TEXT */}
                <div className="lg:w-[35%] w-full flex flex-col items-center lg:items-start text-center lg:text-left">
                    <Image 
                        src="/Companylogo/pathlogoo4.png" 
                        alt="Path India Logo" 
                        width={200}
                        height={56}
                        className="h-14 w-auto mb-4"
                        priority
                    />

                    <p className="text-sm lg:text-base mb-6 max-w-md">
                        We are a globally recognised manufacturer and exporter of
                        high-quality galvanised and fabricated steel products. Here is our
                        journey towards success, commitment and determination. Path
                        India's footprint on integrating its combined expertise into
                        manufacturing artistry has made it a worldwide leader in
                        manufacturing.
                    </p>

                    <div className="flex gap-12 justify-center lg:justify-start text-white text-xl">
                        <a 
                            href="https://www.facebook.com/pathltd/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <FaFacebookF />
                        </a>
                        <a 
                            href="https://www.instagram.com/path_india/?hl=en" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a 
                            href="https://www.linkedin.com/company/path-india-ltd-/?originalSubdomain=in" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>
                        <a 
                            href="https://wa.me/7489828437" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>
                        <a 
                            href="https://x.com/pathindialtd?lang=en" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                        >
                            <FaTwitter />
                        </a>
                    </div>

                    {/* QR Code */}
                    <a href={websiteURL} target="_blank" rel="noopener noreferrer">
                        <div className="relative w-max mt-3 hidden sm:block">
                            <QRCodeCanvas
                                value={websiteURL}
                                size={85}
                                bgColor="transparent"
                                fgColor="#000000"
                                includeMargin={true}
                                level="H"
                            />
                            <span className="absolute inset-0 pt-22 flex items-center justify-center text-[10px] font-bold text-blue-500 pointer-events-none">
                                SCAN & CLICK
                            </span>
                        </div>
                    </a>
                </div>

                {/* RIGHT - INFO & LINKS */}
                <div className="lg:w-[65%] w-full flex flex-col gap-10">
                    {/* Section 1: Contact Info */}
                    <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2 text-base lg:text-lg">Call Support</h4>
                            <p>+91-7324-350100</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2 lg:text-lg">Sales Support</h4>
                            <p>033 4190 0001</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2 lg:text-lg">Email</h4>
                            <p>info@pathindia.in</p>
                            <p>sales@pathindia.in</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2 lg:text-lg">Corporate Office</h4>
                            <p>
                                76, Mall Road, Mhow Indore (M.P.) India – 453441
                            </p>
                        </div>
                    </div>

                    {/* Section 2: Navigation Links */}
                    <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-6 lg:pl-22 text-sm lg:text-base border-t border-white/30 pt-6">
                        <div className="flex flex-col gap-2">
                            <a 
                                href="https://www.pathltd.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Path India LTD
                            </a>
                            <Link href="/Home/About_Your_Product_Read_More">Products</Link>
                            <Link href="/Quality&infra/Quality&Policy">Quality</Link>
                            <Link href="/Resources/Blog" className="flex items-center">
                                <span>Blog</span>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Link href="/careers">Careers</Link>
                            <Link href="/Path_Group/AwardCertification">Awards</Link>
                            <Link href="/downloadpdf">Download</Link>
                        </div>
                        <div className="flex flex-col gap-2">
                            <a
                                href="https://www.google.com/maps/dir//PATH+Engineering+Private+Limited+GQ48%2BH2+Malendi,+Madhya+Pradesh+453441/@22.505755,75.763027,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3962f70026861e3b:0x86507d882bf7f942"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white"
                            >
                                Sitemap HTML
                            </a>
                            <Link href="/Path_Group/ESG_Social_Responsibity">ESG</Link>
                            <Link href="/Contactus">Contact</Link>
                            <Link
                                href="/Authorization/login"
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <span>Login</span>
                                <CiLogin className="text-lg text-red-600" />
                            </Link>
                        </div>
                    </div>

                    {/* Section 3: Bottom Links */}
                    <div className="flex flex-wrap justify-center gap-6 text-xs border-t border-white/20 pt-4">
                        <Link href="/privacy_policy">Privacy Policy</Link>
                        <Link href="/Disclaimer">Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;