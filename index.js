var axios = require('axios')
var secrets = require('./secrets.json')

// # Steps for Exercise 1:

// - Get a user api key
var apiKey = secrets.apiKey

// - Set the authentication header
var headers = {
  Authorization: 'Bearer ' + apiKey
}

// - Get some course data
var course = {
  subjectCode: 'SHIRE',
  number: '101',
  status: 'active',
  title: 'A long expected party',
  description: 'Instruction on how to best celebrate an elenty-first birthday',
  startTerm: {
    type: 'year',
    year: '2015'
  }
}

// - Post it to the API
axios.post(
  'https://frodo-stg.kuali.co/api/cm/courses',
  course,
  {headers: headers}
)
.then(function(res) {
  console.log('inserted: ', res.data)
})
.catch(function(e) {
  console.error('Error: ', e)
})
