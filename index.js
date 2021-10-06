let numbers = [10, 20, 30];
let reduceSum = 0;
let sum = 0;
let sum2 = 0;
for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log('sum', sum);
// forEach
numbers.forEach(function (number) {
    sum2 += number;
});
console.log('sum2', sum2);

// reduce メソッド0は初期値で次に引き継がれる第一引数sumに入る
let sum3 =  numbers.reduce(function (sum, number) {
    return sum + number;
}, 10);
console.log('reduceSum', sum3);

let primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' }
];
// previous前の prev
// accumlator蓄積していくもの　acc
let result =primaryColors.reduce(function (previous, primaryColor) {
     previous.push(primaryColor.color)
    return previous;
},[]);
console.log('result', result);
/**
 * ((()))
 * が均衡がとれているか判定する便利な関数
 * （があったら+1
 * ）があったら-1する
 * 合計値が0になればOK
 */
function balancedParens(string) {
    return !string.split('').reduce(function (previous, char) {
        if(previous<0){return previous}
        if (char === '(') {return previous + 1}
        if(char ===')'){return previous-1}
    },0);
}
console.log('balancedParens', balancedParens(')('));
/**
 * 走行距離の合計を求める
 */
 var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

 var totalDistance =trips.reduce(function(previous,trip){
 
     return previous +trip.distance;
 }, 0);
 var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];
  
  var deskTypes = desks.reduce(function(previous,desk) {
    if(desk.type ==='sitting'){return {sitting:previous.sitting +1,standing:previous.standing}}
    if(desk.type ==='standing'){return {sitting:previous.sitting,standing:previous.standing +1}}
}, { sitting: 0, standing: 0 });
console.log(deskTypes);
var Numbers = [1, 1, 2, 3, 4, 5];
function unique(array) {
    return array.reduce(function(acc, element) {
      var existingElement = acc.find(function(target) {
        return target === element;
      });
   
      if (!existingElement) {
        acc.push(element); 
      }
      
      return acc;
    }, []);
}
console.log(unique(Numbers));
function doubleMessage(number){
    return `${number}を2倍すると${2 * number}になります`;
}
console.log(doubleMessage(2));

function createBookShop(inventory) {
    return {
        inventory,
        inventoryValue() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle (title) {
            return this.inventory.find(book => book.title === title).price;
         }
    };
}
const inventory = [
    { title: 'ハリーポッター', price: 1000 },
    { title: 'JavaScript', price: 1500 }
];
const bookShop = createBookShop(inventory);
console.log('価格', bookShop.inventoryValue());
console.log('pricefortitle', bookShop.priceForTitle('ハリーポッター'));

/**関数のデフォルト引数
 * es5
 * defaultはgetの時
 */
function makeAjaxRequest(url, method) {
    if (!method) {
        method = 'GET';
    }
    // ajaxリクエストをするロジックがここにある想定
    return method;
}
// es6
function makeAjaxRequest(url, method='GET') {
   
    // ajaxリクエストをするロジックがここにある想定
    return method;
}
makeAjaxRequest('google.com',null);
makeAjaxRequest('google.com', 'GET');

/**
 * Promiseとfetch
 * ajaxとpromiseは依存関係ではない
 */
promise = new Promise((resolve, reject) => {
    // 3秒後表示される
    // setTimeout(() => {
    //     resolve();
    // },3000)
    // var request = new XHTMLRequest();
    // // ajaxリクエストをする
    // request.onload = () => {
    //     resolve();
    // }
 });
// 成功
promise
    .then(() => console.log('処理が完了しました'))
    .then(() => console.log('ここも実行されます'))
    .catch(() => console.log('問題発生'))
    
url = "https://jsonplaceholder.typicode.com/posts/";
// 成功はthen
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    // 異常なステータスコード404の場合はthenに入る
    // ネットワーク失敗であればcatch
    .catch(error =>console.log('問題発生',error))