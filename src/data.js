export const headerLinks = [
    {
        title: "FAQ",
        link: "/FAQ"
    },
    {
        title: "Contact",
        link: "/contact"
    },
    {
        title: "Site Map",
        link: "/sitemap"
    },
    {
        title: "Eng｜繁｜簡",
        link: "/language"
    },
]

export const theme = {
    primaryColor: "#2079a9"
}

export const registerQuestions =
    [
        {
            sessionTitle: "Details of Organization",
            questions: [
                {
                    title: "Nature of Organization",
                    code: "01",
                    type: "hidden",
                    element: "checkbox",
                    description: [
                        "Incumbent Legislative Council (LegCo) Member/ District Council (DC) Member",
                        "Charitable institution or trust of a public character which is exempt from tax under section 88 of the Inland Revenue Ordinance (Cap. 112) or society registered under Societies Ordinance (Cap. 151)",
                        "Government department or statutory organisation",
                        "Other legally registered body"
                    ]
                },
                {
                    title: "Name of Organization/ Name of LegCo/ DC Member",
                    code: "02",
                    instruction: "Please provide registered organization name. Identical name required.",
                    type: "input",
                    line: 0.5
                },
                {
                    title: "Name of Sub-Organization",
                    code: "03",
                    instruction: "Please provide registered sub-organization name. Identical name required.",
                    type: "input",
                    line: 0.5
                },
                {
                    title: "Registration Number (Optional)",
                    code: "04",
                    type: "input"
                },
                {
                    title: "validity Period (Optional)",
                    code: "05",
                    type: "date",
                    style: "width:100%;max-width:250px"
                }

            ],
        },
        {
            sessionTitle: "Contact Information",
            questions: [
                {
                    title: "Name of Contact Person",
                    code: "06",
                    type: "input"
                },
                {
                    title: "Position in the Application Organization",
                    code: "07",
                    type: "hidden",
                    element: "select"
                },
                {
                    title: "Corresponence Address",
                    code: "08",
                    type: "input",
                    line: 2,
                    style: "width:100%;max-width:1200px"
                },
                {
                    title: "E-mail",
                    code: "09",
                    type: "input"
                },
                {
                    title: "Tel. No.",
                    code: "10",
                    type: "input"
                },
                {
                    title: "Emergency Tel/ No/ (Optional)",
                    code: "11",
                    type: "input"
                },
                {
                    title: "Fax No. (Optional)",
                    code: "12",
                    type: "input"
                }
            ]
        },
        {
            sessionTitle: "Supporting Documents",
            questions: [
                {
                    description: [
                        "I/We attach the following documents in support of my/our application (please see belows Note (1)):",
                        "(a)documentary evidence to prove that the Applicant is a charitable institution or trust of apublic character exempt from tax under section 88 of the Inland Revenue Ordinance Cap.112 (if applicable);",
                        "(b) documentary evidence to prove that the Applicant is a society registered under the Societies Ordinance Cap. 151 (if applicable); or",
                        "(c) documentary evidence to prove that the Applicant is a legally registered body (please specify).",
                    ],
                    code: "13",
                    type: "input"
                },
                {
                    label: "Upload New Documents",
                    code: "14",
                    type: "hidden",
                    element: "file",
                    description: [
                        "I/We acknowledge and agree that failure to submit the required documents may lead to rejection of the application. I/We also acknowledge and agree that I/we may need to submit other additional information or documents as may be required by the Lands Department to facilitate the assessment of my/our application. Unless such additional information/documents are submitted, my/our application cannot be further processed.",
                        "NOTE:",
                        "(1) No documentation proof is required if the application is made by incumbent Lego Members/DC Members, Government departments or statutory organisations.",
                    ],
                },
                {
                    title: "Which district will you make application most likely?",
                    code: "15",
                    type: "hidden",
                    element: "select"
                },
                {
                    title: "Agreement for privacy policy",
                    code: "16",
                    description: ["I understand and agree to the User Agreement Privacy Policy."],
                    element: "checkbox",
                    type: "hidden"
                },
            ]
        }
    ]

export const fontSize = {

}