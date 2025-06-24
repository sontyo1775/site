import { Aria } from './aria.js';

// イメージオブジェクト
const imagesObj = [
    {
        'id': '1',
        'city': '福岡市東区',
        'title': '【福岡限定 箱崎駅前公園】平日ランチ',
        'image': '1820044_s.jpg', 
        'detail': 'testtestestestestetesttesaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaawttestestestestetesttesttestestestestetesttesttestestestestetesttesttestestestestetest',
        'connection': '公園,ランチ,駅前',
    },
    {
        'id': '2',
        'city': '福岡市西区',
        'title': '【今宿】平日ランチ',
        'image': '3523387_s.jpg', 
        'detail': 'testtestestestettttttttttttaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaattttttttttttttstetesttesttestestestestetesttesttestestestestetesttesttestestestestetesttesttestestestestetest',
        'connection': 'ランチ,学校・専門学校',
    },
    {
        'id': '3',
        'city': '福岡市西区',
        'title': '【下山門】平日ランチ',
        'image': '24415419_s.jpg', 
        'detail': 'testtestestestestetestfffffffffffffffffffftesttestestestestetesttesttestestestestetesttesttestestestestetesttesttestestestestetest',
        'connection': '団地,ランチ',
    },
    {
        'id': '4',
        'city': '福岡市南区',
        'title': '【長尾】平日ランチ',
        'image': '25498666_s.jpg', 
        'detail': 'testtestestestestetesttesttestestestestetesttesgsfgsgsgsfdfgsfgsgsttestestestestetesttesttestestestestetesttesttestestestestetest',
        'connection': '公園,ランチ',
    },
    {
        'id': '5',
        'city': '福岡市博多区',
        'title': '【呉服町商業ビルセンター前】平日ランチ',
        'image': '28444681_s.jpg', 
        'detail': 'testtestestestestetesttesttestestestestetesttesttestestestesgsfdgsgstfffffffffffffffffffffffetesttesttestestestestetesttesttestestestestetest',
        'connection': '公園,自治体',
    },
    {
        'id': '6',
        'city': '福岡市中央区',
        'title': '【今泉】平日ランチ',
        'image': '28794127_s.jpg', 
        'detail': 'testtestestestestetesttesttestestestestetesttesttestestessfda4444444444444444444444444srtestetesttesttestestestestetesttesttestestestestetest',
        'connection': '公園,駅前,ランチ',
    },
];
const imageContainer = document.querySelector('#image-container');

imagesObj.forEach(function(obj){

    let id = obj.id;
    let city = obj.city;
    let title = obj.title;
    let image = obj.image;
    let detail = obj.detail;
    let connection = obj.connection;

    // 詳細が文字列１００文字制限
    detail = detail.substring(0,100) + '...';
    // 関連ボタン
    let connectionArry = [];
    connectionArry= connection.split(",");

    let result = templateImages(id,city,title,image,detail,connectionArry);
    imageContainer.appendChild(result);
})


// ドロップダウン処理
let aria = new Aria();
aria.cityDropdown();
aria.cityClick();

// Add イメージコンテナ 20250623 
function templateImages(id,city,title,image,detail,connectionArry){
    const wrapper = document.createElement('div');
    let connectionBtn = "";

    connectionArry.forEach(function(connection){
        connectionBtn += `<button class="btn btn-color">#${connection}</button>`;
    });
    // console.log(connectionBtn);

    wrapper.innerHTML = 
    `<div class="mt-5">
        <div class="card" style="width: 18rem;">
        <img src="./images/${image}" class="card-img-top img-fixed" alt="...">
        <div class="card-body">
            <h5 class="card-title">${city}</h5>
            <a href=""><p class="card-text">${title}</p></a>
            <p class="card-text">${detail}</p>
            ${connectionBtn}
        </div>
        </div>
    </div>`;

    return wrapper.firstElementChild; 
}


