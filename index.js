
const express = require('express');
const app = express();
const PORT = 443;

app.use(express.json());

app.listen(
    PORT,
    () => console.log(`It is alive on http://localhost:${PORT}`)
)

app.get('/tshirts', (req, res) => {
    res.status(200).send({
        tshirt: '😂',
        size: 'large'
    })
})

app.post('/tshirt/:id', (req, res) => {
    
    const {id} = req.params;
    const {logo} = req.body;

    if (!logo){
        res.status(418).send({message: 'We need a logo!'})
    }

    res.send({
        tshirt: `😊 with your ${logo} and ID of ${id}`,
    })


})