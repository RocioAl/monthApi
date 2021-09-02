const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { request, response } = require('express');

const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get('/', (request, response) => {
    response.json({ info: 'La API esta en ejecucion' });
});

app.get('/meses', (request, response) => {
    response.json(
        [
            {
                month: 'Dic 2020',
                value: 28,
            },
            {
                month: 'Ene 2021',
                value: 22,
            },
            {
                month: 'Feb 2021',
                value: 15,
            },
            {
                month: 'Mar 2021',
                value: 5,
            },
            {
                month: 'Abr 2021',
                value: 10,
            },
            {
                month: 'May 2021',
                value: 20,
            },

        ]

    )
});
app.listen(port, () => {
    console.log(`Api corriendo en el puerto ${port}`);
});


