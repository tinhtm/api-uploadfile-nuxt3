
export default defineEventHandler(() => {
    var data = {
        "type": "page",
        "name": "Open positions",
        "slug": "open-positions",
        "siteStructure": [
          "header-block",
          "breadcrumb-block",
          "open-positions-list",
          "footer-block"
        ],
        "sections": [
          {
            "type": "section",
            "name": "breadcrumb-block",
            "elementId": "bb-open-positions",
            "fields": {
              "parentLinks": [
                {
                  "text": "Home",
                  "url": "/",
                  "target": "_self"
                }
              ],
              "currentPageText": "All positions"
            },
            "lastUpdated": "2022-07-24T23:33:06.949Z",
            "lastUpdatedBy": "Mickey Mouse"
          },
          {
            "type": "section",
            "name": "open-positions-list",
            "elementId": "opl-full",
            "fields": {
              "title": "Open positions",
              "ctaLink": {
                "showLink": false,
                "link": {
                  "text": "",
                  "url": "",
                  "target": "_self"
                }
              },
              "filters": {
                "showFilters": true,
                "attributes": [
                  {
                    "type": "Location",
                    "variants": [
                      {
                        "id": 1,
                        "name": "Remote within U.S."
                      },
                      {
                        "id": 2,
                        "name": "US-based"
                      }
                    ]
                  },
                  {
                    "type": "Department",
                    "variants": [
                      {
                        "id": 3,
                        "name": "Customer Support"
                      },
                      {
                        "id": 4,
                        "name": "Marketing"
                      }
                    ]
                  },
                  {
                    "type": "Type",
                    "variants": [
                      {
                        "id": 5,
                        "name": "Contractor-based Full Time $15-17/hrs"
                      },
                      {
                        "id": 6,
                        "name": "Employee Full Time"
                      }
                    ]
                  }
                ]
              },
              "positionLimit": 0,
              "positions": [
                {
                  "title": "Customer Service Representative",
                  "summary": "Remote within U.S. - Customer Support - Contractor-based Full Time $15-$17/hr",
                  "variants": [1,3,5],
                  "link": {
                    "text": "View position",
                    "url": "/open-positions/customer-service-representative",
                    "target": "_self"
                  }
                },
                {
                  "title": "Marketing Funnel Specialist",
                  "summary": "US-based - Marketing - Employee Full Time",
                  "variants": [2,4,6],
                  "link": {
                    "text": "View position",
                    "url": "/open-positions/marketing-funnel-specialist",
                    "target": "_self"
                  }
                }
              ]
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