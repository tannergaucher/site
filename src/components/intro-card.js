import React from "react"
import Img from "gatsby-image"

import { useAvatarImage } from "../hooks"

export default function IntroCard({ company }) {
  const { fluid } = useAvatarImage()

  //   navigator.share not available on chrome
  const isShare =
    typeof window !== `undefined` && window.navigator.share !== undefined

  return (
    <div>
      {isShare && (
        <button
          className="btn btn-primary"
          style={{ marginBottom: `var(--space-lg)` }}
          onClick={() => {
            if (window.navigator.share) {
              window.navigator.share({
                title: `Tanner Gaucher | Online Resume`,
                text: `Tanner Gaucher | Reasons I should be hired at ${company}`,
                url: `https://tannergaucher.com`,
              })
            }
          }}
        >
          Share
        </button>
      )}
      <div className="card container">
        <div className="padding"></div>
        <Img fluid={fluid} />
        <h2 className="card-title padding" style={{ marginBottom: 0 }}>
          Hi, I'm Tanner.
          <span
            role="img"
            aria-label="hand wave"
            style={{ margin: `0 var(--space-sm)` }}
          >
            👋
          </span>
          Nice to digitally meet you!
        </h2>
        <p className="card-text">
          I made a quick list of reasons why I'm a good match for {company}.
          Please share with anyone you think might be interested.
        </p>
        {/* Progressive enhancement share btn */}
      </div>
    </div>
  )
}
