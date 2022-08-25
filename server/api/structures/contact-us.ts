
export default defineEventHandler(() => {
    var data = {
      "type": "page",
      "name": "Contact us",
      "slug": "/contact-us",
      "siteStructure": [
        "header-block",
        "submit-form-block",
        "footer-block"
      ],
      "sections": [
        {
          "type": "section",
          "name": "submit-form-block",
          "elementId": "sfb-contact-us",
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
            "summary": "",
            "title": "Get in touch",
            "description": "Want to work with us but see no jobs posted that fit your skillset? Send us a message!",
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
              },
              {
                "type": "textarea",
                "property": "message",
                "label": "Your message",
                "caption": "Please specify desired department(s), salary, and any important information regarding which position you are inquiring about.",
                "preloadText": ""
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
              "description": "<p>This message is sent to Human Resources department so do not send other requests. Do not submit any other type of request using this form.</p><p>For customer support please use:&nbsp;<a href=\"https://support.drberg.com/services\">https://support.drberg.com/services</a></p>",
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