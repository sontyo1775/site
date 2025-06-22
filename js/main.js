// イメージオブジェクト
const imagesObj = [
    {
        'id': '1',
        'city': '福岡市東区',
        'detail': '【福岡限定 箱崎駅前公園】平日ランチ',
        'image': '1820044_s.jpg', 
    },
    {
        'id': '2',
        'city': '福岡市西区',
        'detail': '【今宿】平日ランチ',
        'image': '3523387_s.jpg', 
    },
    {
        'id': '3',
        'city': '福岡市西区',
        'detail': '【下山門】平日ランチ',
        'image': '24415419_s.jpg', 
    },
    {
        'id': '4',
        'city': '福岡市南区',
        'detail': '【長尾】平日ランチ',
        'image': '25498666_s.jpg', 
    },
    {
        'id': '5',
        'city': '福岡市博多区',
        'detail': '【呉服町商業ビルセンター前】平日ランチ',
        'image': '28444681_s.jpg', 
    },
    {
        'id': '6',
        'city': '福岡市中央区',
        'detail': '【今泉】平日ランチ',
        'image': '28794127_s.jpg', 
    },
];
const test = document.querySelector('#test');
console.log(test);

imagesObj.forEach(function(obj){

    let id = obj.id;
    let city = obj.city;
    let detail = obj.detail;
    let image = obj.image;

    let result = templateImages(id,city,detail,image);
    test.appendChild(result);
})


// Add イメージコンテナ 20250623 
function templateImages(id,city,detail,image){
    const wrapper = document.createElement('div');

    wrapper.innerHTML = 
    `<div class="mt-5">
        <div class="card" style="width: 18rem;">
        <img src="./images/${image}" class="card-img-top img-fixed" alt="...">
        <div class="card-body">
            <h5 class="card-title">${city}</h5>
            <p class="card-text">${detail}</p>
            <a href="#" class="btn btn-color">Go somewhere</a>
        </div>
        </div>
    </div>`;

    return wrapper.firstElementChild; 
}


