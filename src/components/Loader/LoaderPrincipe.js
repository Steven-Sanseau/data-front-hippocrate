import React from 'react'
import ContentLoader from 'react-content-loader'

const LoaderPrinciple = props => (
  <ContentLoader
    height={160}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="6" y="12" rx="3" ry="3" width="70" height="10" />
    <rect x="82" y="12" rx="3" ry="3" width="100" height="10" />
    <rect x="190" y="12" rx="3" ry="3" width="60" height="10" />
  </ContentLoader>
)
export default LoaderPrinciple
