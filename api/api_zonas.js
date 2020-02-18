



    fetch(`http://traolcl.gdsnet.com:8500/api/Fotos/getfotosalas/401`, 
    {method: 'GET',})
    .then((response) => {
      return response.json()})
    .then((datajsonsala) => {        
      this.setState({ 
        salas: datajsonsala,          
      })
    });





fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  }),
});

fetch('https://mywebsite.com/endpoint/', {  
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  })
})
