import React, { useState } from 'react'
import s from 'styled-components'

// local imports
import FormMaker from './AttributeForm'

import { Title, PageWrapper } from '../style/globalComponents'

const Home = () => {
  return (
    <PageWrapper>     
      <Title> Enter House Information </Title>
        <div className='houseInfoForm'>
          <FormMaker />
        </div>
    </PageWrapper>
  )
}
export default Home




