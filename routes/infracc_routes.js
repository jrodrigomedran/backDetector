module.exports = function(app, db) {
    app.get('/infraccion/:Matricula', (req, res) => {
        const details = { 'Matricula': '5649JSN' };
        db.collection('InfraccionesDet').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'error en el envio' });
            } else {
                res.send(item);
            }
        })
    });

    app.post('/infraccion', (req, res) => {
        console.log(req.body)
        res.send('hello')
    });
};