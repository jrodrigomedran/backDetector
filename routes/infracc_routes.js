module.exports = function(app, db) {
    // Petición de una sola matrícula
    app.get('/infraccion/:Matricula', (req, res) => {
        var matricula = req.params.Matricula;
        console.log("Matricula pedida: " + matricula);
        const details = { 'Matricula': matricula };
        db.collection('InfraccionesDet').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'error en el envio' });
            } else {
                res.send(item);
            }
        })
    });

    // Petición de todas las matrículas
    app.get('/infraccion', (req, res) => {
        console.log("Se piden todas las matriculas");
        db.collection('InfraccionesDet').find({}).toArray(function(err, item) {
            if (err) {
                res.send({ 'error': 'error en el envio' });
            } else {
                res.send(item);
            }
        })
    });

    /*app.post('/infraccion', (req, res) => {
        console.log(req.body)
        res.send('hello')
    });*/
};