/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import App from "./App"
import AuthContext from "./AuthContext";
import "./layout.css"

const currentUser = {
  email: 'user@email.com',
  firstName: 'Patrick',
  lastName: 'Wam',
  avatarUrl: 'https://d39qdlcrvnra4b.cloudfront.net/avatars/1846165/original/DSC_7016-small.jpg?1581154864'
};

const Layout = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      airtable(
        table: { eq: "books" }
        data: { name: { eq: "React+D3v4" } }
      ) {
        data {
          name,
          description
          pages
          language
          progress
          link
          minimumPrice
          suggestedPrice
          collectedAmount
          expectedAmount
          readers
          additionalInfo
          authorsFullNames
          authorsEmails
          authorsAvatars
          authorsInformations
          similarBooksNames
          similarBooksAuthors
          similarBooksImages
          authors
          similarBooks
        }
      }
    }
  `)

  const attrs = data.airtable.data;

  const {
    name,
    description,
    pages,
    language,
    progress,
    link,
    minimumPrice,
    suggestedPrice,
    collectedAmount,
    expectedAmount,
    readers,
    additionalInfo,
    authorsFullNames,
    authorsEmails,
    authorsAvatars,
    authorsInformations,
    similarBooksNames,
    similarBooksAuthors,
    similarBooksImages,
  } = attrs;

  const authors = attrs.authors.map(
    (_, index) => ({
      fullName: authorsFullNames[index],
      email: authorsEmails[index],
      avatar: authorsAvatars[index],
      information: authorsInformations[index],
    })
  );

  const similarBooks = attrs.similarBooks.map(
    (_, index) => ({
      name: similarBooksNames[index],
      author: similarBooksAuthors[index],
      image: similarBooksImages[index],
    })
  );

  const book = { 
    name,
    description,
    pages,
    language,
    progress,
    link,
    minimumPrice,
    suggestedPrice,
    collectedAmount,
    expectedAmount,
    readers,
    additionalInfo,
    authors,
  };

  return (
    <AuthContext.Provider value={{currentUser: currentUser}}>
      <App book={book} similarBooks={similarBooks} />
    </AuthContext.Provider>
  )
}

export default Layout
