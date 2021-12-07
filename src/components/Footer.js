import React from 'react';
import SimpleReactFooter from "simple-react-footer";

function Footer() {
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const title = "Meme Generator";
    const columns = [
        {
            title: "Resources",
            resources: [
                {
                    name: "About us",
                    link: "/about"
                },
                {
                    name: "FAQ page",
                    link: "/faq"
                },
                {
                    name: "Login",
                    link: "/login"
                },
                {
                    name: "Register",
                    link: "/register"
                }
            ]
        },
        {
            title: "Legal",
            resources: [
                {
                    name: "Privacy",
                    link: "/privacy"
                },
                {
                    name: "Terms",
                    link: "/terms"
                }
            ]
        }]
    return (
        <SimpleReactFooter
            description={description}
            title={title}
            columns={columns}
            linkedin="Meme_Generator_on_linkedin"
            facebook="Meme_Generator_on_fb"
            twitter="Meme_Generator_on_twitter"
            instagram="Meme_Generator_live"
            youtube=""
            pinterest="Meme_Generators_collections"
            copyright="2021"
            iconColor="black"
            backgroundColor="#212529"
            fontColor="white"
            copyrightColor="darkgrey"
        />
    );
}

export default Footer;