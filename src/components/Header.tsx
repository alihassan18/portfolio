import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
    return (
        <div className="container w-full bg-[#F3F6F6] dark:bg-black lg:bg-transparent lg:dark:bg-transparent flex justify-between py-5 lg:px-0 lg:pt-[50px]">
            <div className="w-full flex justify-between px-4">
                <Link href="/">
                    Image
                    {/* <a>
                        <Image
                            alt="logo"
                            src="/images/logo/logo.png" // Adjust the path to your image
                            width={153}
                            height={26}
                            className="h-[26px] lg:h-[32px]"
                            priority // Use this to preload the image on the current route
                        />
                    </a> */}
                </Link>
                <div className="flex items-center">
                    Icon
                    {/* Rest of the icons and components */}
                </div>
            </div>
            {/* Other navigation content */}
        </div>
    );
};

export default Header;
