import CheckAccounts from 'components/CheckAccounts/CheckAccounts';
import Colors from 'components/Colors/Colors';
import Faq from 'components/Faq/Faq';
import Footer from 'components/Footer/Footer';
import GlobalAuction from 'components/GlobalAuction/GlobalAuction';
import GreetingsFromOgs from 'components/GreetingsFromOgs/GreetingsFromOgs';
import Header from 'components/Header/Header';
import Immortalize from 'components/Immortalize/Immortalize';
import LivingArt from 'components/LivingArt/LivingArt';
import MenuMobile from 'components/MenuMobile/MenuMobile';
import Minting from 'components/Minting/Minting';
import Roadmap from 'components/Roadmap/Roadmap';
import StarsSlider from 'components/StarsSlider/StarsSlider';
import Tokenomics from 'components/Tokenomics/Tokenomics';
import Top from 'components/Top/Top';
import WeBelieve from 'components/WeBelieve/WeBelieve';
import * as React from 'react';

export const Home: React.FunctionComponent = () => {
  return (
    <div className="wrapper">
      <Header />

      <Top />

      <StarsSlider />

      <WeBelieve />

      <GreetingsFromOgs />

      <LivingArt />

      <Colors />

      <Tokenomics />

      <Immortalize />

      <GlobalAuction
        items={[
          {
            img: './GlobalAuction01.png',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: './GlobalAuction02.png',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: './GlobalAuction03.png',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: './GlobalAuction04.png',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
          },
          {
            img: './GlobalAuction03.png',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: './GlobalAuction02.png',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: './GlobalAuction04.png',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: './GlobalAuction01.png',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
          },
          {
            img: './GlobalAuction01.png',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: './GlobalAuction02.png',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: './GlobalAuction03.png',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: './GlobalAuction04.png',
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
