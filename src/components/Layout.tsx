// components/Layout.js
import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import { Header, ProfileCard } from ".";
import { Navbar } from "./Navbar";

type Props = {
    children: ReactNode;
};
const Layout = ({ children }: Props) => {
    return (
        <>
            <Head>
                <title>My Portfolio</title>
            </Head>

            <main className="bg-homeBg min-h-screen bg-no-repeat bg-center bg-cover bg-fixed dark:bg-homeTwoBg-dark md:pb-16 w-full">
                <div className="container w-full bg-[#F3F6F6] dark:bg-black lg:bg-transparent lg:dark:bg-transparent flex justify-between py-5 lg:px-0 lg:pt-[50px]">
                    <Header />
                </div>
                <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
                    <div className="col-span-12 lg:col-span-4 lg:h-screen lg:sticky top-44">
                        <ProfileCard />
                    </div>

                    <div className="col-span-12 lg:col-span-8 ">
                        <Navbar />
                        <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
                            {children}
                        </div>
                    </div>
                </div>
            </main>

            <style jsx global>{`
                .tab {
                    padding: 8px 16px;
                    border-radius: 10px;
                    background-color: #f3f3f3;
                    margin-right: 8px;
                    font-weight: 500;
                    color: #333;
                }

                .tab:hover {
                    background-color: #e2e2e2;
                }

                /* Add additional global styles as needed */
            `}</style>
        </>
    );
};

export default Layout;
