import { gql } from '@apollo/client';

export const GET_ME = gql`
  query getMe {
    me {
      _id
      bookCount
      email
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
      username
    }
  }
`;