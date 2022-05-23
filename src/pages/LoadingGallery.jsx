import React from 'react'
import ContentLoader from 'react-content-loader'

const LoadingGallery = () => {

  return (

  <ContentLoader 
    speed={0}
    width={500}
    height={460}
    viewBox="0 0 500 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="10" y="1" rx="10" ry="10" width="342" height="227" />
  </ContentLoader>  )
}

export default LoadingGallery