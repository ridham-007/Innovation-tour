import React, { Component } from "react";

class ProposedAgenda extends Component {
  render() {
    return (
<div id="details">
<div className="content">
  <div id="details" className="details, poposed_agenda">
      <h1>訪問企業様</h1>
      <h2>ご提案内容</h2>
      <ul className="title, introduction_ul">
        <li>参加者の関心
          <ul>
          <li>大企業：テクノロジーが変える未来への学び、Innovationに取り組む活動への興味、Leadershipを発揮する経営者との対話</li>
          <li>Startup:起業家としてInnovationに取り組むビジネスからの学び、経営者との対話</li>
          </ul>
        </li>
        <li>メイン訪問企業4社
          <ul>
          <li>20名程度のグループが貴社と2時間のプログラムを行います。貴社の活動に関する資料を事前に配布します。その資料には貴社のInnovationへの取り組みの紹介と同時に課題などを含みます。参加者はそれらの資料に基づき各国の実例などを調査の上プログラムに臨みます。</li>
          <li>プログラムの内容は貴社のご要望に沿って設定させて頂きます。</li>
          </ul>
        </li>
        <li>プレゼンテーション企業4社
          <ul>
          <li>公式プログラムの前後、朝食時間などで30分程度の時間でプレゼンテーションとＱＡを行います。参加者に事前に資料提供を行うことも可能です。</li>
          </ul>
        </li>
        <li>コンテンツ提供企業4社
          <ul>
          <li>公式プログラムの前後、朝食時間などで5分程度の時間でプレゼンテーションを行います。参加者に事前に資料提供を行うことも可能です。</li>
          </ul>
        </li>
      </ul>

    </div>
  </div>
</div>
    );
  }
}
 
export default ProposedAgenda;