<template>
    <div class="certificate">
        <div class="container">
            <div class="certificate__container">
                <div class="certificate__pictures__container">
                    <img class="certificate__pictures" src="@/assets/pictures/certificate.png" alt="certificate">
                </div>
                <div class="certificate__info__container">
                    <h6 class="certificate__string">
                        Createx Certificate
                    </h6>  
                    <h1 class="certificate__title">
                        Your expertise will be confirmed
                    </h1>  
                    <p class="certificate__paragraph">
                        We are accredited by international professional organizations and institutes:
                    </p>
                    <div class="certificate__partners__container">
                        <img class="partner" src="@/assets/pictures/strategy.png" alt="partners">
                        <img class="partner" src="@/assets/pictures/sentinal.png" alt="partners">
                        <img class="partner" src="@/assets/pictures/national.png" alt="partners">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.certificate {
    margin-bottom: 100px;
    height: 415px;

    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
        height: 100%;
        margin-bottom: 0;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) { 
        height: 100%;
        margin-bottom: 0;
    }

    @media screen and (min-width: 320px) and (max-width: 767px) { 
        height: 100%;
        margin-bottom: 0;
    }

    .container {
        height: 530px;
        
        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            height: 100%;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            height: auto;
        }

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            height: 100%;
        }

        .certificate__container {
            display: flex;
            margin-top: 120px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin-top: 100px;
                padding-bottom: 50px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-top: 80px;
                padding-bottom: 50px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-top: 50px;
                padding-bottom: 30px;
                flex-direction: column;
            }
            
            .certificate__pictures__container {
                order: 2;
                display: flex;
                border: 1px solid #E5E8ED;
                margin-left: 130px;
                box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.16), 0px 30px 24px -10px rgba(154, 156, 165, 0.1), 0px 12px 10px -6px rgba(154, 156, 165, 0.08), 0px 4px 4px -4px rgba(30, 33, 44, 0.05);
                border-radius: 4px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    width: 55%;
                    height: min-content;
                    margin-left: 30px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: 55%;
                    height: min-content;
                    margin-left: 30px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: 100%;
                    height: min-content;
                    margin-left: 0;
                }

                .certificate__pictures {

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        width: 100%;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        width: 100%
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        width: 100%
                    }
                }
            }

            .certificate__info__container {
                width: 397px;

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: 100%;
                    text-align: center;
                    margin-bottom: 25px;
                }

                .certificate__string {
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 150%;
                    letter-spacing: 1px;
                    text-transform: uppercase;
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

                .certificate__title {
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

                .certificate__paragraph {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 160%;
                    margin-top: 40px;
                    margin-bottom: 32px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        font-size: 14px;
                        margin-top: 30px;
                        margin-bottom: 27px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        font-size: 14px;
                        margin-top: 25px;
                        margin-bottom: 27px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        font-size: 13px;
                        margin-top: 23px;
                        margin-bottom: 25px;
                    }
                }

                .certificate__partners__container {

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        width: 95%;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        margin-right: 0;
                    }

                    .partner {
                        margin-right: 30px;

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            width: 30%;
                            margin-right: 10px;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            width: 30%;
                            margin-right: 10px;
                        }

                        &:last-of-type {
                            margin-right: 0;
                        }
                    }
                }
            }
        }
    }
}
</style>