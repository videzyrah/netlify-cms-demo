import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/home.md';

export default class Home extends Component {
  render() {
    let { title, recipes } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {recipes.map((recipe, k) => (
              <li key={k}>
                <h2>{recipe.name}</h2>
                <img
                  src= {recipe.image}
                  //className={utilStyles.borderCircle}
                  height="144"
                  width="144"
                  alt="image"
                 />
                <p>{recipe.instructions}</p>
                <p><i>{recipe.notes}</i></p>             
              </li>
            ))}
          </ul>
        </article>
      </>
    )
  }
}