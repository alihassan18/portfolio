// import Image from "next/image";
import { Inter } from "next/font/google";
// import { Header, ProfileCard } from "@/components";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>
                    Ali Hassann - MERN Stack Developer & Blockchain Specialist
                </title>
                <meta
                    name="title"
                    content="Ali Hassann - MERN Stack Developer & Blockchain Specialist"
                />
                <meta
                    name="description"
                    content="Experienced MERN Stack Developer specializing in blockchain, Web3, NFT marketplace development, and more. Proficient in JavaScript, TypeScript, Ether.js, Solidity, and other cutting-edge technologies."
                />
                <meta
                    name="keywords"
                    content="MERN Stack Developer, Blockchain Developer, Web3, NFT Marketplace, JavaScript, TypeScript, Ether.js, Solidity, Next.js, Portfolio"
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.alihassan.site/" />
                <meta
                    property="og:title"
                    content="Ali Hassan - MERN Stack Developer & Blockchain Specialist"
                />
                <meta
                    property="og:description"
                    content="Experienced MERN Stack Developer specializing in blockchain, Web3, NFT marketplace development, and more. Proficient in JavaScript, TypeScript, Ether.js, Solidity, and other cutting-edge technologies."
                />
                <meta
                    property="og:image"
                    content="https://www.alihassan.site/assets/images/profile-picture.jpeg"
                />

                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://x.com/alihassanak47"
                />
                <meta
                    property="twitter:title"
                    content="Ali Hassan - MERN Stack Developer & Blockchain Specialist"
                />
                <meta
                    property="twitter:description"
                    content="Experienced MERN Stack Developer specializing in blockchain, Web3, NFT marketplace development, and more. Proficient in JavaScript, TypeScript, Ether.js, Solidity, and other cutting-edge technologies."
                />
                <meta
                    property="twitter:image"
                    content="https://www.alihassan.site/assets/images/profile-picture.jpeg"
                />

                <meta name="author" content="Ali Hassan" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <link
                    rel="icon"
                    href="https://www.alihassan.site/favicon.ico"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <main className={`${inter.className}`}>
                <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
                    <div data-aos="fade" className="aos-init aos-animate">
                        <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
                            <h2 className="after-effect after:left-52">
                                About Me
                            </h2>
                            <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center ">
                                <div className="col-span-12 space-y-2.5">
                                    <div className="lg:mr-16">
                                        <p className="text-gray-lite dark:text-color-910 leading-7">
                                            I&apos;m a seasoned MERN Stack,
                                            Web3, and Blockchain Developer with
                                            a proven track record in leading
                                            diverse blockchain projects. My
                                            professional journey has taken me
                                            through leading roles at Renesis
                                            Tech and MagnusMage, where I&apos;ve
                                            been instrumental in developing
                                            innovative blockchain solutions,
                                            including NFT marketplaces, token
                                            management systems, crypto wallets,
                                            blockchain explorers, and
                                            centralized exchanges.
                                        </p>
                                        <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                                            I&apos;m well-versed in integrating
                                            advanced technologies like XUMM and
                                            IPFS to deliver enhanced user
                                            experiences. With a strong focus on
                                            innovation, quality, and best
                                            practices, I am always keen on
                                            leveraging my technical expertise to
                                            drive transformation in the
                                            blockchain space.
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
                                    {/* <img
                                    alt="icon"
                                    srcSet="/images/icons/icon-1.svg 1x, /images/icons/icon-1.svg 2x"
                                    src="/images/icons/icon-1.svg"
                                    width="40"
                                    height="40"
                                    decoding="async"
                                    data-nimg="1"
                                    className="w-10 h-10 object-contain block"
                                    loading="lazy"
                                    style={{ color: "transparent" }}
                                /> */}

                                    <div className="space-y-2 break-all">
                                        <h3 className="dark:text-white text-xl font-semibold break-normal">
                                            Web Application Development
                                        </h3>
                                        <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6] break-normal text-justify">
                                            Building scalable and secure web
                                            applications using the MERN stack
                                            (MongoDB, Express.js, React.js,
                                            Node.js) tailored to meet specific
                                            business requirements.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="about-box dark:bg-transparent"
                                    style={{ background: "rgb(254, 250, 240)" }}
                                >
                                    {/* <img
                                    alt="icon"
                                    srcSet="/images/icons/icon-2.svg 1x, /images/icons/icon-2.svg 2x"
                                    src="/images/icons/icon-2.svg"
                                    width="40"
                                    height="40"
                                    decoding="async"
                                    data-nimg="1"
                                    className="w-10 h-10 object-contain block"
                                    loading="lazy"
                                    style={{ color: "transparent" }}
                                /> */}
                                    <div className="space-y-2 break-all">
                                        <h3 className="dark:text-white text-xl font-semibold break-normal">
                                            Mobile App Development
                                        </h3>
                                        <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6] break-normal text-justify">
                                            Developing robust and user-friendly
                                            mobile and web applications using
                                            modern frameworks and technologies
                                            to provide seamless experiences
                                            across different devices and
                                            platforms.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="about-box dark:bg-transparent"
                                    style={{ background: "rgb(252, 244, 255)" }}
                                >
                                    {/* <img
                                    alt="icon"
                                    srcSet="/images/icons/icon-3.svg 1x, /images/icons/icon-3.svg 2x"
                                    src="/images/icons/icon-3.svg"
                                    width="40"
                                    height="40"
                                    decoding="async"
                                    data-nimg="1"
                                    className="w-10 h-10 object-contain block"
                                    loading="lazy"
                                    style={{ color: "transparent" }}
                                /> */}
                                    <div className="space-y-2 break-all">
                                        <h3 className="dark:text-white text-xl font-semibold break-normal">
                                            Blockchain Integration and
                                            Development
                                        </h3>
                                        <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6] break-normal text-justify">
                                            Developing and integrating
                                            blockchain solutions such as
                                            decentralized applications (dApps),
                                            smart contracts, and NFT
                                            marketplaces, leveraging
                                            technologies like Ethereum, Binance
                                            Smart Chain, and XRP.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="about-box dark:bg-transparent"
                                    style={{ background: "rgb(255, 244, 244)" }}
                                >
                                    {/* <img
                                    alt="icon"
                                    srcSet="/images/icons/icon-4.svg 1x, /images/icons/icon-4.svg 2x"
                                    src="/images/icons/icon-4.svg"
                                    width="40"
                                    height="40"
                                    decoding="async"
                                    data-nimg="1"
                                    className="w-10 h-10 object-contain block"
                                    loading="lazy"
                                    style={{ color: "transparent" }}
                                /> */}
                                    <div className="space-y-2 break-all">
                                        <h3 className="dark:text-white text-xl font-semibold break-normal">
                                            NFT Marketplace Development
                                        </h3>
                                        <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6] break-normal text-justify">
                                            Creating user-centric NFT
                                            marketplaces with features for
                                            minting, buying, selling, and
                                            trading digital assets, integrated
                                            with blockchain technologies and
                                            social media functionalities.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="about-box dark:bg-transparent"
                                    style={{ background: "rgb(255, 240, 248)" }}
                                >
                                    {/* <img
                                    alt="icon"
                                    srcSet="/images/icons/icon-5.svg 1x, /images/icons/icon-5.svg 2x"
                                    src="/images/icons/icon-5.svg"
                                    width="40"
                                    height="40"
                                    decoding="async"
                                    data-nimg="1"
                                    className="w-10 h-10 object-contain block"
                                    loading="lazy"
                                    style={{ color: "transparent" }}
                                /> */}
                                    <div className="space-y-2 break-all">
                                        <h3 className="dark:text-white text-xl font-semibold break-normal">
                                            Token Development and Management
                                        </h3>
                                        <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6] break-normal text-justify">
                                            Designing and deploying custom
                                            tokens on various blockchain
                                            platforms, along with building
                                            staking, swapping, and liquidity
                                            management systems for token
                                            ecosystems.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="about-box dark:bg-transparent"
                                    style={{ background: "rgb(243, 250, 255)" }}
                                >
                                    {/* <img
                                    alt="icon"
                                    srcSet="/images/icons/icon-6.svg 1x, /images/icons/icon-6.svg 2x"
                                    src="/images/icons/icon-6.svg"
                                    width="40"
                                    height="40"
                                    decoding="async"
                                    data-nimg="1"
                                    className="w-10 h-10 object-contain block"
                                    loading="lazy"
                                    style={{ color: "transparent" }}
                                /> */}
                                    <div className="space-y-2 break-all">
                                        <h3 className="dark:text-white text-xl font-semibold break-normal">
                                            Real-Time Data and Chat Features
                                        </h3>
                                        <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6] break-normal text-justify">
                                            Implementing real-time data
                                            processing and chat functionalities
                                            using technologies like Socket.io
                                            and Web3.js to enhance user
                                            interaction and experience in web
                                            applications and blockchain
                                            platforms.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="about-box dark:bg-transparent"
                                    style={{ background: "rgb(253, 250, 250)" }}
                                >
                                    {/* <img
                                    alt="icon"
                                    srcSet="/images/icons/icon-6.svg 1x, /images/icons/icon-6.svg 2x"
                                    src="/images/icons/icon-6.svg"
                                    width="40"
                                    height="40"
                                    decoding="async"
                                    data-nimg="1"
                                    className="w-10 h-10 object-contain block"
                                    loading="lazy"
                                    style={{ color: "transparent" }}
                                /> */}
                                    <div className="space-y-2 break-all">
                                        <h3 className="dark:text-white text-xl font-semibold break-normal">
                                            Chatbot Development
                                        </h3>
                                        <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6] break-normal text-justify">
                                            Creating intelligent chatbots for
                                            customer support, sales, and other
                                            applications using AI technologies
                                            like natural language processing
                                            (NLP) to improve user engagement and
                                            automate interactions.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="about-box dark:bg-transparent"
                                    style={{ background: "rgb(243, 250, 240)" }}
                                >
                                    {/* <img
                                    alt="icon"
                                    srcSet="/images/icons/icon-6.svg 1x, /images/icons/icon-6.svg 2x"
                                    src="/images/icons/icon-6.svg"
                                    width="40"
                                    height="40"
                                    decoding="async"
                                    data-nimg="1"
                                    className="w-10 h-10 object-contain block"
                                    loading="lazy"
                                    style={{ color: "transparent" }}
                                /> */}
                                    <div className="space-y-2 break-all">
                                        <h3 className="dark:text-white text-xl font-semibold break-normal">
                                            AI Solutions and Integration
                                        </h3>
                                        <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6] break-normal text-justify">
                                            Developing AI-powered solutions such
                                            as recommendation engines,
                                            predictive analytics, and machine
                                            learning models to enhance business
                                            processes, decision-making, and
                                            customer experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <section className="px-2 sm:px-5 md:px-10 lg:px-14 mb-10">
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
                                                        // tabindex="-1"
                                                        srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-2.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-2.png&amp;w=384&amp;q=75 2x"
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
                                                // tabindex="-1"
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: "146px" }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        // tabindex="-1"
                                                        srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-3.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-3.png&amp;w=384&amp;q=75 2x"
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
                                                // tabindex="-1"
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: "146px" }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        // tabindex="-1"
                                                        srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-4.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-4.png&amp;w=384&amp;q=75 2x"
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
                                                // tabindex="-1"
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: "146px" }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        // tabindex="-1"
                                                        srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-5.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-5.png&amp;w=384&amp;q=75 2x"
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
                                                // tabindex="-1"
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: "146px" }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        // tabindex="-1"
                                                        srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75 2x"
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
                                                // tabindex="-1"
                                                aria-hidden="true"
                                                style={{
                                                    outline: "none",
                                                    width: "146px",
                                                }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        // tabindex="-1"
                                                        srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75 2x"
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
                                                // tabindex="-1"
                                                aria-hidden="true"
                                                style={{
                                                    outline: "none",
                                                    width: "146px",
                                                }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        // tabindex="-1"
                                                        srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-2.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-2.png&amp;w=384&amp;q=75 2x"
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
                                                // tabindex="-1"
                                                aria-hidden="false"
                                                style={{
                                                    outline: "none",
                                                    width: "146px",
                                                }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        // tabindex="-1"
                                                        srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-3.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-3.png&amp;w=384&amp;q=75 2x"
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
                                                // tabindex="-1"
                                                aria-hidden="false"
                                                style={{
                                                    outline: "none",
                                                    width: "146px",
                                                }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        // tabindex="-1"
                                                        srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-4.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-4.png&amp;w=384&amp;q=75 2x"
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
                                                // tabindex="-1"
                                                aria-hidden="false"
                                                style={{
                                                    outline: "none",
                                                    width: "146px",
                                                }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        // tabindex="-1"
                                                        srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-5.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-5.png&amp;w=384&amp;q=75 2x"
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
                                                // tabindex="-1"
                                                aria-hidden="false"
                                                style={{
                                                    outline: "none",
                                                    width: "146px",
                                                }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        // tabindex="-1"
                                                        srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75 2x"
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
                                                // tabindex="-1"
                                                className="slick-slide slick-active slick-cloned"
                                                aria-hidden="false"
                                                style={{ width: "146px" }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        // tabindex="-1"
                                                        srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75 2x"
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
                                                // tabindex="-1"
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: "146px" }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        // tabindex="-1"
                                                        srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-2.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-2.png&amp;w=384&amp;q=75 2x"
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
                                                // tabindex="-1"
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: "146px" }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        // tabindex="-1"
                                                        srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-3.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-3.png&amp;w=384&amp;q=75 2x"
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
                                                // tabindex="-1"
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: "146px" }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        // tabindex="-1"
                                                        srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-4.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-4.png&amp;w=384&amp;q=75 2x"
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
                                                // tabindex="-1"
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: "146px" }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        // tabindex="-1"
                                                        srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-5.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-5.png&amp;w=384&amp;q=75 2x"
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
                                                // tabindex="-1"
                                                className="slick-slide slick-cloned"
                                                aria-hidden="true"
                                                style={{ width: "146px" }}
                                            >
                                                <div>
                                                    <img
                                                        alt="brand"
                                                        // tabindex="-1"
                                                        srcSet="/_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fslider%2Fbrand-1.png&amp;w=384&amp;q=75 2x"
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
                    </section> */}
                        <footer className="overflow-hidden rounded-b-2xl bg-slate-50 dark:bg-black">
                            <div className="container">
                                <p className="text-center py-6 text-gray-lite dark:text-color-910 ">
                                    © 2024 All Rights Reserved by Ali Hassan .
                                </p>
                            </div>
                        </footer>
                    </div>
                </div>
            </main>
        </>
    );
}
