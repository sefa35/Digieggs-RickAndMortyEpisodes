const {gql} = require("apollo-server");

const typeDefs = gql`
    
    type origin {
        name: String!
        url: String!
    }
    
    type location {
        name: String!
        url: String!
    }
    
    type Character {
        id: Int!
        name: String!
        status: String!
        species: String!
        type: String
        gender: String!
        origin: origin!
        location: location!
        image: String!
        episode: [String!]!
        url: String!
        created: String!
    }

    input CharacterInputFilter {
        name : String
    }
    
    type Query {
        characters: [Character]!
        characterWithId(id: Int!): Character!
        characterWithName(name: String!): Character!
        charactersFilterWithName(input: CharacterInputFilter): [Character]!
    }
`;


module.exports = {typeDefs};