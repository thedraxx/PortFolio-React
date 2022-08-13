import React from 'react'
import { Img, Matecito, SubTextFooter, SuperFooter, TextFooter } from './styles'
import mySvg from '../../../assets/love.svg'
const Footer = () => (
  <SuperFooter>
    <TextFooter>{'Let\'s work together.'}</TextFooter>
    <SubTextFooter>{'I\'m available for freelance work'}</SubTextFooter>
      <Matecito>{'Portfolio made by 🧉'}</Matecito>
      <Img src={mySvg} />
  </SuperFooter>

)

export default Footer
