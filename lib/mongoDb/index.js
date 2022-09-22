var axios = require('axios')
var data = JSON.stringify({
  "collection": "SainaxOrders",
  "database": "Sainax",
  "dataSource": "Cluster0"
});

var config = {
  method: 'post',
  url: 'https://data.mongodb-api.com/app/data-dnekl/endpoint/data/v1/action/find',
  headers: { 
    'api-key': 'DYghw0Eo7ytqeFGOhTIGyxMB15Pr5YNYBnOgRZXGs93zWb4WcG9uT2FlZgre0Xxj', 
    'Accept': 'application/json', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});