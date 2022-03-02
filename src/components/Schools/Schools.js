import React from 'react';
import { Fade } from "react-awesome-reveal";
import Header from '../common/Header';
import SchoolInfo from './SchoolInfo';
import SchoolSection from './SchoolSection';
import SchoolCard from './SchoolCard';
export default function Schools() {
    return(
        <div className="">
        <Fade cascade triggerOnce>
            <Header image="/images/saman.jpg" title="ESCUELAS" text="" />
            {/* <SchoolInfo /> */}
            <SchoolSection />
        </Fade>
      </div>
    )
}