window.onload = function() {
  /** canvasの準備 */
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  /** input要素の取得 */
  const input = document.getElementById('file');

  /** くり抜き方の指定 */
  // ctx.beginPath() ;
  // ctx.scale(1,1.5);
  // ctx.arc(100, 100, 80, 0 * Math.PI / 180, 360 * Math.PI / 180);
  // ctx.clip();


  /** inputに画像を追加した時にイベントを受け取る */
  input.addEventListener('change', function(e) {

    /** File オブジェクトを読み込む */
    const file = e.currentTarget.files[0];
    const fr = new FileReader();

    fr.onload = function() {
      /** ファイルが読み込まれたあとの処理 */
      const image = new Image();

      /** 画像がimageタグに読み込まれた後の処理 */
      image.onload = function() {
        ctx.beginPath() ;
        ctx.drawImage(this, 50, 0, 400, 400, 0, 0, 200, 200);
      }
      image.src = fr.result;
    }
    fr.readAsDataURL(file)
  });
};
