const { GraphQLObjectType, 
    GraphQLInt,
    GraphQLString, 
    GraphQLBoolean, 
    GraphQLList, 
    GraphQLSchema} = require('graphql');
const axios = require('axios');


//Launch type
const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: { type: GraphQLInt },
        flight_id: { type: GraphQLString },
        mission_name: { type: GraphQLString },
        launch_year: { type: GraphQLString },
        launch_date_local: { type: GraphQLString },
        launch_success: { type: GraphQLBoolean },
        Rocket: { type: RocketType }
    })
});

//RocketType

const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
        rocket_id: { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        rocket_type: { type: GraphQLString },
    })
});

//root query

const RootQuery = new GraphQLObjectType({
   name: 'RootQueryType',
   fields: {
       launches: {
           type:new GraphQLList(LaunchType),
           resolve(parent, args) {
               return axios.get('https://api.spacexdata.com/v3/launches')
               .then(res => res.data);
           }
       },
       launch: {
           type: LaunchType,
           args: {
               flight_number: { type: GraphQLInt }
           },
           resolve(parent, args) {
               return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
               .then(res => res.data);
           }
       },
       launch_id: {
           type: LaunchType,
           args: {
               flight_id: { type: GraphQLString }
           },
           resolve(parent, args){
               return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_id}`)
               .then(res => res.data)
           }
       }
   }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});