import * as React from 'react';

import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

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
            verified: true
          },
          {
            img: './GlobalAuction02.png',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true
          },
          {
            img: './GlobalAuction03.png',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true
          },
          {
            img: './GlobalAuction04.png',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin'
          },
          {
            img: './GlobalAuction03.png',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true
          },
          {
            img: './GlobalAuction02.png',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true
          },
          {
            img: './GlobalAuction04.png',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true
          },
          {
            img: './GlobalAuction01.png',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin'
          },
          {
            img: './GlobalAuction01.png',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true
          },
          {
            img: './GlobalAuction02.png',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true
          },
          {
            img: './GlobalAuction03.png',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true
          },
          {
            img: './GlobalAuction04.png',
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin'
          }
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
