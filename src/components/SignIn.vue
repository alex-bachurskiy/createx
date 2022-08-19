<template>
    <div class="modal-shadow">
        <div class="modal">
            <div class="modal-close" @click="closeModal">
                <img src="@/assets/pictures/cross.png">
            </div>
            <slot name="title">
                <h3 class="modal-title">
                    Sign in
                </h3>
                <p class="modal__paragraph">
                    Sign in to your account using email and password provided during registration.
                </p>
            </slot>
            <slot name="body">
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
                    </div>
                    <div class="submit__container">
                        <label class="custom-checkbox">
                            <input required type="checkbox" value="value-1">
                            <span class="check__text">
                                Keep me signed in
                            </span>
                        </label>
                        <p class="forgot">Forgot password?</p>
                        <input type="submit" value="Sign in" class="submit">
                    </div>
                    <div class="signUp__text">
                        Don't have an account?
                        <button class="show-modal-button" @click.prevent="showPopup(1)">
                          Sign up
                        </button>
                    </div>
                </form>
            </slot>
            <slot name="footer">
                <div class="modal-footer">
                    <h2 class="modal-footer__text">
                        Or sign in with
                    </h2>
                    <div class="networks__container">
                        <div class="network facebook"></div>
                        <div class="network google"></div>
                        <div class="network twitter"></div>
                        <div class="network linked_in"></div>
                    </div>

                </div>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ModalWindow",

        data () {
            return {
                // isPopupTwo: false
            };
        },

        methods: {
            closeModal () {
                this.$emit('showPopup', null);
            },

            showPopup (i) {
                this.$emit('showPopup', i);
            },

            swipeHandler (left) {
                console.log(left);
            }
        },
    }
</script>

<style scoped lang="scss">

    .modal-shadow {
        position: fixed;
        top: 0;
        left: 0;
        min-height: 100%;
        width: 100%;
        background: rgba(30, 33, 44, .75);
        z-index: 77777;
    }

    .modal {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        padding: 25px 0;
        width: 486px;
        background: #FFFFFF;
        border: 1px solid #E5E8ED;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 4px;
        box-shadow: 0px 60px 80px -20px rgba(30, 33, 44, 0.16), 0px 26px 24px -10px rgba(30, 33, 44, 0.1), 0px 12px 10px -6px rgba(30, 33, 44, 0.08), 0px 4px 4px -4px rgba(30, 33, 44, 0.05);

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            width: 315px;
            padding: 15px;
        }

        &-close {
            background: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 13px;
            right: 13px;
            width: 24.66px;
            height: 25px;
            cursor: pointer;
        }

        .modal-title {
            font-weight: 700;
            font-size: 28px;
            line-height: 150%;
            color: #1E212C;
            margin-bottom: 24px;

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                font-size: 20px;
                margin-bottom: 15px;
            }
        }

        .modal__paragraph {
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            color: #787A80;
            width: 390px;
            text-align: center;
            margin-bottom: 24px;

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                font-size: 13px;
                width: auto;
            }
        }

        .question__form__container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 390px;
            justify-content: center;

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                width: 315px;
            }

            .input {
                height: 44px;
                display: flex;
                align-items: center;
                padding-left: 16px;
                width: 100%;
                margin-top: 8px;
                &::placeholder {
                    font-family: 'Lato';
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 160%;
                    color: #9A9CA5;
                }
            }

            .contact__information__container {
                width: 390px;

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: 285px;
                }

                .email {
                    margin-bottom: 20px;
                    .email__text {
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 150%;
                        color: #424551;

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            font-size: 13px;
                        }
                    }
                }

                .password {
                    margin-bottom: 20px;
                    .password__text {
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 150%;
                        color: #424551;

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            font-size: 13px;
                        }
                    }
                }
            }

            .submit__container {
                display: flex;
                align-items: baseline;
                justify-content: space-between;
                flex-wrap: wrap;
                width: 100%;

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: 315px;
                    justify-content: center;
                    align-items: unset;
                }

                .forgot {
                    color: #FF3F3A;
                    font-weight: 400;
                    transition: all 1s ease-out;
                    cursor: pointer;

                    &:hover {
                        font-weight: 700;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        font-size: 14px;
                        padding-top: 3px;
                        margin-left: 35px;
                    }
                }

                .custom-checkbox {
                    margin-bottom: 24px;
                    display: flex;

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        font-size: 13px;
                    }

                    & > input {
                            position: absolute;
                            z-index: -1;
                            opacity: 0;
                            &:not(:disabled):not(:checked) {
                                & + span {
                                    &:hover {
                                        &::before {
                                            border-color: #FF3F3A;
                                        }
                                    }
                                }
                            }
                            &:not(:disabled):active {
                                & + span {
                                    &::before {
                                        background-color: #FF3F3A;;
                                        border-color: #FF3F3A;
                                    }
                                }
                            }
                            &:focus {
                                & + span {
                                    &::before {
                                        box-shadow: 0 0 0 0.2rem rgba(255, 98, 0, 0.25);
                                    }
                                }
                                &:not(:checked) {
                                    & + span {
                                        &::before {
                                            border-color: #FF3F3A;;
                                        }
                                    }
                                }
                            }
                            &:checked {
                                & + span {
                                    &::before {
                                        border-color: #FF3F3A;
                                        background-color: #FF3F3A;
                                        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
                                    }
                                }
                            }
                            &:disabled {
                                & + span {
                                    &::before {
                                        background-color: #e9ecef;
                                    }
                                }
                            }
                        }
                    & > span {
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 160%;
                        color: #424551;
                        display: inline-flex;
                        align-items: center;
                        user-select: none;

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            font-size: 14px;
                        }

                        &::before {
                            content: '';
                            display: inline-block;
                            width: 16px;
                            height: 16px;
                            flex-shrink: 0;
                            flex-grow: 0;
                            border: 1px solid #333333;
                            border-radius: 3px;
                            margin-right: 12px;
                            background-repeat: no-repeat;
                            background-position: center center;
                            background-size: 50% 50%;
                            cursor: pointer;
                            position: relative;
                            top: 1px;
                        }
                    }
                }

                .submit {
                    width: 100%;
                    height: 52px;
                    background: linear-gradient(55.95deg, #FF3F3A 0%, #F75E05 100%);
                    border-radius: 4px;
                    border: none;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 52px;
                    text-align: center;
                    letter-spacing: 0.5px;
                    color: #FFFFFF;
                    margin-bottom: 24px;
                    cursor: pointer;
                    transition: all 1s ease-out;

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        font-size: 14px;
                        width: 285px;
                    }

                    &:hover {
                        background: linear-gradient(55.95deg, #ffa200 0%, #ff0000 100%);
                    }
                }
            }

            .signUp__text {
                width: 100%;

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    font-size: 16px;
                    width: auto;
                }

                .show-modal-button {
                    border: none;
                    background: transparent;
                    height: 21px;
                    padding: 0;
                    font-size: 14px;
                    line-height: 150%;
                    color: #FF3F3A;
                    transition: all 1s ease-out;
                    cursor: pointer;

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        font-size: 13px;
                    }

                    &:hover {
                        font-weight: 700;
                    }
                }
            }
        }

        .modal-footer {
            border-top: 1px solid #E5E8ED;
            padding-top: 24px;
            margin-top: 24px;
            width: 100%;
            text-align: center;

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-top: 0;
                padding-top: 15px;
            }

            .modal-footer__text {
                font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                color: #787A80;
                margin-bottom: 16px;

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    font-size: 13px;
                }
            }

            .networks__container {
                justify-content: center;
                display: flex;
                .network {
                    width: 24px;
                    height: 24px;
                    margin-right: 14px;
                    cursor: pointer;

                    &:last-of-type {
                        margin-right: 0;
                    }
                }

                .facebook {
                    background: url(../assets/pictures/facebook_grey.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    transition: all 1s ease-out;

                    &:hover {
                        background: url(../assets/pictures/facebook_primary.png);
                        background-repeat: no-repeat;
                        background-position: center;
                    }
                }

                .google {
                    background: url(../assets/pictures/google.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    transition: all 1s ease-out;

                    &:hover {
                        background: url(../assets/pictures/google_primary.png);
                        background-repeat: no-repeat;
                        background-position: center;
                    }
                }
                    
                .twitter {
                    background: url(../assets/pictures/twitter_grey.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    transition: all 1s ease-out;

                    &:hover {
                        background: url(../assets/pictures/twitter_primary.png);
                        background-repeat: no-repeat;
                        background-position: center;
                    }
                }

                .linked_in {
                    background: url(../assets/pictures/linked_In_grey.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    transition: all 1s ease-out;

                    &:hover {
                        background: url(../assets/pictures/linked_In_primary.png);
                        background-repeat: no-repeat;
                        background-position: center;
                    }
                }
            }
        }
    }
</style>
