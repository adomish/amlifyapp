/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const createCashBox = /* GraphQL */ `
  mutation CreateCashBox(
    $input: CreateCashBoxInput!
    $condition: ModelCashBoxConditionInput
  ) {
    createCashBox(input: $input, condition: $condition) {
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
export const updateCashBox = /* GraphQL */ `
  mutation UpdateCashBox(
    $input: UpdateCashBoxInput!
    $condition: ModelCashBoxConditionInput
  ) {
    updateCashBox(input: $input, condition: $condition) {
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
export const deleteCashBox = /* GraphQL */ `
  mutation DeleteCashBox(
    $input: DeleteCashBoxInput!
    $condition: ModelCashBoxConditionInput
  ) {
    deleteCashBox(input: $input, condition: $condition) {
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
