<template>
    <div class="posts">
        <div class="container">
            <div class="posts__container">
                <div class="posts__title__info">
                    <div class="posts__title__container">
                        <h3 class="posts__title__string">
                            Our blog
                        </h3>
                        <h1 class="posts__title">
                            Latest posts
                        </h1>
                    </div>
                    <div class="posts__button__title__container">
                        <router-link class="posts__button__title" to="/blog" exact>Go to blog</router-link>
                    </div>
                </div>
                <div class="some__posts__container">
                    <div class="posts__information__container">
                        <div class="posts__pictures__container">
                            <img class="posts__picture" src="@/assets/pictures/abstract.png" alt="abstract">
                            <img class="themes podcast" src="@/assets/pictures/podcast.png" alt="podcast">
                        </div>
                        <div class="post__info__string__container">
                            <div class="subjects__container">
                                <p class="subjects">
                                    Marketing
                                </p>
                            </div>
                            <div class="time__container">
                                <p class="time">
                                    September 4, 2020
                                </p>
                            </div>
                            <div class="duration__container">
                                <p class="duration">
                                    36 min
                                </p>
                            </div>
                        </div>
                        <h1 class="post__info__title">
                            What is traffic arbitrage and does it really make money?
                        </h1>
                        <p class="post__info__paragraph">
                            Pharetra, ullamcorper iaculis viverra parturient sed id sed. 
                            Convallis proin dignissim lacus, purus gravida...
                        </p>
                        <div class="post__button__container">
                            <router-link class="button__text" to="/blog/single-post">Listen</router-link>
                        </div>
                    </div>
                    <div class="posts__information__container">
                        <div class="posts__pictures__container">
                            <img class="posts__picture" src="@/assets/pictures/ideas.png" alt="ideas">
                            <img class="themes video" src="@/assets/pictures/video.png" alt="video">
                        </div>
                        <div class="post__info__string__container">
                            <div class="subjects__container">
                                <p class="subjects">
                                    Management
                                </p>
                            </div>
                            <div class="time__container">
                                <p class="time">
                                    August 25, 2020
                                </p>
                            </div>
                            <div class="duration__container">
                                <p class="duration">
                                    45 min
                                </p>
                            </div>
                        </div>
                        <h1 class="post__info__title">
                            What to do and who to talk to if you want to get feedback on the product
                        </h1>
                        <p class="post__info__paragraph">
                            Neque a, senectus consectetur odio in aliquet nec eu. 
                            Ultricies ac nibh urna urna sagittis faucibus...
                        </p>
                        <div class="post__button__container">
                            <router-link class="button__text" to="/blog/single-post">Watch</router-link>
                        </div>
                    </div>
                    <div class="posts__information__container">
                        <div class="posts__pictures__container">
                            <img class="posts__picture" src="@/assets/pictures/student.png" alt="student">
                            <img class="themes article" src="@/assets/pictures/article.png" alt="article">
                        </div>
                        <div class="post__info__string__container">
                            <div class="subjects__container">
                                <p class="subjects">
                                    Design
                                </p>
                            </div>
                            <div class="time__container">
                                <p class="time">
                                    August 8, 2020
                                </p>
                            </div>
                        </div>
                        <h1 class="post__info__title">
                            Should you choose a creative profession if you are attracted to creativity?
                        </h1>
                        <p class="post__info__paragraph">
                            Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. 
                            Tortor, viverra sed vulputate ultrices...
                        </p>
                        <div class="post__button__container">
                            <router-link class="button__text" to="/blog/single-post">Read</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.posts {
    background: #FFFFFF;
    &__container {
        padding-top: 120px;
        padding-bottom: 180px;

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            padding-top: 100px;
            padding-bottom: 150px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            padding-top: 90px;
            padding-bottom: 130px;
        }

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            padding-top: 50px;
            padding-bottom: 90px;
        }

        .posts__title__info {
            display: flex;
            justify-content: space-between;
            margin-bottom: 60px;
            align-items: flex-end;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin-bottom: 40px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-bottom: 30px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-bottom: 20px;
                flex-direction: column;
                align-items: center;
            }

            .posts__title__container {

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    text-align: center;
                    margin-bottom: 20px;
                }

                .posts__title__string {
                    font-weight: 700;
                    line-height: 150%;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    font-size: 16px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        font-size: 14px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        font-size: 14px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        font-size: 13px;
                    }
                }

                .posts__title {
                    font-weight: 900;
                    font-size: 46px;
                    line-height: 130%;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        font-size: 36px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        font-size: 36px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        font-size: 34px;
                    }
                }
            }

            .posts__button__title__container {
                width: 158px;
                height: 52px;
                background: linear-gradient(55.95deg, #FF3F3A 0%, #F75E05 100%);
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 1s ease-out;
                cursor: pointer;

                &:hover {
                    background: linear-gradient(55.95deg, #ffa200 0%, #ff0000 100%);
                }

                .posts__button__title {
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    color: #FFFFFF;
                }
            }

        }

        .some__posts__container {
            display: flex;

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                flex-direction: column;
            }

            .posts__information__container {
                width: 390px;
                position: relative;
                margin-right: 30px;

                @media screen and (min-width: 1215px) and (max-width: 1240px) { 
                    width: 330px;
                }

                @media screen and (min-width: 1024px) and (max-width: 1214px) { 
                    width: 267px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: 195px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: auto;
                    margin-right: 0;
                    margin-bottom: 25px;
                }

                &:last-of-type {
                    margin-right: 0;

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        margin-bottom: 0;
                    }
                }
                .posts__pictures__container {

                    margin-bottom: 16px;

                    .posts__picture {

                        @media screen and (min-width: 1215px) and (max-width: 1240px) { 
                            width: 100%;
                        }

                        @media screen and (min-width: 1024px) and (max-width: 1214px) { 
                            width: 267px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            width: 195px;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            width: 100%;
                        }
                    }
                    
                    .themes {
                        position: absolute;
                        left: 3%;
                        top: 3%;

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            width: 55px;
                        }
                    }

                }

                .post__info__string__container {
                    display: flex;
                    align-items: center;

                    @media screen and (min-width: 1024px) and (max-width: 1214px) { 
                        justify-content: center;
                        flex-direction: column;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        flex-direction: column;
                        justify-content: center;
                    }

                    .subjects__container {
                        padding-right: 12px;
                        position: relative;

                        @media screen and (min-width: 1024px) and (max-width: 1215px) { 
                            padding-right: 5px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            padding-right: 5px;
                        }

                        &::before {
                            display: block;
                            content: "";
                            width: 13px;
                            height: 1px;
                            background: #787A80;
                            transform: rotate(90deg);
                            position: absolute;
                            right: -6px;
                            top: 10px;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                display: none;
                            }

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                display: none;
                            }
                        }

                        .subjects {
                            font-weight: 700;
                            color: #787A80;

                            @media screen and (min-width: 375px) and (max-width: 768px) { 
                                font-size: 13px;
                            }

                            @media screen and (min-width: 320px) and (max-width: 374px) { 
                                font-size: 12px;
                            }
                        }
                    }

                    .time__container {
                        position: relative;

                        &::before {
                            display: block;
                            content: "";
                            width: 13px;
                            height: 1px;
                            background: #787A80;
                            transform: rotate(90deg);
                            position: absolute;
                            right: -6px;
                            top: 10px;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                display: none;
                            }
                            
                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                display: none;
                            }
                        }

                        .time {
                            margin-right: 12px;
                            color: #787A80;
                            display: flex;
                            align-items: center;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                margin-right: 5px;
                            }
                            
                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                margin-right: 5px;
                            }

                            @media screen and (min-width: 375px) and (max-width: 768px) { 
                                font-size: 13px;
                            }

                            @media screen and (min-width: 320px) and (max-width: 374px) { 
                                font-size: 12px;
                                margin-right: 5px;
                            }

                            &::before {
                                content: url(../assets/pictures/calendar.png);
                                margin-top: 3px;
                                margin-right: 8px;
                                margin-left: 12px;

                                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                    margin-left: 0;
                                }

                                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                    margin-left: 0;
                                }

                                @media screen and (min-width: 320px) and (max-width: 767px) { 
                                    margin-left: 5px;
                                }
                            }
                        }
                    }

                    .duration__container {

                        .duration {
                            font-size: 14px;
                            line-height: 150%;
                            display: flex;
                            align-items: center;
                            color: #787A80;
                            
                            @media screen and (min-width: 375px) and (max-width: 768px) { 
                                font-size: 13px;
                            }

                            @media screen and (min-width: 320px) and (max-width: 374px) { 
                                font-size: 12px;
                            }

                            &::before {
                                content: url(../assets/pictures/clock.png);
                                margin-top: 3px;
                                margin-right: 8px;
                                margin-left: 12px;

                                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                    margin-right: 5px;
                                    margin-left: 5px;
                                }
                                
                                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                    margin-right: 5px;
                                    margin-left: 0;
                                }
                            }
                        }
                    }
                }

                .post__info__title {
                    font-size: 20px;
                    margin-top: 8px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        font-size: 18px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        font-size: 18px;
                    }
                }

                .post__info__paragraph {
                    margin-top: 8px;
                    margin-bottom: 16px;
                }

                .post__button__container {

                    .button__text {
                        display: flex;
                        align-items: center;
                        font-weight: 700;
                        color: #1E212C;
                        transition: all 1s ease-out;
                        cursor: pointer;

                        &:hover {
                            color: #F75E05;
                        }

                        &::after {
                            content: url(../assets/pictures/right_arrow.png);
                            margin-left: 11px;
                        }
                    }
                }
            }
        }
    }
}
</style>