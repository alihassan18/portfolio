import React from "react";

type Props = {};

const FiverrBadge = (props: Props) => {
    return (
        // FiverrBadge.js

        <div
            itemScope
            itemType="http://schema.org/Person"
            className="fiverr-seller-widget"
            style={{ display: "inline-block" }}
        >
            <a
                itemProp="url"
                href="https://www.fiverr.com/alihassanfi20"
                rel="nofollow"
                target="_blank"
                style={{ display: "inline-block" }}
            >
                <div
                    className="fiverr-seller-content"
                    id="fiverr-seller-widget-content-179d2af2-f17c-4aea-ac26-9f6aaf4edc83"
                    itemProp="contentURL"
                    style={{ display: "none" }}
                ></div>
                <div id="fiverr-widget-seller-data" style={{ display: "none" }}>
                    <div itemProp="name">alihassanfi20</div>
                    <div itemScope itemType="http://schema.org/Organization">
                        <span itemProp="name">Fiverr</span>
                    </div>
                    <div itemProp="jobtitle">Seller</div>
                    <div itemProp="description">
                        Hello! I&apos;m a seasoned Senior Developer and Team
                        Lead with over 5 years of experience in MERN Stack and
                        Web3 technologies. Specializing in NFT marketplaces and
                        crypto wallets, I have a proven track record of
                        delivering innovative and high-quality solutions in the
                        blockchain space.
                    </div>
                </div>
            </a>

            <script
                id="fiverr-seller-widget-script-179d2af2-f17c-4aea-ac26-9f6aaf4edc83"
                src="https://widgets.fiverr.com/api/v1/seller/alihassanfi20?widget_id=179d2af2-f17c-4aea-ac26-9f6aaf4edc83"
                data-config='{"category_name":"\n                                    Programming \u0026 Tech\n\n                            "}'
                async={true}
                defer={true}
            ></script>
        </div>
    );
};

export default FiverrBadge;
