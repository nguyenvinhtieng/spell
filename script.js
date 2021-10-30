words = ['a', 'b', 'c', 'o', 'ơ', 'ô', 'v', 'e', 'ê', 'd', 'đ', 'i', 'k', 'l', 'h', 'ch', 'kh',
    'n', 'm', 'u', 'ư', 'g', 'gh', 'ng', 'ngh', 't', 'th', 'nh', 'r', 'tr', 'ia', 'ua', 'ưa', 'p',
    'ph', 's', 'x', 'qu', 'y', 'gi', 'ao', 'eo'
]

let main = document.querySelector('.list-word')

words.forEach(function(word) {
    let div = document.createElement('div')
    div.className = 'item'
    div.innerHTML = `<div class="word-book">${word}</div>
                    <div class="spell">
                        <audio controls>
                            <source src="./audio/${word}.m4a" type="audio/mpeg">
                        </audio>
                    </div>`
    main.appendChild(div)
})

let btnToggle = document.getElementById('chbToggle')