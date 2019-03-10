import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';

export default props => {
  return (
      <Container>
          <Head>
              <style>
                  @import url('https://fonts.googleapis.com/css?family=Cinzel:400,700');
                  @import url('https://fonts.googleapis.com/css?family=Dancing+Script:400,700');
                  @import url('https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei');
              </style>
              <link
                  rel="stylesheet"
                  href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
              />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>CrowdCoin</title>
          </Head>

          <Header />
          {props.children}
          <style global jsx>{`
            body {
              background: repeating-linear-gradient(
              -55deg,
              #cccccc,
              #cccccc 10px,
              #d9d9d9 10px,
              #d9d9d9 20px
              );
            }
          `}</style>
      </Container>
  );
};