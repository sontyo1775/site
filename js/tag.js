export class Tag {
    tags = [
        '公園',
        'ランチ',
        '駅前',
        '団地',
        '駅前',
        '学校・専門学校',
        'バス',
        '体育館',
        '海',
        '山',
        '川'
    ];

    // タグ　ドロップダウンリスト
    tagList(){
        let tags = this.tags;
        let tagList = '';
        let tagDropdown = document.querySelector('#tag-dropdown');
        let tagText = document.querySelector('#tag-text');
        let tagFlg = false;

        tags.forEach(function(tag){
            tagList += ` <li><a class="dropdown-item" href="#">${tag}</a></li>`;
        })

        tagDropdown.innerHTML = tagList;

        // タグの内容に置き換える
        tagDropdown.addEventListener('click', function(event){
            tagText.textContent = event.target.textContent;
        })
    }
}