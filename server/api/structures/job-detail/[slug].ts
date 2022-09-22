export default defineEventHandler(async (event) => {
  var data = {
    "type": "page",
    "name": "Job Detail",
    "slug": "/open-positions/customer-service-representative",
    "siteStructure": [
      "header-block",
      "cta-hero",
      "description-block",
      "footer-block"
    ],
    "sections": [
      {
        "type": "section",
        "name": "cta-hero",
        "elementId": "ch-job-detail",
        "fields": {
          "parentPageLink": {
            "showLink": true,
            "link": {
              "text": "Back to job listings",
              "icon": "https://drberg-dam.imgix.net/icons/icon-line-navigation-backward_arrow.svg",
              "url": "/open-positions",
              "target": "_self"
            }
          },
          "title": "",
          "summary": "",
          "description": "",
          "updatedOn": "",
          "link": {
            "text": "Join our team",
            "url": "/open-positions/customer-service-representative/submit-form",
            "target": "_self",
            "description": "We usually reply within 24-48h"
          },
          "navigationLink": {
            "text": "View job details",
            "icon": "https://drberg-dam.imgix.net/icons/icon-line-navigation-arrow-down.svg"
          }
        },
        "lastUpdated": "2022-07-24T23:33:06.949Z",
        "lastUpdatedBy": "Mickey Mouse"
      },
      {
        "type": "section",
        "name": "description-block",
        "elementId": "db-job-detail",
        "fields": {
          "description": "",
          "ctaLink": {
            "showLink": true,
            "text": "Join Our team",
            "url": "/open-positions/customer-service-representative/submit-form",
            "target": "_self"
          }
        },
        "lastUpdated": "2022-07-24T23:33:06.949Z",
        "lastUpdatedBy": "Mickey Mouse"
      }
    ],
    "site": {
      "type": "site",
      "name": "career site",
      "domain": "careers.drberg.com"
    },
    "lastUpdated": "2022-07-24T23:33:06.950Z",
    "lastUpdatedBy": "Mickey Mouse"
  };
  
  return await fetch('https://drbergstorage.blob.core.windows.net/careersite/jobs.json').then(async res => {
    return await res.json().then((response) => {
      var job = response.find(c => c.slug == event.context.params.slug);
      data.sections[0].fields.title = job.title;
      data.sections[0].fields.summary = job.summary;   
      data.sections[0].fields.updatedOn = job.date_updated;
      data.sections[1].fields.description = job.description;
      data.sections[0].fields.link.url = `/open-positions/${job.slug}/submit-form`;
      data.sections[1].fields.ctaLink.url = `/open-positions/${job.slug}/submit-form`;
      return data;
    })
  })
})