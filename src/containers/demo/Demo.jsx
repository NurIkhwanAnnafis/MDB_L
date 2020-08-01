import React, { useEffect } from 'react';

import IndexNavbar from '@components/navbars/IndexNavbar';
import LandingPageHeader from '@components/headers/LandingPageHeader';
import DarkFooter from '@components/footers/DarkFooter';

// sections for this page
import Images from './sections/Images';
import BasicElements from './sections/BasicElements';
import Navbars from './sections/Navbars';
import Tabs from './sections/Tabs';
import Pagination from './sections/Pagination';
import Notifications from './sections/Notifications';
import Typography from './sections/Typography';
import Javascript from './sections/Javascript';
import Carousel from './sections/Carousel';
import NucleoIcons from './sections/NucleoIcons';
import CompleteExamples from './sections/CompleteExamples';
import SignUp from './sections/SignUp';
import Examples from './sections/Examples';
import Download from './sections/Download';

const Home = () => {
  const cleanup = () => {
    document.body.classList.remove('index-page');
    document.body.classList.remove('sidebar-collapse');
  };

  useEffect(() => {
    document.body.classList.add('index-page');
    document.body.classList.add('sidebar-collapse');
    document.documentElement.classList.remove('nav-open');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return cleanup;
  });

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="main">
          <Images />
          <BasicElements />
          <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          <Typography />
          <Javascript />
          <Carousel />
          <NucleoIcons />
          <CompleteExamples />
          <SignUp />
          <Examples />
          <Download />
        </div>
        <DarkFooter />
      </div>
    </>
  );
};

export default Home;
