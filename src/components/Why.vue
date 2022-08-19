<template>
    <div class="about__us">
        <div class="container">
            <div class="about__us__container">
                <div class="about__us__pictures__container">
                    <img class="about__us__pictures" src="@/assets/pictures/image.png" alt="illustration">
                </div>
                <img class="dots__colors" src="@/assets/pictures/dots__colors.png" alt="dots__colors">
                <img class="circles__colors" src="@/assets/pictures/circles__colors.png" alt="circles__colors">
                <div class="about__us__info__container">
                    <div class="about__us__info__title__container">
                        <h3 class="about__us__info__title__string">
                            Who we are
                        </h3>
                        <h1 class="about__us__info__title">
                            Why Createx?
                        </h1>
                    </div>
                    <div class="about__us__list__container">
                        <p class="about__us__list">
                            A fermentum in morbi pretium aliquam adipiscing donec tempus.
                        </p>
                        <p class="about__us__list">
                            Vulputate placerat amet pulvinar lorem nisl.
                        </p>
                        <p class="about__us__list">
                            Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.
                        </p>
                        <p class="about__us__list">
                            Etiam duis lobortis in fames ultrices commodo nibh.
                        </p>
                        <p class="about__us__list">
                            Tincidunt sagittis neque sem ac eget.
                        </p>
                        <p class="about__us__list">
                            Ultricies amet justo et eget quisque purus vulputate dapibus tortor.
                        </p>
                    </div>
                    <div class="about__us__button__container">
                        <router-link class="about__us__button" to="" exact>More about us</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.about__us {

    &__container {
        display: flex;
        margin-top: 180px;
        position: relative;

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            margin-top: 150px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            margin-top: 100px;
        }

        
        @media screen and (min-width: 320px) and (max-width: 767px) { 
            margin-top: 70px;
            flex-direction: column;
        }

        .dots__colors {
            position: absolute;
            right: 103%;
            top: 10%;

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                width: 50px;
                right: 95%;
                top: 43%;
            }
        }

        .circles__colors {
            position: absolute;
            top: 40%;
            left: 101.9%;

            @media screen and (min-width: 1250px) and (max-width: 1519px) { 
                left: 96%;
            }

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                width: 10%;
                left: 96.5%;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                width: 10%;
                left: 97.5%;
            }
            
            @media screen and (min-width: 320px) and (max-width: 767px) { 
                display: none;
            }
        }

        .about__us__pictures__container {

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-bottom: 15px;
            }

            .about__us__pictures {

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    width: 90%;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: 90%;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: 100%;
                }
            }
        }

        .about__us__info__container {
            margin-left: 130px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin-left: 0;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-left: 0;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-left: 0;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .about__us__info__title__container {
                margin-bottom: 40px;

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-bottom: 30px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    margin-bottom: 25px;
                    text-align: center;
                }

                .about__us__info__title__string {
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

                .about__us__info__title {
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

            .about__us__list__container {
                margin-bottom: 48px;
                width: 390px;
                
                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: 100%;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: auto;
                    margin-bottom: 35px;
                }

                .about__us__list {
                    margin-bottom: 12px;
                    display: flex;

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        width: auto
                    }

                    &:last-of-type {
                        margin-bottom: 0;
                    }

                    &::before {
                        content: url(../assets/pictures/check.png);
                        margin-right: 16px;
                        margin-top: 3px;

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            margin-right: 13px;
                        }
                    }
                }
            }

            .about__us__button__container {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 161px;
                height: 44px;
                background: linear-gradient(55.95deg, #FF3F3A 0%, #F75E05 100%);
                border-radius: 4px;
                transition: all 1s ease-out;

                &:hover {
                    background: linear-gradient(55.95deg, #ffa200 0%, #ff0000 100%);
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: 100%;
                }

                .about__us__button {
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 44px;
                    letter-spacing: 0.5px;
                    color: #FFFFFF;
                }
            }
        }
    }
}
</style>