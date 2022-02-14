import React from 'react';
import '../../App.css';
import HeroSchools from '../HeroSchools';
import SchoolSection from '../SchoolSection';
import SchoolInfo from '../SchoolInfo';

function Schools() {
    return (
        <>
            <HeroSchools />
            <SchoolInfo />
            <SchoolSection />

        </>
    )
}

export default Schools;