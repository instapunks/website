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

import Img1 from 'assets/images/punks/Img1.png';
import Img2 from 'assets/images/punks/Img2.png';
import Img3 from 'assets/images/punks/Img3.png';
import Img4 from 'assets/images/punks/Img4.png';
import Img5 from 'assets/images/punks/Img5.png';
import Img6 from 'assets/images/punks/Img6.png';
import Img7 from 'assets/images/punks/Img7.png';
import Img8 from 'assets/images/punks/Img8.png';
import Img9 from 'assets/images/punks/Img9.png';
import Img10 from 'assets/images/punks/Img10.png';
import Img11 from 'assets/images/punks/Img11.png';
import Img12 from 'assets/images/punks/Img12.png';
import Img13 from 'assets/images/punks/Img13.png';

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
            img: Img1.src,
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: Img2.src,
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: Img3.src,
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: Img4.src,
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
          },
          {
            img: Img5.src,
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: Img6.src,
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: Img7.src,
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: Img8.src,
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
          },
          {
            img: Img9.src,
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: Img10.src,
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: Img11.src,
            name: 'Vitalik Buterin',
            nickname: '@vitalik_buterin',
            verified: true,
          },
          {
            img: Img12.src,
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
