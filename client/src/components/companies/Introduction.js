import React, { Component } from "react";

class Introduction extends Component {
  render() {
    return (
      <div id="details">
        <div className="content">
          <div id="details" className="details">
            <h1>Introduction</h1>
            <h2>ご挨拶</h2>
            <p className="title">
              我々は第2回InnovationTourを東京において開催することとなりました。
              <br />
              Stanford大学LEADプログラム卒業生約4,500名の中から80名のLeadersが本年9月28日から30日までの3日間、InnovationとLeadershipを体感するために東京に集まります。
              <br />
              我々は日本のInnovationとLeadershipをプレゼンテーションする活動をスポンサー企業様、訪問企業様を募集しております。
              <br />
              この活動へのスポンサード等は貴社のグローバルマーケティングおよびブランディングの一環として大きな価値を持つと思われます。
              <br />
              皆さまの積極的なご支援をお待ち申し上げております。
            </p>
            <p>
              2023年4月<br></br>
              Stanford LEADers<br></br>
              2023日本Innovation Tour準備委員会
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
