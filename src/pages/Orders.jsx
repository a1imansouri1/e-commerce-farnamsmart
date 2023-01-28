import React, { useEffect, useState, useContext } from 'react'
import CommonSection from '../components/UI/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import Orders_ from '../assets/fake-data/Orders_';

const Orders = () => {
  return (
    <Helmet title='Orders'>
      <CommonSection title='Orders' />
      <Orders_ />
    </Helmet>
  )
}

export default Orders