"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from "react";
import { TbArrowUpRight } from "react-icons/tb";

const nav = [
    { href: '/', label: 'HOME' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/about', label: 'ABOUT US' },
    { href: '/gallery', label: 'GALLERY' },
];

export default function Navigation() {
    const pathname = usePathname();
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <header className="flex justify-between items-center px-6 py-4">
                <button className="block lg:hidden" onClick={() => setOpen(!isOpen)}>
                    <svg
                        className={`fill-current h-6 w-6 ${isOpen ? "hidden" : "block"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg
                        className={`fill-current h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>

                <nav className={`lg:flex gap-x-6 transform transition-transform duration-300 ease-in-out ${isOpen ? 'flex flex-col items-center px-8 py-12 z-50 h-screen gap-y-6 absolute inset-0 bg-white translate-x-0' : 'hidden lg:flex lg:translate-x-0'}`}>
                    {nav.map(({ href, label }) => (
                        <Link key={href} href={href} className={`py-2 px-4 text-lg ${pathname === href ? 'text-black font-semibold' : 'text-gray-600'}`}>
                            {label}
                        </Link>
                    ))}
                    {isOpen && (
                        <button className="absolute top-4 right-4" onClick={() => setOpen(false)}>
                            <svg
                                className="fill-current h-6 w-6"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                            </svg>
                        </button>
                    )}
                </nav>

                <Link href="/contact" className="hidden lg:inline-flex items-center px-5 py-2 font-medium text-gray-800 bg-white border border-gray-600 rounded-full shadow hover:bg-gray-100">
                    Contact Us <TbArrowUpRight className="w-5 h-5 ml-2" />
                </Link>
            </header>

            {isOpen && (
                <div className="fixed inset-0 z-40 bg-black opacity-50" onClick={() => setOpen(false)}></div>
            )}
        </>
    );
}
