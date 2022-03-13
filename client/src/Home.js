import React from 'react'
import { useQuery, useLazyQuery, gql } from '@apollo/client'
import { useState } from 'react';
const typeDefs = gql`
    input CharacterInputFilter {
        name : String
    }
`;

const QUERY_CHARACTERS = gql`
  query Characters {
    characters {
      id
      name
      status
    }
  }
`;

const QUERY_CHARACTERS_BY_NAME = gql`
  query CharactersFilterWithName($input: CharacterInputFilter!) {
    charactersFilterWithName(input: $input) {
      id
      name
      status
      species
    }
  }
`;

function Home() {
const {data, loading, error} = useQuery(QUERY_CHARACTERS);

if (data) {
    console.log(data);
}
if (loading) {
    console.log(loading);
}
if (error) {
    console.log(error);
}

  return (
    <div>Home</div>
  )
}

export default Home