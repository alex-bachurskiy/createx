<template>
    <div class="benefits">
        <div class="container">
            <div class="benefits__container">
                <div class="benefits__title__info__container">
                    <div class="benefits__title__container">
                        <h3 class="benefits__title__string">
                            Our benefits
                        </h3>
                        <h1 class="benefits__title">
                            That’s how we do it
                        </h1>
                    </div>
                    <div class="benefits__list__container">
                        <div class="benefit__container">
                            <p class="benefit__info">
                                Experienced Tutors
                            </p>
                        </div>
                        <div class="benefit__container">
                            <p class="benefit__info">Feedback & Support</p>
                        </div>
                        <div class="benefit__container">
                            <p class="benefit__info">24/7 Online Library</p>
                        </div>
                        <div class="benefit__container">
                            <p class="benefit__info">Community</p>
                        </div>
                    </div>
                </div>
                <div class="benefits__main__info__container">
                    <div class="benefits__main__info__title__container">
                        <h1 class="benefits__main__info__title">
                            Only practicing tutors
                        </h1>
                        <p class="benefits__main__info__paragraph">
                            Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. 
                            Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit 
                            diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id 
                            dignissim massa ut amet. Amet enim, nisi tempus vehicula.
                        </p>
                    </div>
                    <div class="benefits__main__info__pictures">
                        <img class="education" src="@/assets/pictures/education.png" alt="education">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.benefits {

    &__container {
        margin-top: 180px;

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            margin-top: 150px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            margin-top: 130px;
        }

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            margin-top: 100px;
        }

        .benefits__title__info__container {
            margin-bottom: 80px;

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-bottom: 60px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-bottom: 40px;
            }
            .benefits__title__container {
                text-align: center;
                margin-bottom: 60px;

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-bottom: 40px;
                }

                @media screen and (min-width: 375px) and (max-width: 767px) { 
                    margin-bottom: 30px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                @media screen and (min-width: 320px) and (max-width: 374px) { 
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 65%;
                    margin: 0 auto 15px auto;
                }

                .benefits__title__string {
                    font-weight: 700;
                    line-height: 150%;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    margin-bottom: 8px;
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

                .benefits__title {
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

            .benefits__list__container {

                display: flex;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    justify-content: center;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    flex-wrap: wrap;
                    justify-content: center;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .benefit__container {
                    display: flex;
                    width: 307px;
                    height: 46px;
                    justify-content: center;
                    align-items: center;
                    border-radius: 4px;
                    border: 1px solid transparent;
                    font-weight: 700;
                    line-height: 160%;
                    color: #9A9CA5;
                    cursor: pointer;
                    transition: all 1s ease-out;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        width: 215px;
                        display: block;
                        text-align: center;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        font-size: 14px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        font-size: 13px;
                        width: 100%;
                    }

                    &:hover {
                        border: 1px solid #FF3F3A;
                        color: #FF3F3A;
                    }

                    &:nth-of-type(1) {

                        .benefit__info {

                            &::before {
                                content: url(../assets/pictures/star.png);
                                display: block;
                                transition: all 1s ease-out;
                                position: relative;
                                margin-right: 8px;
                                top: 2px;
                            }

                            &:hover {
                                &::before {
                                    content: url(../assets/pictures/star__color.png);
                                    position: relative;
                                    margin-right: 8px;
                                    top: 2px;
                                }
                            }
                        }
                    }

                    &:nth-of-type(2) {
                        
                        .benefit__info {
                            &::before {
                                content: url(../assets/pictures/like.png);
                                display: block;
                                transition: all 1s ease-out;
                                position: relative;
                                margin-right: 8px;
                                top: 2px;
                            }

                            &:hover {
                                &::before {
                                    content: url(../assets/pictures/like__color.png);
                                    position: relative;
                                    margin-right: 8px;
                                    top: 2px;
                                }
                            }
                        }
                    }

                    &:nth-of-type(3) {
                        
                        .benefit__info {
                            &::before {
                                content: url(../assets/pictures/layouts.png);
                                display: block;
                                transition: all 1s ease-out;
                                position: relative;
                                margin-right: 8px;
                                top: 2px;
                            }

                            &:hover {
                                &::before {
                                    content: url(../assets/pictures/layouts__color.png);
                                    position: relative;
                                    margin-right: 8px;
                                    top: 2px;
                                }
                            }
                        }
                    }

                    &:nth-of-type(4) {
                        
                        .benefit__info {
                            &::before {
                                content: url(../assets/pictures/chat.png);
                                display: block;
                                transition: all 1s ease-out;
                                position: relative;
                                margin-right: 8px;
                                top: 2px;
                            }

                            &:hover {
                                &::before {
                                    content: url(../assets/pictures/chat__color.png);
                                    position: relative;
                                    margin-right: 8px;
                                    top: 2px;
                                }
                            }
                        }
                    }

                    .benefit__info {
                        display: flex;
                        width: 100%;
                        justify-content: center;
                        height: 100%;
                        align-items: center;
                        position: relative;
                    }
                }
            }
        }

        .benefits__main__info__container {
            display: flex;
            justify-content: space-between;
            align-items: center;

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                flex-direction: column;
            }

            .benefits__main__info__title__container {
                width: 495px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    width: 350px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: 325px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: 85%;
                    text-align: center;
                }

                .benefits__main__info__title {
                    font-weight: 900;
                    font-size: 32px;
                    line-height: 130%;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        font-size: 26px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        font-size: 26px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        font-size: 23px;
                    }
                }

                .benefits__main__info__paragraph {
                    margin-top: 24px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        margin-top: 20px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        margin-top: 15px;
                    }
                }
            }

            .benefits__main__info__pictures {

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    width: 350px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: 320px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: 320px;
                }
                .education {

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        width: 100%;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        width: 100%;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>