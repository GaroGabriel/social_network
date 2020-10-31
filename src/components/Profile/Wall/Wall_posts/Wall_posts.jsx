import React from 'react';
import classes from './Wall_posts.module.css';
import Post from './Post/Post'
function Wall_posts() {
    return (
        <div className={classes.wall_posts__wrapper}>
            <Post
                avatar='https://zbyhoo.files.wordpress.com/2011/07/me_pixel_bright_bg.png?w=584'

                name='Shredr'

                content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quae suscipit deleniti molestias illo! Perferendis distinctio pariatur quas autem nihil.'

                like='12' />


            <Post
                avatar='https://www.spletnik.ru/thumb/310x310/img/persons/Eminem-post.jpg'

                name='Eminem Dzya'

                content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quae suscipit deleniti molestias illo! Perferendis distinctio pariatur quas autem nihil.Aut quae suscipit deleniti molestias illo! Aut quae suscipit deleniti molestias illo! '
                like='10' />
            <Post
                avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYHlYk5OZwPplU5Gra-NXSZQef1R3OAb7Z9A&usqp=CAU'

                name='Ջիվան Գասպարյան'

                content='լոռեմ իպսում դոլոռ սիթ ամեթ, ին ֆուգիթ ածծուսամուս ծոմպռեհենսամ վել, քուո մելիոռե մոդեռաթիուս եա. եա իդքուե ալթեռա սիգնիֆեռումքուե մել. սալե ոմնիս պռո եու, եու ալիքուիդ պեթենթիում իուս. քուաս լաբոռես սեդ ծու, թե ուբիքուե դեբիթիս ֆուիսսեթ ուսու, եում ադ ոռնաթուս եֆֆիծիենդի. եում ան դիսսենթիունթ դիսպութաթիոնի. պեռ հենդռեռիթ լիբեռավիսսե եի, թե գռաեծո մենանդռի հաս.'
                like='1256' />



        </div>
    );
}

export default Wall_posts;