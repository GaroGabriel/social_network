
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
            { name: 'ArmanCHO', id: 1, active: 'classes.active', src: 'https://www.pngfind.com/pngs/m/521-5217216_male-icons-free-and-clipart-avatar-hd-png.png' },
            { name: 'Հայկուհի', id: 2, active: '', src: 'https://thumbs.dreamstime.com/b/girl-avatar-cartoon-stock-vector-image-cute-beautiful-eyes-93364804.jpg' },
            { name: 'Ինչ-որ հավայի Group', id: 3, active: '', src: 'https://www.clipartmax.com/png/middle/67-675294_culture-clipart-workshop-avatar-group-icon.png' },
            { name: '2Pac', id: 4, active: '', src: 'https://i.pinimg.com/originals/2e/39/10/2e39102a3619829f438d4c5bc57710f0.jpg' },
            { name: 'ԱԱԾ', id: 5, active: '', src: 'https://p7.hiclipart.com/preview/218/697/74/computer-icons-avatar-youtube-swat-avatar.jpg' },
            { name: 'Mr. Bean', id: 6, active: '', src: 'https://avatarfiles.alphacoders.com/894/89419.jpg' }
        ],
        massageArr: [
            { id: 1, massage: 'first ' },
            { id: 2, massage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quisquam numquam distinctio asperiores  porro harum facere aliquid veritatis, repellendus fugiat voluptatum dolor ut illo cum cupiditate est. Voluptatibus, corrupti placeat.' },
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


////////////////////////////////////////////////////////////////////////////////EXPORT FUNCS


export let addPost = (postPost) => {
    let newPost = {
        id: 8, avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/338861d3-af44-4291-8dad-b753e6d5b0a4/ddq2j7a-3d480a52-0257-41e5-bfce-8cbe6fcb8fba.png/v1/fill/w_894,h_894,q_70,strp/new_avatar_by_rorikondesu_ddq2j7a-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMjAwIiwicGF0aCI6IlwvZlwvMzM4ODYxZDMtYWY0NC00MjkxLThkYWQtYjc1M2U2ZDViMGE0XC9kZHEyajdhLTNkNDgwYTUyLTAyNTctNDFlNS1iZmNlLThjYmU2ZmNiOGZiYS5wbmciLCJ3aWR0aCI6Ijw9MTIwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.0VjK7VYjn83bikwixCwRtxzOmTunHWK_23hLDtJozk0',
        name: 'NewPost',
        content: postPost,
        like: 0
    };
    state.profile.post.push(newPost)
}

export let newMassageFun = (newMass) => {

    let newMasPush = {
        id: 3,
        massage: newMass,
    }
    state.massanger.massageArr.push(newMasPush)
}



export default state;