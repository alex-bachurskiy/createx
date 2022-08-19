<template>
    <div class="event-page">
        <div class="event-page__header__container">
            <div class="container">
                <div class="event-page__header__title__container">
                    <Header/>
                    <img class="shapes__right" src="@/assets/pictures/shapes__right.png" alt="shapes__right">
                    <h3 class="event-page__header__title__string">
                        Online lecture
                    </h3>
                    <h1 class="event-page__header__title">
                        Formation of the organizational structure of the company in the face of uncertainty
                    </h1>
                    <img class="circles" src="@/assets/pictures/circles.png" alt="circles">
                    <img class="dots" src="@/assets/pictures/dots.png" alt="dots">
                    <img class="shapes__up__right" src="@/assets/pictures/shapes__up__right.png" alt="shapes__up__right">
                </div>
            </div>
        </div>
        <div class="container">
            <div class="about-event__container">
                <div class="event__program__accordion">
                    <div class="event__program__title__container">
                        <h3 class="event__program__title__string">
                            event program
                        </h3>
                        <h1 class="event__program__title">
                            What will you learn
                        </h1>
                    </div>
                    <VueFaqAccordion 
                        :items="myItems"
                    />
                </div>
                <div class="period__event__container">
                    <div class="date__container">
                        <h1 class="date__title">
                            Time
                        </h1>
                        <div class="date">
                            August 5, 11:00 – 14:00
                        </div>
                        <p class="date__paragraph">
                            Metus turpis sit lorem lacus, in elit tellus lacus.
                        </p>
                    </div>
                    <div class="price__container">
                        <h1 class="price__title">
                            Price
                        </h1>
                        <p class="price">
                            Free
                        </p>
                        <p class="price__paragraph">
                            Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.
                        </p>
                    </div>
                    <div class="event-network__container">
                        <h1 class="event-network__title">
                            Event on Facebook
                        </h1>
                    </div>
                    <div class="join__button__container">
                        <p class="join__button__text">
                            Join the event
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="event__curator__container">
                <div class="event__curator__photo">
                    <img class="speaker-image" src="@/assets/pictures/speaker-image.png" alt="Kathryn Murphy">
                    <img class="circles__yellow" src="@/assets/pictures/circles__yellow.png" alt="circles__yellow">
                </div>
                <div class="event__curator__info__container">
                    <h6 class="event__curator__info__title">
                        Speaker
                    </h6>
                    <h2 class="curator__name">
                        Kathryn Murphy
                    </h2>
                    <p class="event__curator__info__paragraph">
                        Analyst and Marketing specialist in IT company
                    </p>
                    <p class="curator__description">
                        Mattis adipiscing aliquam eu proin metus a iaculis faucibus. 
                        Tempus curabitur venenatis, vulputate venenatis fermentum ante. 
                        Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. 
                        Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. 
                        Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. 
                        Nam vel aliquam tristique sollicitudin interdum quam. 
                    </p>
                    <div class="curator__jobs__partners__container">
                        <div class="curator__jobs__partners">
                            <img class="partner mcgill" src="@/assets/pictures/mcgill-university.png" alt="Mcgill University">
                        </div>
                        <div class="curator__jobs__partners">
                            <img class="partner eu-business-school" src="@/assets/pictures/eu-business-school.png" alt="EU Business School">
                        </div>
                        <div class="curator__jobs__partners">
                            <img class="partner incae-business-school" src="@/assets/pictures/incae-business-school.png" alt="Incae Business School">
                        </div>
                    </div>
                    <div class="curator__networks__container">
                        <div class="network facebook"></div>
                        <div class="network instagram"></div>
                        <div class="network twitter"></div>
                        <div class="network linked_in"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="benefits__event__container">
                <div class="benefits__event__title__container">
                    <h3 class="benefits__event__title__string">
                        For whom?
                    </h3>
                    <h1 class="benefits__event__title">
                        Who will benefit from the event:
                    </h1>
                </div>
                <div class="benefits__event__list__container">
                    <p class="benefits__event">
                        Specialists with more than 1 year of active work experience
                    </p>
                    <p class="benefits__event">
                        Mobile app designers who want to improve their skills in solving business problems, 
                        creating and testing <br>human-centered interfaces
                    </p>
                    <p class="benefits__event">
                        Professional designers who want to feel more confident in UX
                    </p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="subscribe-to__container">
                <div class="subscribe-to__picture">
                    <img class="man-in-the-monitor" src="@/assets/pictures/man-in-the-monitor.png" alt="man-in-the monitor">
                </div>
                <div class="event__subscribe__form__container">
                    <img class="dots__small" src="@/assets/pictures/dots__small.png" alt="dots__small">
                    <img class="half__circles" src="@/assets/pictures/half__circles.png" alt="half__circles">
                    <h2 class="event__subscribe__form__title">
                        Don’t want to miss the best events? Subscribe to our newsletter!
                    </h2>
                    <form class="event__subscribe__form">
                        <input class="event__subscribe__input" type="email" name="subscribe" placeholder="Your working email" required>
                        <input type="submit" value="Subscribe" class="event__subscribe__submit">
                        <label class="custom-checkbox">
                            <input required type="checkbox" value="value-1">
                            <span class="check__text">
                                I agree to receive communications from Createx Online School
                            </span>
                        </label>
                    </form>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="event__register__form">
                <form class="register__form__container">
                    <div class="register__form__title__container">
                        <h6 class="register__form__title__string">
                            Leave a request now and get 20% off!
                        </h6>
                        <h2 class="register__form__title">
                            Register for the event
                        </h2>
                    </div>
                    <div class="full_name">
                        <p class="full_name__text">
                            Full name
                        </p>
                        <input class="input" type="text" name="question" placeholder="Your full name" required>
                    </div>
                    <div class="email">
                        <div class="email__text">
                            Email
                        </div>
                        <input class="input" type="email" name="question" placeholder="Your working email" required>
                    </div>
                    <div class="phone">
                        <div class="phone__text">
                            Phone
                        </div>
                        <input class="input" type="tel" name="question" placeholder="Your phone number">
                    </div>
                    <input type="submit" value="Join the event" class="register__form__button">
                    <p class="submit__text">
                        <sup>*</sup>You will receive a link to the online lecture in an email after registration.
                    </p>
                </form>
                <div class="register__picture__container">
                    <img class="man-teaches" src="@/assets/pictures/man-teaches.png" alt="man-teaches">
                </div>
            </div>
        </div>
        <div class="other__event">
            <div class="container">
                <div class="other__event__container">
                    <img class="circles__angular" src="@/assets/pictures/circles__angular.png" alt="circles__angular">
                    <div class="other__event__title__container">
                        <h3 class="other__event__title__string">
                            Check other online events
                        </h3>
                        <h1 class="other__event__title">
                            You may be interested in
                        </h1>
                    </div>
                    <div class="other__event__carousel-wrapper">
                        <carousel 
                            :navigationEnabled="true"
                            :per-page="1"
                            :navigate-to="someLocalProperty" 
                            :mouse-drag="true" 
                            :NextLabel="true"
                            :autoplay="false"
                        >
                            <slide>
                                <div class="event__info">
                                    <div class="date__info__container">
                                        <div class="number_month__container">
                                            <p class="number_month">02 Jun</p>
                                        </div>
                                        <div class="time__container">
                                            <p class="time">11:00 – 13:00</p>
                                        </div>
                                    </div>
                                    <div class="some__info__container">
                                        <h6 class="info__title">How to brief a client and present your design to approve it from the first show.</h6>
                                        <p class="info__paragraph">Onine lecture</p>
                                    </div>
                                    <div class="info__button__container">
                                        <router-link class="info__button" to="/events/event-page" exact>View more</router-link>
                                    </div>
                                </div>
                                <div class="event__info">
                                    <div class="date__info__container">
                                        <div class="number_month__container">
                                            <p class="number_month">29 May</p>
                                        </div>
                                        <div class="time__container">
                                            <p class="time">11:00 – 12:00</p>
                                        </div>
                                    </div>
                                    <div class="some__info__container">
                                        <h6 class="info__title">Who is a project manager and do I want to be PM?</h6>
                                        <p class="info__paragraph">Onine lecture</p>
                                    </div>
                                    <div class="info__button__container">
                                        <router-link class="info__button" to="/events/event-page" exact>View more</router-link>
                                    </div>
                                </div>
                                <div class="event__info">
                                    <div class="date__info__container">
                                        <div class="number_month__container">
                                            <p class="number_month">18 May</p>
                                        </div>
                                        <div class="time__container">
                                            <p class="time">10:00 – 12:00</p>
                                        </div>
                                    </div>
                                    <div class="some__info__container">
                                        <h6 class="info__title">The company's business page as an additional tool to support the announcement of vacancies.</h6>
                                        <p class="info__paragraph">Onine lecture</p>
                                    </div>
                                    <div class="info__button__container">
                                        <router-link class="info__button" to="/events/event-page" exact>View more</router-link>
                                    </div>
                                </div>
                            </slide>
                            <slide>
                                <div class="event__info">
                                    <div class="date__info__container">
                                        <div class="number_month__container">
                                            <p class="number_month">10 Jul</p>
                                        </div>
                                        <div class="time__container">
                                            <p class="time">9:00 – 14:00</p>
                                        </div>
                                </div>
                        <div class="some__info__container">
                            <h6 class="info__title">Find and evaluate: search and assessment tools for candidates.</h6>
                            <p class="info__paragraph">Onine workshop</p>
                        </div>
                        <div class="info__button__container">
                            <router-link class="info__button" to="/events/event-page" exact>View more</router-link>
                        </div>
                                </div>
                                <div class="event__info">
                                    <div class="date__info__container">
                                        <div class="number_month__container">
                                            <p class="number_month">27 Jun</p>
                                        </div>
                                        <div class="time__container">
                                            <p class="time">15:00 – 19:00</p>
                                        </div>
                                    </div>
                                    <div class="some__info__container">
                                        <h6 class="info__title">Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI.</h6>
                                        <p class="info__paragraph">Onine master-class</p>
                                    </div>
                                    <div class="info__button__container">
                                        <router-link class="info__button" to="/events/event-page" exact>View more</router-link>
                                    </div>
                                </div>
                                <div class="event__info">
                                    <div class="date__info__container">
                                        <div class="number_month__container">
                                            <p class="number_month">15 Jun</p>
                                        </div>
                                        <div class="time__container">
                                            <p class="time">10:00 – 12:00</p>
                                        </div>
                                    </div>
                                    <div class="some__info__container">
                                        <h6 class="info__title">Marketing or growth hacking: main differences and what business needs.</h6>
                                        <p class="info__paragraph">Onine lecture</p>
                                    </div>
                                    <div class="info__button__container">
                                        <router-link class="info__button" to="/events/event-page" exact>View more</router-link>
                                    </div>
                                </div>
                            </slide>
                        </carousel>
                        <div class="other__event__question__container">
                            <h2 class="event__question">
                                Do you want more?
                            </h2>
                            <div class="event__question__btn__container">
                                <router-link class="question__btn__text" to="/events">Explore all events</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="other__event__mobile-carousel-wrapper">
                        <carousel 
                            :navigationEnabled="true"
                            :per-page="1"
                            :navigate-to="someLocalProperty" 
                            :mouse-drag="true" 
                            :NextLabel="true"
                            :autoplay="false"
                        >
                            <slide>
                                <div class="event__info">
                                    <div class="date__info__container">
                                        <div class="number_month__container">
                                            <p class="number_month">02 Jun</p>
                                        </div>
                                        <div class="time__container">
                                            <p class="time">11:00 – 13:00</p>
                                        </div>
                                    </div>
                                    <div class="some__info__container">
                                        <h6 class="info__title">How to brief a client and present your design to approve it from the first show.</h6>
                                        <p class="info__paragraph">Onine lecture</p>
                                    </div>
                                    <div class="info__button__container">
                                        <router-link class="info__button" to="/events/event-page" exact>View more</router-link>
                                    </div>
                                </div>
                            </slide>
                            <slide>
                                <div class="event__info">
                                    <div class="date__info__container">
                                        <div class="number_month__container">
                                            <p class="number_month">29 May</p>
                                        </div>
                                        <div class="time__container">
                                            <p class="time">11:00 – 12:00</p>
                                        </div>
                                    </div>
                                    <div class="some__info__container">
                                        <h6 class="info__title">Who is a project manager and do I want to be PM?</h6>
                                        <p class="info__paragraph">Onine lecture</p>
                                    </div>
                                    <div class="info__button__container">
                                        <router-link class="info__button" to="/events/event-page" exact>View more</router-link>
                                    </div>
                                </div>
                            </slide>
                            <slide>
                                <div class="event__info">
                                    <div class="date__info__container">
                                        <div class="number_month__container">
                                            <p class="number_month">18 May</p>
                                        </div>
                                        <div class="time__container">
                                            <p class="time">10:00 – 12:00</p>
                                        </div>
                                    </div>
                                    <div class="some__info__container">
                                        <h6 class="info__title">The company's business page as an additional tool to support the announcement of vacancies.</h6>
                                        <p class="info__paragraph">Onine lecture</p>
                                    </div>
                                    <div class="info__button__container">
                                        <router-link class="info__button" to="/events/event-page" exact>View more</router-link>
                                    </div>
                                </div>
                            </slide>
                            <slide>
                                <div class="event__info">
                                    <div class="date__info__container">
                                        <div class="number_month__container">
                                            <p class="number_month">10 Jul</p>
                                        </div>
                                        <div class="time__container">
                                            <p class="time">9:00 – 14:00</p>
                                        </div>
                                </div>
                        <div class="some__info__container">
                            <h6 class="info__title">Find and evaluate: search and assessment tools for candidates.</h6>
                            <p class="info__paragraph">Onine workshop</p>
                        </div>
                        <div class="info__button__container">
                            <router-link class="info__button" to="/events/event-page" exact>View more</router-link>
                        </div>
                                </div>
                            </slide>
                            <slide>
                                <div class="event__info">
                                    <div class="date__info__container">
                                        <div class="number_month__container">
                                            <p class="number_month">27 Jun</p>
                                        </div>
                                        <div class="time__container">
                                            <p class="time">15:00 – 19:00</p>
                                        </div>
                                    </div>
                                    <div class="some__info__container">
                                        <h6 class="info__title">Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI.</h6>
                                        <p class="info__paragraph">Onine master-class</p>
                                    </div>
                                    <div class="info__button__container">
                                        <router-link class="info__button" to="/events/event-page" exact>View more</router-link>
                                    </div>
                                </div>
                            </slide>
                            <slide>
                                <div class="event__info">
                                    <div class="date__info__container">
                                        <div class="number_month__container">
                                            <p class="number_month">15 Jun</p>
                                        </div>
                                        <div class="time__container">
                                            <p class="time">10:00 – 12:00</p>
                                        </div>
                                    </div>
                                    <div class="some__info__container">
                                        <h6 class="info__title">Marketing or growth hacking: main differences and what business needs.</h6>
                                        <p class="info__paragraph">Onine lecture</p>
                                    </div>
                                    <div class="info__button__container">
                                        <router-link class="info__button" to="/events/event-page" exact>View more</router-link>
                                    </div>
                                </div>
                            </slide>
                        </carousel>
                        <div class="other__event__question__container">
                            <h2 class="event__question">
                                Do you want more?
                            </h2>
                            <div class="event__question__btn__container">
                                <router-link class="question__btn__text" to="/events">Explore all events</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

import VueFaqAccordion from 'vue-faq-accordion'

export default {
    name: "event-page",
    components: {
        Header,
        Footer,
        VueFaqAccordion
    },
      data () {
        return {
            myItems: [
                {
                    title: '<span>Theme 1.</span> Aliquet lectus urna viverra in odio.',
                    value: 'Lorem ipsum dolor sit amet. Ut perferendis aperiam aut tempora sunt ut rerum dolorum cum sunt esse ut iste internos eum fuga rerum. A eligendi omnis aut quis similique in unde assumenda ex laboriosam ratione et quasi perferendis. Vel accusantium odio aut voluptates temporibus sit ducimus optio.',
                },
                {
                    title: '<span>Theme 2.</span> Orci commodo, viverra orci mollis ut euismod.',
                    value: 'Sit autem eligendi ut neque soluta est architecto iste sit quia voluptate aut error similique est natus odio aut repellendus amet. Aut dolorem impedit a harum doloribus ad totam ipsam. Et accusamus qui quibusdam omnis est aliquid iusto ut voluptatibus cupiditate sit illum omnis ex pariatur voluptatum aut autem sunt.',
                },
                {
                    title: '<span>Theme 3.</span> Sagittis vitae facilisi rutrum amet mauris quisque vel.',
                    value: 'Qui galisum quaerat nam iusto quia qui voluptatem praesentium. Eum numquam rerum rem sint nulla possimus expedita ea enim sunt et possimus voluptates. Ad officia sequi est totam omnis et numquam labore et consectetur laudantium eos explicabo nostrum.',
                },
                {
                    title: '<span>Theme 4.</span> In id dolor quis nunc, urna hendrerit pharetra.',
                    value: 'Hic quod reiciendis et mollitia iure aut illo quas et numquam neque. Qui quis internos et quasi galisum eum nemo fuga et laboriosam temporibus At inventore optio quo perferendis dolores.',
                }
            ]
        }
    }
};
</script>

<style lang="scss">
.event-page {
    
    .event-page__header__container {
        padding-bottom: 120px;
        background: linear-gradient(55deg, rgba(255,63,58,0.2) 0%, rgba(247,94,5,0.2) 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;    

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            padding-bottom: 100px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            padding-bottom: 100px;
        }

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            padding-bottom: 80px;
        }

        .shapes__right {
            position: absolute;
            right: 97%;
            top: 20%;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                right: 100%;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                right: 90%;
                top: 35%;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                display: none;
            }
        }

        .circles {
            position: absolute;
            top: 84%;
            right: 98%;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                top: 75%;
                right: 90%;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                top: 82%;
                right: 90%;
                width: 150px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                display: none;
            }
        }

        .dots {
            position: absolute;
            left: 97%;
            top: 20%;

            @media screen and (min-width: 1250px) and (max-width: 1519px) { 
                left: 95%;
                top: 25%;
            }
            
            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                left: 90%;
                top: 23%;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                top: 25%;
                left: 85%;
                width: 135px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                display: none;
            }
        }

        .shapes__up__right {
            position: absolute;
            left: 90%;
            top: 108%;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                top: 100%;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                top: 108%;
                width: 80px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                display: none;
            }
        }

        .event-page__header__title__container {
            text-align: center;
            position: relative;
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;
            width: 1230px;

            @media screen and (min-width: 320px) and (max-width: 1250px) { 
                width: auto;
            }

            .event-page__header__title__string {
                font-weight: 700;
                font-size: 16px;
                line-height: 150%;
                letter-spacing: 1px;
                text-transform: uppercase;
                color: #FF3F3A;
                padding-top: 120px;
                margin-bottom: 12px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    font-size: 14px;
                    padding-top: 100px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    font-size: 14px;
                    padding-top: 100px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    font-size: 13px;
                    padding-top: 80px;
                }
            }

            .event-page__header__title {
                font-weight: 900;
                font-size: 46px;
                line-height: 130%;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    font-size: 36px;
                    width: auto;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    font-size: 36px;
                    width: auto;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    font-size: 34px;
                    width: auto;
                }
            }
        }
    }

    .about-event__container {
        margin-top: 120px;
        display: flex;
        align-items: baseline;
        margin-bottom: 180px;

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            margin-top: 100px;
            margin-bottom: 100px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            margin-top: 100px;
            margin-bottom: 100px;
            align-items: unset;
        }

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            margin-top: 80px;
            margin-bottom: 80px;
            align-items: unset;
            flex-direction: column;
        }

        .event__program__accordion {
            position: relative;
            bottom: 33px;

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                position: unset;
            }

            .event__program__title__container {
                margin-bottom: 60px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-bottom: 40px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-bottom: 40px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    margin-bottom: 30px;
                    text-align: center;
                }

                .event__program__title__string {
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

                .event__program__title {
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

            .faq {

                .faq-wrapper {

                    .accordion {
                        border: unset;
                        border-radius: 5px;
                        margin-top: 15px;

                        .accordion__item {
                            width: 600px;
                            border: unset;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                width: 395px;
                            }

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                width: 320px;
                            }

                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                width: auto;
                            }

                            .accordion__title {
                                padding: 0;
                                padding-bottom: 24px;
                                justify-content: unset;

                                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                    padding-bottom: 10px;
                                }

                                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                    padding-bottom: 10px;
                                }

                                @media screen and (min-width: 320px) and (max-width: 767px) { 
                                    padding-bottom: 10px;
                                }

                                .accordion__title-text {
                                    font-weight: 700;
                                    font-size: 20px;
                                    line-height: 150%;
                                    color: #1E212C;

                                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                        font-size: 18px;
                                    }

                                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                        font-size: 18px;
                                    }

                                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                                        font-size: 16px;
                                    }

                                    span {
                                        font-weight: 400;
                                        font-size: 20px;
                                        line-height: 150%;
                                        color: #FF3F3A;

                                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                            font-size: 18px;
                                        }

                                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                            font-size: 18px;
                                        }

                                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                                            font-size: 16px;
                                        }
                                    }
                                }

                                .accordion__toggle-button {
                                    order: -1;
                                    margin-right: 20px;

                                    &::after,
                                    &::before {
                                        background: #FF3F3A;
                                        height: 1.5px;
                                    }
                                    
                                }

                                .accordion__toggle-button_active {
                                    transform: unset;

                                    &::before {
                                        transform: unset;
                                    }
                                }
                            }

                            .accordion__value {
                                font-weight: 400;
                                font-size: 16px;
                                line-height: 160%;
                                color: #424551;
                                padding: 0;
                                padding-bottom: 24px;
                                padding-left: 35px;
                                width: 560px;

                                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                    font-size: 14px;
                                    padding-bottom: 20px;
                                    padding-left: 37px;
                                    width: 415px;
                                }

                                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                    font-size: 14px;
                                    padding-bottom: 20px;
                                    padding-left: 37px;
                                    width: 350px;
                                }

                                @media screen and (min-width: 320px) and (max-width: 767px) { 
                                    font-size: 13px;
                                    padding-bottom: 20px;
                                    padding-left: 37px;
                                    width: auto;
                                }
                            }
                        }
                    }
                }
            }
        }

        .period__event__container {
            background: #fff;
            padding: 40px 32px;
            border: 1px solid #E5E8ED;
            box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 4px 4px -4px rgba(30, 33, 44, 0.03);
            border-radius: 4px;
            margin-left: 115px;
            height: 455px;
            width: 495px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                width: 345px;
                padding: 30px 25px;
                height: fit-content;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                width: 275px;
                padding: 30px 25px;
                height: fit-content;
                margin-left: 30px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                width: 100%;
                padding: 30px 25px;
                height: fit-content;
                margin-left: 0;
            }

            .date__container,
            .event-network__container,
            .price__container {
                margin-bottom: 32px;
                
                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-bottom: 26px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-bottom: 26px;
                }

                .date__title,
                .event-network__title,
                .price__title {
                    font-size: 14px;
                    line-height: 150%;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    margin-bottom: 4px;
                }

                .event-network__title {
                    text-decoration-line: underline;
                    transition: all 1s ease-out;
                    cursor: pointer;
                    color: #FF3F3A;
                    font-size: 14px;
                    letter-spacing: 1px;

                    &:hover {
                        font-weight: 900;
                    }
                }

                .date,
                .duration,
                .price {
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 130%;
                    color: #FF3F3A;
                    margin-bottom: 8px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        font-size: 20px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        font-size: 20px;
                    }
                }

                .date__paragraph
                .price__paragraph {
                    font-size: 16px;
                    line-height: 160%;
                    color: #787A80;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        font-size: 14px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        font-size: 14px;
                    }
                }
            }

            .price__container {
                margin-bottom: 40px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-bottom: 30px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-bottom: 30px;
                }
            }

            .join__button__container {
                width: 100%;
                height: 44px;
                background: linear-gradient(55.95deg, #FF3F3A 0%, #F75E05 100%);
                border-radius: 4px;
                display: flex;
                align-items: center;
                text-align: center;
                cursor: pointer;

                &:hover {
                    background: linear-gradient(55.95deg, #ffa200 0%, #ff0000 100%);
                }

                .join__button__text {
                    width: 100%;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 44px;
                    letter-spacing: 0.5px;
                    color: #FFFFFF;
                }
            }
        }
    }

    .event__curator__container {
        display: flex;
        margin-bottom: 180px;

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            margin-bottom: 100px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            margin-bottom: 100px;
        }

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            margin-bottom: 80px;
            flex-direction: column;
        }


        .event__curator__photo {
            position: relative;

            .circles__yellow {
                position: absolute;
                right: 75%;
                bottom: 75%;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    right: 77%;
                    bottom: 78%;
                    width: 160px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    right: 77%;
                    bottom: 84%;
                    width: 135px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    display: none;
                }
            }

            .speaker-image {

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    width: 400px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: 350px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: 100%;
                }
            }
        }

        .event__curator__info__container {
            padding-top: 20px;
            margin-left: 110px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                padding-top: 10px;
                margin-left: 80px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                padding-top: 10px;
                margin-left: 30px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                padding-top: 0;
                margin-left: 0;
            }
        
            .event__curator__info__title {
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

            .curator__name {
                font-weight: 900;
                font-size: 46px;
                line-height: 130%;
                margin-bottom: 16px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    font-size: 36px;
                    margin-bottom: 14px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    font-size: 36px;
                    margin-bottom: 14px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    font-size: 34px;
                    margin-bottom: 10px;
                }
            }

            .event__curator__info__paragraph {
                font-size: 20px;
                line-height: 150%;
                color: #787A80;
                margin-bottom: 32px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    font-size: 18px;
                    margin-bottom: 26px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    font-size: 18px;
                    margin-bottom: 26px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    font-size: 16px;
                    margin-bottom: 15px;
                }
            }

            .curator__description {
                width: 625px;
                line-height: 160%;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    width: auto;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: fit-content;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: fit-content;
                }
            }

            .curator__networks__container {
                display: flex;
                margin-top: 40px;
                align-items: center;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-top: 28px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-top: 25px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    margin-top: 20px;
                }

                .network {
                    width: 24px;
                    height: 24px;
                    margin-right: 25px;
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

                .instagram {
                    background: url(../assets/pictures/instagram_grey.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    transition: all 1s ease-out;

                    &:hover {
                        background: url(../assets/pictures/instagram-primary.png);
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

            .curator__jobs__partners__container {
                display: flex;
                justify-content: space-between;
                width: 400px;
                margin: 40px 0;

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin: 30px 0;
                    width: auto;
                    flex-direction: column;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: auto;
                    flex-direction: column;
                    margin: 20px 0;
                }
                
                .curator__jobs__partners {
                    margin-right: 50px;
                    filter: grayscale(100%);
                    transition: all 1s ease-out;
                    opacity: 0.3;
                    cursor: pointer;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        margin-right: 35px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        margin-bottom: 5px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        margin-right: 0;
                    }

                    &:hover {
                        filter: grayscale(0);
                        opacity: 1;
                    }
                }
            }
        }
    }

    .benefits__event__container {
        display: flex;
        margin-bottom: 180px;

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            margin-top: 100px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            margin-top: 100px; 
        }

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            margin-bottom: 0;
            flex-direction: column;
        }

        .benefits__event__title__container {
            width: 495px;
            margin-right: 145px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                width: 420px;
                margin-right: 45px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                width: 295px;
                margin-right: 35px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                width: auto;
                margin-right: 0;
                margin-bottom: 25px;
                text-align: center;
            }

            .benefits__event__title__string {
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

            .benefits__event__title {
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

        .benefits__event__list__container {
            width: 590px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                width: 400px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                width: 320px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                width: auto;
            }

            .benefits__event {
                font-weight: 700;
                font-size: 20px;
                line-height: 150%;
                color: #424551;
                margin-bottom: 20px;
                display: flex;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                   font-size: 18px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    font-size: 18px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    font-size: 16px;
                }

                &:last-of-type {
                    margin-bottom: 0;
                }

                &::before {
                    content: url(../assets/pictures/check.png);
                    margin-right: 16px;
                }
            }
        }
    }

    .subscribe-to__container {
        background: linear-gradient(55deg, rgba(255,63,58,0.2) 0%, rgba(247,94,5,0.2) 100%);
        width: 1230px;
        padding: 60px 100px;  
        position: relative;
        display: flex;
        justify-content: space-between;
        margin-bottom: 120px;

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            width: 865px;
            padding: 25px 40px;  
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            width: auto;
            padding: 20px;
        }

        @media screen and (min-width: 425px) and (max-width: 767px){
            width: 330px;
            padding: 20px;
            margin-bottom: 30px;
            flex-direction: column;
            margin-top: 80px;
        }

        @media screen and (min-width: 375px) and (max-width: 424px){
            width: 330px;
            padding: 20px;
            margin-bottom: 30px;
            flex-direction: column;
            margin-top: 80px;
        }

        @media screen and (min-width: 320px) and (max-width: 374px) { 
            width: 285px;
            padding: 20px;
            margin-top: 60px;
            margin-bottom: 30px;
            flex-direction: column;
        }

        .dots__small {
            position: absolute;
            right: 94%;
            top: 70%;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                right: 92%;
                top: 76%;
            }
        }

        .half__circles {
            position: absolute;
            right: 0;
            top: 0;

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                display: none
            }
        }

        .subscribe-to__picture {

            .man-in-the-monitor {

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: 100%;
                }
            }
        }

        .event__subscribe__form__container {
            width: 600px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                width: 450px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                width: 270px;
                margin-left: 30px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                width: fit-content;
            }


            .event__subscribe__form__title {
                font-weight: 900;
                font-size: 32px;
                line-height: 130%;
                margin-bottom: 48px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    font-size: 26px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    font-size: 26px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    font-size: 24px;
                    margin-bottom: 20px;
                }
            }

            .event__subscribe__form {

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    display: flex;
                    flex-direction: column;
                }

                .event__subscribe__input {
                    border: 1px solid #D7DADD;
                    border-radius: 4px;
                    width: 422px;
                    height: 52px;
                    padding-left: 16px;
                    margin-bottom: 24px;

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        width: 100%;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        width: 100%;
                    }

                    &::placeholder {
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 160%;
                        color: #9A9CA5;
                    }
                }

                .event__subscribe__submit {
                    margin-left: 24px;
                    width: 154px;
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
                        margin-bottom: 20px;
                        margin-left: 0;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        margin-bottom: 20px;
                        margin-left: 0;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        margin-bottom: 20px;
                        margin-left: 0;
                        width: 100%;
                    }

                    &:hover {
                        background: linear-gradient(55.95deg, #ffa200 0%, #ff0000 100%);
                    }
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
                        max-width: 100%;
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 160%;
                        color: #424551;
                        display: inline-flex;
                        align-items: center;
                        user-select: none;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
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
                            top: 1.5px;
                        }
                    }
                } 
            }
        }
    }

    .event__register__form {
        display: flex;
        padding-bottom: 120px;

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            margin-top: 60px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            margin-top: 60px;
        }

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            margin-top: 40px;
            padding-bottom: 80px;
            flex-direction: column;
        }

        .register__picture__container {

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                width: 465px;
                margin-left: 25px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                width: 365px;
                margin-left: 0;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                width: auto;
                margin-left: 0;
                margin-top: 15px;
            }

            .man-teaches {

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

        .register__form__container {
            width: 510px;
            margin-right: 120px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                width: 375px;
                margin-right: 0;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                width: 275px;
                margin-left: 0;
                margin-right: 15px;
                order: -1;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                width: auto;
                margin-left: 0;
                margin-right: 0;
                order: -1;
            }

            .register__form__title__container {
                margin-bottom: 40px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-bottom: 15px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-bottom: 15px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                   text-align: center;
                    margin-bottom: 15px;
                }

                .register__form__title__string {
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

                .register__form__title {
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
                        font-size: 36px;
                    }
                }
            }

            .input {
                background: #FFFFFF;
                border: 1px solid #D7DADD;
                border-radius: 4px;
                width: 100%;
                height: 52px;
                padding-top: 13px;
                padding-bottom: 13px;
                padding-left: 11px;
                margin-top: 8px;

                &::placeholder {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 150%;
                    color: #9A9CA5;
                }
            }

            .full_name,
            .email,
            .phone {
                margin-bottom: 24px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-bottom: 14px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-bottom: 14px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    margin-bottom: 14px;
                }

                .full_name__text,
                .email__text,
                .phone__text {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 150%;
                    color: #424551;
                }
            }

            .phone {
                margin-bottom: 40px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-bottom: 30px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-bottom: 25px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    margin-bottom: 20px;
                }
            }

            .register__form__button {
                display: flex;
                background: linear-gradient(55.95deg, #FF3F3A 0%, #F75E05 100%);
                border-radius: 4px;
                align-items: center;
                justify-content: center;
                border: 0;
                cursor: pointer;
                font-weight: 700;
                font-size: 14px;
                line-height: 44px;
                letter-spacing: 0.5px;
                color: #FFFFFF;
                transition: all 1s ease-out;
                width: 100%;
                height: 52px;

                &:hover {
                    background: linear-gradient(55.95deg, #ffa200 0%, #ff0000 100%);
                }
            }

            .submit__text {
                font-weight: 400;
                font-size: 16px;
                line-height: 160%;
                margin-top: 24px;
            }    
        }
    }

    .other__event {
        background: #F4F5F7;

        .other__event__container {
            margin-top: 100px;
            margin-bottom: 185px;
            position: relative;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin-top: 90px;
                margin-bottom: 150px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-top: 90px;
                margin-bottom: 150px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-top: 70px;
                margin-bottom: 90px;
            }

            .circles__angular {
                position: absolute;
                top: 105%;
                left: 94.5%;

                @media screen and (min-width: 1250px) and (max-width: 1519px) { 
                    left: 92%;
                }

                @media screen and (min-width: 320px) and (max-width: 1240px) { 
                    display: none;
                }
            }

            .other__event__title__container {
                margin-bottom: 60px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-bottom: 40px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-bottom: 40px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    margin-bottom: 30px;
                    text-align: center;
                }

                .other__event__title__string {
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

                .other__event__title {
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

            .other__event__mobile-carousel-wrapper {

                display: none; 

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    display: block !important;
                }
            }

            .other__event__carousel-wrapper {

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    display: none;
                }
            }

            .other__event__carousel-wrapper,
            .other__event__mobile-carousel-wrapper {

                .VueCarousel {
                    max-width: 1230px;
                    margin: 0 auto;

                    .VueCarousel-wrapper {
                        width: 1250px;
                        margin: 0;
                        padding-bottom: 80px;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            width: 860px;
                            padding-bottom: 60px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            width: 650px;
                            padding-bottom: 50px;
                        }

                        @media screen and (min-width: 425px) and (max-width: 767px) { 
                            width: 380px;
                            padding-bottom: 0;
                        }

                        @media screen and (min-width: 375px) and (max-width: 424px) { 
                            width: 335px;
                            padding-bottom: 0;
                        }

                        @media screen and (min-width: 360px) and (max-width: 374px) { 
                            width: 320px;
                            padding-bottom: 35px;
                        }

                        @media screen and (min-width: 320px) and (max-width: 359px) { 
                            width: 275px;
                            padding-bottom: 0;
                        }

                        .VueCarousel-slide {
                            display: flex;
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

                .event__info {
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                    background: #FFFFFF;
                    border: 1px solid #E5E8ED;
                    border-radius: 4px;
                    transition: all 1s ease-out;
                    box-shadow: transparent;
                    margin-bottom: 24px;
                    padding: 24px;
                    width: 390px;
                    height: 323px;
                    margin-right: 30px;
                    box-shadow: transparent;
                    transition: all 1s ease-out;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        width: 420px;
                        margin-right: 20px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        width: 315px;
                        margin-right: 20px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        width: auto;
                        margin-right: 0;
                    }

                    &:nth-of-type(2) {
                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            margin-right: 0;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            margin-right: 0;
                        }
                    }

                    &:nth-of-type(3) {
                        margin-right: 0;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            margin-right: 20px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            margin-right: 20px;
                        }
                    }

                    &:hover {
                        box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 4px 4px -4px rgba(30, 33, 44, 0.03);
                    }

                    .date__info__container {

                        .number_month__container {
                            margin-bottom: 4px;

                            .number_month {
                                font-weight: 700;
                                font-size: 28px;
                                line-height: 150%;
                                color: #FF3F3A;

                                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                    font-size: 26px;
                                }

                                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                    font-size: 26px;
                                }
                            }
                        }

                        .time__container {

                            .time {
                                font-weight: 400;
                                font-size: 16px;
                                line-height: 160%;
                                color: #787A80;

                                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                    font-size: 14px;
                                }

                                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                    font-size: 14px;
                                }
                            }
                        }

                    }
                    
                    .some__info__container {
                        width: 342px;

                        @media screen and (min-width: 320px) and (max-width: 1240px) { 
                            width: auto;
                        }

                        .info__title {
                            font-weight: 700;
                            font-size: 18px;
                            line-height: 150%;
                            color: #1E212C;
                            margin-bottom: 8px;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                font-size: 16px;
                            }

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                font-size: 16px;
                            }
                        }

                        .info__paragraph {
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 160%;
                            display: flex;
                            align-items: center;
                            color: #787A80;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                font-size: 14px;
                            }

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                font-size: 14px;
                            }
                        }
                    }

                    .info__button__container {
                        width: 100%;
                        height: 44px;
                        border: 1px solid #FF3F3A;
                        border-radius: 4px;
                        display: flex;
                        align-items: center;
                        transition: all 1s ease-out;
                        cursor: pointer;

                        &:hover {
                            background: linear-gradient(55.95deg, #FF3F3A 0%, #F75E05 100%);
                        }

                        .info__button {
                            background: linear-gradient(55.95deg, #FF3F3A 0%, #F75E05 100%);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            font-weight: 700;
                            line-height: 52px;
                            letter-spacing: 0.5px;
                            transition: all 1s ease-out;
                            color: transparent;
                            font-size: 14px;
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

                .other__event__question__container {
                    display: flex;
                    justify-content: center;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        align-items: center;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        align-items: center;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        align-items: center;
                        flex-direction: column;
                        margin-top: 25px;
                    }

                    .event__question {
                        font-weight: 700;
                        font-size: 28px;
                        line-height: 150%;
                        margin-right: 40px;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            font-size: 25px;
                            margin-right: 30px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            font-size: 25px;
                            margin-right: 30px;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            font-size: 23px;
                            margin-right: 0;
                            text-align: center;
                            margin-bottom: 25px;
                        }
                    }

                    .event__question__btn__container {
                        background: linear-gradient(55.95deg, #FF3F3A 0%, #F75E05 100%);
                        transition: all 1s ease-out;
                        cursor: pointer;
                        width: 203px;
                        height: 52px;
                        text-align: center;

                        &:hover {
                            background: linear-gradient(55.95deg, #ffa200 0%, #ff0000 100%);
                        }

                        .question__btn__text {
                            color: #FFFFFF;
                            font-weight: 700;
                            line-height: 52px;
                            letter-spacing: 0.5px;
                        }
                    }
                }    
            }
        }
    }
}
</style>