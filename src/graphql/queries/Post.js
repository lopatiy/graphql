'use strict';

const GraphQL = require('graphql');

const {
    GraphQLList,
    GraphQLString,
    GraphQLNotNull,
} = GraphQL;

const PostType = require('../types/Post');
const PostResolver = require('../resolvers/Post');

module.exports = {
    index() {
        return {
            type: new GraphQLList(PostType),
            args: {
                subreddit: {
                    type : GraphQLString,
                    description: "Subreddit name"
                }
            },
            resolve(parent, args, context, info) {
                return PostResolver.index(args);
            }
        }
    }
};
