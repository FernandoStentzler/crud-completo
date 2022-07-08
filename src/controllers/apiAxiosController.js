const api = require('../database/config/apiAxios');

const apiAxiosController = {
    getStates: (req, res) => {
        api.get('/estados?orderBy=nome')
            .then(statesReturned => {
                const states = statesReturned.data;
                res.render('index', { states: states });
            })
            .catch(err => {
                console.log(err);
            });
    },
}

module.exports = apiAxiosController;