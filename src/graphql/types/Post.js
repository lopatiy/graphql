'use strict';

const GraphQL = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt
}  = GraphQL;

const PostType =  new GraphQLObjectType({
    name : "Post",
    description: "Post Type, For all the posts present in Reddit.",
    fields: () => ({
        id : {
            type : GraphQLID,
            description: 'Id of post',
        },
        title: {
            type: GraphQLString
        },
        url: {
            type: GraphQLString
        },
        author: {
            type: GraphQLString
        },
        ups: {
            type: GraphQLInt
        },
        downs: {
            type: GraphQLInt
        },
        content: {
            type: GraphQLString
        }
    })
});

module.exports = PostType;
