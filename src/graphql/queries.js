/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCashBox = /* GraphQL */ `
  query GetCashBox($id: ID!) {
    getCashBox(id: $id) {
      id
      name
      description
      depandpay
      one
      five
      ten
      fifty
      handred
      fivehandred
      thousand
      fivethousand
      tenthousand
      createdAt
      updatedAt
    }
  }
`;
export const listCashBoxes = /* GraphQL */ `
  query ListCashBoxes(
    $filter: ModelCashBoxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCashBoxes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        depandpay
        one
        five
        ten
        fifty
        handred
        fivehandred
        thousand
        fivethousand
        tenthousand
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
