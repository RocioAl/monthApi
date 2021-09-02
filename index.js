const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { request, response } = require('express');
const cors = require('cors');

app.use(cors())


app.get('/con-cors', cors(), (req, res, next) => {
    res.json({ msg: 'con cors 🔝 🎉' })
})
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
                "name": "London",
                "月份": "Jan.",
                "月均降雨量": 18.9
            },
            {
                "name": "London",
                "月份": "Feb.",
                "月均降雨量": 28.8
            },
            {
                "name": "London",
                "月份": "Mar.",
                "月均降雨量": 39.3
            },
            {
                "name": "London",
                "月份": "Apr.",
                "月均降雨量": 81.4
            },
            {
                "name": "London",
                "月份": "May",
                "月均降雨量": 47
            },
            {
                "name": "London",
                "月份": "Jun.",
                "月均降雨量": 20.3
            },
            {
                "name": "London",
                "月份": "Jul.",
                "月均降雨量": 24
            },
            {
                "name": "London",
                "月份": "Aug.",
                "月均降雨量": 35.6
            },
            {
                "name": "Berlin",
                "月份": "Jan.",
                "月均降雨量": 12.4
            },
            {
                "name": "Berlin",
                "月份": "Feb.",
                "月均降雨量": 23.2
            },
            {
                "name": "Berlin",
                "月份": "Mar.",
                "月均降雨量": 34.5
            },
            {
                "name": "Berlin",
                "月份": "Apr.",
                "月均降雨量": 99.7
            },
            {
                "name": "Berlin",
                "月份": "May",
                "月均降雨量": 52.6
            },
            {
                "name": "Berlin",
                "月份": "Jun.",
                "月均降雨量": 35.5
            },
            {
                "name": "Berlin",
                "月份": "Jul.",
                "月均降雨量": 37.4
            },
            {
                "name": "Berlin",
                "月份": "Aug.",
                "月均降雨量": 42.4
            }
        ]

    )
});
app.listen(port, () => {
    console.log(`Api corriendo en el puerto ${port}`);
});


