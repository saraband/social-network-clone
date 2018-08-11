import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} from 'graphql'
import DB from './db'

const User = new GraphQLObjectType({
  name: 'User',
  description: 'This is a real life user.',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: user => user.id
    },
    username: {
      type: GraphQLString,
      resolve: user => user.username
    },
    posts: {
      type: new GraphQLList(Post),
      resolve: user => user.getPosts()
    }
  })
})

const Post = new GraphQLObjectType({
  name: 'Post',
  description: 'This is a post',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve: post => post.id
    },
    title: {
      type: GraphQLString,
      resolve: post => post.title
    },
    content: {
      type: GraphQLString,
      resolve: post => post.content
    },
    user: {
      type: User,
      resolve: post => post.getUser()
    }
  })
})

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    test: {
      type: GraphQLString,
      resolve: () => 'Hello world !'
    },
    userList: {
      type: new GraphQLList(User),
      arsg: {
        id: {
          type: GraphQLInt
        },
        username: {
          type: GraphQLString
        }
      },
      resolve: (root, args) => {
        return DB.models.user.findAll({ where: args })
      }
    },
    postList: {
      type: new GraphQLList(Post),
      args: {
        id: {
          type: GraphQLInt
        },
        title: {
          type: GraphQLString
        },
        content: {
          type: GraphQLString
        }
      },
      resolve: (root, args) => {
        return DB.models.post.findAll({ where: args })
      }
    }
  })
})

const Schema = new GraphQLSchema({
  query: Query
})

export default Schema