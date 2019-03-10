import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
      <Menu style={{ marginTop: '10px' }}>
          <Link route="/"><a className="item logo">CrowdCoin</a></Link>
          <Menu.Menu position="right">
              <Link route="/"><a className="item btns_header">Campaigns</a></Link>
              <Link route="/campaigns/new"><a className="item">+</a></Link>
          </Menu.Menu>
          <style jsx>{`
              .logo {
                font-family: 'Cinzel', serif;
                font-size: 20px;
                padding: 12px;
              }

              .btns_header {
                font-family: 'ZCOOL XiaoWei', serif;
                padding: 7px;
                font-size: 18px;
              }
          `}</style>
      </Menu>
  );
};