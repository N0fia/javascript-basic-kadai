// タイムゾーンを日本に設定する
const JST_OFFSET = 9 * 60;

// 日本時間の現在日時を取得する関数
function getCurrentDateInJapan() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
  const jst = new Date(utc + (JST_OFFSET * 60 * 1000));

  // 日付をフォーマットする
  const year = jst.getFullYear();
  const month = String(jst.getMonth() + 1).padStart(2, '0');
  const day = String(jst.getDate()).padStart(2, '0');

  return `${year}年${month}月${day}日`;
}

// コンソールに出力する
console.log(getCurrentDateInJapan());