const express = require('express');
const graphqlHTTP = require('express-graphql');


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
  }));



  const PORT = process.env.PORT || 5000
  app.listen(PORT, () => console.log('Now browse to localhost:5000/graphql'));


