<template>
    <div class="main__banner">
        <div class="container">
            <div class="main__banner__container">
                <img class="shapes__up__right" src="@/assets/pictures/shapes__up__right.png" alt="shapes__up__right">
                <img class="shapes_down" src="@/assets/pictures/shapes_down.png" alt="shapes_down">
                <Header/>
                <div class="main__banner__informatin__container">
                    <div class="main__banner__informatin__title__container">
                        <div class="play__button__container">
                            <div class="play__button">
                                <img src="@/assets/pictures/play.png" alt="play">
                            </div>
                            <p class="play__text">
                                Play showreel
                            </p>
                        </div>
                        <h1 class="main__banner__informatin__title">
                            Enjoy studying with Createx Online Courses
                        </h1>
                        <div class="main__banner__informatin__btn__container">
                            <div class="about__btn">
                                <router-link class="about__btn__text" to="/about-us" exact>About us</router-link>
                            </div>
                            <div class="explore__btn">
                                <router-link class="explore__btn__text" to="/courses" exact>Explore courses</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="main__banner__pictures">
                        <img class="illustration" src="@/assets/pictures/illustration.png" alt="illustration">
                    </div>
                </div>
                <img class="shapes__right" src="@/assets/pictures/shapes__right.png" alt="shapes__right">
                <img class="semicircle" src="@/assets/pictures/semicircle.png" alt="semicircle">
                <div class="main__banner__paragraph__container">
                    <div class="main__banner__paragraph">
                        <p class="paragraph__number">1200</p>
                        <p class="paragraph__info">Students graduated</p>
                    </div>
                    <div class="main__banner__paragraph">
                        <p class="paragraph__number">84</p>
                        <p class="paragraph__info">Completed courses</p>
                    </div>
                    <div class="main__banner__paragraph">
                        <p class="paragraph__number">16</p>
                        <p class="paragraph__info">Qualified tutors</p>
                    </div>
                    <div class="main__banner__paragraph">
                        <p class="paragraph__number">5</p>
                        <p class="paragraph__info">Years of experience</p>
                    </div>
                </div>
                <img class="circles" src="@/assets/pictures/circles.png" alt="circles">
                <img class="dots" src="@/assets/pictures/dots.png" alt="dots">
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header";

export default {
    name: "home",
    components: {
        Header,
    }
};
</script>

<style lang="scss" scoped>
.main__banner {
    background: linear-gradient(55deg, rgba(255,63,58,0.2) 0%, rgba(247,94,5,0.2) 100%);    
    padding-bottom: 80px;

    @media screen and (min-width: 320px) and (max-width: 767px) { 
        padding-bottom: 50px;
    }

    &__container {
        position: relative;
        .shapes__up__right {
            position: absolute;
            top: 10%;
            left: -10%;

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                width: 65px;
            }
        }
        
        .shapes_down {
            position: absolute;
            left: 105%;
            
            @media screen and (min-width: 1250px) and (max-width: 1519px) { 
                left: 100%;
            }

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                left: 95%;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                display: none;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                display: none;
            }
        } 

        .circles {
            position: absolute;
            top: 90%;
            right: 98%;

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                top: 95%;
                right: 89%;
                width: 135px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                top: 92%;
                right: 85%;
                width: 125px;
            }
        }

        .dots {
            position: absolute;
            bottom: 8%;
            left: 98.8%;

            @media screen and (min-width: 1250px) and (max-width: 1519px) { 
                left: 95.8%;
            }

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                left: 88%;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                left: 85%;
                width: 125px;
                bottom: 9%;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                display: none;
            }
        }

        .shapes__right {
            position: absolute;
            bottom: 51%;
            left: 36%;

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                display: none;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                display: none;
            }
        }
        
        .semicircle {
            position: absolute;
            bottom: 20%;
            left: 40%;

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                display: none;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                display: none;
            }
        }

        .main__banner__informatin__container {
            display: flex;
            margin-top: 128px;
            justify-content: space-between;
            margin-bottom: 190px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin-top: 100px;
                margin-bottom: 170px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-top: 90px;
                margin-bottom: 150px;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            
            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-top: 70px;
                margin-bottom: 70px;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }

            .main__banner__informatin__title__container {
                width: 496px;
                z-index: 777;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    width: 420px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: 515px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: 100%;
                }

                .play__button__container {
                    display: flex;
                    align-items: center;

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        justify-content: center;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        justify-content: center;
                    }

                   .play__button {
                        background: #FF3F3A;
                        width: 52px;
                        height: 52px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 100%;
                        cursor: pointer;
                        transition: all 1s ease-out;

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            width: 45px;
                            height: 45px;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            width: 35px;
                            height: 35px;
                        }

                        &:hover {
                            background: #ff410c;
                        }
                        
                        &::after {
                            content: '';
                            position: absolute;
                            background: #FF3F3A;
                            height: 84px;
                            width: 84px;
                            animation: pulse 2s infinite ease-in-out;
                            opacity: 0.12;
                            border-radius: 100%;
                            z-index: -777;
                            transition: all 1s ease-out;

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                height: 77px;
                                width: 77px;
                            }

                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                width: 67px;
                                height: 67px;
                            }

                            &:hover {
                                background: #ff410c;
                            }
                        }

                        @-webkit-keyframes pulse {
                            0% {
                                transform: scale(0);
                            }
                            50% {
                                transform: scale(1);
                            }
                            100% {
                                transform: scale(1);
                                opacity: 0;
                            }
                        }
                    }

                    .play__text {
                        font-weight: 700;
                        font-size: 14px;
                        line-height: 150%;
                        color: #1E212C;
                        margin-left: 16px;

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            font-size: 13px;
                        }
                    }
                }

                .main__banner__informatin__title {
                    font-weight: 900;
                    font-size: 64px;
                    line-height: 130%;
                    letter-spacing: 1px;
                    margin-top: 24px;
                    margin-bottom: 60px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        font-size: 54px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                       font-size: 44px;
                       margin-top: 20px;
                       margin-bottom: 45px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                       font-size: 34px;
                       margin-top: 15px;
                       margin-bottom: 35px;
                    }
                }

                .main__banner__informatin__btn__container {
                    display: flex;

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                       justify-content: center;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                       justify-content: center;
                       flex-wrap: wrap;
                       margin-bottom: 35px;
                    }
                    
                    .about__btn {
                        border: 1px solid #FF3F3A;
                        width: 148px;
                        height: 52px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        margin-right: 24px;
                        background: transparent;
                        transition: all 1s ease-out;

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            width: 80%;
                            margin-right: 0;
                            margin-bottom: 15px;
                        }

                        &:hover {
                            background: linear-gradient(55.95deg, #FF3F3A 0%, #F75E05 100%);
                        }

                        &__text {
                            background: linear-gradient(55.95deg, #FF3F3A 0%, #F75E05 100%);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            font-weight: 700;
                            line-height: 52px;
                            letter-spacing: 0.5px;
                            transition: all 1s ease-out;
                            color: transparent;
                            width: 100%;
                            text-align: center;

                            &:hover {
                                background: none;
                                color: #E5E8ED;
                                -webkit-background-clip: unset;
                                -webkit-text-fill-color: unset;
                                background-clip: unset;
                            }
                        }
                    }

                    .explore__btn {
                        width: 201px;
                        height: 52px;
                        background: linear-gradient(55.95deg, #FF3F3A 0%, #F75E05 100%);
                        border-radius: 4px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all 1s ease-out;
                        cursor: pointer;

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            width: 80%;
                        }

                        &:hover {
                            background: linear-gradient(55.95deg, #ffa200 0%, #ff0000 100%);
                        }

                        &__text {
                            font-weight: 700;
                            line-height: 52px;
                            letter-spacing: 0.5px;
                            color: #FFFFFF;
                        }
                    }
                }
            }

            .main__banner__pictures {
                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    width: 450px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: 590px;
                    margin-top: 50px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: auto;
                }
                .illustration {

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

        .main__banner__paragraph__container {
            display: flex;
            justify-content: space-between;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                justify-content: center;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                width: auto;
                margin: 0 auto;
            }

            .main__banner__paragraph {
                display: flex;
                align-items: center;
                color: #1E212C;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    width: 200px;
                    align-items: center;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: 162px;
                    align-items: center;
                    flex-direction: column;
                    text-align: center;
                }

                @media screen and (min-width: 425px) and (max-width: 767px) { 
                    width: 185px;
                    align-items: center;
                    flex-direction: column;
                    margin-bottom: 20px;
                    text-align: center;
                }

                @media screen and (min-width: 375px) and (max-width: 424px) { 
                    width: 160px;
                    align-items: center;
                    flex-direction: column;
                    margin-bottom: 20px;
                    text-align: center;
                }

                @media screen and (min-width: 360px) and (max-width: 374px) { 
                    width: 155px;
                    align-items: center;
                    flex-direction: column;
                    margin-bottom: 20px;
                    text-align: center;
                }

                @media screen and (min-width: 320px) and (max-width: 359px) { 
                    width: 135px;
                    align-items: center;
                    flex-direction: column;
                    margin-bottom: 20px;
                    text-align: center;
                }

                &:nth-of-type(3),
                &:nth-of-type(4) {

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        margin-bottom: 0;
                    }
                }

                &:nth-of-type(1) {
                    &::before {
                        content: unset;
                    }
                }

                &::before {
                    content: "";
                    display: block;
                    width: 8px;
                    height: 8px;
                    border-radius: 100%;
                    background: #FF3F3A;
                    margin-right: 66px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        margin-right: 30px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        display: none;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        display: none;
                    }
                }

                .paragraph__number {
                    font-weight: 900;
                    font-size: 46px;
                    line-height: 130%;
                    margin-right: 12px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        font-size: 40px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        font-size: 36px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        font-size: 26px;
                    }
                }

                .paragraph__info {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 160%;

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        font-size: 14px;
                    }
                }
            }
        }
    }
}
</style>