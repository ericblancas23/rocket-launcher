const { GraphQLObjectType, GraphQLInt,
    GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema} = require('graphql');
const axios = require('axios');


//Launch type
const LaunchType = new GraphQLObjectType({
    name: 'Launch',
    fields: () => ({
        flight_number: { type: GraphQLInt },
        mission_name: { type: GraphQLString },
        launch_year: { type: GraphQLString },
        launch_date_local: { type: GraphQLString },
        launch_success: { type: GraphQLBoolean },
        Rocket: { type: RocketType }
    })
})

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
            type: new GraphQLList({
                type: new GraphQLList(LaunchType),
                resolveType(parent, args) {
                    return axios.get('https://api.spacexdata.com/v3/launches')
                        .then(res.data);
                }
            })
        }
    }
})

modules.export = new GraphQLSchema({
    query: RootQuery
})