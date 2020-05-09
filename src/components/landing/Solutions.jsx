import React from "react"

export default ({ data }) => {
  const { html } = data
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
