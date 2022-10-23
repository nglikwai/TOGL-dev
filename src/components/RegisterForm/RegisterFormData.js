export const sessionTwoQuestions = [
    {
        content: ['Family Name', 'Given Name']
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
        content: ['Registration Number(Optional)']
    }
]

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

export const initXmSelector = (id) => {
    installScript("https://html5.samprasdev.com/LandsD/js/xm-select.js");
    setTimeout(() => {
        id = xmSelect.render({
            el: "#district_select",
            language: "en",
            filterable: true,
            theme: {
                color: "#3D9DD1",
            },
            data: [
                { name: "Hong Kong East", value: 1 },
                { name: "Hong Kong West and South", value: 2 },
                { name: "Kowloon East", value: 3 },
                { name: "Kowloon West", value: 4 },
                { name: "Islands", value: 5 },
                { name: "North", value: 6 },
                { name: "Sha Tin", value: 7 },
                { name: "Sai Kung", value: 8 },
                { name: "Tai Po", value: 9 },
                { name: "Tsuen Wan and Kwai Tsing", value: 10 },
                { name: "Tuen Mun", value: 11 },
                { name: "Yuen Long", value: 12 },
            ],
        });
    }, 1000);

}


