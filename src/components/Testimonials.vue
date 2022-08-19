<template>
    <div class="testimonials">
        <div class="container">
            <div class="testimonials__container">
                <div class="testimonials__title__container">
                    <h3 class="testimonials__title__string">
                        testimonials
                    </h3>
                    <h1 class="testimonials__title">
                        What our students say
                    </h1>
                </div>
                <div class="testimonials__carousel-wrapper">
                    <carousel 
                        :navigationEnabled="true"
                        :per-page="1"
                        :navigate-to="someLocalProperty" 
                        :mouse-drag="true" 
                        :NextLabel="true"
                        :autoplay="false"
                    >
                        <slide>
                            <div class="slide__info__container">
                                <p class="slide__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. 
                                    Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. 
                                    Congue tortor in euismod vulputate etiam eros. 
                                    Pulvinar neque pharetra arcu diam maecenas diam integer in.
                                </p>
                                <div class="user__profile__container">
                                    <img class="user__photo" src="@/assets/pictures/user__photo.png" alt="user__photo">
                                    <div class="user__info__container">
                                        <h6 class="user__name">
                                            Eleanor Pena
                                        </h6>
                                        <p class="user__info">
                                            Position, Course
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <slide>
                            <div class="slide__info__container">
                                <p class="slide__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. 
                                    Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. 
                                    Congue tortor in euismod vulputate etiam eros. 
                                    Pulvinar neque pharetra arcu diam maecenas diam integer in.
                                </p>
                                <div class="user__profile__container">
                                    <img class="user__photo" src="@/assets/pictures/user__photo.png" alt="user__photo">
                                    <div class="user__info__container">
                                        <h6 class="user__name">
                                            Eleanor Pena
                                        </h6>
                                        <p class="user__info">
                                            Position, Course
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <slide>
                            <div class="slide__info__container">
                                <p class="slide__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. 
                                    Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. 
                                    Congue tortor in euismod vulputate etiam eros. 
                                    Pulvinar neque pharetra arcu diam maecenas diam integer in.
                                </p>
                                <div class="user__profile__container">
                                    <img class="user__photo" src="@/assets/pictures/user__photo.png" alt="user__photo">
                                    <div class="user__info__container">
                                        <h6 class="user__name">
                                            Eleanor Pena
                                        </h6>
                                        <p class="user__info">
                                            Position, Course
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <slide>
                            <div class="slide__info__container">
                                <p class="slide__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. 
                                    Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. 
                                    Congue tortor in euismod vulputate etiam eros. 
                                    Pulvinar neque pharetra arcu diam maecenas diam integer in.
                                </p>
                                <div class="user__profile__container">
                                    <img class="user__photo" src="@/assets/pictures/user__photo.png" alt="user__photo">
                                    <div class="user__info__container">
                                        <h6 class="user__name">
                                            Eleanor Pena
                                        </h6>
                                        <p class="user__info">
                                            Position, Course
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <slide>
                            <div class="slide__info__container">
                                <p class="slide__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. 
                                    Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. 
                                    Congue tortor in euismod vulputate etiam eros. 
                                    Pulvinar neque pharetra arcu diam maecenas diam integer in.
                                </p>
                                <div class="user__profile__container">
                                    <img class="user__photo" src="@/assets/pictures/user__photo.png" alt="user__photo">
                                    <div class="user__info__container">
                                        <h6 class="user__name">
                                            Eleanor Pena
                                        </h6>
                                        <p class="user__info">
                                            Position, Course
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </slide>
                    </carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide,} from 'vue-carousel';
 
export default {
  components: {
    Carousel,
    Slide,
  }
}
</script>

<style lang="scss">
.testimonials {
    background: #F4F5F7;
    &__container {
        padding-top: 80px;
        padding-bottom: 100px;

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            padding-top: 60px;
            padding-bottom: 80px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            padding-top: 50px;
            padding-bottom: 70px;
        }

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            padding-top: 30px;
            padding-bottom: 50px;
        }

        .testimonials__title__container {
            text-align: center;
            margin-bottom: 60px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin-bottom: 40px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-bottom: 40px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-bottom: 30px;
                width: auto;
            }

            .testimonials__title__string {
                font-weight: 700;
                line-height: 150%;
                letter-spacing: 1px;
                text-transform: uppercase;
                font-size: 16px;
                margin-bottom: 8px;

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

            .testimonials__title {
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

        .testimonials__carousel-wrapper {

            .VueCarousel {
                max-width: 1575px;
                margin: 0 auto;

                .VueCarousel-wrapper {
                    width: 1020px;
                    margin: 0 60px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        width: 655px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        width: 545px;
                        margin: 0 auto;
                    }

                    @media screen and (min-width: 425px) and (max-width: 767px) { 
                        width: 385px;
                        margin: 0 auto;
                    }

                    @media screen and (min-width: 375px) and (max-width: 424px) { 
                        width: 330px;
                        margin: 0 auto;
                    }

                    @media screen and (min-width: 320px) and (max-width: 374px) { 
                        width: 280px;
                        margin: 0 auto;
                    }
                }

                .VueCarousel-pagination {

                    .VueCarousel-dot-container {
                        margin-top: 60px !important;

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            margin-top: 30px !important;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            margin-top: 25px !important;
                        }

                        .VueCarousel-dot {
                            margin-top: 0 !important;
                            background-color: #B3B7BC !important;
                            width: 30px !important;
                            height: 5px !important;
                            border-radius: 25px !important;

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

                    .VueCarousel-navigation-button {
                        width: 48px;
                        height: 48px;
                        border-radius: 100%;
                        background-color: transparent;
                        color: #424551;
                        top: 40% !important;
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
                            width: 35px;
                            height: 35px;
                            padding-bottom: 5px!important;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            display: none !important;
                        }

                        &:hover {
                            background-color:#FF3F3A;
                            color: #fff;
                        }

                        &:focus {
                            outline:transparent !important;
                        }
                    }

                    .VueCarousel-navigation--disabled {
                        opacity: 1!important;
                    }

                    .VueCarousel-navigation-prev {
                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            font-size: 30px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            font-size: 27px;
                            right: 98% !important;
                            left: unset !important;
                        }
                    }

                    .VueCarousel-navigation-next {
                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            font-size: 30px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            font-size: 27px;
                            left: 98% !important;
                            right: unset !important;
                        }
                    }

                }
            }

            .slide__info__container {
                background: #FFFFFF;
                box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 4px 4px -4px rgba(30, 33, 44, 0.03);
                border-radius: 4px;
                padding-left: 163px;
                padding-top: 64px;
                padding-right: 105px;
                padding-bottom: 64px;
                width: 1020px;
                height: 344px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    width: 655px;
                    padding: 40px 70px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: auto;
                    padding: 35px 75px;
                    height: 100%;
                }

                @media screen and (min-width: 425px) and (max-width: 767px) { 
                    width: auto;
                    padding: 25px 40px;
                    height: 100%;
                }

                @media screen and (min-width: 375px) and (max-width: 424px) { 
                    width: 330px;
                    padding: 25px 35px;
                    height: 100%;
                }

                @media screen and (min-width: 320px) and (max-width: 374px) { 
                    width: 285px;
                    padding: 25px 30px;
                    height: 100%;
                }

                .slide__text {
                    font-size: 20px;
                    line-height: 150%;
                    position: relative;
                    margin-bottom: 24px;

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        font-size: 18px;
                        width: auto;
                        padding-left: 15px;
                    }

                    &::before {
                        content: url(../assets/pictures/braces.png);
                        position: absolute;
                        right: 103%;

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            width: 15px;
                        }
                    }
                }

                .user__profile__container {
                    display: flex;
                    align-items: center;

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        padding-left: 15px;
                    }

                    .user__photo {
                        margin-right: 20px;
                    }

                    .user__name {
                        font-weight: 700;
                        font-size: 16px;
                        line-height: 160%;
                        margin-bottom: 4px;

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            font-size: 14px;
                        }
                    }

                    .user__info {
                        font-size: 14px;
                        line-height: 150%;
                        color: #787A80;

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            font-size: 13px;
                        }
                    }
                }
            }
        }
    }
}
</style>
