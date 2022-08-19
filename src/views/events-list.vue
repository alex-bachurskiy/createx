<template>
    <div class="events-list">
        <div class="container">
            <div class="events-list__container">
                <Header/>
                <div class="events-list__title__container">
                    <h3 class="events-list__title__string">
                        Our events
                    </h3>
                    <h1 class="events-list__title">
                        Lectures, workshops & master-classes
                    </h1>
                </div>
                <form class="events-list__menu__container">
                    <div class="event-category__container">
                        <p class="event-category__text">Event category</p>
                        <select class="event-category" disabled>
                            <option>All events</option>
                            <option>Online master-class</option>
                            <option>Online lecture</option>
                            <option>Online workshop</option>
                        </select>
                    </div>
                    <div class="event-sort__container">
                        <p class="event-sort__text">Sort by</p>
                        <select class="event-sort" disabled>
                            <option>Newest</option>
                            <option>Oldest</option>
                        </select>
                    </div>
                    <div class="event-show__container">
                        <p class="event-show__text" for="event-show">Show</p>
                        <select class="event-show" disabled>
                            <option>9</option>
                            <option>18</option>
                            <option>27</option>
                            <option>36</option>
                        </select>
                        <span class="event-show__paragraph">events per page</span>
                    </div>
                    <div class="search-events__container">
                        <input class="search-events__input" type="text" placeholder="Search events">
                        <button class="search-events__button" type="button">
                            <img class="search__image" src="@/assets/pictures/search.png" alt="search">
                        </button>
                    </div>
                    <div class="switch__container">
                        <router-link class="switch list" to="/events" active></router-link>
                        <router-link class="switch grid" to="/events/events-grid"></router-link>
                    </div>
                </form>
                <div class="events-list__info__container">
                    <div class="events-list__info">
                        <div class="date__info__container">
                            <div class="number__container">
                                <p class="number">05</p>
                            </div>
                            <div class="month_time__container">
                                <p class="month">August</p>
                                <p class="time">11:00 – 14:00</p>
                            </div>
                        </div>
                        <div class="some__info__container">
                            <h6 class="info__title">
                                Formation of the organizational structure of the company in the face of uncertainty.
                            </h6>
                            <p class="info__paragraph">Onine master-class</p>
                        </div>
                        <div class="info__button__container">
                            <router-link class="info__button" to="/events/event-page" exact>View more</router-link>
                        </div>
                    </div>
                    <div class="events-list__info">
                        <div class="date__info__container">
                            <div class="number__container">
                                <p class="number">24</p>
                            </div>
                            <div class="month_time__container">
                                <p class="month">July</p>
                                <p class="time">11:00 – 12:30</p>
                            </div>
                        </div>
                        <div class="some__info__container">
                            <h6 class="info__title">Building a customer service department. Best Practices.</h6>
                            <p class="info__paragraph">Onine lecture</p>
                        </div>
                        <div class="info__button__container">
                            <router-link class="info__button" to="/events/event-page" exact>View more</router-link>
                        </div>
                    </div>
                    <div class="events-list__info">
                        <div class="date__info__container">
                            <div class="number__container">
                                <p class="number">16</p>
                            </div>
                            <div class="month_time__container">
                                <p class="month">July</p>
                                <p class="time">10:00 – 13:00</p>
                            </div>
                        </div>
                        <div class="some__info__container">
                            <h6 class="info__title">How to apply methods of speculative design in practice. Worldbuilding prototyping.</h6>
                            <p class="info__paragraph">Onine workshop</p>
                        </div>
                        <div class="info__button__container">
                            <router-link class="info__button" to="/events/event-page" exact>View more</router-link>
                        </div>
                    </div>
                    <div class="events-list__info">
                        <div class="date__info__container">
                            <div class="number__container">
                                <p class="number">10</p>
                            </div>
                            <div class="month_time__container">
                                <p class="month">July </p>
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
                    <div class="events-list__info">
                        <div class="date__info__container">
                            <div class="number__container">
                                <p class="number">27</p>
                            </div>
                            <div class="month_time__container">
                                <p class="month">June</p>
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
                    <div class="events-list__info">
                        <div class="date__info__container">
                            <div class="number__container">
                                <p class="number">15</p>
                            </div>
                            <div class="month_time__container">
                                <p class="month">June</p>
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
                    <div class="events-list__info">
                        <div class="date__info__container">
                            <div class="number__container">
                                <p class="number">02</p>
                            </div>
                            <div class="month_time__container">
                                <p class="month">June</p>
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
                    <div class="events-list__info">
                        <div class="date__info__container">
                            <div class="number__container">
                                <p class="number">29</p>
                            </div>
                            <div class="month_time__container">
                                <p class="month">May</p>
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
                    <div class="events-list__info">
                        <div class="date__info__container">
                            <div class="number__container">
                                <p class="number">18</p>
                            </div>
                            <div class="month_time__container">
                                <p class="month">May</p>
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
                    <div class="events-list-page__container">
                        <p class="events-list-page">1</p>                        
                        <p class="events-list-page">2</p>
                        <p class="events-list-page">3</p>
                        <p class="events-list-page">4</p>
                        <p class="events-list-page">&rarr;</p>
                    </div>
                </div>
            </div>
        </div>
        <Subscribe/>
        <Footer/> 
    </div>
</template>

<script>
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

export default {
    name: "events-list",
    components: {
        Header,
        Subscribe,
        Footer
    }
};
</script>

<style lang="scss" scoped>
.events-list {

    &__container {
        width: 1230px;
        margin-bottom: 180px;

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            width: auto;
            margin-bottom: 160px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            width: auto;
            margin-bottom: 140px;
        }

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            width: auto;
            margin-bottom: 80px;
        }

        .events-list__title__container {
            margin-top: 80px;
            margin-bottom: 60px;
            text-align: center;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin-top: 60px;
                margin-bottom: 40px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-top: 50px;
                margin-bottom: 40px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-top: 30px;
                margin-bottom: 15px;
            }

            .events-list__title__string {
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

            .events-list__title {
                font-weight: 900;
                font-size: 46px;
                line-height: 130%;
                text-align: center;

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

        .events-list__menu__container {
            display: flex;
            align-items: center;
            margin-bottom: 60px;
            
            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                flex-wrap: wrap;
                margin-bottom: 40px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                flex-direction: column;
                align-items: baseline;
            }

            .event-category__container,
            .event-sort__container,
            .event-show__container,
            .search-events__container {
                display: flex;
                align-items: center;
                margin-right: 37px;

                @media screen and (min-width: 1250px) and (max-width: 1519px) { 
                    margin-right: 18px;
                }

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-right: 15px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-right: 25px;
                    margin-bottom: 25px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    margin-right: 0;
                    margin-bottom: 15px;
                    flex-direction: column;
                    align-items: baseline;
                    width: 100%;
                }

                .event-category__text,
                .event-sort__text,
                .event-show__text,
                .search-events {
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 160%;
                    color: #424551;
                    margin-right: 7px;

                    @media screen and (min-width: 1250px) and (max-width: 1519px) { 
                        font-size: 15px;
                    }

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        font-size: 14px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        font-size: 14px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        font-size: 14px;
                        margin-bottom: 7px;
                        margin-right: 0;
                    }
                }

                .event-category,
                .event-sort,
                .event-show {
                    height: 44px;
                    border: 1px solid #D7DADD;
                    border-radius: 4px;
                    background: url(../assets/pictures/stroke.png);
                    background-repeat: no-repeat;
                    background-position-x: 90%;
                    background-position-y: center;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 150%;
                    color: #424551;
                    padding: 0 16px;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    appearance: none;
                    transition: all 1s ease-out;

                    &:hover {
                        border: 1px solid #FF3F3A;
                        background: url(../assets/pictures/stroke__color.png);
                        background-repeat: no-repeat;
                        background-position-x: 90%;
                        background-position-y: center;
                    }
                }

                .event-show {
                    width: 75px;

                    @media screen and (min-width: 1215px) and (max-width: 1240px) {
                        width: 75px;
                    }

                    @media screen and (min-width: 1024px) and (max-width: 1214px) { 
                        width: 50px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        width: 90px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        width: 100%;
                    }

                }

                .event-sort {
                    width: 160px;

                    @media screen and (min-width: 1215px) and (max-width: 1240px) {
                        width: 150px;
                    }

                    @media screen and (min-width: 1024px) and (max-width: 1214px) { 
                        width: 130px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        width: 190px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        width: 100%;
                    }
                }

                .event-category {
                    width: 195px;

                    @media screen and (min-width: 1215px) and (max-width: 1240px) {
                        width: 150px;
                    }

                    @media screen and (min-width: 1024px) and (max-width: 1214px) { 
                        width: 120px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        width: 215px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        width: 100%;
                    }
                }

                .event-show {
                    background: url(../assets/pictures/up-down-select.png);
                    background-repeat: no-repeat;
                    background-position-x: 90%;
                    background-position-y: center;
                    transition: all 1s ease-out;

                    &:hover {
                        background: url(../assets/pictures/up-down-select__color.png);
                        background-repeat: no-repeat;
                        background-position-x: 90%;
                        background-position-y: center;
                    }
                }

                .event-show__paragraph {
                    font-size: 14px;
                    line-height: 150%;
                    color: #787A80;
                    margin-left: 7px;

                    @media screen and (min-width: 1250px) and (max-width: 1519px) { 
                        margin-left: 20px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        display: none;
                    }
                }
            }

            .event-show__container {

                @media screen and (min-width: 1250px) and (max-width: 1519px) { 
                   margin-bottom: 0;
                }
            }

            .search-events__container {
                position: relative;

                @media screen and (min-width: 1250px) and (max-width: 1519px) { 
                   margin-bottom: 0;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    margin-top: 30px;
                }

                .search-events__input {
                    transition: all 1s ease-out;
                    border: 1px solid #D7DADD;
                    width: 282px;
                    height: 44px;
                    padding-left: 16px;

                    @media screen and (min-width: 1215px) and (max-width: 1240px) {
                        width: 200px;
                    }

                    @media screen and (min-width: 1024px) and (max-width: 1214px) { 
                        width: 170px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        width: 100%;
                    }

                    &::placeholder {
                        font-weight: 400;
                        font-size: 14px;
                        line-height: 150%;
                        color: #9A9CA5;
                    }

                    &:hover,
                    &:active,
                    &:focus {
                        border: 1px solid #FF3F3A;
                    }
                }

                .search-events__button {
                    background: url(../assets/pictures/search.png);
                    background-position: center;
                    background-repeat: no-repeat;
                    width: 16px;
                    height: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: transparent;
                    border: none;
                    position: absolute;
                    left: 87.5%;
                    transition: all 1s ease-out;

                    &:hover {
                        background: url(../assets/pictures/search__color.png);
                        background-repeat: no-repeat;
                        background-position: center;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        top: 30%;
                        left: 85.5%;
                    }
                }
            }

            .switch__container {
                display: flex;

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    display: none;
                }

                a.router-link-active, li.router-link-active>a {
                    
                    &:first-of-type {
                        background: url(../assets/pictures/list__color.png);
                        background-repeat: no-repeat;
                        background-position: center;
                        height: 18px;
                        width: 18px;
                    }
                }

                .list {
                    background: url(../assets/pictures/list.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    height: 18px;
                    width: 18px;
                    margin-right: 10px;
                }

                .grid {
                    background: url(../assets/pictures/grid.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    height: 18px;
                    width: 18px;
                    transition: all 1s ease-out;

                    &:hover {
                        background: url(../assets/pictures/grid__color.png);
                        background-repeat: no-repeat;
                        background-position: center;
                        height: 18px;
                        width: 18px;
                    }
                }

            }

        }

        .events-list__info__container {

            .events-list__info {
                display: flex;
                background: #FFFFFF;
                border: 1px solid #E5E8ED;
                border-radius: 4px;
                transition: all 1s ease-out;
                box-shadow: transparent;
                margin-bottom: 24px;
                padding: 32px 40px;
                justify-content: space-between;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    padding: 22px 30px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    padding: 18px 26px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    padding: 15px 20px;
                    flex-direction: column;
                }

                &:last-of-type {
                    margin-bottom: 60px;
                }

                &:hover {
                    box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 4px 4px -4px rgba(30, 33, 44, 0.03);
                }
                .date__info__container {
                    display: flex;
                    align-items: center;

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        margin-bottom: 15px;
                    }

                    .number__container {
                        margin-right: 20px;
                        .number {
                            font-weight: 900;
                            font-size: 48px;
                            line-height: 130%;
                            letter-spacing: 1px;
                            color: #FF3F3A;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                font-size: 38px;
                            }

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                font-size: 38px;
                            }

                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                font-size: 36px;
                            }
                        }
                    }

                    .month_time__container {
                        
                        .month {
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
                        }

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

                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                font-size: 13px;
                            }
                        }
                    }

                }

                .some__info__container {
                    width: 757px;

                    @media screen and (min-width: 1250px) and (max-width: 1519px) { 
                        width: 650px;
                    }

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        width: 523px;
                        padding: 0 30px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        width: 287px;
                        padding: 0 20px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        width: auto;
                    }
                    
                    .info__title {
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
                            margin-bottom: 7px;
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

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            font-size: 13px;
                        }
                    }
                }

                .info__button__container {
                    width: 136px;
                    height: 44px;
                    border: 1px solid #FF3F3A;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    transition: all 1s ease-out;
                    cursor: pointer;

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        width: 100%;
                        margin-top: 25px;
                    }

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

            .events-list-page__container {
                display: flex;
                justify-content: center;
                .events-list-page {
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 160%;
                    color: #424551;
                    transition: all 1s ease-out; 
                    cursor: pointer;
                    margin-right: 20px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        font-size: 14px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        font-size: 14px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        font-size: 13px;
                    }

                    &:last-of-type {
                        margin-right: 0;
                    }

                    &:first-of-type {
                        color: #FF3F3A;
                    }

                    &:hover {
                       color: #FF3F3A;
                    }
                }
            }
        }
    }
}
</style>