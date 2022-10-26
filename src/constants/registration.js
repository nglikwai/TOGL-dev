export const sessionOneQuestions = [
    {
        content: [
            'Name of Organization/ Name of LegCo/ DC Member',
            'Name of Sub-Organization(Optional)',
        ],
        label: [
            'Provide registered organization name. Identical name required.',
            'Please provide registered sub-organization name. Identical name required.',
        ],
    },
    {
        content: ['Registration Number(Optional)'],
    },
    {
        content: ['Validity Period(Optional)'],
        styles: 'register_input_50',
        icon: "calendar",
        id: "validityPeriod"
    }
]

export const sessionTwoQuestions = [
    {
        content: ['Family Name', 'Given Name'],
    },
    {
        content: ["Position in the Applicant Organization"],
    },
    {
        content: ["Correspondence Address"],
        length: 100,
        line: 2,
    },
    {
        content: ["E-mail"],
        type: "email",
    },
    {
        content: ["Tel.No."],
        type: "number",
    },
    {
        content: ["Emergency Tel.No.(Optional)"],
        type: "number",
    },
    {
        content: ["Fax.No.(Optional)"],
        type: "number",
    },
]

export const natureOfOrganization = [
    'Incumbent Legislative Council (LegCo) Member/ District Council (DC) Member',
    'Charitable institution or trust of a public character which is exempt from tax under section 88 of the Inland Revenue Ordinance (Cap. 112) or society registered under Societies Ordinance (Cap. 151)',
    'Government department or statutory organisation',
    'Other legally registered body ',
]


export const supportingDocument = {
    requirement: [
        "I/We attach the following documents in support of my/our application (please see belows Note (1)):",
        "(a) documentary evidence to prove that the Applicant is a charitable institution or trust of apublic character exempt from tax under section 88 of the Inland Revenue Ordinance Cap.112 (if applicable);",
        "(b) documentary evidence to prove that the Applicant is a society registered under the Societies Ordinance Cap. 151 (if applicable); or",
        "(C) documentary evidence to prove that the Applicant is a legally registered body (please specify)."
    ],
    agreement: "I/We acknowledge and agree that failure to submit the required documents may lead to rejection of the application. I/We also acknowledge and agree that I/we may need to submit other additional information or documents as may be required by the Lands Department to facilitate the assessment of my/our application. Unless such additional information/documents are submitted, my/our application cannot be further processed.",
    agreementNote:"(1) No documentation proof is required if the application is made by incumbent Lego Members/DC Members, Government departments or statutory organisations."
}


export const installScript = (url) => {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
        "src",
        url
    );
    document.head.appendChild(recaptchaScript);
}


export const initDatePicker = (id) => {
    installScript("https://html5.samprasdev.com/LandsD/js/layui/layui.js");
    setTimeout(() => {
        layui.use(["form", "util", "laydate"], function () {
            var form = layui.form;
            var layer = layui.layer;
            var util = layui.util;
            var laydate = layui.laydate;
            //国际版
            laydate.render({
                elem: `#${id}`,
                theme: "#2CA2B9",
                lang: "en",
            });
        });
    }, 1000);

}


