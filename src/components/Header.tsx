import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="container w-full bg-[#F3F6F6] dark:bg-black lg:bg-transparent lg:dark:bg-transparent flex justify-between py-5 lg:px-0 lg:pt-[50px]">
            <div className="w-full flex justify-between lg:px-4">
                <Link href="/">
                    <Image
                        alt="logo"
                        src="/images/logo/logo.png" // Adjust the path to your image
                        width={153}
                        height={26}
                        className="h-[26px] lg:h-[32px]"
                        priority // Use this to preload the image on the current route
                    />
                </Link>
                <div className="flex items-center">
                    <span className="bg-white w-[40px] hover:text-white hidden h-[40px] rounded-full lg:flex justify-center items-center text-black hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer ml-2 ">
                        <svg
                            stroke="currentColor"
                            fill="none"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="text-3xl dark-mode-light dark:hidden"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                        <svg
                            stroke="currentColor"
                            fill="none"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="text-2xl dark-mode-dark hidden fill-jacarta-700 group-hover:fill-white group-focus:fill-white dark:block dark:fill-white "
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line
                                x1="4.22"
                                y1="4.22"
                                x2="5.64"
                                y2="5.64"
                            ></line>
                            <line
                                x1="18.36"
                                y1="18.36"
                                x2="19.78"
                                y2="19.78"
                            ></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line
                                x1="4.22"
                                y1="19.78"
                                x2="5.64"
                                y2="18.36"
                            ></line>
                            <line
                                x1="18.36"
                                y1="5.64"
                                x2="19.78"
                                y2="4.22"
                            ></line>
                        </svg>
                    </span>
                    <span className="bg-white w-[40px] hover:text-white flex items-center h-[40px] rounded-full lg:hidden justify-center items-center text-black hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer ml-2 ">
                        <svg
                            stroke="currentColor"
                            fill="none"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="text-3xl dark-mode-light dark:hidden"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                        <svg
                            stroke="currentColor"
                            fill="none"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="text-2xl dark-mode-dark hidden fill-jacarta-700 group-hover:fill-white group-focus:fill-white dark:block dark:fill-white "
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line
                                x1="4.22"
                                y1="4.22"
                                x2="5.64"
                                y2="5.64"
                            ></line>
                            <line
                                x1="18.36"
                                y1="18.36"
                                x2="19.78"
                                y2="19.78"
                            ></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line
                                x1="4.22"
                                y1="19.78"
                                x2="5.64"
                                y2="18.36"
                            ></line>
                            <line
                                x1="18.36"
                                y1="5.64"
                                x2="19.78"
                                y2="4.22"
                            ></line>
                        </svg>
                    </span>
                    <span
                        className="lg:opacity-0 lg:invisible visible opacity-100 bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-white dark:text-white text-3xl ml-3 "
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 1024 1024"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                        </svg>
                    </span>
                </div>
            </div>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <Image
                                alt="logo"
                                src="/images/logo/logo.png" // Adjust the path to your image
                                width={153}
                                height={26}
                                className="h-[26px] lg:h-[32px]"
                                priority // Use this to preload the image on the current route
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Features
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Marketplace
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Company
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </div>
    );
}
