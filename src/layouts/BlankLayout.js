import React, { Fragment } from 'react';
import { formatMessage } from 'umi/locale';
import Link from 'umi/link';
import { Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';
//import SelectLang from "@/components/SelectLang";
import styles from './BlankLayout.less';
import logo from '../assets/logo.svg';
import HeaderView from './Header';

// const links = [
//   {
//     key: "help",
//     title: formatMessage({ id: "layout.user.link.help" }),
//     href: ""
//   },
//   {
//     key: "privacy",
//     title: formatMessage({ id: "layout.user.link.privacy" }),
//     href: ""
//   },
//   {
//     key: "terms",
//     title: formatMessage({ id: "layout.user.link.terms" }),
//     href: ""
//   }
// ];

const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2018 Opus Consulting
  </Fragment>
);

class BlankLayout extends React.PureComponent {
  // @TODO title
  // getPageTitle() {
  //   const { routerData, location } = this.props;
  //   const { pathname } = location;
  //   let title = 'Ant Design Pro';
  //   if (routerData[pathname] && routerData[pathname].name) {
  //     title = `${routerData[pathname].name} - Ant Design Pro`;
  //   }
  //   return title;
  // }

  render() {
    const { children } = this.props;
    return (
      // @TODO <DocumentTitle title={this.getPageTitle()}>
      <div className={styles.container}>
        <HeaderView />
        <div className={styles.content}>{children}</div>
        <GlobalFooter copyright={copyright} />
      </div>
    );
  }
}

export default BlankLayout;

// import React from 'react';

// export default props => <div {...props} />;
