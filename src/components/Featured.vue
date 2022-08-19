<template>
    <div class="featured__courses">
        <div class="container">
            <div class="featured__courses__container">
                <div class="featured__courses__title__info__container">
                    <div class="featured__courses__title__container">
                        <h3 class="featured__courses__title__string">
                            Ready to learn?
                        </h3>
                        <h1 class="featured__courses__title">
                            Featured Courses
                        </h1>
                    </div>
                    <div class="featured__courses__button__container">
                        <router-link class="featured__courses__button" to="/courses">View all courses</router-link>
                    </div>
                </div>
                <div class="featured__courses__list__container">
                    <div class="course__container">
                        <div class="photo__teacher">
                            <img class="teacher__photo" src="@/assets/pictures/marketing_first__square.png" alt="Jerome_Bell">
                            <img class="mobile-teacher__photo" src="@/assets/pictures/marketing__Bell.png" alt="Jerome_Bell">
                        </div>
                        <div class="course__information__container">
                            <div class="range__info__container marketing">
                                <p class="range__info">Marketing</p>
                            </div>
                            <h2 class="course__name">The Ultimate Google Ads Training Course</h2>
                            <div class="course__some__info__container">
                                <p class="price">$100</p>
                                <p class="symbol">|</p>
                                <p class="teacher">by Jerome Bell</p>
                            </div>
                        </div>
                    </div>
                    <div class="course__container">
                        <div class="photo__teacher">
                            <img class="teacher__photo" src="@/assets/pictures/management_first__square.png" alt="Marvin_McKinney">
                            <img class="mobile-teacher__photo" src="@/assets/pictures/management__McKinney.png" alt="Marvin_McKinney">
                        </div>
                        <div class="course__information__container">
                            <div class="range__info__container management">
                                <p class="range__info">Management</p>
                            </div>
                            <h2 class="course__name">Product Management Fundamentals</h2>
                            <div class="course__some__info__container">
                                <p class="price">$480</p>
                                <p class="symbol">|</p>
                                <p class="teacher">by Marvin McKinney</p>
                            </div>
                        </div>
                    </div>
                    <div class="course__container">
                        <div class="photo__teacher">
                            <img class="teacher__photo" src="@/assets/pictures/recruting__square.png" alt="Leslie_Alexander_Li">
                            <img class="mobile-teacher__photo" src="@/assets/pictures/hr__Li.png" alt="Leslie_Alexander_Li">
                        </div>
                        <div class="course__information__container">
                            <div class="range__info__container recruting">
                                <p class="range__info">HR & Recruting</p>
                            </div>
                            <h2 class="course__name">HR  Management and Analytics</h2>
                            <div class="course__some__info__container">
                                <p class="price">$200</p>
                                <p class="symbol">|</p>
                                <p class="teacher">by Leslie Alexander Li</p>
                            </div>
                        </div>
                    </div>
                    <div class="course__container">
                        <div class="photo__teacher">
                            <img class="teacher__photo" src="@/assets/pictures/marketing_second__square.png" alt="Kristin_Watson">
                            <img class="mobile-teacher__photo" src="@/assets/pictures/marketing__Watson.png" alt="Kristin_Watson">                   
                        </div>
                        <div class="course__information__container">
                            <div class="range__info__container marketing">
                                <p class="range__info">Marketing</p>
                            </div>
                            <h2 class="course__name">Brand Management & PR Communications</h2>
                            <div class="course__some__info__container">
                                <p class="price">$530</p>
                                <p class="symbol">|</p>
                                <p class="teacher">by Kristin Watson</p>
                            </div>
                        </div>
                    </div>
                    <div class="course__container">
                        <div class="photo__teacher">
                            <img class="teacher__photo" src="@/assets/pictures/management_second__square.png" alt="Dianne_Russell">
                            <img class="mobile-teacher__photo" src="@/assets/pictures/management__Russell.png" alt="Dianne_Russell">
                        </div>
                        <div class="course__information__container">
                            <div class="range__info__container management">
                                <p class="range__info">Management</p>
                            </div>
                            <h2 class="course__name">Business Development Management</h2>
                            <div class="course__some__info__container">
                                <p class="price">$400</p>
                                <p class="symbol">|</p>
                                <p class="teacher">by Dianne Russell</p>
                            </div>
                        </div>
                    </div>
                    <div class="course__container">
                        <div class="photo__teacher">
                            <img class="teacher__photo" src="@/assets/pictures/design__square.png" alt="Guy_Hawkins">
                            <img class="mobile-teacher__photo" src="@/assets/pictures/design__Hawkins.png" alt="Guy_Hawkins">
                        </div>
                        <div class="course__information__container">
                            <div class="range__info__container design">
                                <p class="range__info">Design</p>
                            </div>
                            <h2 class="course__name">Graphic Design Basic</h2>
                            <div class="course__some__info__container">
                                <p class="price">$500</p>
                                <p class="symbol">|</p>
                                <p class="teacher">by Guy Hawkins</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.featured__courses {

    &__container {
        margin-top: 180px;
        width: 1230px;

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            margin-top: 150px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            margin-top: 130px;
        }

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            margin-top: 100px;
        }

        .featured__courses__title__info__container {
            display: flex;
            justify-content: space-between;
            margin-bottom: 60px;
            align-items: flex-end;

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                flex-direction: column;
                align-items: center;
                text-align: center;
            }

            .featured__courses__title__container {

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    margin-bottom: 25px;
                }
                .featured__courses__title__string {
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

                .featured__courses__title {
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

            .featured__courses__button__container {
                border: 1px solid #FF3F3A;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 203px;
                height: 52px;
                background: transparent;
                transition: all 1s ease-out;

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: 175px;
                }

                &:hover {
                    background: linear-gradient(55.95deg, #FF3F3A 0%, #F75E05 100%);
                }

                .featured__courses__button {
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

                    &:hover {
                        background: none;
                        color: #E5E8ED;
                        -webkit-background-clip: unset;
                        -webkit-text-fill-color: unset;
                        background-clip: unset;
                    }
                }
            }
        }

        .featured__courses__list__container {
            display: flex;
            flex-wrap: wrap;

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                justify-content: center;
            }

            .course__container {
                width: 600px;
                height: 215px;
                display: flex;
                border: 1px solid #E5E8ED;
                background: #FFFFFF;
                box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 4px 4px -4px rgba(30, 33, 44, 0.03);
                border-radius: 4px;
                margin-bottom: 30px;
                margin-right: 30px;
                transition: all .5s ease-out;

                @media screen and (min-width: 1250px) and (max-width: 1519px) { 
                    width: 565px;
                }

                @media screen and (min-width: 1215px) and (max-width: 1240px) { 
                    width: 512px;
                }

                @media screen and (min-width: 1024px) and (max-width: 1214px) { 
                    width: 420px;
                    margin-right: 20px;
                    margin-bottom: 20px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: 100%;
                    margin-right: 0;
                    margin-bottom: 20px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    display: flex;
                    flex-direction: column;
                    width: auto;
                    height: auto;
                    margin-bottom: 15px;
                    margin-right: 0;
                }

                &:hover {
                    box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.16), 0px 30px 24px -10px rgba(154, 156, 165, 0.1), 0px 12px 10px -6px rgba(154, 156, 165, 0.08), 0px 4px 4px -4px rgba(30, 33, 44, 0.05);
                }

                &:nth-of-type(2),
                &:nth-of-type(4),
                &:nth-of-type(6) {
                    margin-right: 0;
                }

                &:nth-of-type(5),
                &:nth-of-type(6) {
                    margin-bottom: 0;
                }

                &:nth-of-type(5) {
                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        margin-bottom: 20px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        margin-bottom: 15px;
                    }
                }

                &:nth-of-type(6) {
                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        margin-bottom: 0;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        margin-bottom: 0;
                    }
                }

                &:nth-of-type(5) { 
                    .course__name {
                        width: 322px;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            width: 100%;
                        }
                    }
                }

                &:nth-of-type(6) {

                    .course__name {
                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            width: 155px;
                        }
                    }
                }

                .photo__teacher {

                    .teacher__photo {
                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            display: none;
                        }
                    }

                    .mobile-teacher__photo {
                        display: none;

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            display: block;
                            width: 100%;
                        }
                    }
                }

                .course__information__container {
                    margin-top: 32px;
                    margin-left: 32px;
                    margin-right: 30px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        margin: 15px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        margin: 10px;
                        width: auto;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                    }

                    .management {
                        background: #5A87FC;
                        width: 110px;
                    }

                    .marketing {
                        background: #03CEA4;
                        width: 90px;
                    }

                    .recruting {
                        background: #F89828;
                        width: 135px;
                    }

                    .design {
                        background: #F52F6E;
                        width: 59px;
                    }

                    .range__info__container {
                        height: 23px;
                        border-radius: 4px;
                        padding-right: 6px;
                        padding-left: 6px;
                        padding-top: 1px;
                        text-align: center;
                        margin-bottom: 20px;

                        @media screen and (min-width: 320px) and (max-width: 1024px) { 
                            padding-top: 2.5px;
                        }
                                        
                        .range__info {
                            color: #FFFFFF;
                        }
                    }

                    .course__name {
                        font-size: 20px;
                        line-height: 150%;
                        margin-bottom: 20px;
                        width: auto;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            font-size: 17px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            font-size: 17px;
                        }
                
                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            font-size: 15px;
                        }

                    }

                    .course__some__info__container {
                        display: flex;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            flex-direction: column;
                        }

                        .price {
                            font-weight: 700;
                            font-size: 18px;
                            line-height: 150%;
                            color: #FF4242;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                font-size: 16px;
                            }

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                font-size: 16px;
                            }

                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                font-size: 14px;
                            }
                        }

                        .symbol {
                            color: #787A80;
                            margin: 0 8px;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                display: none;
                            }
                        }

                        .teacher {
                            font-size: 18px;
                            line-height: 150%;
                            color: #787A80;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                font-size: 16px;
                            }

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                font-size: 16px;
                            }

                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                font-size: 14px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>