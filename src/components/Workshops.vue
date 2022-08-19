<template>
    <div class="lectures__workshops">
        <div class="container">
            <div class="lectures__workshops__container">
                <div class="lectures__workshops__title__container">
                    <h3 class="lectures__workshops__title__string">
                        Our Events
                    </h3>
                    <h1 class="lectures__workshops__title">
                        Lectures & workshops
                    </h1>
                </div>
                <div class="lectures__workshops__list__container">
                    <div class="lectures__workshops__information__container">
                        <div class="lectures__workshops__information">
                            <div class="lectures__workshops__time">
                                <div class="date__container">
                                    <p class="date">05</p>
                                </div>
                                <div class="time__container">
                                    <p class="month">August </p>
                                    <p class="time">11:00 – 14:00</p>
                                </div>
                            </div>
                            <div class="lectures__inforamtion">
                                <h4 class="lectures__inforamtion__title">Formation of the organizational structure of the company in the face of uncertainty.</h4>
                                <p class="lectures__inforamtion__paragraph">Onine master-class</p>
                            </div>
                            <div class="lectures__btn">
                                <router-link class="button__text" to="/courses/course-page">View more</router-link>
                            </div>
                        </div>
                        <div class="lectures__workshops__information">
                            <div class="lectures__workshops__time">
                                <div class="date__container">
                                    <p class="date">24</p>
                                </div>
                                <div class="time__container">
                                    <p class="month">July</p>
                                    <p class="time">11:00 – 12:30</p>
                                </div>
                            </div>
                            <div class="lectures__inforamtion">
                                <h4 class="lectures__inforamtion__title">Building a customer service department. Best Practices.</h4>
                                <p class="lectures__inforamtion__paragraph">Onine lecture</p>
                            </div>
                            <div class="lectures__btn">
                                <router-link class="button__text" to="/courses/course-page">View more</router-link>
                            </div>
                        </div>
                        <div class="lectures__workshops__information">
                            <div class="lectures__workshops__time">
                                <div class="date__container">
                                    <p class="date">16</p>
                                </div>
                                <div class="time__container">
                                    <p class="month">July</p>
                                    <p class="time">10:00 – 13:00</p>
                                </div>
                            </div>
                            <div class="lectures__inforamtion">
                                <h4 class="lectures__inforamtion__title">How to apply methods of speculative design in practice. Worldbuilding prototyping.</h4>
                                <p class="lectures__inforamtion__paragraph">Onine workshop</p>
                            </div>
                            <div class="lectures__btn">
                                <router-link class="button__text" to="/courses/course-page">View more</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lectures__workshops__more__button">
                    <p class="lectures__workshops__more">
                        Do you want more?
                    </p>
                    <div class="more__button__container">
                        <router-link class="featured__courses__button" to="/events" exact>Explore all events</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.lectures__workshops {
    background: linear-gradient(55deg, rgba(255,63,58,0.2) 0%, rgba(247,94,5,0.2) 100%);    
    margin-top: 140px;

    @media screen and (min-width: 320px) and (max-width: 767px) { 
        margin-top: 100px;
    }

    &__container {
        padding-top: 80px;
        padding-bottom: 85px;

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            padding-top: 60px;
            padding-bottom: 65px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            padding-top: 60px;
            padding-bottom: 65px;
        }

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            padding-top: 40px;
            padding-bottom: 45px;
        }

        .lectures__workshops__title__container {
            text-align: center;
            margin-bottom: 60px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin-bottom: 40px;
            }
            
            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-bottom: 40px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-bottom: 35px;
            }

            .lectures__workshops__title__string {
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

            .lectures__workshops__title {
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

        .lectures__workshops__list__container {
            margin-bottom: 65px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin-bottom: 45px;
                display: flex;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-bottom: 45px;
                display: flex;
            }
            
            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-bottom: 35px;
                display: flex;
            }

            .lectures__workshops__information__container {

                .lectures__workshops__information {
                    display: flex;
                    align-items: center;
                    background: #FFFFFF;
                    border-radius: 4px;
                    margin-bottom: 24px;
                    box-shadow: none;
                    padding: 32px 40px;

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        align-items: flex-start;
                        padding: 25px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        padding: 15px;
                        flex-direction: column;
                        align-items: center;
                    }

                    .lectures__workshops__time {
                        display: flex;
                        align-items: center;
                        margin-right: 42px;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            margin-right: 40px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            margin-right: 25px;
                        }

                        
                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            margin-right: 20px;
                        }

                        .date__container {
                            .date {
                                font-weight: 900;
                                font-size: 48px;
                                line-height: 130%;
                                letter-spacing: 1px;
                                color: #FF3F3A;
                                margin-right: 20px;

                                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                    font-size: 38px;
                                }

                                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                    font-size: 38px;
                                }

                                @media screen and (min-width: 320px) and (max-width: 767px) { 
                                    font-size: 35px;
                                }
                            }
                        }

                        .time__container {

                            .month {
                                font-weight: 700;
                                font-size: 20px;
                                line-height: 150%;

                                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                    font-size: 18px;
                                }

                                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                    font-size: 18px;
                                }

                                @media screen and (min-width: 320px) and (max-width: 767px) { 
                                    font-size: 16px;
                                }
                            }

                            .time {
                                font-weight: 400;
                                font-size: 16px;
                                line-height: 160%;
                                color: #787A80;

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
                        }
                    }

                    .lectures__inforamtion {
                        width: 740px;
                        margin-right: 40px;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            width: 415px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            width: 275px;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            width: auto;
                            margin-right: 0;
                            text-align: center;
                            margin-bottom: 25px;
                        }

                        .lectures__inforamtion__title {
                            font-weight: 700;
                            font-size: 20px;
                            line-height: 150%;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                font-size: 18px;
                            }
                        }

                        .lectures__inforamtion__paragraph {
                            font-size: 16px;
                            line-height: 160%;
                            display: flex;
                            align-items: center;
                            color: #787A80;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                font-size: 14px;
                            }

                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                font-size: 13px;
                                text-align: center;
                                justify-content: center;
                            }
                        }
                    }

                    .lectures__btn {
                        border: 1px solid #FF3F3A;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 136px;
                        height: 44px;
                        background: transparent;
                        transition: all 1s ease-out;
                        border-radius: 4px;

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            width: 100%;
                        }

                        &:hover {
                            background: linear-gradient(55.95deg, #FF3F3A 0%, #F75E05 100%);
                        }

                        .button__text {
                            background: linear-gradient(55.95deg, #FF3F3A 0%, #F75E05 100%);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                            line-height: 52px;
                            letter-spacing: 0.5px;
                            font-weight: 700;
                            transition: all 1s ease-out;
                            color: transparent;
                            width: 100%;
                            text-align: center;
                            
                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                font-size: 13px;
                            }

                            &:hover {
                                background: none;
                                color: #E5E8ED;
                                -webkit-background-clip: unset;
                                -webkit-text-fill-color: unset;
                                background-clip: unset;
                            }
                        }
                    }

                    &:hover {
                        box-shadow: 0px 80px 80px -20px rgba(255, 63, 58, 0.16), 0px 30px 24px -10px rgba(255, 63, 58, 0.1), 0px 12px 10px -6px rgba(255, 63, 58, 0.08), 0px 4px 4px -4px rgba(30, 33, 44, 0.05);
                    }

                    &:last-of-type {
                        margin-bottom: 0;
                    }
                }
            }
        }

        .lectures__workshops__more__button {
            display: flex;
            justify-content: center;

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                flex-direction: column;
                align-items: center;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                flex-direction: column;
                align-items: center;
            }

            .lectures__workshops__more {
                margin-right: 40px;
                font-weight: 700;
                font-size: 28px;
                line-height: 150%;
                color: #1E212C;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    font-size: 26px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    font-size: 26px;
                    margin-right: 0;
                    margin-bottom: 25px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    font-size: 23px;
                    margin-right: 0;
                    margin-bottom: 25px;
                }
            }

            .more__button__container {
                width: 215px;
                height: 52px;
                background: linear-gradient(55.95deg, #FF3F3A 0%, #F75E05 100%);
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 1s ease-out;
                cursor: pointer;
                
                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    width: 190px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: 75%;
                }

                &:hover {
                    background: linear-gradient(55.95deg, #ffa200 0%, #ff0000 100%);
                }

                .featured__courses__button {
                    font-weight: 700;
                    line-height: 52px;
                    letter-spacing: 0.5px;
                    color: #FFFFFF;
                }
            }
        }
    }
}
</style>