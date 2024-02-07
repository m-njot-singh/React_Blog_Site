import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                // src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                src="data:image/svg+xml,%3Csvg id='eMC7VygYOvU1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 3840 2160' shape-rendering='geometricPrecision' text-rendering='geometricPrecision'%3E%3Ctext dx='0' dy='0' font-family='&amp;quot;eMC7VygYOvU1:::Montserrat&amp;quot;' font-size='15' font-weight='700' transform='matrix(48.675829 0 0 45.523865-8.469238 1325.969126)' fill='%23e85b04' stroke-width='0'%3E%3Ctspan y='0' font-weight='700' stroke-width='0'%3E%3C!%5BCDATA%5B
Blog%5D%5D%3E%3C/tspan%3E%3C/text%3E%3Cpath d='M121.02271,157.79953c-3.17845,0-5.07315-1.87363-4.23193-4.18487l2.63126-7.22932c.84122-2.31124,4.09981-4.18487,7.27827-4.18487h23.8226c3.17845,0,5.07315,1.87363,4.23193,4.18487l-2.63126,7.22932c-.84122,2.31124-4.09981,4.18487-7.27827,4.18487h-23.8226Z' transform='matrix(51.647776 0-7.939447 45.026844-3026.784429-5678.41967)' fill='%23545454' stroke-width='0'/%3E%3Ctext dx='0' dy='0' font-family='&amp;quot;eMC7VygYOvU1:::Montserrat&amp;quot;' font-size='15' font-weight='700' transform='matrix(53.198277 0 0 47.386792 1961.859343 1335.792482)' fill='%23fff' stroke-width='0'%3E%3Ctspan y='0' font-weight='700' stroke-width='0'%3E%3C!%5BCDATA%5B
Site%5D%5D%3E%3C/tspan%3E%3C/text%3E%3Cstyle%3E%3C!%5BCDATA%5B@font-face %7Bfont-family: 'eMC7VygYOvU1:::Montserrat';font-style: normal;font-weight: 700;src: url(data:font/ttf;charset=utf-8;base64,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) format('truetype');%7D
%5D%5D%3E%3C/style%3E%3C/svg%3E"
                                className="mr-3 h-32"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/m-njot-singh"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="https://www.linkedin.com/in/manj0t-singh" className="hover:underline">
                                        LinkedIn
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023
                        <a href="" className="hover:underline">
                            manjotsingh
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer