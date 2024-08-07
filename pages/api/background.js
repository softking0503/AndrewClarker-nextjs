const background = [
    {
        eduCards: [
            {
                id: 0,
                title: `Bachelor's degree - Information Technology, System Development`,
                degree: "BS, Computer System Engineering",
                detail:
                    "Bachelor's Degree in Computer System Engineering from UET Peshawar.",
                year: "2014-2017",
            },
        ],
    },
    {
        expCards: [
            {
                id: 1,
                title: "Senior Full Stack Engineer",
                company: "Online",
                desc: "Developed a sports betting website with a Next.js frontend and Node.js backend, created secure ASP.NET API services to enhance platform security, designed and implemented an e-commerce site on Shopify with integrated payment gateways, and successfully deployed the project on AWS, demonstrating proficiency in web development, security, and cloud platforms.",
                year: "12/2022 - Present",
                location: "Evanston, Illinois, United States",
            },
            {
                id: 2,
                title: "Senior Full Stack Engineer",
                company: "Katalyst Technologies Inc",
                desc: "Spearheaded the development of high-performance web applications using Next.js and Tailwind CSS, collaborated with back-end teams for seamless integration, led efforts to reduce website load time by 30% (boosting annual revenue by $500K), managed the development and deployment of 50+ software releases with agile methodologies, designed and developed two decentralized applications with React, Hardhat, and Polygon/Solidity, engineered an NFT marketplace with the MERN Stack and Solidity, and integrated smart contracts with frontend applications using web3.js and Ethers.js.",
                year: "09/2020 - 12/2022",
                location: "New York, United States",
            },
            {
                id: 3,
                title: "Full Stack Developer",
                company: "OnlineMeetup",
                desc: "Enhanced a Chrome extension with React and JavaScript to promote healthier screen time, implemented a new eCommerce platform that boosted customer transactions by 40% and annual sales by $2M, oversaw a $10M digital transformation initiative involving multiple development teams, achieved a 95% customer satisfaction rate by improving app accessibility, increased testing coverage by 70% with Cypress and Jest, and introduced automated testing procedures that reduced bug rates by 80% through Continuous Integration and Deployment strategies.",
                year: "06/2018 - 06/2020",
                location: "United States",
            },
            {
                id: 4,
                title: "Senior Software Development Engineer",
                company: "At Upwork",
                desc: "Led UI/UX development for a Shopify project, working with cross-functional teams to clarify requirements and develop the site using Liquid and Figma designs. Optimized performance and SEO, managed 50+ front-end projects with budgets over $500,000, and achieved a 20% bounce rate and a Google Lighthouse score of 95. Oversaw 10+ high-traffic eCommerce sites, increased conversion rates by 15% through A/B testing, and boosted time spent on site by 30%.",
                year: "06/2017 - 06/2018",
                location: "Italy",
            },
        ],
    },
];

export default function handler(req, res) {
    res.status(200).json(background);
}
