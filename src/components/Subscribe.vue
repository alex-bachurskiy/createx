<template>
    <div class="subscribe">
        <div class="container">
            <div class="subscribe__container">
                <div class="subscribe__title__container">
                    <h3 class="subscribe__title__string">
                        Don’t miss anything
                    </h3>
                    <h1 class="subscribe__title">
                        Subscribe to the Createx School announcements
                    </h1>
                </div>
                <form class="subscribe__form">
                    <input class="subscribe__input" type="email" name="subscribe" placeholder="Your working email" required>
                    <input type="submit" value="Subscribe" class="subscribe__submit">
                </form>
                <img class="сongrats" src="@/assets/pictures/сongrats.png" alt="сongrats">
                <img class="сongrats" src="@/assets/pictures/сongrats.png" alt="сongrats">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.subscribe {
    background: linear-gradient(55deg, rgba(255,63,58,0.2) 0%, rgba(247,94,5,0.2) 100%);
    .сongrats {
        position: absolute;
        top: 55.6%;

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            width: 195px;
            top: 65%;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            width: 155px;
            top: 73%;
        }

        @media screen and (min-width: 425px) and (max-width: 767px) { 
            width: 125px;
            top: 80.2%;
        }

        @media screen and (min-width: 320px) and (max-width: 424px) { 
            width: 125px;
            top: 82%;
        }

        &:nth-of-type(1) {
            left: 95%;

            @media screen and (min-width: 1250px) and (max-width: 1519px) { 
                left: 90%;
            }

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                left: 88%;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                left: 83%;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                left: -5%;
            }
        }

        &:nth-of-type(2) {
            right: 95%;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                right: 88%;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                right: 83%;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                right: -3%;
            }
        }
    }

    &__container {
        padding-top: 120px;
        padding-bottom: 180px;
        position: relative;

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            padding-top: 80px;
            padding-bottom: 150px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            padding-top: 60px;
            padding-bottom: 130px;
        }

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            padding-top: 50px;
            padding-bottom: 125px;
        }

        .subscribe__title__container {
            text-align: center;
            width: 810px;
            margin-bottom: 60px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin-bottom: 40px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-bottom: 40px;
                width: 650px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                width: auto;
                margin-bottom: 30px;
                text-align: center;
            }

            .subscribe__title__string {
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

            .subscribe__title {
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

        .subscribe__form {
            display: flex;
            justify-content: center;

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                flex-direction: column;
                align-items: center;
            }

            .subscribe__input {
                background: #FAFAFA;
                border: transparent;
                border-radius: 5px;
                padding: 17px 16px 13px;
                margin-right: 24px;
                height: 52px;
                width: 422px;

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: 100%;
                    margin-right: 0;
                    margin-bottom: 20px;
                }

                &::placeholder {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 100%;
                    color: #9A9CA5;

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

            .subscribe__submit {
                background: linear-gradient(55.95deg, #FF3F3A 0%, #F75E05 100%);
                border-radius: 4px;
                border: unset;
                width: 154px;
                height: 52px;
                font-weight: 700;
                font-size: 16px;
                line-height: 52px;
                text-align: center;
                letter-spacing: 0.5px;
                color: #FFFFFF;
                cursor: pointer;
                transition: all 1s ease-out;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    font-size: 14px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    font-size: 14px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    font-size: 13px;
                }

                &:hover {
                    background: linear-gradient(55.95deg, #ffa200 0%, #ff0000 100%);
                }
            }
        }
    }
}
</style>