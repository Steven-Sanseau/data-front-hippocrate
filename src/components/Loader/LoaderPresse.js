import React from 'react'
import ContentLoader from 'react-content-loader'

const LoaderPresse = props => (
  <ContentLoader
    height={230}
    width={750}
    speed={2}
    primaryColor="#F8F8F8"
    secondaryColor="#E8E8E8"
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="300" height="20" />
    <rect x="310" y="0" rx="3" ry="3" width="50" height="20" />
    <rect x="370" y="0" rx="3" ry="3" width="370" height="20" />
    <rect x="0" y="30" rx="3" ry="3" width="90" height="20" />
    <rect x="110" y="30" rx="3" ry="3" width="320" height="20" />
    <rect x="440" y="30" rx="3" ry="3" width="200" height="20" />
    <rect x="0" y="110" rx="3" ry="3" width="400" height="16" />
    <rect x="430" y="110" rx="3" ry="3" width="310" height="16" />
    <rect x="0" y="140" rx="3" ry="3" width="490" height="16" />
    <rect x="0" y="205" rx="3" ry="3" width="320" height="16" />
    <rect x="335" y="205" rx="3" ry="3" width="190" height="16" />
    <rect x="540" y="205" rx="3" ry="3" width="200" height="16" />
  </ContentLoader>
)
export default LoaderPresse
