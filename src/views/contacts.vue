<template>
    <div class="contacts">
        <div class="container">
            <div class="contacts__container">
                <Header/>
                <div class="contact__main__container">
                    <div class="contacts__information__container">
                        <div class="contacts__title__container">
                            <h3 class="contacts__title__string">
                                Contact info
                            </h3>
                            <h1 class="contacts__title">
                                Get in touch
                            </h1>
                        </div>
                        <div class="talk__container">
                            <div class="talk__information">
                                <h6 class="talk__title">
                                    Talk to us:
                                </h6>
                                <p class="talk">
                                    hello@createx.com
                                </p>
                            </div>
                        </div>
                        <div class="call__container">
                            <div class="call__information">
                                <h6 class="call__title">
                                    Call us:
                                </h6>
                                <p class="talk">
                                    (405) 555-0128
                                </p>
                            </div>                    
                        </div>
                        <div class="addres__container">
                            <div class="addres__information">
                                <h6 class="addres__title">
                                    Address:
                                </h6>
                                <p class="addres">
                                    2464 Royal Ln. Mesa, New Jersey 45463, USA
                                </p>
                            </div>                     
                        </div>
                        <div class="follows__container">
                            <h3 class="follows__title">
                                Follow us:
                            </h3>
                            <div class="follows__networks__container">
                                <div class="follows__network facebook">
                                    <img class="facebook" src="@/assets/pictures/facebook_grey.png" alt="facebook">
                                </div>
                                <div class="follows__network twitter">
                                    <img class="twitter" src="@/assets/pictures/twitter_grey.png" alt="twitter">
                                </div>
                                <div class="follows__network you_tube">
                                    <img class="you_tube" src="@/assets/pictures/you_tube_grey.png" alt="you_tube">
                                </div>
                                <div class="follows__network telegram">
                                    <img class="telegram" src="@/assets/pictures/telegram_grey.png" alt="telegram">
                                </div>
                                <div class="follows__network instagram">
                                    <img class="instagram" src="@/assets/pictures/instagram_grey.png" alt="instagram">
                                </div>
                                <div class="follows__network linked_in">
                                    <img class="linked_in" src="@/assets/pictures/linked_In_grey.png" alt="linked_in">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contacts__image">
                        <img class="map" src="@/assets/pictures/map.png" alt="map">
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="question__container">
                <div class="question__image__container">
                    <img class="question__image" src="@/assets/pictures/contacts__illustration.png" alt="question__image">
                </div>
                <div class="question__information__container">
                    <div class="question__title__container">
                        <h3 class="question__title__string">
                            Any questions?
                        </h3>
                        <h1 class="question__title">
                            Drop us a line
                        </h1>
                    </div>
                    <form class="question__form__container">
                        <div class="personal__information__container">
                            <div class="name">
                                <p class="name__text">
                                    First Name*
                                </p>
                                <input class="input" type="text" name="question" placeholder="Your first name" required>
                            </div>
                            <div class="surname">
                                <div class="surname__text">
                                    Last  Name*
                                </div>
                                <input class="input" type="text" name="question" placeholder="Your last name" required>
                            </div>
                        </div>
                        <div class="contact__information__container">
                            <div class="email">
                                <div class="email__text">
                                    Email*
                                </div>
                                <input class="input" type="email" name="question" placeholder="Your working email" required>
                            </div>
                            <div class="phone">
                                <div class="phone__text">
                                    Phone
                                </div>
                                <input class="input" type="tel" name="question" placeholder="Your phone number">
                            </div>
                        </div>
                        <div class="message">
                            <div class="message__text">
                                Message*
                            </div>
                            <textarea class="input" type="text" name="question" placeholder="Your message" required></textarea>
                        </div>
                        <div class="submit__container">
                            <label class="custom-checkbox">
                                <input required type="checkbox" value="value-1">
                                <span class="check__text">
                                    I agree to receive communications from Createx Online School
                                </span>
                            </label>
                            <input type="submit" value="Send message" class="submit">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
    name: "contacts",
    components: {
        Header,
        Footer
    }
};
</script>

<style lang="scss" scoped>
.contacts {
    
    &__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 180px;

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            margin-bottom: 160px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            margin-bottom: 130px;
        }

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            margin-bottom: 100px;
            align-items: unset;
        }

        .contact__main__container {
            display: flex;
            margin-top: 80px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin-top: 60px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-top: 50px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                flex-direction: column;
            }

            .contacts__information__container {
                margin-right: 165px;

                @media screen and (min-width: 1250px) and (max-width: 1519px) { 
                    margin-right: 145px;
                }

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-right: 20px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-right: 20px;
                    width: 230px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    margin-right: 0;
                    margin-bottom: 25px;
                }

                .contacts__title__container {
                    margin-bottom: 40px;

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        text-align: center;
                    }

                    .contacts__title__string {
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

                    .contacts__title {
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

                .talk__container,
                .call__container,
                .addres__container {
                    margin-bottom: 24px;

                    .talk__information,
                    .call__information,
                    .addres__information {

                        .talk__title,
                        .call__title,
                        .addres__title  {
                            font-weight: 700;
                            font-size: 14px;
                            line-height: 150%;
                            color: #787A80;

                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                font-size: 13px;
                            }
                        }

                        .talk,
                        .call,
                        .addres {
                            font-size: 18px;
                            line-height: 150%;
                            color: #1E212C;

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

                .addres__container {
                    margin-bottom: 48px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        margin-bottom: 38px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        margin-bottom: 30px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        margin-bottom: 20px;
                    }
                }

                .follows__container {

                    .follows__title {
                        margin-bottom: 25px;
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

                    .follows__networks__container {
                        display: flex;
                        align-items: center;
                        
                        .follows__network {
                            margin-right: 33px;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                margin-right: 25px;
                            }
                            
                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                margin-right: 20px;
                            }

                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                margin-right: 15px;
                            }

                            &:last-of-type {
                                margin-right: 0;
                            }
                        }
                    }
                }
            }

            .contacts__image {

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    width: 580px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: 390px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: auto;
                }

                .map {
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
    }

    .question__container {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: 180px;
        background: url(../assets/pictures/contacts__illustration.png);
        background-repeat: no-repeat;
        width: 1230px;
        background-position-x: left;
        background-position-y: 40px;

        @media screen and (min-width: 320px) and (max-width: 1240px) { 
            background: unset;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            align-items: unset;
        }

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            flex-direction: column;
            margin-bottom: 100px;
        }

        .question__information__container {
            margin-left: 90px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin-left: 60px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-left: 20px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-top: 30px;
                margin-left: 0;
            }

            .question__title__container {
                margin-bottom: 40px;

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    text-align: center;
                }

                .question__title__string {
                    margin-bottom: 8px;
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
                
                .question__title {
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

            .question__form__container {
                display: flex;
                flex-direction: column;

                .input {

                    &::placeholder {
                        font-family: 'Lato';
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 160%;
                        color: #9A9CA5;
                    }
                }

                .personal__information__container,
                .contact__information__container {
                    margin-bottom: 24px;
                    display: flex;

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        flex-direction: column;
                        margin-bottom: 0;
                    }
                }

                .name,
                .email {
                    margin-right: 25px;

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        margin-right: 0;
                    }
                }

                .name,
                .surname,
                .email,
                .phone,
                .message {
                    
                    .name__text,
                    .surname__text,
                    .email__text,
                    .phone__text,
                    .message__text{
                        margin-bottom: 8px;
                    }
                }

                .name,
                .surname,
                .email,
                .phone {
                    
                    .input {
                        width: 340px;
                        height: 52px;
                        background: #FFFFFF;
                        border: 1px solid #D7DADD;
                        border-radius: 4px;
                        padding-left: 15px;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            width: 200px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            width: 165px;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            width: 100%;
                            margin-bottom: 15px;
                        }
                    }
                }

                .message { 
                    margin-bottom: 48px;
                    .input {
                        width: 705px;
                        background: #FFFFFF;
                        border: 1px solid #D7DADD;
                        border-radius: 4px;
                        padding-left: 15px;
                        padding-top: 13px;
                        padding-bottom: 89px;
                        height: 15px;
                        resize: vertical;
                        overflow: hidden;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            width: 430px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            width: 350px;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            width: 100%;
                        }
                    }
                }

                .submit__container {
                    display: flex;
                    align-items: flex-start;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        flex-direction: column;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        flex-direction: column;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        flex-direction: column;
                    }

                    .custom-checkbox {
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
                            max-width: 315px;
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 160%;
                            color: #424551;
                            display: inline-flex;
                            align-items: center;
                            user-select: none;

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                font-size: 14px;
                            }

                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                font-size: 13px;
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
                                bottom: 10px;
                            }
                        }
                    } 

                    .submit {
                        margin-left: 50px;
                        width: 340px;
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
                        cursor: pointer;
                        transition: all 1s ease-out;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            margin-left: 0;
                            margin-top: 10px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            margin-left: 0;
                            margin-top: 10px;
                            width: 300px;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            width: 100%;
                            margin-left: 0;
                            margin-top: 15px;
                        }

                        &:hover {
                            background: linear-gradient(55.95deg, #ffa200 0%, #ff0000 100%);
                        }
                    }  
                }
            }
        }

        .question__image__container {

            display: none; 

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                display: block; 
                width: 380px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                display: block; 
                width: 275px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                display: block; 
                width: 275px;
            }

            .question__image {
                width: 100%;
            }
        }
    }
}
</style>