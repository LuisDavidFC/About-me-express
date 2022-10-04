const express = require('express');

const app = express();

//----------------  GET ------------------------------------

app.get('/me', (request, response) => {     
    console.log(request.method);
    response.status(200).json({
        "nombre": "David",
        "edad": 23,
        "pais": "Bolivia"
      })
} )

//----------------  POST ------------------------------------

app.post('/metas', (request, response) => {     
    console.log(request.method);
    response.status(200).json([
        {
            hobbie: 'Futbol'
        },
        {
            hobbie: 'Ver Series'
        },
        {
            hobbie: 'Viajar'
        }
    ])
} )
//----------------  PATCH ------------------------------------

app.patch('/metas', (request, response) => {     
    console.log(request.method);
    response.status(200).json([
        {
            prof_hobbie: 'Estudiar Ingles'
        },
        {
            prof_hobbie: 'Aprender IA'
        }
    ])
} )
//----------------  PUT ------------------------------------

app.put('/business', (request, response) => {     
    console.log(request.method);
    response.status(200).json([
        {
            favorite_team: 'Meta'
        },
        {
            favorite_team: 'Cisco'
        },
        {
            favorite_team: 'IBM'
        },
        {
            verb: request.method
        }
    ])
} )

//----------------------------------------------------------


app.listen( 8000, () => { 
    console.log("Server started at port 8000") 
} )