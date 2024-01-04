import Image from "next/image";
import { Inter } from "next/font/google";
import { Header, ProfileCard } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main className={`${inter.className}`}>
            <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
                <div data-aos="fade" className="aos-init aos-animate">
                    <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
                        <h2 className="after-effect after:left-52">About Me</h2>
                        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center ">
                            <div className="col-span-12 space-y-2.5">
                                <div className="lg:mr-16">
                                    <p className="text-gray-lite dark:text-color-910 leading-7">
                                        I&apos;m Creative Director and UI/UX
                                        Designer from Sydney, Australia, working
                                        in web development and print media. I
                                        enjoy turning complex problems into
                                        simple, beautiful and intuitive designs.
                                    </p>
                                    <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                                        My aim is to bring across your message
                                        and identity in the most creative way. I
                                        created web design for many famous brand
                                        companies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14 ">
                        <h3 className="text-[35px] dark:text-white font-medium pb-5">
                            What I do!
                        </h3>
                        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
                            <div
                                className="about-box dark:bg-transparent"
                                style={{ background: "rgb(252, 244, 255)" }}
                            >
                                <img
                                    alt="icon"
                                    srcset="/images/icons/icon-1.svg 1x, /images/icons/icon-1.svg 2x"
                                    src="/images/icons/icon-1.svg"
                                    width="40"
                                    height="40"
                                    decoding="async"
                                    data-nimg="1"
                                    className="w-10 h-10 object-contain block"
                                    loading="lazy"
                                    style={{ color: "transparent" }}
                                />
                                <div className="space-y-2 break-all">
                                    <h3 className="dark:text-white text-xl font-semibold">
                                        Ui/Ux Design
                                    </h3>
                                    <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
                                        Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit, sed diam euismod
                                        volutpat.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="about-box dark:bg-transparent"
                                style={{ background: "rgb(254, 250, 240)" }}
                            >
                                <img
                                    alt="icon"
                                    srcset="/images/icons/icon-2.svg 1x, /images/icons/icon-2.svg 2x"
                                    src="/images/icons/icon-2.svg"
                                    width="40"
                                    height="40"
                                    decoding="async"
                                    data-nimg="1"
                                    className="w-10 h-10 object-contain block"
                                    loading="lazy"
                                    style={{ color: "transparent" }}
                                />
                                <div className="space-y-2 break-all">
                                    <h3 className="dark:text-white text-xl font-semibold">
                                        App Development
                                    </h3>
                                    <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
                                        Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit, sed diam euismod
                                        volutpat.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="about-box dark:bg-transparent"
                                style={{ background: "rgb(252, 244, 255)" }}
                            >
                                <img
                                    alt="icon"
                                    srcset="/images/icons/icon-3.svg 1x, /images/icons/icon-3.svg 2x"
                                    src="/images/icons/icon-3.svg"
                                    width="40"
                                    height="40"
                                    decoding="async"
                                    data-nimg="1"
                                    className="w-10 h-10 object-contain block"
                                    loading="lazy"
                                    style={{ color: "transparent" }}
                                />
                                <div className="space-y-2 break-all">
                                    <h3 className="dark:text-white text-xl font-semibold">
                                        Photography
                                    </h3>
                                    <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
                                        Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit, sed diam euismod
                                        volutpat.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="about-box dark:bg-transparent"
                                style={{ background: "rgb(255, 244, 244)" }}
                            >
                                <img
                                    alt="icon"
                                    srcset="/images/icons/icon-4.svg 1x, /images/icons/icon-4.svg 2x"
                                    src="/images/icons/icon-4.svg"
                                    width="40"
                                    height="40"
                                    decoding="async"
                                    data-nimg="1"
                                    className="w-10 h-10 object-contain block"
                                    loading="lazy"
                                    style={{ color: "transparent" }}
                                />
                                <div className="space-y-2 break-all">
                                    <h3 className="dark:text-white text-xl font-semibold">
                                        Photography
                                    </h3>
                                    <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
                                        Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit, sed diam euismod
                                        volutpat.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="about-box dark:bg-transparent"
                                style={{ background: "rgb(255, 240, 248)" }}
                            >
                                <img
                                    alt="icon"
                                    srcset="/images/icons/icon-5.svg 1x, /images/icons/icon-5.svg 2x"
                                    src="/images/icons/icon-5.svg"
                                    width="40"
                                    height="40"
                                    decoding="async"
                                    data-nimg="1"
                                    className="w-10 h-10 object-contain block"
                                    loading="lazy"
                                    style={{ color: "transparent" }}
                                />
                                <div className="space-y-2 break-all">
                                    <h3 className="dark:text-white text-xl font-semibold">
                                        Managment
                                    </h3>
                                    <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
                                        Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit, sed diam euismod
                                        volutpat.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="about-box dark:bg-transparent"
                                style={{ background: "rgb(243, 250, 255)" }}
                            >
                                <img
                                    alt="icon"
                                    srcset="/images/icons/icon-6.svg 1x, /images/icons/icon-6.svg 2x"
                                    src="/images/icons/icon-6.svg"
                                    width="40"
                                    height="40"
                                    decoding="async"
                                    data-nimg="1"
                                    className="w-10 h-10 object-contain block"
                                    loading="lazy"
                                    style={{ color: "transparent" }}
                                />
                                <div className="space-y-2 break-all">
                                    <h3 className="dark:text-white text-xl font-semibold">
                                        Web Development
                                    </h3>
                                    <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">
                                        Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit, sed diam euismod
                                        volutpat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="px-2 sm:px-5 md:px-10 lg:px-14 mb-10">
                        <h3 className="text-[35px] dark:text-white font-medium pb-5">
                            My Client!
                        </h3>
                        <div className="bg-[#F8FBFB] dark:bg-[#0D0D0D] max-w-full h-auto py-10 rounded-xl">
                            <div className="overflow-hidden">
                                <div
                                    className="slick-slider slick-initialized"
                                    dir="ltr"
                                >
                                    <div className="slick-list">
                                        <div
                                            className="slick-track"
                                            style={{
                                                width: "2482px",
                                                opacity: 1,
                                                transform:
                                                    "translate3d(-1022px, 0px, 0px)",
                                            }}
                                        >
                                            <div
                                                data-index="-5"
                                                // tabindex="-1"
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: "146px" }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        tabindex="-1"
                                                        srcset="/_next/image?url=%2Fimages%2Fslider%2Fbrand-2.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-2.png&amp;w=384&amp;q=75 2x"
                                                        src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-2.png&amp;w=384&amp;q=75"
                                                        width="150"
                                                        height="50"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className=" overflow-hidden brand-img"
                                                        loading="lazy"
                                                        style={{
                                                            color: "transparent",
                                                            width: "100%",
                                                            display:
                                                                "inline-block",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                data-index="-4"
                                                tabindex="-1"
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: "146px" }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        tabindex="-1"
                                                        srcset="/_next/image?url=%2Fimages%2Fslider%2Fbrand-3.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-3.png&amp;w=384&amp;q=75 2x"
                                                        src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-3.png&amp;w=384&amp;q=75"
                                                        width="150"
                                                        height="50"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className=" overflow-hidden brand-img"
                                                        loading="lazy"
                                                        style={{
                                                            color: "transparent",
                                                            width: "100%",
                                                            display:
                                                                "inline-block",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                data-index="-3"
                                                tabindex="-1"
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: "146px" }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        tabindex="-1"
                                                        srcset="/_next/image?url=%2Fimages%2Fslider%2Fbrand-4.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-4.png&amp;w=384&amp;q=75 2x"
                                                        src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-4.png&amp;w=384&amp;q=75"
                                                        width="150"
                                                        height="50"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className=" overflow-hidden brand-img"
                                                        loading="lazy"
                                                        style={{
                                                            color: "transparent",
                                                            width: "100%",
                                                            display:
                                                                "inline-block",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                data-index="-2"
                                                tabindex="-1"
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: "146px" }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        tabindex="-1"
                                                        srcset="/_next/image?url=%2Fimages%2Fslider%2Fbrand-5.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-5.png&amp;w=384&amp;q=75 2x"
                                                        src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-5.png&amp;w=384&amp;q=75"
                                                        width="150"
                                                        height="50"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className=" overflow-hidden brand-img"
                                                        loading="lazy"
                                                        style={{
                                                            color: "transparent",
                                                            width: "100%",
                                                            display:
                                                                "inline-block",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                data-index="-1"
                                                tabindex="-1"
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: "146px" }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        tabindex="-1"
                                                        srcset="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75 2x"
                                                        src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75"
                                                        width="150"
                                                        height="50"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className=" overflow-hidden brand-img"
                                                        loading="lazy"
                                                        style={{
                                                            color: "transparent",
                                                            width: "100%",
                                                            display:
                                                                "inline-block",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                data-index="0"
                                                className="slick-slide"
                                                tabindex="-1"
                                                aria-hidden="true"
                                                style={{
                                                    outline: "none",
                                                    width: "146px",
                                                }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        tabindex="-1"
                                                        srcset="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75 2x"
                                                        src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75"
                                                        width="150"
                                                        height="50"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className=" overflow-hidden brand-img"
                                                        loading="lazy"
                                                        style={{
                                                            color: "transparent",
                                                            width: "100%",
                                                            display:
                                                                "inline-block",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                data-index="1"
                                                className="slick-slide"
                                                tabindex="-1"
                                                aria-hidden="true"
                                                style={{
                                                    outline: "none",
                                                    width: "146px",
                                                }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        tabindex="-1"
                                                        srcset="/_next/image?url=%2Fimages%2Fslider%2Fbrand-2.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-2.png&amp;w=384&amp;q=75 2x"
                                                        src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-2.png&amp;w=384&amp;q=75"
                                                        width="150"
                                                        height="50"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className=" overflow-hidden brand-img"
                                                        loading="lazy"
                                                        style={{
                                                            color: "transparent",
                                                            width: "100%",
                                                            display:
                                                                "inline-block",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                data-index="2"
                                                className="slick-slide slick-active slick-current"
                                                tabindex="-1"
                                                aria-hidden="false"
                                                style={{
                                                    outline: "none",
                                                    width: "146px",
                                                }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        tabindex="-1"
                                                        srcset="/_next/image?url=%2Fimages%2Fslider%2Fbrand-3.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-3.png&amp;w=384&amp;q=75 2x"
                                                        src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-3.png&amp;w=384&amp;q=75"
                                                        width="150"
                                                        height="50"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className=" overflow-hidden brand-img"
                                                        loading="lazy"
                                                        style={{
                                                            color: "transparent",
                                                            width: "100%",
                                                            display:
                                                                "inline-block",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                data-index="3"
                                                className="slick-slide slick-active"
                                                tabindex="-1"
                                                aria-hidden="false"
                                                style={{
                                                    outline: "none",
                                                    width: "146px",
                                                }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        tabindex="-1"
                                                        srcset="/_next/image?url=%2Fimages%2Fslider%2Fbrand-4.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-4.png&amp;w=384&amp;q=75 2x"
                                                        src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-4.png&amp;w=384&amp;q=75"
                                                        width="150"
                                                        height="50"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className=" overflow-hidden brand-img"
                                                        loading="lazy"
                                                        style={{
                                                            color: "transparent",
                                                            width: "100%",
                                                            display:
                                                                "inline-block",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                data-index="4"
                                                className="slick-slide slick-active"
                                                tabindex="-1"
                                                aria-hidden="false"
                                                style={{
                                                    outline: "none",
                                                    width: "146px",
                                                }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        tabindex="-1"
                                                        srcset="/_next/image?url=%2Fimages%2Fslider%2Fbrand-5.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-5.png&amp;w=384&amp;q=75 2x"
                                                        src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-5.png&amp;w=384&amp;q=75"
                                                        width="150"
                                                        height="50"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className=" overflow-hidden brand-img"
                                                        loading="lazy"
                                                        style={{
                                                            color: "transparent",
                                                            width: "100%",
                                                            display:
                                                                "inline-block",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                data-index="5"
                                                className="slick-slide slick-active"
                                                tabindex="-1"
                                                aria-hidden="false"
                                                style={{
                                                    outline: "none",
                                                    width: "146px",
                                                }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        tabindex="-1"
                                                        srcset="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75 2x"
                                                        src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75"
                                                        width="150"
                                                        height="50"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className=" overflow-hidden brand-img"
                                                        loading="lazy"
                                                        style={{
                                                            color: "transparent",
                                                            width: "100%",
                                                            display:
                                                                "inline-block",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                data-index="6"
                                                tabindex="-1"
                                                className="slick-slide slick-active slick-cloned"
                                                aria-hidden="false"
                                                style={{ width: "146px" }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        tabindex="-1"
                                                        srcset="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75 2x"
                                                        src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75"
                                                        width="150"
                                                        height="50"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className=" overflow-hidden brand-img"
                                                        loading="lazy"
                                                        style={{
                                                            color: "transparent",
                                                            width: "100%",
                                                            display:
                                                                "inline-block",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                data-index="7"
                                                tabindex="-1"
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: "146px" }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        tabindex="-1"
                                                        srcset="/_next/image?url=%2Fimages%2Fslider%2Fbrand-2.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-2.png&amp;w=384&amp;q=75 2x"
                                                        src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-2.png&amp;w=384&amp;q=75"
                                                        width="150"
                                                        height="50"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className=" overflow-hidden brand-img"
                                                        loading="lazy"
                                                        style={{
                                                            color: "transparent",
                                                            width: "100%",
                                                            display:
                                                                "inline-block",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                data-index="8"
                                                tabindex="-1"
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: "146px" }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        tabindex="-1"
                                                        srcset="/_next/image?url=%2Fimages%2Fslider%2Fbrand-3.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-3.png&amp;w=384&amp;q=75 2x"
                                                        src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-3.png&amp;w=384&amp;q=75"
                                                        width="150"
                                                        height="50"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className=" overflow-hidden brand-img"
                                                        loading="lazy"
                                                        style={{
                                                            color: "transparent",
                                                            width: "100%",
                                                            display:
                                                                "inline-block",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                data-index="9"
                                                tabindex="-1"
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: "146px" }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        tabindex="-1"
                                                        srcset="/_next/image?url=%2Fimages%2Fslider%2Fbrand-4.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-4.png&amp;w=384&amp;q=75 2x"
                                                        src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-4.png&amp;w=384&amp;q=75"
                                                        width="150"
                                                        height="50"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className=" overflow-hidden brand-img"
                                                        loading="lazy"
                                                        style={{
                                                            color: "transparent",
                                                            width: "100%",
                                                            display:
                                                                "inline-block",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                data-index="10"
                                                tabindex="-1"
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: "146px" }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        tabindex="-1"
                                                        srcset="/_next/image?url=%2Fimages%2Fslider%2Fbrand-5.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-5.png&amp;w=384&amp;q=75 2x"
                                                        src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-5.png&amp;w=384&amp;q=75"
                                                        width="150"
                                                        height="50"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className=" overflow-hidden brand-img"
                                                        loading="lazy"
                                                        style={{
                                                            color: "transparent",
                                                            width: "100%",
                                                            display:
                                                                "inline-block",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                data-index="11"
                                                tabindex="-1"
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: "146px" }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        tabindex="-1"
                                                        srcset="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75 2x"
                                                        src="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75"
                                                        width="150"
                                                        height="50"
                                                        decoding="async"
                                                        data-nimg="1"
                                                        className=" overflow-hidden brand-img"
                                                        loading="lazy"
                                                        style={{
                                                            color: "transparent",
                                                            width: "100%",
                                                            display:
                                                                "inline-block",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer className="overflow-hidden rounded-b-2xl bg-slate-50 dark:bg-black">
                        <div className="container">
                            <p className="text-center py-6 text-gray-lite dark:text-color-910 ">
                                © 2024 All Rights Reserved by{" "}
                                <a
                                    className="hover:text-[#FA5252] duration-300 transition"
                                    href="https://themeforest.net/user/ib-themes"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ib-themes
                                </a>
                                .
                            </p>
                        </div>
                    </footer>
                </div>
            </div>
        </main>
    );
}
