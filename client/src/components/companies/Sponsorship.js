import React, { Component } from "react";

class Sponsorship extends Component {
  render() {
    return (
<div id="details">
  <div className="content">
  <div id="details" className="details, sponsorship">
      <h1>スポンサー企業様</h1>
      <h2>ご提案内容</h2>
      <ul className="title, introduction_ul">
        <li>プラチナスポンサー(1社)1百万円:
          <ul className="intro_ul2">
          <li>公式サイトへのロゴ掲載、ネットワーキングへのご招待</li>
        <li>公式プログラム内での貴社プレゼンテーション動画紹介(3分)</li>
        <li>貴社マーケティング・ブランディング文脈でのコンテンツ共同作成および提供</li>
          </ul>
        </li>
        <li>ゴールドスポンサー(2社)0.5百万円:
          <ul>
          <li>公式サイトへのロゴ掲載、ネットワーキングへのご招待</li>
          <li>貴社マーケティング・ブランディング文脈コンテンツ共同作成および提供</li>
          </ul>
        </li>
        <li>シルバースポンサー(2社)会議室、パーティなどのご提供
          <ul>
          <li>公式サイトへのロゴ掲載、会場でのロゴ掲載、ネットワーキングへのご招待</li>
          </ul>
        </li>
      </ul>

    </div>
  </div>
</div>
    );
  }
}
 
export default Sponsorship;