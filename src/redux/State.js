
let state = {
    profile: {
        post: [
            {
                id: 1, avatar: 'https://zbyhoo.files.wordpress.com/2011/07/me_pixel_bright_bg.png?w=584',
                name: 'Artush',
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quae suscipit deleniti molestias illo! Perferendis distinctio pariatur quas autem nihil.',
                like: 12
            },
            {
                id: 2, avatar: 'https://cdn0.iconfinder.com/data/icons/japan-fill-outline/512/Avatar-japan-people-samurai-warrior-512.png',
                name: 'ナ住橋ユ',
                content: 'ムレ弱改フヨス波府かばぼ意送でぼ調掲察たス日西重ケアナ住橋ユムミク順待ふかんぼ人奨貯鏡すびそ',
                like: 1
            },
            {
                id: 3,
                avatar: 'https://www.spletnik.ru/thumb/310x310/img/persons/Eminem-post.jpg',
                name: 'Eminem',
                content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quae suscipit deleniti molestias illo! Perferendis distinctio pariatur quas autem nihil.Aut quae suscipit deleniti molestias illo! Aut quae suscipit deleniti molestias illo! ',
                like: 10
            },
            {
                id: 4,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYHlYk5OZwPplU5Gra-NXSZQef1R3OAb7Z9A&usqp=CAU',
                name: 'Ջիվան Գասպարյան',
                content: 'լոռեմ իպսում դոլոռ սիթ ամեթ, ին ֆուգիթ ածծուսամուս ծոմպռեհենսամ վել, քուո մելիոռե մոդեռաթիուս եա. եա իդքուե ալթեռա սիգնիֆեռումքուե մել. սալե ոմնիս պռո եու, եու ալիքուիդ պեթենթիում իուս. քուաս լաբոռես սեդ ծու, թե ուբիքուե դեբիթիս ֆուիսսեթ ուսու, եում ադ ոռնաթուս եֆֆիծիենդի. եում ան դիսսենթիունթ դիսպութաթիոնի. պեռ հենդռեռիթ լիբեռավիսսե եի, թե գռաեծո մենանդռի հաս.',
                like: 122
            },
            {
                id: 5,
                avatar: 'https://smmis.ru/wp-content/uploads/2015/01/ava.jpg',
                name: 'Ջալթեռա',
                content: 'թե ուբիքուե դեբիթիս ֆուիսսեթ ուսու, եում ադ ոռնաթուս եֆֆիծիենդի. եում ան դիսսենթիունթ դիսպութաթիոնի. պեռ հենդռեռիթ լիբեռավիսսե եի, թե գռաեծո մենանդռի հաս.',
                like: 0
            }
        ]
    },
    massanger: {
        dialogeArr: [
            { name: 'ArmanCHO', id: 1, active: 'classes.active', src: 'https://lh3.googleusercontent.com/proxy/6n36xfWsdTRe4YscvYIz9q-EtoR8k77M5SAaK-TyPGdtjLKQEhoAZ9P-H0xKoOxpC4hH2XOHFaFE33lQ4wlw_pqUUL_XPpPb' },
            { name: 'Հայկուհի', id: 2, active: '', src: 'https://thumbs.dreamstime.com/b/girl-avatar-cartoon-stock-vector-image-cute-beautiful-eyes-93364804.jpg' },
            { name: 'Ինչ-որ հավայի Group', id: 3, active: '', src: 'https://www.clipartmax.com/png/middle/67-675294_culture-clipart-workshop-avatar-group-icon.png' },
            { name: '2Pac', id: 4, active: '', src: 'https://i.pinimg.com/originals/2e/39/10/2e39102a3619829f438d4c5bc57710f0.jpg' },
            { name: 'ԱԱԾ', id: 5, active: '', src: 'https://p7.hiclipart.com/preview/218/697/74/computer-icons-avatar-youtube-swat-avatar.jpg' },
            { name: 'Mr. Bean', id: 6, active: '', src: 'https://avatarfiles.alphacoders.com/894/89419.jpg' }
        ],
        massageArr: [
            { id: 1, massage: 'first ' },
            { id: 2, massage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam numquam distinctio asperiores  porro harum facere aliquid veritatis, repellendus fugiat voluptatum dolor ut illo cum cupiditate est. Voluptatibus, corrupti placeat.' },

            { id: 3, massage: 'ոռաթիո դելենիթ ծոնսթիթուամ մեա թե, մեա եու ուլլամծոռպեռ սուսծիպիանթուռ. նո դեսեռունթ վուլպութաթե վոլուպթաթում եում. եամ եխ ասսում թիմեամ աեթեռնո, իուս եթ նեմոռե բլանդիթ պռոբաթուս. սոլում նուլլամ իմպեռդիեթ վիմ եի, եռաթ ծոպիոսաե պոնդեռում վիմ եի, ալիի սապիենթեմ քուո ին.' },
        ]
    },
    sidebar: {
        friensArr: [
            { id: 1, name: 'Artash', src: 'https://miro.medium.com/max/600/1*6B8ggGnMHopsrLO775K6oQ.png', },
            { id: 2, name: 'Ծյուշ', src: 'https://cdn2.iconfinder.com/data/icons/unilite-shift-human-vol-2/60/011_089_avatar_friend_mutual_check-512.png', },
            { id: 3, name: 'Կրակ', src: 'https://img.favpng.com/24/10/16/club-penguin-s-more-campfire-clip-art-png-favpng-xvmXm1yspT2KznvieTaFNy3xg.jpg', },
        ]

    }



}

export default state;