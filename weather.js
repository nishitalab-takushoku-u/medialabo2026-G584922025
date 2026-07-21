
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log('1件目の検索結果');
  console.log('経度:'+data.coord.lon);
  console.log('緯度:'+data.coord.lat);
  console.log('天気:'+data.weather[0].description);
  console.log('最低気温:'+data.main.temp_min);
  console.log('最高気温:'+data.main.temp_max);
  console.log('湿度:'+data.main.humidity);
  console.log('風速:'+data.wind.speed);
  console.log('風向:'+data.wind.deg);
  console.log('都市名:'+data.name);
}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let a = document.createElement("div");
  a.setAttribute("ID","result" );
  let body = document.querySelector("body");
  body.insertAdjacentElement('afterend', a);
  let b=document.createElement('ul');
  a.insertAdjacentElement('beforeend', b);   
  let c=document.createElement('li');
  b.insertAdjacentElement('beforeend', c);  
  c.textContent= ('経度:'+data.coord.lon);
  b.insertAdjacentElement('beforeend', c);  
  c=document.createElement('li');
  c.textContent= ('緯度:'+data.coord.lat);
  b.insertAdjacentElement('beforeend', c);  
  c=document.createElement('li');
  c.textContent= ('天気:'+data.weather[0].description);
  b.insertAdjacentElement('beforeend', c);  
  c=document.createElement('li');
  c.textContent= ('最低気温:'+data.main.temp_min);
  b.insertAdjacentElement('beforeend', c);  
  c=document.createElement('li');
  c.textContent= ('最高気温:'+data.main.temp_max);
  b.insertAdjacentElement('beforeend', c);  
  c=document.createElement('li');
  c.textContent= ('湿度:'+data.main.humidity);
  b.insertAdjacentElement('beforeend', c);  
  c=document.createElement('li');
  c.textContent= ('風速:'+data.wind.speed);
  b.insertAdjacentElement('beforeend', c);  
  c=document.createElement('li');
  c.textContent= ('風向:'+data.wind.deg);
  b.insertAdjacentElement('beforeend', c);  
  c=document.createElement('li');
  c.textContent= ('都市名:'+data.name);
  b.insertAdjacentElement('beforeend', c);  
  let d = document.createElement("img");
  d.setAttribute("src","ImageNameHere.png" );
  d.setAttribute("width","300");
  b.insertAdjacentElement('afterend', d);  
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
let b = document.querySelector('#sendRequest');
let count=0;
b.addEventListener('click', sendRequest);
function sendRequest() {        
  let dlt = document.querySelector('#result');    
  if(count===1 ){  
    dlt.remove();   
    count=count-1;
  }  
  let s = document.querySelector("#kunimei");
  let id =s.value;
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+id+'.json';
  axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);
  
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  count=count+1;
  let data = resp.data;
  if (typeof data === 'string') {
        data = JSON.parse(data);
  }
  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること


