import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../content/reviews.md';

export default class Home extends Component {
  render() {
    let { title, reviews } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {reviews.map((review, k) => (
              <li key={k}>
                <h2>{review.name}</h2>
                <img
                  src= {review.image}
                  //className={utilStyles.borderCircle}
                  height="144"
                  width="144"
                  alt="image"
                 />
                <p>{review.details}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    )
  }
}