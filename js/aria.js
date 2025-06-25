export class Aria {
    //九州エリア
    areas = [
    { id: '1', city: '福岡県' },
    { id: '2', city: '佐賀県' },
    { id: '3', city: '長崎県' },
    { id: '4', city: '熊本県' },
    { id: '5', city: '大分県' },
    { id: '6', city: '宮崎県' },
    { id: '7', city: '鹿児島県' }
    ];

    // 九州市町村
    Kyushu = [
    {
        id: '1',
        prefecture: '福岡県',
    towns: [
            // 市
            '福岡市', '北九州市', '大牟田市', '久留米市', '直方市',
            '飯塚市', '田川市', '柳川市', '八女市', '筑後市',
            '筑紫野市', '春日市', '大野城市', '宗像市', '太宰府市',
            '古賀市', '福津市', 'うきは市', '筑後市', '中間市',
            '小郡市', 'みやま市', '宮若市', '嘉麻市', '行橋市',
            '豊前市', '朝倉市', '糸島市', '那珂川市',
            // 町村
            '赤村', '芦屋町', '糸田町', '宇美町', '大木町', '大任町',
            '岡垣町', '遠賀町', '粕屋町', '川崎町', '香春町',
            '鞍手町', '桂川町', '上毛町', '小竹町', '篠栗町',
            '志免町', '須恵町', '新宮町', '久山町', '広川町',
            '東峰村', '水巻町', '福智町', 'みやこ町', '吉富町'
        ]
    },
    {
        id: '2',
        prefecture: '佐賀県',
        towns: [
        '佐賀市', '唐津市', '鳥栖市', '多久市', '伊万里市',
        '武雄市', '鹿島市', '小城市', '嬉野市', '神埼市',
        // 町村（一部）
        '吉野ヶ里町', '基山町', '上峰町', 'みやき町', '玄海町',
        '有田町', '大町町', '江北町', '白石町', '太良町'
        ]
    },
    {
        id: '3',
        prefecture: '長崎県',
        towns: [
        '長崎市', '佐世保市', '島原市', '諫早市', '大村市',
        '平戸市', '松浦市', '対馬市', '壱岐市', '五島市',
        '西海市', '雲仙市', '南島原市',
        '長与町', '時津町', '東彼杵町', '川棚町', '波佐見町',
        '小値賀町', '佐々町', '新上五島町'
        ]
    },
    {
        id: '4',
        prefecture: '熊本県',
        towns: [
        '熊本市', '八代市', '人吉市', '荒尾市', '水俣市',
        '玉名市', '山鹿市', '菊池市', '宇土市', '上天草市',
        '宇城市', '阿蘇市', '天草市', '合志市',
        '美里町', '玉東町', '南関町', '長洲町', '和水町',
        '大津町', '菊陽町', '南小国町', '小国町', '産山村',
        '高森町', '西原村', '南阿蘇村', '御船町',
        '嘉島町', '益城町', '甲佐町', '山都町', '氷川町',
        '芦北町', '津奈木町', '錦町', '多良木町', '湯前町',
        '水上村', '相良村', '五木村', '山江村', '球磨村',
        'あさぎり町', '苓北町'
        ]
    },
    {
        id: '5',
        prefecture: '大分県',
        towns: [
        '大分市', '別府市', '中津市', '佐伯市', '日田市',
        '宇佐市', '臼杵市', '豊後大野市', '由布市',
        '国東市', '竹田市', '津久見市'
        ]
    },
    {
        id: '6',
        prefecture: '宮崎県',
        towns: [
        '宮崎市', '都城市', '延岡市', '日向市', '日南市',
        '小林市', '西都市', 'えびの市',
        ]
    },
    {
        id: '7',
        prefecture: '鹿児島県',
        towns: [
        '鹿児島市', '霧島市', '鹿屋市', '薩摩川内市',
        '出水市', '日置市', '奄美市', '指宿市',
        ]
    }
    ];
    
    // 九州　ドロップダウン表示
    cityDropdown() {
        const ariaDorpdown = document.querySelector('#area-dropdown');
        let areaList = '';
        let tag = document.createElement('div');

        this.areas.forEach(element => {
            areaList += ` <li><a class="dropdown-item" href="#">${element.city}</a></li>`;
        });

        tag.innerHTML = areaList;
        ariaDorpdown.appendChild(tag);
    }

    // 九州　ドロップダウンクリック処理
    cityClick() {
        const areaText = document.querySelector('#area-text');
        const ariaDorpdown = document.querySelector('#area-dropdown');
        const townText = document.querySelector('#town-text');
        const townDoropdown = document.querySelector('#town-dropdown');
        let kyusyus = this.Kyushu;
        let townFlg = false;

        // 九州エリアボタン
        if(ariaDorpdown){
            ariaDorpdown.addEventListener('click', function(event){
                townText.textContent = '市町村';
                areaText.textContent = event.target.textContent;    
                townText.disabled = false;
                // 市町村ボタンプルタウン表示処理
                let townList = townDropdown(kyusyus, event.target.textContent);
                townDoropdown.innerHTML = townList;
            })

        }

        // 市町村ボタンクリック処理
        if(townDoropdown){
            townDoropdown.addEventListener('click', function(event){
                townText.textContent = event.target.textContent; 
            });
        }

        // 市町村　プルダウン表示処理
        function townDropdown(kyusyus, city){

            let towns = [];
            let townList = '';

            kyusyus.forEach(function(kyusyu){

                if(kyusyu.prefecture == city){
                    towns = kyusyu.towns;
                    
                    return;
                }
            });

            towns.forEach(town => {
                townList += ` <li><a class="dropdown-item" href="#">${town}</a></li>`;
            });

            return townList;
        }
    }

}

