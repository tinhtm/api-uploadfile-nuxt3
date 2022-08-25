
export default defineEventHandler(() => {
  var data = {
      "type": "page",
      "name": "Home Page",
      "slug": "",
      "siteStructure": [
        "header-block",
        "cta-hero",
        "open-positions-list",
        "title-desc-list",
        "title-desc-img-block",
        "title-desc-img-block",
        "block-quote",
        "title-desc-list",
        "cta-contact-us",
        "footer-block"
      ],
      "sections": [
        {
          "type": "section",
          "name": "cta-hero",
          "elementId": "cta-hero",
          "fields": {
            "title": "Join Our Team",
            "description": "Join us to transform the current approach to health and wellness from one that focuses on treating symptoms to one that addresses the root cause.",
            "link": {
              "text": "Open positions",
              "url": "/open-positions",
              "target": "_self"
            }
          },
          "lastUpdated": "2022-07-24T23:33:06.949Z",
          "lastUpdatedBy": "Mickey Mouse"
        },
        {
          "type": "section",
          "name": "open-positions-list",
          "elementId": "open-positions-list",
          "fields": {
            "title": "Open Positions",
            "ctaLink": {
              "showLink": true,
              "link": {
                "text": "View all positions",
                "icon": "https://drberg-dam.imgix.net/icons/icon-line-navigation-arrow-forward.svg",
                "url": "/open-positions",
                "target": "_self"
              }
            },
            "positionLimit": 6,
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
                "title": "Membership Coach",
                "summary": "Remote within U.S. - Customer Support - Contractor-based Full Time $15-$17/hr",
                "variants": [2,4,6],
                "link": {
                  "text": "View position",
                  "url": "/open-positions/membership-coach",
                  "target": "_self"
                }
              }
            ]
          },
          "lastUpdated": "2022-07-24T23:33:06.950Z",
          "lastUpdatedBy": "Mickey Mouse"
        },
        {
          "type": "section",
          "name": "title-desc-list",
          "elementId": "tdl-perks-benefits",
          "fields": {
            "title": {
              "text": "Our Perks and Benefits",
              "heading": "h2"
            },
            "description": "Here are a few ways we contribute back to our employees.",
            "items": [
              {
                "title": "Professional development and training",
                "description": "We offer paid on-the-job training and encourage professional advancements and continued education. Joining our team is an excellent opportunity to learn more about e-commerce and working with a health influencer!"
              },
              {
                "title": "A health-conscious team",
                "description": "Our company lives and breathes health and wellness, and we want to make it easy for you to be your best self. We provide gym memberships to all employees so they can take full advantage of staying active, whether that's pumping iron at the weightlifting stations or taking a Zumba class! We also offer a 50% discount off all of Dr. Berg’s products."
              },
              {
                "title": "Work & Life Balance",
                "description": "We work hard here- but we also work smart. We understand that personal or family challenges arise and life happens, so we do our best to accommodate that. Our goal is to help employees create balance by offering paid vacation and holidays, as well as paid personal days so you can take the time you need when you need it."
              }
            ],
            "responsiveImage": {},
            "images": {},
            "imageOnRight": false,
            "isArtDirection": false
          },
          "lastUpdated": "2022-07-24T23:33:06.950Z",
          "lastUpdatedBy": "Mickey Mouse"
        },
        {
          "type": "section",
          "name": "title-desc-img-block",
          "elementId": "tdib-equal-opportunity",
          "fields": {
            "title": "Equal Opportunity Employer",
            "description": "Dr. Berg Nutritionals is proud to be an equal opportunity employer that values equality and diversity. We do not discriminate based on gender, race, ethnicity, national origin, age, disability, religion, sexual orientation, gender identity or expression, veteran status, or any other applicable characteristics protected by law.",
            "responsiveImage": {
              "damUrl": "https://drberg-dam.imgix.net/others/career-equal-opportunity-employer.png",
              "src": "?w=819&auto=compress,format",
              "srcset": [
                "?w=335&auto=compress%2Cformat 335w",
                "?w=442&auto=compress%2Cformat 442w",
                "?w=556&auto=compress%2Cformat 556w",
                "?w=580&auto=compress%2Cformat 580w",
                "?w=600&auto=compress%2Cformat 600w",
                "?w=819&auto=compress%2Cformat 819w"
              ],
              "sizes": "(max-width: 639px) calc(100vw - 40px), (max-width: 879px) calc(100vw - 60px), (max-width: 1280px) calc(50vw - 40px), 556px",
              "altText": "puzzle pieces of employee avatars"
            },
            "imageOnRight": true
          },
          "lastUpdated": "2022-07-24T23:33:06.950Z",
          "lastUpdatedBy": "Mickey Mouse"
        },
        {
          "type": "section",
          "name": "title-desc-img-block",
          "elementId": "tdib-remote-team",
          "fields": {
            "title": "Remotely-powered Global team",
            "description": "Allowing people to work from home or from anywhere is something we believe strongly in. You will have the freedom to work from wherever you are and spend time where you feel comfortable.",
            "responsiveImage": {
              "damUrl": "https://drberg-dam.imgix.net/others/career-remotely-powered.png",
              "src": "?w=819&auto=compress,format",
              "srcset": [
                "?w=335&auto=compress%2Cformat 335w",
                "?w=442&auto=compress%2Cformat 442w",
                "?w=556&auto=compress%2Cformat 556w",
                "?w=580&auto=compress%2Cformat 580w",
                "?w=600&auto=compress%2Cformat 600w",
                "?w=819&auto=compress%2Cformat 819w"
              ],
              "sizes": "(max-width: 639px) calc(100vw - 40px), (max-width: 879px) calc(100vw - 60px), (max-width: 1280px) calc(50vw - 40px), 556px",
              "altText": "a woman works remotely at home"
            },
            "imageOnRight": false
          },
          "lastUpdated": "2022-07-24T23:33:06.950Z",
          "lastUpdatedBy": "Mickey Mouse"
        },
        {
          "type": "section",
          "name": "block-quote",
          "elementId": "bq-mission",
          "fields": {
            "title": "Mission",
            "description": "Our mission is to transform the current approach to health and wellness from one that focuses on treating symptoms to one that addresses the root cause. We believe that the only way to achieve full health potential is to support the body’s natural health pathways. Many people don’t know about the holistic approach to health and wellness—we want to spread the word with the world.",
            "hasBackground": true
          },
          "lastUpdated": "2022-07-24T23:33:06.950Z",
          "lastUpdatedBy": "Mickey Mouse"
        },
        {
          "type": "section",
          "name": "title-desc-list",
          "elementId": "tdl-what-we-do",
          "fields": {
            "title": {
              "text": "What we do",
              "heading": "h2"
            },
            "description": "",
            "items": [
              {
                "title": "Technology",
                "description": "We build tools and apps that make it simpler for people to start and sustain a healthy low-carb lifestyle. Our engineering team has massive challenges ahead, and it’s growing rapidly."
              },
              {
                "title": "Course",
                "description": "We create in-depth courses on health and wellness topics to empower users with knowledge. Our goal is to explain complex health topics in simple terms so they can become an expert in a field where there are so many conflicting opinions."
              },
              {
                "title": "Books and recipes",
                "description": "We use books and ebooks to break down complex health topics into digestible information. We also provide cookbooks and recipes to help people stay on a healthy eating plan and improve their skills in the kitchen."
              },
              {
                "title": "Videos",
                "description": "We have a growing YouTube channel of over 7 million subscribers and more than 1 billion views. Our channel provides free information to the world to educate and help people create a better lifestyle using the latest health and wellness strategies."
              },
              {
                "title": "Dietary supplements and beauty products",
                "description": "We create natural dietary supplements and skin and hair care products using high-quality ingredients and a rigorous research and development process. It's our goal to supply our customers with premium products that really work."
              }
            ],
            "responsiveImage": {},
            "images": {},
            "imageOnRight": false,
            "isArtDirection": false
          },
          "lastUpdated": "2022-07-24T23:33:06.950Z",
          "lastUpdatedBy": "Mickey Mouse"
        },
        {
          "type": "section",
          "name": "cta-contact-us",
          "elementId": "cta-contact-us",
          "fields": {
            "title": "Always on the look for new talents",
            "description": "You can also connect with us, even in case there is no job opening listed at the moment for your skills. Simply connect with us and tell us what department is of any interest for you.",
            "links": [
              {
                "text": "Contact us",
                "url": "/contact-us",
                "target": "_self"
              },
              {
                "text": "Open positions",
                "url": "/open-positions",
                "target": "_self"
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
        "domain": "careers.drberg.com"
      },
      "lastUpdated": "2022-07-24T23:33:06.950Z",
      "lastUpdatedBy": "Mickey Mouse"
    };
  return data;
})