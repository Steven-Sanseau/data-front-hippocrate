import React from 'react'
import ContentLoader from 'react-content-loader'

const LoaderPrinciple = props => (
  <ContentLoader
    height={300}
    width={945}
    speed={2}
    primaryColor="#F8F8F8"
    secondaryColor="#E8E8E8"
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="580" height="30" />
    <rect x="0" y="60" rx="3" ry="3" width="100" height="15" />
    <rect x="120" y="95" rx="3" ry="3" width="215" height="16" />
    <rect x="365" y="95" rx="3" ry="3" width="219" height="16" />
    <rect x="615" y="95" rx="3" ry="3" width="170" height="16" />
    <rect x="120" y="135" rx="3" ry="3" width="215" height="16" />
    <rect x="370" y="135" rx="3" ry="3" width="150" height="16" />
    <rect x="555" y="135" rx="3" ry="3" width="380" height="16" />
    <rect x="100" y="160" rx="3" ry="3" width="285" height="16" />
    <rect x="410" y="160" rx="3" ry="3" width="340" height="16" />
    <rect x="120" y="200" rx="3" ry="3" width="310" height="16" />
    <rect x="450" y="200" rx="3" ry="3" width="300" height="16" />
    <rect x="100" y="225" rx="3" ry="3" width="245" height="16" />
  </ContentLoader>
)
export default LoaderPrinciple
