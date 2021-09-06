import * as React from 'react';

import Header from 'components/Header/Header';
import Top from 'components/Top/Top';
import WeBelieve from 'components/WeBelieve/WeBelieve';
import GreetingsFromOgs from 'components/GreetingsFromOgs/GreetingsFromOgs';
import LivingArt from 'components/LivingArt/LivingArt';
import Colors from 'components/Colors/Colors';
import Tokenomics from 'components/Tokenomics/Tokenomics';
import Immortalize from 'components/Immortalize/Immortalize';
import GlobalAuction from 'components/GlobalAuction/GlobalAuction';
import Minting from 'components/Minting/Minting';
import CheckAccounts from 'components/CheckAccounts/CheckAccounts';
import Faq from 'components/Faq/Faq';
import Roadmap from 'components/Roadmap/Roadmap';
import Footer from 'components/Footer/Footer';
import MenuMobile from 'components/MenuMobile/MenuMobile';
import StarsSlider from 'components/StarsSlider/StarsSlider';

export const Home: React.FunctionComponent = () => {
  return (
    <div className="wrapper">
      <Header />
      <Top />
      <StarsSlider />
      <WeBelieve />
      <GreetingsFromOgs />
      <LivingArt />
      {/* <Colors /> */}
      <Tokenomics />
      <Immortalize />
      <GlobalAuction
        items={[
          {
            img: '/cr/paloma3.jpg',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: '/cr/iVitalik.jpg',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: '/cr/iVignesh.jpg',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: '/cr/itrevor.png',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
          },
          {
            img: '/cr/iSam.jpg',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: '/cr/iPranksy.jpg',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: '/cr/iJustin.jpg',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: '/cr/iGary.jpg',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
          },
          {
            img: '/cr/ifewocious.png',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: '/cr/iDH.jpg',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: '/cr/iCZ.jpg',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: '/cr/iblake.jpg',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
          },
        ]}
      />
      <Minting />
      <Roadmap />
      <CheckAccounts />
      <Faq />
      <Footer />
      <MenuMobile />
    </div>
  );
};

export default Home;
