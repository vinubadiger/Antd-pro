import React, { PureComponent } from "react";
import { connect } from "dva";
import { Card, Button, Icon, List } from "antd";
//import GlobalHeader from '@/components/GlobalHeader'
import Ellipsis from "@/components/Ellipsis";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";

import styles from "./landingpage.less";

@connect(({ list, loading }) => ({
  list,
  loading: loading.models.list
}))
class landingPage extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "list/fetch",
      payload: {
        count: 8
      }
    });
  }

  render() {
    const {
      list: { list },
      loading
    } = this.props;

    const content = (
      <div className={styles.pageHeaderContent}>
        <div className={styles.contentLink}>
          <a>
            <img
              alt=""
              src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
            />{" "}
            Support
          </a>
          <a>
            <img
              alt=""
              src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
            />{" "}
            Documentaion
          </a>
          <a>
            <img
              alt=""
              src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
            />{" "}
            Learnmore
          </a>
          <br />
          <p>
            <br />
            Recent Projects
          </p>
        </div>
      </div>
    );

    const extraContent = (
      <div className={styles.extraImg}>
        <img
          alt="Card-img"
          src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
        />
      </div>
    );

    return (
      <PageHeaderWrapper
        title="Welcome to Opus"
        content={content}
        extraContent={extraContent}
      >
        <div className={styles.cardList}>
          <List
            rowKey="id"
            loading={loading}
            grid={{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }}
            dataSource={["", ...list]}
            renderItem={item =>
              item ? (
                <List.Item key={item.id}>
                  <Card
                    hoverable
                    className={styles.card}
                    actions={[<a>Open</a>, <a>Edit</a>]}
                  >
                    <Card.Meta
                      avatar={
                        <img
                          alt=""
                          className={styles.cardAvatar}
                          src={item.avatar}
                        />
                      }
                      title={<a>{item.title}</a>}
                      description={
                        <Ellipsis className={styles.item} lines={3} />
                      }
                    />
                  </Card>
                </List.Item>
              ) : (
                <List.Item>
                  <Button type="dashed" className={styles.newButton}>
                    <Icon type="plus" /> New Project
                  </Button>
                </List.Item>
              )
            }
          />
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default landingPage;

// export default () => {
//     return <div>New Page</div>
//   };
