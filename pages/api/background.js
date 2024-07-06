const background = [
    {
        eduCards: [
            {
                id: 0,
                title: `Bachelor's degree - Information Technology, System Development`,
                degree: 'BS, Computer System Engineering',
                detail: "Bachelor's Degree in Computer System Engineering from UET Peshawar.",
                year: '2014-2017'
            },
            // {
            //     id: 1,
            //     title: 'Peshawar Model Degree College',
            //     degree: 'HSSC, Pre Engineering',
            //     detail: "Completed FSC part 1 and part 2 in Pre-Engineering from Peshawar Model Degree College.",
            //     year: '2015-2017'
            // },
            // {
            //     id: 2,
            //     title: 'Falcon Academy',
            //     degree: 'SSC, Science Subjects',
            //     detail: "Completed SSC part 1 and part 2 in Science subjects from Falcon Academy Seni Gumbat Kohat",
            //     year: '2013-2015'
            // },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Senior Full Stack Engineer',
                company: 'Katalyst Technologies Inc',
                desc: 'Led a cross-functional team to plan, execute, and deliver web and mobile applications, enhancing productivity and product performance through effective management and collaboration with back-end developers.',
                year: '09/2020 - Present',
                location: 'Evanston, Illinois, United States'
            },
            {
                id: 2,
                title: 'Frontend Engineer',
                company: 'Breathing.ai',
                desc: 'Led development of high-performance website and Chrome extension with React, RxJS, Contentful CMS, Spanish localization, and Figma for UI/UX.',
                year: '06/2018 - 06/2020',
                location: 'New York, United States'
            },
            {
                id: 3,
                title: 'Front-end Developer',
                company: 'Giovvani',
                desc: "Led UI/UX development for a Shopify project, creating and optimizing the company website, including a custom Shopify App interfacing with APIs like Klaviyo.",
                year: '06/2017 - 06/2018',
                location: 'Italy'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
