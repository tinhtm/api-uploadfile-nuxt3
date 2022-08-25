export default defineEventHandler(async (event) => {
    var data = {
        "type": "page",
        "name": "Specific Job Application",
        "slug": "/open-positions/marketing-funnel-specialist/submit-form",
        "siteStructure": [
            "header-block",
            "submit-form-block",
            "footer-block"
        ],
        "jobId": "2",
        "sections": [
            {
                "type": "section",
                "name": "submit-form-block",
                "elementId": "sfb-specific-job",
                "fields": {
                    "parentPageLink": {
                        "showLink": true,
                        "link": {
                            "text": "Back to job listings",
                            "icon": "https://drberg-dam.imgix.net/icons/icon-line-navigation-arrow-backward.svg",
                            "url": "/open-positions",
                            "target": "_self"
                        }
                    },
                    "jobId": "2",
                    "summary": "US-based - Marketing - Employee Full Time",
                    "title": "Marketing Funnel Specialist",
                    "description": "",
                    "formFields": [
                        {
                            "type": "text",
                            "property": "firstName",
                            "label": "First name",
                            "caption": "",
                            "preloadText": ""
                        },
                        {
                            "type": "text",
                            "property": "lastName",
                            "label": "Last name",
                            "caption": "",
                            "preloadText": ""
                        },
                        {
                            "type": "email",
                            "property": "email",
                            "label": "Email address",
                            "caption": "",
                            "preloadText": ""
                        },
                        {
                            "type": "number",
                            "property": "phone",
                            "label": "Phone number",
                            "caption": "",
                            "preloadText": ""
                        },
                        {
                            "type": "text",
                            "property": "linkedIn",
                            "label": "LinkedIn profile",
                            "caption": "",
                            "preloadText": "https://www.linkedin.com/in/"
                        }
                    ],
                    "attachments": {
                        "anchorText": [
                            {
                                "property": "resume",
                                "text": "Attach your resume"
                            },
                            {
                                "property": "letter",
                                "text": "Attach your Cover letter"
                            }
                        ],
                        "icon": "https://drberg-dam.imgix.net/icons/icon-line-navigation-actions-plus-white.svg",
                        "note": "File type accepted: *.doc, *.docx, *.pages, *.pdf. File size limit: 20 MB"
                    },
                    "ctaLink": {
                        "text": "Send message",
                        "description": "",
                        "url": "/thanks",
                        "target": "_self"
                    }
                },
                "lastUpdated": "2022-07-24T23:33:06.950Z",
                "lastUpdatedBy": "Mickey Mouse"
            }
        ],
        "site": {
            "type": "site",
            "name": "career site",
            "domain": "career.drberg.com"
        },
        "lastUpdated": "2022-07-24T23:33:06.950Z",
        "lastUpdatedBy": "Mickey Mouse"
    }
    return data;
})