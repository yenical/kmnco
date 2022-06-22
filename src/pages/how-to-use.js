import React, { useRef } from 'react';
import * as styles from './about.module.css';

import Layout from '../components/Layout/Layout';
import ThemeLink from '../components/ThemeLink';
import Container from '../components/Container';
import Button from '../components/Button';

const HowToUsePage = (props) => {
  let builtRef = useRef();
  let toolsRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout>
      <div className={styles.root}>
        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(builtRef)} to={'#builtby'}>
            Who built this 
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(toolsRef)} to={'#tools'}>
            Compatible technologies
          </ThemeLink>
        </div>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.content} style={{ paddingTop: '80px' }}>
            <h3>Built By KM and Co.</h3>
            <div id="#builtBy" ref={builtRef}>
              <p>
                This store is proudly brought to you by the team at{' '}
                <Button target={true} href="https://kmnco.com/">
                  Matter Design & Digital
                </Button>{' '}
                (Matter.).
              </p>
              <p>
                The KM and Co is built for as an ecommerce theme
                suitable for adverstisement of product. This can be used with any
                ecommerce platform that support a headless architecture.
              </p>
              <Button target={true} href="https://jamm.matter.design/">
                Read more about KM and Co.
              </Button>
              <img
                alt={'KMNCO Detail'}
                src={'/how-to-use/jamm-sydney-1upd@2x.png'}
                style={{ display: 'block', height: 'auto' }}
              />
            </div>
            <h3>Best of Breed Tools</h3>
            <div id={'#tools'} ref={toolsRef}>
              <p>
                Headless architecture enables Composable Commerce. What this
                means is that you can ‘compose’ a suite of best of breed tools
                together to create an agile ecommerce system. This approach is
                the opposite end of the spectrum from a traditional ‘Monolithic’
                architecture where all the functionality and data comes from one
                source.
              </p>
              <p>
                Why go with Composable Commerce? History has shown, technology
                innovation comes from new specialised solutions that find better
                ways to do things. By creating an architecture that taps into
                this innovation, you are getting a system that is innovating
                faster than monolithic solutions giving you a competitive
                advantage.
              </p>
              <p>
                KMNCO. has been innovating since 2022, and we have aligned with
                companies that do it best. The following technologies are either
                currently available or are on our roadmap for KMNCO.™.
              </p>

              <strong>Ecommerce:</strong>
              <ul>
                <li>BigCommerce</li>
                <li>VTEX (roadmap)</li>
                <li>Commercetools (roadmap)</li>
              </ul>

              <strong>Content Management Systems (CMS):</strong>
              <ul>
                <li>Contentful</li>
                <li>WordPress</li>
                <li>Sanity</li>
                <li>Builder.io</li>
              </ul>

              <strong>Advanced Search:</strong>
              <ul>
                <li>Algolia</li>
                <li>Searchspring (roadmap)</li>
                <li>XO (roadmap)</li>
                <li>Syte (roadmap)</li>
              </ul>

              <strong>Product Information Management (PIM):</strong>
              <ul>
                <li>Akeneo</li>
              </ul>

              <strong>Marketing Automation:</strong>
              <ul>
                <li>Klaviyo</li>
                <li>Ortto</li>
                <li>Dot Digital</li>
                <li>Omnisend</li>
              </ul>

              <strong>Customer Support:</strong>
              <ul>
                <li>Gorgias</li>
                <li>Zendesk</li>
              </ul>

              <strong>Reviews and User Generated Content:</strong>
              <ul>
                <li>Yotpo</li>
                <li>Trustpilot</li>
                <li>Reviews.io</li>
              </ul>

              <strong>Physical Locations:</strong>
              <ul>
                <li>Localisr.io</li>
              </ul>

              <p>
                Our team are fanatical about site speed and the agility of a
                composable commerce approach. If you need help to setup a
                Headless architecture, we’d love to hear from you.
              </p>

              <p>
                <Button
                  target={true}
                  href="https://www.matterdesign.com.au/contact/"
                >
                  Contact the team at Matter.
                </Button>
              </p>
            </div>
          </div>
        </Container>
        <div className={styles.imageContainer}>
          <img
            alt={'Best of Breed tools'}
            src={'/how-to-use/logos@2x.png'}
          ></img>
        </div>
      </div>
    </Layout>
  );
};

export default HowToUsePage;
