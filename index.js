var ad = document.querySelector('#username')
var mesaj = document.querySelector('textarea')
var box = document.querySelector('.message')
const firebaseConfig = {
    apiKey: "AIzaSyCHRVLlUJCxidTIsWY6-BJyKoo_sZb9Z5Y",
    authDomain: "chat-e360c.firebaseapp.com",
    projectId: "chat-e360c",
    storageBucket: "chat-e360c.appspot.com",
    messagingSenderId: "841297667340",
    appId: "1:841297667340:web:d77772552edb17d7549529"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.database().ref()

var users = [
    {
        ad: "faiq",
        parol: "123"
    },
    {
        ad: "cavid",
        parol: "tenbel123"
    },
    {
        ad: 'ibrahim',
        parol: 'yuxunsirin'
    }
]
$('#enter').on('click', function () {
    let ad = $('#username').val()
    let sifre = $('#password').val()
    for (let i = 0; i < users.length; i++) {
        if (users[i].ad == ad && users[i].parol == sifre) {
            $('.login').fadeOut(1000)
            $('.message').fadeIn(2000)
        }
    }
    main.style.display = 'none'
    box.style.display = 'flex'
    box.style.justifyContent = 'center'
    box.style.alignItems = 'center'
    box.style.flexDirection = 'column'
})
$('#send').on('click', function () {
    db.set({
        ad: ad.value,
        message: mesaj.value
    })
})
db.on('value', function (snapshot) {
    let z = snapshot.val()
    let p = $('<p>');
    p.text(`${z.ad} : ${z.message}`)
    $('.message-box').append(p)
})


$('i').on('click', function () {

    $.ajax({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?api_key=2YcO2EhVntcDJ2daIxPZ3lyYF5Z4vuSF&q=cat&limit=25&offset=0&rating=g&lang=en`

    }).then(function (response) {
        for(let i=0;i<response.data.length;i++)
        {
            var img=document.createElement('img')
            img.setAttribute('src',response.data[i].images.fixed_height.url)
            $('.message-box').append(img)
        }
        // var yeniImg = document.createElement('img')
        // yeniImg.setAttribute('src', response.data.images.fixed_height.url)
        // console.log(response.data.images.fixed_height.url)
        // var yeniDiv = document.createElement('div')
        // yeniDiv.setAttribute('class', 'sticker-box')
        // $('.sticker-box').append('.message-box')

    }).catch(function (err) {
        console.log('system error: ' + err)

    })
})
