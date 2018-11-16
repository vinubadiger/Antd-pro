import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: '',
          title: '',
          href: '',
          blankTarget: true,
        },
        {
          key: '',
          title:'' ,
          href: '',
          blankTarget: true,
        },
        {
          key: '',
          title: '',
          href: '',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> 2018  Opus Solutions 
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
