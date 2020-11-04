import React from 'react';
import classes from './Wall_posts.module.css';
import Post from './Post/Post'
function Wall_posts() {

    const post = [
        {
            id: 1, avatar: 'https://zbyhoo.files.wordpress.com/2011/07/me_pixel_bright_bg.png?w=584',
            name: 'Artush',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quae suscipit deleniti molestias illo! Perferendis distinctio pariatur quas autem nihil.',
            like: 12
        },
        {
            id: 2,
            avatar: 'https://www.spletnik.ru/thumb/310x310/img/persons/Eminem-post.jpg',
            name: 'Eminem Dzya',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quae suscipit deleniti molestias illo! Perferendis distinctio pariatur quas autem nihil.Aut quae suscipit deleniti molestias illo! Aut quae suscipit deleniti molestias illo! ',
            like: 10
        },
        {
            id: 3,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYHlYk5OZwPplU5Gra-NXSZQef1R3OAb7Z9A&usqp=CAU',
            name: 'Ջիվան Գասպարյան',
            content: 'լոռեմ իպսում դոլոռ սիթ ամեթ, ին ֆուգիթ ածծուսամուս ծոմպռեհենսամ վել, քուո մելիոռե մոդեռաթիուս եա. եա իդքուե ալթեռա սիգնիֆեռումքուե մել. սալե ոմնիս պռո եու, եու ալիքուիդ պեթենթիում իուս. քուաս լաբոռես սեդ ծու, թե ուբիքուե դեբիթիս ֆուիսսեթ ուսու, եում ադ ոռնաթուս եֆֆիծիենդի. եում ան դիսսենթիունթ դիսպութաթիոնի. պեռ հենդռեռիթ լիբեռավիսսե եի, թե գռաեծո մենանդռի հաս.',
            like: 122
        },
    ]
    let postM = post.map((p) =>
        < Post avatar={p.avatar} name={p.name} content={p.content} like={p.like} />
    )

    return (
        <div className={classes.wall_posts__wrapper}>
            {postM}
        </div>

    );
    { console.log(postM) };
}

export default Wall_posts;