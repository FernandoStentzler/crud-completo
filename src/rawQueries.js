const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'movies',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);

const SQLQuery = 'SELECT * FROM movies where rating > :rating';

const rawQuery = sequelize.query(
    SQLQuery,
    { 
        replacements: { rating: 7 }, // parametro do rawQuery :rating
        // replacements: [7], //substitui o valor do primeiro ? por 7
        type: Sequelize.QueryTypes.SELECT 
    }
)
.then(result => {
    console.log(result);
    return result
})
.catch(err => {
    console.log(err);
});