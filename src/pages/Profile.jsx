import React from 'react'
import Profile_ from '../assets/fake-data/Profile_'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'

const Profile = () => {
    return (
        <Helmet title='Profile'>
            <CommonSection title='Profile' />
            <Profile_ />
        </Helmet>
    )
}

export default Profile