import React from 'react'
import ContentLoader from 'react-content-loader'

const LoaderPrinciple = props => (
  <ContentLoader
    height={100}
    width={750}
    speed={2}
    primaryColor="#F8F8F8"
    secondaryColor="#E8E8E8"
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="300" height="20" />
    <rect x="310" y="0" rx="3" ry="3" width="50" height="20" />
    <rect x="370" y="0" rx="3" ry="3" width="370" height="20" />
  </ContentLoader>
)
export default LoaderPrinciple
