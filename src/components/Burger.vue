<template>
    <Slide :closeOnNavigation="true">
        <div class="logo__container">
            <router-link to="/">
                <img class="logo" src="@/assets/pictures/logo.png" alt="SpiderShiba-logo">
            </router-link>
        </div>
        <router-link class="menu-item" to="/about-us">
            <span>About Us</span>
        </router-link>
        <router-link class="menu-item" to="/courses">
            <span>Courses</span>
        </router-link>
        <router-link class="menu-item" to="/events">
            <span>Events</span>
        </router-link>
        <router-link class="menu-item" to="/blog">
            <span>Blog</span>
        </router-link>
        <router-link class="menu-item" to="/contacts">
            <span>Contacts</span>
        </router-link>
            <div class="popup__button__container">
                <button class="show-modal-button" @click.prevent="showPopup(0)">Log In</button>
                <p class="slash">/</p>
                <button class="show-modal-button" @click.prevent="showPopup(1)">Register</button>
            </div>
            <transition-group name="fade">
                <modal-window v-if="isPopup === 0" key="p1" @showPopup="showPopup"/>
                <modal-window v-if="isPopup === 1" key="p2" @showPopup="showPopup">
                    <template v-slot:title>
                        <h3 class="modal-title">
                            Sign up
                        </h3>
                        <p class="modal__paragraph">
                            Registration takes less than a minute but gives you full control over your studying.
                        </p>
                    </template>
                    <template v-slot:body>
                        <form class="question__form__container">
                            <div class="contact__information__container">
                                <div class="email">
                                    <div class="email__text">
                                        Email
                                    </div>
                                    <input class="input" type="email" name="question" placeholder="Your working email" required>
                                </div>
                                <div class="password">
                                    <div class="password__text">
                                        Password
                                    </div>
                                    <input class="input" type="password" name="question">
                                </div>
                                <div class="password confirm">
                                    <div class="password__text">
                                        Confirm Password
                                    </div>
                                    <input class="input" type="password" name="question">
                                </div>
                            </div>
                            <div class="submit__container">
                                <label class="custom-checkbox">
                                        <input required type="checkbox" value="value-1">
                                        <span class="check__text">Remember me </span>
                                </label>
                                <input type="submit" value="Sign in" class="submit">
                            </div>
                            <p class="signUp__text">
                                Already have an account?
                                <button class="show-modal-button" @click.prevent="showPopup(0)">
                                    Sign in
                                </button>
                            </p>
                        </form>
                    </template>
                    <template v-slot: footer>
                        <div class="modal-footer">
                            <h2 class="modal-footer__text">
                                Or sign in with
                            </h2>
                        </div>
                    </template>
                </modal-window>
            </transition-group>
        <div class="bm-burger-button">
            <router-link class="button__text" to="/contacts">Get consultation</router-link>
        </div>
    </Slide>
</template>

<script>
import { Slide } from 'vue-burger-menu';
import ModalWindow from '../components/SignIn.vue';
 
export default {
    components: {
        ModalWindow,
        Slide
    },
    data () {
        return {
            isPopup: null
        };
    },
    methods: {
        showPopup (i) {
            this.isPopup = i;
        },

        swipeHandler (left) {
            console.log(left)  // May be left / right / top / bottom
        }
    }
}
</script>

<style lang="scss">

.bm-overlay {
    background: unset !important;
}

.bm-menu {
    background: #b26957 !important; 
    padding-top: 20px;

    @media screen and (min-width: 320px) and (max-width: 760px) { 
        padding-top: 17px;
    }

    .bm-item-list>* {
        padding: 0 !important;
    }

    .bm-item-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 0 !important;
        
        .logo__container {
            padding: 0;
            margin-bottom: 50px;
            padding-left: 15px !important;
            padding-top: 8px !important;
        }

        .menu-item {
            font-weight: 600;
            color: #FFFFFF;
            font-size: 19px;
            line-height: 23px;
            opacity: 0.8;
            padding-left: 0;
            padding-top: 0;
            padding-bottom: 25px !important;

            &:last-of-type {
                padding-bottom: 0;
            }
        }

        .popup__button__container {
            display: none;
            align-items: center;
            
            @media screen and (min-width: 320px) and (max-width: 767px) { 
                display: flex;
            }

            &::before {
                content: url(../assets/pictures/person_white.png);
                margin-right: 9px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-right: 5px;
                }
            }

            .show-modal-button {
                margin-right: 9px;
                font-weight: 700;
                font-size: 16px;
                line-height: 160%;
                display: flex;
                align-items: center;
                color: #FFFFFF;
                background: 0;
                padding: 0;
                border: 0;
                cursor: pointer;
                transition: all 1s ease-out;
                                    

                &:hover {
                    color: #FF3F3A;
                }

                &:last-of-type {
                    margin-right: 0;
                    margin-left: 9px;
                }
            }

            .slash {
                font-weight: 700;
                font-size: 16px;
                color: #FFFFFF;
            }
        }

        .bm-burger-button {
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(55.95deg, #FF3F3A 0%, #F75E05 100%);
            border-radius: 4px;
            width: 200px;
            height: 52px;
            margin-top: 35px;
            margin-right: 0;
            transition: all 1s ease-out;
            cursor: pointer;

            &:hover {
                background: linear-gradient(55.95deg, #ffa200 0%, #ff0000 100%);
            }
            
            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                width: 270px;
            }

            @media screen and (min-width: 320px) and (max-width: 760px) { 
                width: 250px;
            }

            .button__text {
                color: #FFFFFF;
                font-weight: 700;
                line-height: 52px;
                letter-spacing: 0.5px;
            }          
        }

    }

    .cross-style {
        right: 5%;
        top: 4.5%;

        @media screen and (max-width: 320px) { 
            right: 2%;
        }
    }
}

.bm-burger-button {
    display: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(55.95deg, #FF3F3A 0%, #F75E05 100%);
    border-radius: 5px;
    width: 40px;
    height: 40px;
    position: inherit;

    @media screen and (min-width: 768px) and (max-width: 1023px) { 
        display: flex;
        margin-right: 225px;
    }

    @media screen and (min-width: 320px) and (max-width: 760px) { 
        display: flex;
    }

    .bm-burger-bars {
        background: rgba(255, 255, 255, 1);
    }

    .line-style {
        position: inherit;
        width: 17px;
        height: unset;
        border: 2px solid #FFFFFF;
        border-radius: 10px;
        margin-bottom: 6px;

        &:nth-of-type(3) {
            margin-bottom: 0;
        }
    }
}
</style>