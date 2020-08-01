import React, { useEffect } from 'react';

import IndexNavbar from '@components/navbars/IndexNavbar';
import IndexHeader from '@components/headers/IndexHeader';
import DarkFooter from '@components/footers/DarkFooter';

// sections for this page
import Images from '@components/sections/Images';
import BasicElements from '@components/sections/BasicElements';
import Navbars from '@components/sections/Navbars';
import Tabs from '@components/sections/Tabs';
import Pagination from '@components/sections/Pagination';
import Notifications from '@components/sections/Notifications';
import Typography from '@components/sections/Typography';
import Javascript from '@components/sections/Javascript';
import Carousel from '@components/sections/Carousel';
import NucleoIcons from '@components/sections/NucleoIcons';
import CompleteExamples from '@components/sections/CompleteExamples';
import SignUp from '@components/sections/SignUp';
import Examples from '@components/sections/Examples';
import Download from '@components/sections/Download';

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
        <IndexHeader />
        <div className="main" style={{ height: 700 }} />
        <DarkFooter />
      </div>
    </>
  );
};

export default Home;
