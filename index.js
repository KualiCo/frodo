var axios = require('axios')
var papa = require('papaparse')
var fs = require('fs')

var apiKey = ''

var csv = fs.readFileSync('./csvs/MOCK_DATA.csv', 'utf8')

papa.parse(csv, {
  header: true,
  step: function(results, parser) {
    var data = results.data[0]
    var course = {
      title: data.title,
      subjectCode: data.subject,
      status: 'active',
      number: data.number,
      description: data.description,
      startTerm: {
        type: 'year',
        year: '2016'
      }
    }

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

  }
})
