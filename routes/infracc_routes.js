module.exports = function(app, db) {
    // Petición de una sola matrícula
    app.get('/infracciones/:Matricula', (req, res) => {
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
    app.get('/infracciones', (req, res) => {
        console.log("Se piden todas las matriculas");
        db.collection('InfraccionesDet').find({}).toArray(function(err, item) {
            if (err) {
                res.send({ 'error': 'error en el envio' });
            } else {
                res.send(item);
            }
        })
    });

    // Se pide por el DNI del infractor
    app.get('/infracciones/propietario/:Filter', (req, res) => {
        var filtro = req.params.Filter;
        console.log("DNI pedido: " + filtro);
        const details = { "Propietario.DNI": new RegExp(filtro + "/*") };
        db.collection('InfraccionesDet').find(details).toArray(function(err, item) {
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