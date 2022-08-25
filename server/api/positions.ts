export default defineEventHandler(async() => {
  return await fetch('https://drbergstorage.blob.core.windows.net/careersite/jobs.json').then(async res => {
    return await res.json().then((response) => {
      var result = (response || []).map(item => {
        return {
          title: item.title,
          summary: item.summary,
          variants: new Array(item.locationId, item.departmentId, item.typeId),
          link: {
            text: 'View position',
            url: `/open-positions/${item.slug}`,
            target: '_self'
          }
        }
      });
      return {
        data: result
      }
    })
  })
  // return {
  //   data: [
  //     {
  //       title: "Customer Service Representative",
  //       summary: "Remote within U.S. - Customer Support - Contractor-based Full Time $15-$17/hr",
  //       variants: [1, 3, 5],
  //       link: {
  //         text: "View position",
  //         url: "/open-positions/customer-service-representative",
  //         target: "_self"
  //       }
  //     },
  //     {
  //       title: "Marketing Funnel Specialist",
  //       summary: "US-based - Marketing - Employee Full Time",
  //       variants: [2,4,6],
  //       link: {
  //         text: "View position",
  //         url: "/open-positions/marketing-funnel-specialist",
  //         target: "_self"
  //       }
  //     }
  //   ]
  // }
})