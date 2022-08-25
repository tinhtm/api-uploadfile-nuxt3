export default defineEventHandler(async () => {
  return await fetch('https://drbergstorage.blob.core.windows.net/careersite/attributes.json').then(async res => {
    return await res.json().then((response) => {
      return {data: response}
    })
  })
    // return {
    //   data: {
    //     "locations": [
    //       {
    //         "id": -1,
    //         "name": "Location: n/a"
    //       },
    //       {
    //         "id": 1,
    //         "name": "Remote within U.S."
    //       }
    //     ],
    //     "departments": [
    //       {
    //         "id": -3,
    //         "name": "Department: n/a"
    //       },
    //       {
    //         "id": 2,
    //         "name": "Customer Support"
    //       }
    //     ],
    //     "types": [
    //       {
    //         "id": -2,
    //         "name": "Type: n/a"
    //       },
    //       {
    //         "id": 3,
    //         "name": "Contractor-based Full Time $15-17/hr"
    //       }
    //     ]
    //   }
    // }
  })