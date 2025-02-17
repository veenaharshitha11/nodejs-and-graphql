//In GraphQL, a type definition like the one below represents the structure of data that can be queried or manipulated
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
  GraphQLList,
} = graphql;

const OrderType = new GraphQLObjectType({
  name: "Order", //label for this type
  fields: () => ({ //function that returns an object. This object describes the properties (fields) of an order, and each field is associated with a specific data type.
    id: { type: GraphQLString },
    userId: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    address: { type: GraphQLString },
    city: { type: GraphQLString },
    country: { type: GraphQLString },
    zipCode: { type: GraphQLString },
    totalAmount: { type: GraphQLFloat },
    items: { type: GraphQLString },
    createdDate: { type: GraphQLString },
  }),
});

//you export the “OrderType” so that you can use it in your GraphQL schema to define the structure of your data

module.exports = OrderType;

//“OrderType” is a blueprint that defines the structure of an order in your online store’s data.
// When a GraphQL query is made, it specifies which fields (properties) of an order should be included in the response.
// This makes it very flexible for clients to request only the data they need, 
// and the “OrderType” helps ensure that the data conforms to a specific structure.