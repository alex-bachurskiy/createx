<template>
    <div class="footer">
        <div class="container">
            <div class="footer__container">
                <div class="footer__information">
                    <router-link class="menu-item" to="/">
                        <img class="footer__logo" src="@/assets/pictures/logo__light.png" alt="Createx-logo">
                    </router-link>
                    <p class="footer__information__paragraph">
                        Createx Online School is a leader in online studying. 
                        We have lots of courses and programs from the main market experts. 
                        We provide relevant approaches <br>to online learning, internships and employment in the 
                        largest companies in the country. 
                    </p>
                    <div class="footer__networks__container">
                        <div class="network facebook"></div>
                        <div class="network twitter"></div>
                        <div class="network you_tube"></div>
                        <div class="network telegram"></div>
                        <div class="network instagram"></div>
                        <div class="network linked_in"></div>
                    </div>
                </div>
                <div class="footer__site__map__container">
                    <h3 class="footer__site__map__title">
                        site map
                    </h3>
                    <router-link class="footer__menu-item" to="/about-us" exact>About Us</router-link>
                    <router-link class="footer__menu-item" to="/courses">Courses</router-link>
                    <router-link class="footer__menu-item" to="/events">Events</router-link>
                    <router-link class="footer__menu-item" to="/blog">Blog</router-link>
                    <router-link class="footer__menu-item" to="/contacts">Contacts</router-link>
                </div>
                <div class="footer__courses__container">
                    <h3 class="footer__courses__title">
                        courses
                    </h3>
                    <router-link class="courses__menu-item" to="">Marketing</router-link>
                    <router-link class="courses__menu-item" to="">Management</router-link>
                    <router-link class="courses__menu-item" to="">HR & Recruting</router-link>
                    <router-link class="courses__menu-item" to="">Design</router-link>
                    <router-link class="courses__menu-item" to="">Development</router-link>
                </div>
                <div class="footer__contact__container">
                    <h3 class="footer__contact__title">
                        contact us
                    </h3>
                    <p class="phone">(405) 555-0128</p>
                    <p class="mail">hello@createx.com</p>
                </div>
                <div class="footer__form__container">
                    <h3 class="footer__form__title">
                        sign up to our newsletter
                    </h3>
                    <form class="subscribe__form">
                        <input class="subscribe__input" type="email" name="subscribe" placeholder="Email address" required>
                        <input type="submit" value="➟" class="subscribe__submit">
                    </form>
                    <h3 class="footer__form__paragraph">
                        <sup>*</sup>Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.
                    </h3>
                </div>
            </div>
        </div>
        <div class="footer__rights">
            <div class="container">
                <div class="footer__rights__container">
                    <p class="footer__rights__text">
                        &copy; All rights reserved. Made with <img class="heart" src="@/assets/pictures/heart.png" alt="love"> by Createx Studio 
                    </p>
                    <a class="scroll__top" href="#header" v-scroll-to="'#header'">
                        go to top
                    </a> 
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    background: #1E212C;
    &__container {
        padding-top: 80px;
        display: flex;
        margin-bottom: 60px;
        width: 1230px;

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            padding-top: 60px;
            margin-bottom: 40px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            padding-top: 50px;
            margin-bottom: 30px;
            flex-wrap: wrap;
        }

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: unset;
            padding-top: 35px;
            margin-bottom: 25px;
        }

        .footer__information {
            width: 277px;
            margin-right: 70px;

            @media screen and (min-width: 1024px) and (max-width: 1214px) { 
                margin-right: 25px;
                width: 218px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-right: 0;
                margin-bottom: 25px;
                width: 100%;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                width: 100%;
                margin-right: 0;
                margin-bottom: 20px;
            }

            .footer__logo {
                margin-bottom: 25px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-bottom: 15px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-bottom: 15px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    margin-bottom: 15px;
                }
            }

            .footer__information__paragraph {
                font-size: 12px;
                line-height: 150%;
                color: #FFFFFF;
                opacity: 0.6;

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    font-size: 14px;
                    opacity: 0.65;
                    padding-right: 15px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    font-size: 13px;
                    opacity: 0.65;
                }

                br {

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        display: none;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        display: none;
                    }
                }
            }

            .footer__networks__container {
                display: flex;
                margin-top: 38px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-top: 25px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-top: 15px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    margin-top: 15px;
                }

                .network {
                    width: 24px;
                    height: 24px;
                    margin-right: 20px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        margin-right: 10px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        margin-top: 15px;
                        width: 20px;
                        height: 20px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        margin-top: 15px;
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

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        background-size: contain;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        background-size: contain;
                    }

                    &:hover {
                        background: url(../assets/pictures/facebook-active.png);
                        background-repeat: no-repeat;
                        background-position: center;

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            background-size: contain;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            background-size: contain;
                        }
                    }
                }

                .twitter {
                    background: url(../assets/pictures/twitter.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    transition: all 1s ease-out;

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        background-size: contain;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        background-size: contain;
                    }

                    &:hover {
                        background: url(../assets/pictures/twitter-active.png);
                        background-repeat: no-repeat;
                        background-position: center;
                    }                   
                    
                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        background-size: contain;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        background-size: contain;
                    }
                }
                
                .you_tube {
                    background: url(../assets/pictures/you_tube.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    transition: all 1s ease-out;

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        background-size: contain;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        background-size: contain;
                    }

                    &:hover {
                        background: url(../assets/pictures/you_tube-active.png);
                        background-repeat: no-repeat;
                        background-position: center;

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            background-size: contain;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            background-size: contain;
                        }
                    }
                }
                                
                .telegram {
                    background: url(../assets/pictures/telegram.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    transition: all 1s ease-out;

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        background-size: contain;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        background-size: contain;
                    }

                    &:hover {
                        background: url(../assets/pictures/telegram-active.png);
                        background-repeat: no-repeat;
                        background-position: center;

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            background-size: contain;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            background-size: contain;
                        }
                    }
                }                                
                .instagram {
                    background: url(../assets/pictures/instagram.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    transition: all 1s ease-out;

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        background-size: contain;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        background-size: contain;
                    }

                    &:hover {
                        background: url(../assets/pictures/instagram-active.png);
                        background-repeat: no-repeat;
                        background-position: center;

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            background-size: contain;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            background-size: contain;
                        }
                    }
                }                                
                .linked_in {
                    background: url(../assets/pictures/linked_in.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    transition: all 1s ease-out;

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        background-size: contain;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        background-size: contain;
                    }

                    &:hover {
                        background: url(../assets/pictures/linked_in-active.png);
                        background-repeat: no-repeat;
                        background-position: center;

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            background-size: contain;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            background-size: contain;
                        }
                    }
                }
            }
        }

        .footer__site__map__container {
            display: flex;
            flex-wrap: wrap;
            width: 100px;
            margin-right: 75px;

            @media screen and (min-width: 1024px) and (max-width: 1214px) { 
                margin-right: 25px;
                width: 71px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-right: 25px;
                width: 71px;
            }
            
            @media screen and (min-width: 425px) and (max-width: 767px) {
                width: 20%;  
                margin-right: 20px;
            }

            @media screen and (min-width: 375px) and (max-width: 424px) {
                width: 20%; 
                margin-right: 15px;
            }

            @media screen and (min-width: 320px) and (max-width: 374px) { 
                margin-right: 20px;
                width: 25%;
                margin-bottom: 15px;
            }

            .footer__site__map__title {
                font-weight: 700;
                line-height: 150%;
                letter-spacing: 1px;
                color: #FFFFFF;
                text-transform: uppercase;
                margin-bottom: 12px;

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

            .footer__menu-item {
                color: #FFFFFF;
                opacity: 0.6;
                margin-bottom: 8px;
                width: 78px;

                &:last-of-type {
                    margin-bottom: 0;
                }
            }
        }

        .footer__courses__container {
            display: flex;
            flex-wrap: wrap;
            width: 109px;
            margin-right: 80px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                width: 95px;
                margin-right: 25px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-right: 25px;
            }

            @media screen and (min-width: 425px) and (max-width: 767px) { 
                margin-right: 20px;
                width: 25%; 
            }

            @media screen and (min-width: 375px) and (max-width: 424px) { 
                margin-right: 11px;
                width: 30%; 
            }

            @media screen and (min-width: 320px) and (max-width: 374px) { 
                margin-right: 20px;
                width: 35%;
                margin-bottom: 15px;
            }

            .footer__courses__title {
                font-weight: 700;
                line-height: 150%;
                letter-spacing: 1px;
                color: #FFFFFF;
                text-transform: uppercase;
                margin-bottom: 12px;

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

            .courses__menu-item {
                color: #FFFFFF;
                opacity: 0.6;
                margin-bottom: 8px;

                &:last-of-type {
                    margin-bottom: 0;
                }
            }
        }

        .footer__contact__container {
            margin-right: 75px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin-right: 25px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-right: 30px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-right: 0;
            }

            .footer__contact__title {
                font-weight: 700;
                line-height: 150%;
                letter-spacing: 1px;
                color: #FFFFFF;
                text-transform: uppercase;
                margin-bottom: 12px;

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

            .phone,
            .mail {
                color: #FFFFFF;
                opacity: 0.6;
                margin-bottom: 8px;
                height: 26px;
                line-height: 160%;
                position: relative;

                &:last-of-type {
                    margin-bottom: 0;
                }
            }

            .phone {
                &::before {
                    content: url(../assets/pictures/phone.png);
                    margin-top: 1px;
                    margin-right: 11px;
                    position: relative;
                    top: 2px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        margin-right: 5px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        margin-right: 5px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        margin-right: 5px;
                    }
                }
            }

            .mail {
                &::before {
                    content: url(../assets/pictures/mail.png);
                    margin-right: 11px;
                    position: relative;
                    top: 1px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        margin-right: 5px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        margin-right: 5px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        margin-right: 5px;
                    }
                }
            }
        }

        .footer__form__container {
            width: 286px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                width: 230px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                width: 230px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-top: 25px;
            }

            .footer__form__title,
            .footer__form__paragraph {
                color: #FFFFFF;
            }

            .footer__form__title {
                font-weight: 700;
                font-size: 16px;
                line-height: 150%;
                letter-spacing: 1px;
                text-transform: uppercase;
                margin-bottom: 24px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    font-size: 14px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    font-size: 14px;
                }
            }

            .subscribe__form {
                position: relative;

                .subscribe__input {
                    width: 286px;
                    height: 36px;
                    background: rgba(255, 255, 255, 0.12);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    padding-left: 16px;
                    border-radius: 4px;
                    
                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        width: 100%;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        width: 100%;
                    }

                    &::placeholder {
                        font-size: 12px;
                        line-height: 150%;
                        color: #FFFFFF;
                        opacity: 0.6;
                    }
                }

                .subscribe__submit {
                    color: #FFFFFF;
                    background-color: transparent;
                    border: unset;
                    position: absolute;
                    right: 3%;
                    top: 22%;
                    cursor: pointer;
                }
            }

            .footer__form__paragraph {
                font-size: 10px;
                line-height: 150%;
                margin-top: 12px;
                width: 286px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    width: 100%;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: 100%;
                }
            }
        }
    }

    .footer__rights {
        background: rgba(255, 255, 255, .05);

        &__container {
            display: flex;
            justify-content: space-between;
            padding: 20px 0;
            align-items: flex-end;
            width: 1230px;

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                padding: 15px 0;
                align-items: center;
            }

            .footer__rights__text {
                font-weight: 400;
                font-size: 12px;
                line-height: 150%;
                color: #FFFFFF;

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: 50%;
                }
            }

            .scroll__top {
                font-weight: 700;
                font-size: 14px;
                line-height: 150%;
                color: #FFFFFF;
                opacity: 0.6;
                text-transform: uppercase;

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    font-size: 13px;
                }
            }
        }
    }
}
</style>