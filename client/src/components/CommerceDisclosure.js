import React from "react";

export default function CommerceDisclosure() {
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <h2 style={{ textAlign: "center" }}> 特定商取引法に基づく表記 (Commerce Disclosure)</h2>
      <table class="styled-table">
        <thead>
          <tr>
            <th>Item</th>
            <th></th>
            <th>項目</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Legal Name</td>
            <td>Chika Uchimura</td>
            <td>事業者名</td>
            <td>内村千佳</td>
          </tr>
          <tr>
            <td>Head of operation</td>
            <td>Chika Uchimura</td>
            <td>事業者名</td>
            <td>内村千佳</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>2-3-10-203 Denenchofu Ota-ku, Tokyo, Japan
              145-0071</td>
            <td>所在地</td>
            <td>145-0071 東京都大田区田園調布2-3-10-203</td>
          </tr><tr>
            <td>Phone number</td>
            <td>+81-80-5927-9540</td>
            <td>電話番号</td>
            <td>080-5927-9540</td>
          </tr><tr>
            <td>Mail address</td>
            <td><a style={{ texDecoration: "underline"}}>kimurchi@gmail.com</a></td>
            <td>メールアドレス</td>
            <td><a style={{ texDecoration: "underline" }}>kimurchi@gmail.com</a></td>
          </tr><tr>
            <td>Accepted payment methods</td>
            <td>Credit cards or via local bank transfer</td>
            <td>お支払い方法</td>
            <td>クレジットカード決算、または銀行振込（お支払いは前払いとなります)</td>
          </tr><tr>
            <td>Additional fees</td>
            <td>Credit card fee is
              included in the
              price.</td>
            <td>商品以外の必要代金</td>
            <td>銀行振込の場合 ー振込手数料、クレジット決算の場合ーすべての表示価格に決算手数料が含まれております</td>
          </tr><tr>
            <td>Price</td>
            <td>Amounts listed on each product page(including consumption tax)</td>
            <td>販売価格</td>
            <td>ページに記載の金額（税込み</td>
          </tr><tr>
            <td>Payment Periode</td>
            <td>Credit card payments are processed immediately, while local bank transfers must be sent within 3 days of the date of order.</td>
            <td>決済期間</td>
            <td>クレジットカード決済の場合はただちに処理されますが、国内の銀行振込の場合は注文から 3 日以内にお振り込みいただく必要があります.</td>
          </tr><tr>
            <td>Delivery times</td>
            <td>Not applicable (this is not product and one time service during the event)</td>
            <td>引き渡し時期</td>
            <td>該当しない（イベントをコーディネートするサービスのため商品の引き渡しは発生しない)</td>
          </tr><tr>
            <td>Exchanges & Returns Policy</td>
            <td> We do not accept returns or exchanges after payment.</td>
            <td></td>
            <td>決済後の返品、返金、交換はお受けすることが出来ません。</td>
          </tr><tr>
            <td>Cancellation policy</td>
            <td>Please contact by email for the cancellation. However, all deposit paid by you are nonrefundable.</td>
            <td>キャンセル</td>
            <td>キャンセルについてはEmailにてご連絡ください.お申込み後、お客様のご都合によってキャンセルされた場合、返金対応はいたしかねます。あらかじめご了承ください.</td>
          </tr><tr>
            <td>Products</td>
            <td>Event coordination (including logistics support,  provide a list of hotel recommendation restaurant reservation, entertainment activities booking etc.)</td>
            <td>取扱商品</td>
            <td>イベントコーディネート（ロジスティクスサポート、推奨ホテルリストの提供、レストラン予約、日本での文化体験、レジャーアクティビティの予約代行</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
