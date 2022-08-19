<template>
    <div id="header">
        <div class="header__container">
            <div class="logo__container">
                <router-link class="menu-item" to="/">
                    <img class="logo" src="@/assets/pictures/logo.png" alt="Createx-logo">
                </router-link>
            </div>
            <div class="menu__container">
                <router-link class="menu-item" to="/about-us" exact>About Us</router-link>
                <router-link class="menu-item" to="/courses">Courses</router-link>
                <router-link class="menu-item" to="/events">Events</router-link>
                <router-link class="menu-item" to="/blog">Blog</router-link>
                <router-link class="menu-item" to="/contacts">Contacts</router-link>
            </div>
            <div class="header__button">
                <router-link class="button__text" to="/contacts">Get consultation</router-link>
            </div>
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
            <Burger/>
        </div>
    </div>
</template>

<script>
    import ModalWindow from '../components/SignIn.vue';
    import Burger from '../components/Burger.vue';

    export default {
        name: 'App',
        components: {
            ModalWindow,
            Burger
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


<style lang="scss" scoped>
#header {
    .header__container {
        display: flex;
        padding-top: 20px;
        align-items: center;

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            justify-content: space-between;
        }

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            justify-content: space-between;
        }

        .logo__container {
            margin-right: 60px;

            @media screen and (min-width: 1215px) and (max-width: 1519px) { 
                margin-right: 93px;
            }

            @media screen and (min-width: 1024px) and (max-width: 1214px) { 
                margin-right: 40px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                order: 2;
                margin-right: 0;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-right: 0;
            }
        }

        .menu__container {
            margin-right: 200px;

            @media screen and (min-width: 1215px) and (max-width: 1519px) { 
                margin-right: 90px;
            }

            @media screen and (min-width: 1024px) and (max-width: 1214px) { 
                margin-right: 20px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                display: none;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                display: none;
            }

            a.router-link-active, li.router-link-active>a {
                color: #FF3F3A;
            }

           .menu-item {
                margin-right: 40px;
                font-weight: 700;
                line-height: 160%;
                color: #424551;
                transition: all 1s ease-out;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-right: 30px;
                    font-size: 14px;
                }

                &:last-of-type {
                    margin-right: 0;
                }

                &:hover {
                   color: #F75E05;
                }
           }
        }

        

        .header__button {
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(55.95deg, #FF3F3A 0%, #F75E05 100%);
            margin-right: 38px;
            border-radius: 4px;
            width: 207px;
            height: 52px;
            transition: all 1s ease-out;
            cursor: pointer;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                width: 150px;
                margin-right: 20px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                display: none;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                display: none;
            }

            &:hover {
                background: linear-gradient(55.95deg, #ffa200 0%, #ff0000 100%);
            }

            .button__text {
                color: #FFFFFF;
                font-weight: 700;
                line-height: 52px;
                letter-spacing: 0.5px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    font-size: 14px;
                }
            }
        }

        .popup__button__container {
            display: flex;
            align-items: center;
            
            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                order: 2;
                margin-left: 85px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                display: none;
            }

            &::before {
                content: url(../assets/pictures/profile.png);
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
                color: #424551;
                background: 0;
                padding: 0;
                border: 0;
                cursor: pointer;
                transition: all 1s ease-out;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    font-size: 14px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    font-size: 13px;
                }
                                    

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

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    font-size: 14px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    font-size: 13px;
                }
            }
        }
    }
}
</style>
