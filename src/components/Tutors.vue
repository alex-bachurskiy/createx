<template>
    <div class="tutors">
        <div class="container">
            <div class="tutors__container">
                <div class="tutors__title__container">
                    <h3 class="tutors__title__string">
                        best tutors are all here
                    </h3>
                    <h1 class="tutors__title">
                        Meet our team
                    </h1>
                </div>
                <div class="tutors__carousel-wrapper">
                    <carousel 
                        :navigationEnabled="true"
                        :per-page="1"
                        :navigate-to="someLocalProperty" 
                        :mouse-drag="true" 
                        :NextLabel="true"
                        :autoplay="false"
                    >
                        <slide class="main-сarousel">
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret Russell" src="@/assets/pictures/slider__Russell.png" alt="Dianne Russell">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Dianne Russell</h6>
                                    <p class="about__teacher">Founder and CEO</p>
                                </div>
                            </div>
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret Bell" src="@/assets/pictures/slider__Bell.png" alt="Jerome Bell">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Jerome Bell</h6>
                                    <p class="about__teacher">Founder and Program Director</p>
                                </div>
                            </div>
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret Watson" src="@/assets/pictures/slider__Watson.png" alt="Kristin Watson">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Kristin Watson</h6>
                                    <p class="about__teacher">Marketer, Curator of Marketing Course</p>
                                </div>
                            </div>
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret McKinney" src="@/assets/pictures/slider__McKinney.png" alt="Marvin McKinney">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Marvin McKinney</h6>
                                    <p class="about__teacher">PM, Curator of Management Course</p>
                                </div>
                            </div>
                        </slide>
                        <slide class="main-сarousel">
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret Li" src="@/assets/pictures/slider__Li.png" alt="Leslie Alexander Li">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Leslie Alexander Li</h6>
                                    <p class="about__teacher">Curator of HR & Recruting Course</p>
                                </div>
                            </div>
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret Murphy" src="@/assets/pictures/slider__ Murphy.png" alt="Kathryn Murphy">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Kathryn Murphy</h6>
                                    <p class="about__teacher">Analyst and Marketing specialist</p>
                                </div>
                            </div>
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret Simmons" src="@/assets/pictures/slider__Simmons.png" alt="Brooklyn Simmons">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Brooklyn Simmons</h6>
                                    <p class="about__teacher">Curator of Development Course</p>
                                </div>
                            </div>
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret Fisher" src="@/assets/pictures/slider_Fisher.png" alt="Cody Fisher">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Cody Fisher</h6>
                                    <p class="about__teacher">UX Designer, Curator of Design Course</p>
                                </div>
                            </div>
                        </slide>
                    </carousel>
                </div>
                <div class="tutors__tablet-сarousel-wrapper">
                    <carousel 
                        :navigationEnabled="true"
                        :per-page="1"
                        :navigate-to="someLocalProperty" 
                        :mouse-drag="true" 
                        :NextLabel="true"
                        :autoplay="false"
                    >
                        <slide class="tablet-сarousel">
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret Russell" src="@/assets/pictures/slider__Russell.png" alt="Dianne Russell">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Dianne Russell</h6>
                                    <p class="about__teacher">Founder and CEO</p>
                                </div>
                            </div>
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret Bell" src="@/assets/pictures/slider__Bell.png" alt="Jerome Bell">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Jerome Bell</h6>
                                    <p class="about__teacher">Founder and Program Director</p>
                                </div>
                            </div>
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret Watson" src="@/assets/pictures/slider__Watson.png" alt="Kristin Watson">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Kristin Watson</h6>
                                    <p class="about__teacher">Marketer, Curator of Marketing Course</p>
                                </div>
                            </div>
                        </slide>
                        <slide class="tablet-сarousel">
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret Li" src="@/assets/pictures/slider__Li.png" alt="Leslie Alexander Li">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Leslie Alexander Li</h6>
                                    <p class="about__teacher">Curator of HR & Recruting Course</p>
                                </div>
                            </div>
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret McKinney" src="@/assets/pictures/slider__McKinney.png" alt="Marvin McKinney">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Marvin McKinney</h6>
                                    <p class="about__teacher">PM, Curator of Management Course</p>
                                </div>
                            </div>
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret Murphy" src="@/assets/pictures/slider__ Murphy.png" alt="Kathryn Murphy">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Kathryn Murphy</h6>
                                    <p class="about__teacher">Analyst and Marketing specialist</p>
                                </div>
                            </div>
                        </slide>
                        <slide class="tablet-сarousel">
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret Simmons" src="@/assets/pictures/slider__Simmons.png" alt="Brooklyn Simmons">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Brooklyn Simmons</h6>
                                    <p class="about__teacher">Curator of Development Course</p>
                                </div>
                            </div>
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret Fisher" src="@/assets/pictures/slider_Fisher.png" alt="Cody Fisher">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Cody Fisher</h6>
                                    <p class="about__teacher">UX Designer, Curator of Design Course</p>
                                </div>
                            </div>
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret Russell" src="@/assets/pictures/slider__Russell.png" alt="Dianne Russell">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Dianne Russell</h6>
                                    <p class="about__teacher">Founder and CEO</p>
                                </div>
                            </div>
                        </slide>
                    </carousel>
                </div>
                <div class="tutors__smartphone-сarousel-wrapper">
                    <carousel 
                        :navigationEnabled="true"
                        :per-page="1"
                        :navigate-to="someLocalProperty" 
                        :mouse-drag="true" 
                        :NextLabel="true"
                        :autoplay="false"
                    >
                        <slide class="smartphone-сarousel">                            
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret Bell" src="@/assets/pictures/slider__Bell.png" alt="Jerome Bell">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Jerome Bell</h6>
                                    <p class="about__teacher">Founder and Program Director</p>
                                </div>
                            </div>
                        </slide>
                        <slide class="smartphone-сarousel">
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret Russell" src="@/assets/pictures/slider__Russell.png" alt="Dianne Russell">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Dianne Russell</h6>
                                    <p class="about__teacher">Founder and CEO</p>
                                </div>
                            </div>
                        </slide>
                        <slide class="smartphone-сarousel">
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret Watson" src="@/assets/pictures/slider__Watson.png" alt="Kristin Watson">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Kristin Watson</h6>
                                    <p class="about__teacher">Marketer, Curator of Marketing Course</p>
                                </div>
                            </div>
                        </slide>
                        <slide class="smartphone-сarousel">
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret Li" src="@/assets/pictures/slider__Li.png" alt="Leslie Alexander Li">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Leslie Alexander Li</h6>
                                    <p class="about__teacher">Curator of HR & Recruting Course</p>
                                </div>
                            </div>
                        </slide>
                        <slide class="smartphone-сarousel">
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret McKinney" src="@/assets/pictures/slider__McKinney.png" alt="Marvin McKinney">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Marvin McKinney</h6>
                                    <p class="about__teacher">PM, Curator of Management Course</p>
                                </div>
                            </div>
                        </slide>
                        <slide class="smartphone-сarousel">
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret Murphy" src="@/assets/pictures/slider__ Murphy.png" alt="Kathryn Murphy">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Kathryn Murphy</h6>
                                    <p class="about__teacher">Analyst and Marketing specialist</p>
                                </div>
                            </div>
                        </slide>
                        <slide class="smartphone-сarousel">
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret Simmons" src="@/assets/pictures/slider__Simmons.png" alt="Brooklyn Simmons">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Brooklyn Simmons</h6>
                                    <p class="about__teacher">Curator of Development Course</p>
                                </div>
                            </div>
                        </slide>
                        <slide class="smartphone-сarousel">
                            <div class="slide__teacher__info__container">
                                <div class="teacher__portret__container">
                                    <div class="teacher__portret__gradient">
                                        <div class="network facebook"></div>
                                        <div class="network instagram"></div>
                                        <div class="network linked_in"></div>
                                    </div>
                                    <img class="teacher__portret Fisher" src="@/assets/pictures/slider_Fisher.png" alt="Cody Fisher">
                                </div>
                                <div class="teacher__info">
                                    <h6 class="name__teacher">Cody Fisher</h6>
                                    <p class="about__teacher">UX Designer, Curator of Design Course</p>
                                </div>
                            </div>
                        </slide>
                    </carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.tutors {
    background: #F4F5F7;

    &__container {
        padding-top: 150px;
        width: 1230px;
        padding-bottom: 100px;

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            width: 100%;
            padding-top: 120px;
            padding-bottom: 50px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            width: 100%;
            padding-top: 100px;
            padding-bottom: 30px;
        }

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            width: 100%;
            padding-top: 90px;
            padding-bottom: 20px;
        }
        
        .tutors__title__container {
            margin-bottom: 60px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin-bottom: 40px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-bottom: 40px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-bottom: 30px;
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }

            .tutors__title__string {
                font-weight: 700;
                font-size: 16px;
                line-height: 150%;
                letter-spacing: 1px;
                text-transform: uppercase;

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

            .tutors__title {
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
        
        .tutors__carousel-wrapper {
            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                display: none;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                display: none;
            }
        }

        .tutors__tablet-сarousel-wrapper {
            display: none;

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                display: inherit;
            }
        }

        .tutors__smartphone-сarousel-wrapper {
            display: none;

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                display: inherit;
            }
        }

        .tutors__carousel-wrapper,
        .tutors__tablet-сarousel-wrapper,
        .tutors__smartphone-сarousel-wrapper {

            .VueCarousel {
                max-width: 1575px;
                margin: 0 auto;

                .VueCarousel-wrapper {
                    width: 1250px;
                    margin: 0;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        width: 100%;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        width: 100%;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        width: 100%;
                    }

                    .VueCarousel-slide {
                        display: flex;

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            width: 250px;
                        }
                    }
                }

                .VueCarousel-pagination {
                    display: none!important;

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        display: inherit!important;
                    }

                    .VueCarousel-dot-container {
                        margin-top: 60px !important;

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            margin-top: 25px !important;
                        }

                        .VueCarousel-dot {
                            margin-top: 0 !important;
                            background-color: #B3B7BC !important;
                            width: 30px !important;
                            height: 5px !important;
                            border-radius: 25px !important;

                            @media screen and (min-width: 375px) and (max-width: 768px) { 
                                width: 20px !important;
                                height: 5px !important;
                                border-radius: 25% !important;
                            }

                            @media screen and (min-width: 320px) and (max-width: 374px) { 
                                width: 15px !important;
                                height: 5px !important;
                                border-radius: 25% !important;
                            }

                            &:focus {
                                outline: none !important;
                            }
                        }

                        .VueCarousel-dot--active {
                            background-color: #424551 !important;
                        }
                    }
                }

                .VueCarousel-navigation {

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        display: none;
                    }
                    
                    .VueCarousel-navigation-button {
                        width: 48px;
                        height: 48px;
                        border-radius: 100%;
                        background-color: transparent;
                        color: #424551;
                        top: unset !important;
                        bottom: 110%!important;
                        font-size: 50px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding-top: 0!important;
                        padding-bottom: 10px!important;
                        transition: all 1s ease-out;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            width: 38px;
                            height: 38px;
                            padding-bottom: 7px!important;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            width: 38px;
                            height: 38px;
                            padding-bottom: 7px!important;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            width: 30px;
                            height: 30px;
                            padding-bottom: 5px!important;
                        }


                        &:hover {
                            background-color:#FF3F3A;
                            color: #fff;
                        }

                        &:focus {
                            outline:transparent !important;
                        }
                    }

                    .VueCarousel-navigation-prev {
                        right: unset!important;
                        left: 95%!important;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            left: 94%!important;
                            font-size: 30px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            left: 88%!important;
                            font-size: 30px;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            left: 50%!important;
                            font-size: 27px;
                        }
                    }

                    .VueCarousel-navigation-next {
                        right: unset!important;
                        left: 92.5% !important;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            left: 91.5%!important;
                            font-size: 30px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            left: 88%!important;
                            font-size: 30px;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            left: 88%!important;
                            font-size: 27px;
                        }
                    }

                    .VueCarousel-navigation--disabled {
                        opacity: 1!important;
                    }

                }
            }

            .slide__teacher__info__container {
                margin-right: 30px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-right: 20px;
                }

                @media screen and (min-width: 820px) and (max-width: 1023px) {
                    width: 215px;
                    margin-right: 27px;
                }

                @media screen and (min-width: 768px) and (max-width: 819px) { 
                    width: 200px;
                    margin-right: 27px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: auto;
                    margin: 0 auto;
                }

                &:nth-of-type(3n) {
                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        margin-right: 0;
                    }
                }

                &:nth-of-type(4),
                &:nth-of-type(8) {
                    margin-right: 0;
                }


                .teacher__portret__container {
                    position: relative;

                    .teacher__portret {

                        @media screen and (min-width: 1215px) and (max-width: 1240px) { 
                            width: 249px;
                        }

                        @media screen and (min-width: 1024px) and (max-width: 1214px) { 
                            width: 200px;
                        }

                        @media screen and (min-width: 820px) and (max-width: 1023px) {
                            width: 215px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 819px) { 
                            width: 200px;
                        }
                    }

                    .teacher__portret__gradient {
                        
                        background: linear-gradient(180deg, rgba(30, 33, 44, 0) 43.9%, rgba(30, 33, 44, 0.03) 55.21%, rgba(30, 33, 44, 0.33) 68.73%, rgba(30, 33, 44, 0.56) 76.17%, rgba(30, 33, 44, 0.768225) 83.75%, rgba(30, 33, 44, 0.92) 91.49%, #1E212C 100%);
                        border-radius: 4px;
                        display: flex;
                        align-items: center;
                        width: 285px;
                        height: 340px;
                        position: absolute;
                        opacity: 0;
                        transition: all 1s ease-out;
                        cursor: pointer;

                        @media screen and (min-width: 1215px) and (max-width: 1240px) { 
                            width: 249px;
                            height: 297px;
                        }

                        @media screen and (min-width: 1024px) and (max-width: 1214px) { 
                            width: 200px;
                            height: 238.5px;
                            right: -1px;
                        }
                        
                        @media screen and (min-width: 820px) and (max-width: 1023px) { 
                            width: 215px;
                            height: 256.5px;
                            right: -1px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 819px) { 
                            width: 200px;
                            height: 256.5px;
                            right: -1px;
                        }

                        &:hover {
                            opacity: 1;
                        }

                        .network {
                            width: 24px;
                            height: 24px;
                            margin-right: 10px;
                            position: relative;
                            top: 40.5%;
                            left: 60%;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                left: 50%;
                                width: 20px;
                                height: 20px;
                            }

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                left: 50%;
                                width: 20px;
                                height: 20px;
                            }

                            &:last-of-type {
                                margin-right: 0;
                            }
                        }

                        .facebook {
                            background: url(../assets/pictures/facebook.png);
                            background-repeat: no-repeat;
                            background-position: center;
                            transition: all 1s ease-out;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                background-size: contain;
                            }

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                background-size: contain;
                            }

                            &:hover {
                                background: url(../assets/pictures/facebook-active.png);
                                background-repeat: no-repeat;
                                background-position: center;

                                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                    background-size: contain;
                                }

                                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                    background-size: contain;
                                }
                            }
                        }

                        .instagram {
                            background: url(../assets/pictures/instagram.png);
                            background-repeat: no-repeat;
                            background-position: center;
                            transition: all 1s ease-out;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                background-size: contain;
                            }

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                background-size: contain;
                            }

                            &:hover {
                                background: url(../assets/pictures/instagram-active.png);
                                background-repeat: no-repeat;
                                background-position: center;

                                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                    background-size: contain;
                                }

                                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                    background-size: contain;
                                }
                            }
                        } 

                        .linked_in {
                            background: url(../assets/pictures/linked_in.png);
                            background-repeat: no-repeat;
                            background-position: center;
                            transition: all 1s ease-out;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                background-size: contain;
                            }

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                background-size: contain;
                            }

                            &:hover {
                                background: url(../assets/pictures/linked_in-active.png);
                                background-repeat: no-repeat;
                                background-position: center;

                                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                    background-size: contain;
                                }

                                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                    background-size: contain;
                                }
                            }
                        }
                    }
                }

                .teacher__info {
                    margin-top: 16px;
                    text-align: center;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        width: 195px;
                    }

                    .name__teacher {
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 150%;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            font-size: 18px;
                        }
                    }

                    .about__teacher {
                        font-size: 16px;
                        line-height: 160%;
                        color: #787A80;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
}
</style>