const {CharacterList} = require("../schema/data");
const _ = require("lodash");

const resolvers = {
    Query: {
        characters: () => {
            return CharacterList;
        },
        characterWithId: (parent, args) => {
            const id = args.id;
            const character = _.find(CharacterList, { id });
            return character;
        },
        characterWithName: (parent, args) => {
            const name = args.name;
            const character = _.find(CharacterList, { name });
            return character;
        },
        charactersFilterWithName: (parent, args) => {
            const filter = args.input.name;
            const list = _.filter(CharacterList, (character) => character.name.includes(filter));
            return list;
        }
    }
}

module.exports = {resolvers};