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
                    type: "checkbox",
                    description: [
                        "Incumbent Legislative Council (LegCo) Member/ District Council (DC) Member",
                        "Charitable institution or trust of a public character which is exempt from tax under section 88 of the Inland Revenue Ordinance (Cap. 112) or society registered under Societies Ordinance (Cap. 151)",
                        "Government department or statutory organisation",
                        "Other legally registered body"
                    ]
                },
                {
                    title: "Name of Organization/ Name of LegCo/ DC Member",
                    instruction: "Please provide registered organization name. Identical name required.",
                    type: "input",
                    line: 0.5
                },
                {
                    title: "Name of Sub-Organization",
                    instruction: "Please provide registered sub-organization name. Identical name required.",
                    type: "input",
                    line: 0.5
                },
                {
                    title: "Registration Number (Optional)",
                    type: "input"
                },
                {
                    title: "validity Period (Optional)",
                    type: "date"
                }

            ],
        },
        {
            sessionTitle: "Contact Information",
            questions: [
                {
                    title: "Name of Contact Person",
                    type: "input"
                },
                {
                    title: "Position in the Application Organization",
                    type: "select"
                },
                {
                    title: "Corresponence Address",
                    type: "input",
                    line: 2
                },
                {
                    title: "E-mail",
                    type: "input"
                },
                {
                    title: "Tel. No.",
                    type: "input"
                },
                {
                    title: "Emergency Tel/ No/ (Optional)",
                    type: "input"
                },
                {
                    title: "Fax No. (Optional)",
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
                    type: "input"
                },
                {
                    label: "Upload New Documents",
                    type: "file",
                    description: [
                        "I/We acknowledge and agree that failure to submit the required documents may lead to rejection of the application. I/We also acknowledge and agree that I/we may need to submit other additional information or documents as may be required by the Lands Department to facilitate the assessment of my/our application. Unless such additional information/documents are submitted, my/our application cannot be further processed.",
                        "NOTE:",
                        "(1) No documentation proof is required if the application is made by incumbent Lego Members/DC Members, Government departments or statutory organisations.",
                    ],
                },
                {
                    title: "Which district will you make application most likely?",
                    type: "select"
                },
                {
                    title: "Agreement for privacy policy",
                    description: ["I understand and agree to the User Agreement Privacy Policy."],
                    type: "checkbox"
                },
            ]
        }
    ]  