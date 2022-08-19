<template>
    <div class="about-us">
        <div class="container">
            <div class="about-us__container">
                <Header/>
                <div class=" about-us__banner__information__container">
                    <div class="about-us__banner__information">
                        <h6 class="about-us__banner__string">
                            About us
                        </h6>
                        <h2 class="about-us__banner__title">
                            Createx Online School
                        </h2>
                        <p class="about-us__banner__paragraph">
                            Createx Online School is a leader in online studying. 
                            We have lots <br>of courses and programs from the main market experts.
                        </p>
                        <p class="about-us__banner__paragraph">
                            We provide relevant approaches to online learning, internships and employment in the 
                            largest companies in the country. Our educational programs help you get a new specialty 
                            from scratch. During your studies, we will help you find a job. 
                            Check the courses and online events that we organise.
                        </p>
                        <div class="about-us__banner__btn__container">
                            <div class="explore__btn">
                                <router-link class="explore__btn__text" to="/events" exact>Explore events</router-link>
                            </div>
                            <div class="browse__btn">
                                <router-link class="browse__btn__text" to="/courses" exact>Browse courses</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="about__illustration__container">
                        <img class="about__illustration" src="@/assets/pictures/about__illustration.png" alt="about__illustration">
                    </div>
                </div>
                <div class="about-us__statistics__container">
                    <div class="about-us__statistics__pictures__container">
                        <div class="play__button__container">
                            <div class="play__button">
                                <img src="@/assets/pictures/play.png" alt="play">
                            </div>
                            <p class="play__text">
                                Play showreel
                            </p>
                        </div>
                        <img class="about-us__statistics__picture" src="@/assets/pictures/laptop.png" alt="laptop">
                        <img class="dots_yellow" src="@/assets/pictures/dots_yellow.png" alt="dots_yellow">
                    </div>
                    <div class="about-us__statistics">
                        <p class="about-us__statistics__info">
                            <span class="statistics">1200</span> 
                            students graduated
                        </p>
                        <p class="about-us__statistics__info">
                            <span class="statistics">84</span> 
                            completed courses
                        </p>
                        <p class="about-us__statistics__info">
                            <span class="statistics">16</span> 
                            qualified tutors
                        </p>
                        <p class="about-us__statistics__info">
                            <span class="statistics">5</span> 
                            years of experience
                        </p>
                    </div>
                </div>
                <div class="about-us__values__container">
                    <div class="about-us__values__title__container">
                        <h6 class="about-us__values__title__string">
                            We always stand for
                        </h6>
                        <h1 class="about-us__values__title">
                            Our core values
                        </h1>
                    </div>
                    <div class="value__information__container">
                        <div class="value__info__container">
                            <div class="value__info">
                                <img class="value__picture" src="@/assets/pictures/ic-structure.png" alt="structure">
                                <div class="value__information">
                                    <h6 class="value__information__title">
                                        Structured Approach
                                    </h6>
                                    <p class="value__information__paragraph">
                                        Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="value__info__container">
                            <div class="value__info">
                                <img class="value__picture" src="@/assets/pictures/ic-chat.png" alt="chat">
                                <div class="value__information">
                                    <h6 class="value__information__title">
                                        Professional Feedbacks
                                    </h6>
                                    <p class="value__information__paragraph">
                                        Culpa nostrud commodo ea consequat reprehenderit aliquip. 
                                    </p>
                                </div>
                            </div>
                        </div>                        
                        <div class="value__info__container">
                            <div class="value__info">
                                <img class="value__picture" src="@/assets/pictures/ic-darts.png" alt="darts">
                                <div class="value__information">
                                    <h6 class="value__information__title">
                                        Efficiency
                                    </h6>
                                    <p class="value__information__paragraph">
                                        Viverra scelerisque consequat net. Adipisicing esse consequat. 
                                    </p>
                                </div>
                            </div>
                        </div>                        
                        <div class="value__info__container">
                            <div class="value__info">
                                <img class="value__picture" src="@/assets/pictures/ic-calendar.png" alt="calendar">
                                <div class="value__information">
                                    <h6 class="value__information__title">
                                        Flexible Shedule
                                    </h6>
                                    <p class="value__information__paragraph">
                                        Aute eiusmod dolore dolore deserunt veniam ad deserunt. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-us__directions__container">
                    <div class="about-us__directions__title__container">
                        <h6 class="about-us__directions__title__string">
                            our main directions
                        </h6>
                        <h1 class="about-us__directions__title">
                            What do we teach
                        </h1>
                    </div>
                    <div class="direction__catalog">
                        <div class="direction__container">
                            <div class="direction">
                                <img class="direction__picture" src="@/assets/pictures/idea.png" alt="idea">
                            </div>
                            <div class="direction__information__container">
                                <div class="range__info marketing">
                                    <p class="range__info__text">
                                        Marketing
                                    </p>
                                </div>
                                <p class="direction__information">
                                    Odio posuere netus quisque faucibus lectus arcu donec. 
                                    Eget dictum eu viverra faucibus. Viverra scelerisque consequat.
                                </p>
                                <div class="direction__button__container">
                                    <p class="direction__button">
                                        Check courses
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="direction__container">
                            <div class="direction">
                                <img class="direction__picture" src="@/assets/pictures/puzzles.png" alt="puzzles">
                            </div>
                            <div class="direction__information__container">
                                <div class="range__info management">
                                    <p class="range__info__text">
                                        Management
                                    </p>
                                </div>
                                <p class="direction__information">
                                    Odio posuere netus quisque faucibus lectus arcu donec. 
                                    Eget dictum eu viverra faucibus. Viverra scelerisque consequat.
                                </p>
                                <div class="direction__button__container">
                                    <p class="direction__button">
                                        Check courses
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="direction__container">
                            <div class="direction">
                                <img class="direction__picture" src="@/assets/pictures/constructor.png" alt="constructor">
                            </div>
                            <div class="direction__information__container">
                                <div class="range__info recruting">
                                    <p class="range__info__text">
                                        HR & Recruting
                                    </p>
                                </div>
                                <p class="direction__information">
                                    Odio posuere netus quisque faucibus lectus arcu donec. 
                                    Eget dictum eu viverra faucibus. Viverra scelerisque consequat.
                                </p>
                                <div class="direction__button__container">
                                    <p class="direction__button">
                                        Check courses
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="direction__container">
                            <div class="direction">
                                <img class="direction__picture" src="@/assets/pictures/something.png" alt="something">
                            </div>
                            <div class="direction__information__container">
                                <div class="range__info design">
                                    <p class="range__info__text">
                                        Design
                                    </p>
                                </div>
                                <p class="direction__information">
                                    Odio posuere netus quisque faucibus lectus arcu donec. 
                                    Eget dictum eu viverra faucibus. Viverra scelerisque consequat.
                                </p>
                                <div class="direction__button__container">
                                    <p class="direction__button">
                                        Check courses
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="direction__container">
                            <div class="direction">
                                <img class="direction__picture" src="@/assets/pictures/code.png" alt="code">
                            </div>
                            <div class="direction__information__container">
                                <div class="range__info development">
                                    <p class="range__info__text">
                                        Development
                                    </p>
                                </div>
                                <p class="direction__information">
                                    Odio posuere netus quisque faucibus lectus arcu donec. 
                                    Eget dictum eu viverra faucibus. Viverra scelerisque consequat.
                                </p>
                                <div class="direction__button__container">
                                    <p class="direction__button">
                                        Check courses
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="direction__container">
                            <div class="direction__information__container">
                                <p class="direction__information">
                                    New studying program coming soon...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-us__studying__process__container">
                    <img class="circles__colors" src="@/assets/pictures/circles__colors.png" alt="circles__colors">
                    <img class="studying__process__picture graduate" src="@/assets/pictures/graduate.png" alt="graduate">
                    <div class="about-us__studying__process__title__container">
                        <h6 class="about-us__studying__process__title__string">
                            Studying process
                        </h6>
                        <h2 class="about-us__studying__process__title">
                            That's how we do it
                        </h2>
                    </div>
                    <div class="about-us__studying__process__information">
                        <div class="about-us__studying__process">
                            <h6 class="studying__process__string">
                                STEP 1
                            </h6>
                            <h4 class="studying__process__title">
                                Watching online video lectures
                            </h4>
                            <p class="studying__process__paragraph">
                                Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. 
                                Nisl, imperdiet gravida massa neque.
                            </p>
                        </div>
                        <div class="about-us__studying__process">
                            <h6 class="studying__process__string">
                                STEP 2
                            </h6>
                            <h4 class="studying__process__title">
                                Passing test
                            </h4>
                            <p class="studying__process__paragraph">
                                Facilisis pellentesque quis accumsan ultricies. 
                                Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. 
                            </p>
                        </div>
                        <div class="about-us__studying__process">
                            <h6 class="studying__process__string">
                                STEP 3
                            </h6>
                            <h4 class="studying__process__title">
                                Curator's feedback
                            </h4>
                            <p class="studying__process__paragraph">
                                Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. 
                                Aliquet orci varius volutpat egestas facilisi lobortis. 
                            </p>
                        </div>
                        <div class="about-us__studying__process">
                            <h6 class="studying__process__string">
                                STEP 4
                            </h6>
                            <h4 class="studying__process__title">
                                Corrections if needed
                            </h4>
                            <p class="studying__process__paragraph">
                                Non tempor pulvinar tincidunt aliquam. 
                                Placerat ultricies malesuada dui auctor.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="about-us__teacher__container">
                    <div class="about-us__teacher__title__container">
                        <h6 class="about-us__teacher__title__string">
                            Best tutors are all here
                        </h6>
                        <h2 class="about-us__teacher__title">
                            Meet our team
                        </h2>
                    </div>
                    <div class="about-us__teacher__wrapper">
                        <div class="teacher__info__container">
                            <div class="teacher__portret__container">
                                <div class="teacher__portret__gradient">
                                    <div class="network facebook"></div>
                                    <div class="network instagram"></div>
                                    <div class="network linked_in"></div>
                                </div>
                                <img class="teacher__portret Russell" src="@/assets/pictures/slider__Russell.png" alt="Dianne Russell">
                            </div>
                            <div class="teacher__info">
                                <h6 class="name__teacher">Dianne Russell</h6>
                                <p class="about__teacher">Founder and CEO</p>
                            </div>
                        </div>
                        <div class="teacher__info__container">
                            <div class="teacher__portret__container">
                                <div class="teacher__portret__gradient">
                                    <div class="network facebook"></div>
                                    <div class="network instagram"></div>
                                    <div class="network linked_in"></div>
                                </div>
                                <img class="teacher__portret Bell" src="@/assets/pictures/slider__Bell.png" alt="Jerome Bell">
                            </div>
                            <div class="teacher__info">
                                <h6 class="name__teacher">Jerome Bell</h6>
                                <p class="about__teacher">Founder and Program Director</p>
                            </div>
                        </div>
                        <div class="teacher__info__container">
                            <div class="teacher__portret__container">
                                <div class="teacher__portret__gradient">
                                    <div class="network facebook"></div>
                                    <div class="network instagram"></div>
                                    <div class="network linked_in"></div>
                                </div>
                                <img class="teacher__portret Watson" src="@/assets/pictures/slider__Watson.png" alt="Kristin Watson">
                            </div>
                            <div class="teacher__info">
                                <h6 class="name__teacher">Kristin Watson</h6>
                                <p class="about__teacher">Marketer, Curator of Marketing Course</p>
                            </div>
                        </div>
                        <div class="teacher__info__container">
                            <div class="teacher__portret__container">
                                <div class="teacher__portret__gradient">
                                    <div class="network facebook"></div>
                                    <div class="network instagram"></div>
                                    <div class="network linked_in"></div>
                                </div>
                                <img class="teacher__portret McKinney" src="@/assets/pictures/slider__McKinney.png" alt="Marvin McKinney">
                            </div>
                            <div class="teacher__info">
                                <h6 class="name__teacher">Marvin McKinney</h6>
                                <p class="about__teacher">PM, Curator of Management Course</p>
                            </div>
                        </div>
                        <div class="teacher__info__container">
                            <div class="teacher__portret__container">
                                <div class="teacher__portret__gradient">
                                    <div class="network facebook"></div>
                                    <div class="network instagram"></div>
                                    <div class="network linked_in"></div>
                                </div>
                                <img class="teacher__portret Li" src="@/assets/pictures/slider__Li.png" alt="Leslie Alexander Li">
                            </div>
                            <div class="teacher__info">
                                <h6 class="name__teacher">Leslie Alexander Li</h6>
                                <p class="about__teacher">Curator of HR & Recruting Course</p>
                            </div>
                        </div>
                        <div class="teacher__info__container">
                            <div class="teacher__portret__container">
                                <div class="teacher__portret__gradient">
                                    <div class="network facebook"></div>
                                    <div class="network instagram"></div>
                                    <div class="network linked_in"></div>
                                </div>
                                <img class="teacher__portret Murphy" src="@/assets/pictures/slider__ Murphy.png" alt="Kathryn Murphy">
                            </div>
                            <div class="teacher__info">
                                <h6 class="name__teacher">Kathryn Murphy</h6>
                                <p class="about__teacher">Analyst and Marketing specialist</p>
                            </div>
                        </div>
                        <div class="teacher__info__container">
                            <div class="teacher__portret__container">
                                <div class="teacher__portret__gradient">
                                    <div class="network facebook"></div>
                                    <div class="network instagram"></div>
                                    <div class="network linked_in"></div>
                                </div>
                                <img class="teacher__portret Simmons" src="@/assets/pictures/slider__Simmons.png" alt="Brooklyn Simmons">
                            </div>
                            <div class="teacher__info">
                                <h6 class="name__teacher">Brooklyn Simmons</h6>
                                <p class="about__teacher">Curator of Development Course</p>
                            </div>
                        </div>
                        <div class="teacher__info__container">
                            <div class="teacher__portret__container">
                                <div class="teacher__portret__gradient">
                                    <div class="network facebook"></div>
                                    <div class="network instagram"></div>
                                    <div class="network linked_in"></div>
                                </div>
                                <img class="teacher__portret Fisher" src="@/assets/pictures/slider_Fisher.png" alt="Cody Fisher">
                            </div>
                            <div class="teacher__info">
                                <h6 class="name__teacher">Cody Fisher</h6>
                                <p class="about__teacher">UX Designer, Curator of Design Course</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="about-us__best__jobs__container">
            <Testimonials/>
            <div class="container">
                <div class="about-us__best__jobs__info__container">
                    <div class="about-us__best__jobs__title__container">
                        <h6 class="about-us__best__jobs__title__string">
                            best jobs for you
                        </h6>
                        <h2 class="about-us__best__jobs__title">
                            Our students work here
                        </h2>
                    </div>
                    <div class="about-us__best__jobs__partners__container">
                        <div class="best__jobs__partners">
                            <img class="partner albatron" src="@/assets/pictures/albatron.png" alt="Albatron">
                        </div>
                        <div class="best__jobs__partners">
                            <img class="partner bassett-furniture" src="@/assets/pictures/bassett-furniture.png" alt="Bassett">
                        </div>
                        <div class="best__jobs__partners">
                            <img class="partner curtis" src="@/assets/pictures/curtis-g.png" alt="Curtis">
                        </div>
                        <div class="best__jobs__partners">
                            <img class="partner exxon" src="@/assets/pictures/exxon.png" alt="Exxon">
                        </div>
                        <div class="best__jobs__partners">
                            <img class="partner gabor" src="@/assets/pictures/gabor.png" alt="Gabor">
                        </div>
                        <div class="best__jobs__partners">
                            <img class="partner lotte" src="@/assets/pictures/lotte.png" alt="lotte">
                        </div>
                        <div class="best__jobs__partners">
                            <img class="partner lovato" src="@/assets/pictures/lovato.png" alt="Lovato">
                        </div>
                        <div class="best__jobs__partners">
                            <img class="partner orbis" src="@/assets/pictures/orbis.png" alt="Orbis">
                        </div>
                        <div class="best__jobs__partners">
                            <img class="partner rain-x" src="@/assets/pictures/rain-x.png" alt="Rain-x">
                        </div>
                        <div class="best__jobs__partners">
                            <img class="partner tesla" src="@/assets/pictures/tesla.png" alt="Tesla">
                        </div>
                        <div class="best__jobs__partners">
                            <img class="partner wisecat" src="@/assets/pictures/wisecat.png" alt="Wisecat">
                        </div>
                        <div class="best__jobs__partners">
                            <img class="partner x-rite" src="@/assets/pictures/x-rite.png" alt="X-rite">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Posts/>
        <Subscribe/>
        <Footer/>
    </div>
</template>

<script>
import Header from "../components/Header";
import Testimonials from "../components/Testimonials.vue";
import Posts from "../components/Posts.vue";
import Subscribe from "../components/Subscribe.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "home",
    components: {
    Header,
    Testimonials,
    Posts,
    Subscribe,
    Footer
}
};
</script>

<style lang="scss" scoped>

.about-us {

    &__container {
        display: flex;
        flex-direction: column;
        width: 1230px;

        @media screen and (min-width: 1250px) and (max-width: 1519px) { 
            width: 1160px;
        }

        .about-us__banner__information__container {
            display: flex;
            margin-top: 80px;
            margin-bottom: 180px;
            justify-content: space-between;

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                flex-direction: column;
                align-items: center;
                margin-bottom: 130px;
            }
            
            @media screen and (min-width: 320px) and (max-width: 767px) { 
                flex-direction: column;
                align-items: center;
                margin-bottom: 80px;
            }

            .about__illustration__container {

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    width: 375px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: 375px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: auto;
                }

                .about__illustration {
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
            .about-us__banner__information {
                width: 600px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    width: 450px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: 600px;
                    text-align: center;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: auto;
                    text-align: center;
                }

                .about-us__banner__string {
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 150%;
                    letter-spacing: 1px;
                    margin-bottom: 8px;
                    text-transform: uppercase;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        font-size: 14px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        font-size: 14px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        font-size: 14px;
                    }
                }

                .about-us__banner__title {
                    font-weight: 900;
                    font-size: 46px;
                    line-height: 130%;
                    margin-bottom: 48px;

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

                .about-us__banner__paragraph {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 160%;
                    color: #424551;
                    margin-bottom: 60px;

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        font-size: 14px;
                        margin-bottom: 40px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        font-size: 13px;
                        margin-bottom: 30px;
                        width: auto;
                    }

                    br {
                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            display: none;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            display: none;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            display: none;
                        }
                    }

                    &:first-of-type {
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 150%;
                        color: #1E212C;
                        margin-bottom: 24px;

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            font-size: 18px;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            font-size: 16px;
                            width: auto;
                        }
                    }
                }

                .about-us__banner__btn__container {
                    display: flex;

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        justify-content: center;
                        margin-top: 25px;
                        margin-bottom: 25px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        justify-content: center;
                        margin-top: 15px;
                        flex-direction: column;
                        margin-bottom: 35px;
                    }

                    .explore__btn {
                        border: 1px solid #FF3F3A;
                        width: 193px;
                        height: 52px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        margin-right: 24px;
                        background: transparent;
                        transition: all 1s ease-out;

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            margin-right: 0;
                            width: 100%;
                            margin-bottom: 15px;
                        }

                        &:hover {
                            background: linear-gradient(55.95deg, #FF3F3A 0%, #F75E05 100%);      
                        }

                        &__text {
                            background: linear-gradient(55.95deg, #FF3F3A 0%, #F75E05 100%);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            font-weight: 700;
                            line-height: 52px;
                            letter-spacing: 0.5px;
                            transition: all 1s ease-out;
                            color: transparent;
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

                    .browse__btn {
                        width: 200px;
                        height: 52px;
                        background: linear-gradient(55.95deg, #FF3F3A 0%, #F75E05 100%);
                        border-radius: 4px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all 1s ease-out;
                        cursor: pointer;

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            width: 100%;
                        }

                        &:hover {
                            background: linear-gradient(55.95deg, #ffa200 0%, #ff0000 100%);
                        }

                        &__text {
                            font-weight: 700;
                            line-height: 52px;
                            letter-spacing: 0.5px;
                            color: #FFFFFF;
                        }
                    }
                }
            }
        }

        .about-us__statistics__container {

            display: flex;
            justify-content: space-between;
            margin-bottom: 180px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin-bottom: 130px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                flex-direction: column;
                margin-bottom: 115px;
                align-items: center;
            }
            
            @media screen and (min-width: 320px) and (max-width: 767px) { 
                flex-direction: column;
                margin-bottom: 70px;
                align-items: center;
            }

            .about-us__statistics__pictures__container {
                position: relative;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    width: 545px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: 645px;
                }

                .about-us__statistics__picture {
                    width: 100%;
                }

                .dots_yellow {
                    position: absolute;
                    z-index: -7;
                    top: 90%;
                    right: 95%;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        top: 78%;
                        right: 86%;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        top: 86%;
                        right: 86%;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        width: 90px;
                        top: 86%;
                        right: 86%;
                    }
                }

                .play__button__container {
                    display: flex;
                    align-items: baseline;

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        flex-direction: column;
                        align-items: center;
                        margin-bottom: 25px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        flex-direction: column;
                        align-items: center;
                        margin-bottom: 25px;
                    }

                    .play__button {
                        background: #FF3F3A;
                        width: 52px;
                        height: 52px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 100%;
                        cursor: pointer;
                        transition: all 1s ease-out;
                        margin-bottom: 15px;

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            width: 45px;
                            height: 45px;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            width: 35px;
                            height: 35px;
                        }

                        &:hover {
                            background: #ff410c;
                        }
                            
                        &::after {
                            content: '';
                            position: absolute;
                            background: #FF3F3A;
                            height: 84px;
                            width: 84px;
                            animation: pulse 2s infinite ease-in-out;
                            opacity: 0.12;
                            border-radius: 100%;
                            z-index: -777;
                            transition: all 1s ease-out;

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                height: 77px;
                                width: 77px;
                            }

                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                width: 67px;
                                height: 67px;
                            }

                            &:hover {
                                background: #ff410c;
                            }
                        }

                        @-webkit-keyframes pulse {
                            0% {
                                transform: scale(0);
                            }
                            50% {
                                transform: scale(1);
                            }
                            100% {
                                transform: scale(1);
                                opacity: 0;
                            }
                        }
                    }

                    .play__text {
                        font-weight: 700;
                        font-size: 14px;
                        line-height: 150%;
                        color: #1E212C;
                        margin-left: 20px;

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            margin-left: 0;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            margin-left: 0;
                            font-size: 13px;
                        }
                    }
                }
            }

            .about-us__statistics {
                margin-top: 180px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-top: 110px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-top: 70px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    margin-top: 100px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .about-us__statistics__info {
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 150%;
                    color: #1E212C;
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        font-size: 16px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        font-size: 14px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        font-size: 14px;
                    }

                    &:last-of-type {
                        margin-bottom: 0;
                    }
                    .statistics {
                        font-weight: 900;
                        font-size: 48px;
                        line-height: 130%;
                        letter-spacing: 1px;
                        color: #FF3F3A;
                        margin-right: 16px;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            font-size: 38px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            font-size: 30px;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            font-size: 26px;
                        }
                    }
                }
            }
        }

        .about-us__values__container {
            margin-bottom: 180px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin-bottom: 130px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-bottom: 115px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-bottom: 100px;
            }

            .about-us__values__title__container {
                text-align: center;
                margin-bottom: 60px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-bottom: 40px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-bottom: 30px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    margin-bottom: 25px;
                }

                .about-us__values__title__string {
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

                .about-us__values__title {
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

            .value__information__container {
                display: flex;

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                .value__info__container {
                    display: flex;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        width: auto;
                    }
                    
                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        width: auto;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        width: auto;
                        margin-bottom: 15px;
                    }

                    &::before {

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            content: url(../assets/pictures/divider.png);
                            margin-right: 10px;
                        }
                    }

                    &::after {
                        content: url(../assets/pictures/divider.png);
                        margin-right: 45px;
                        margin-left: 45px;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            margin-right: 25px;
                            margin-left: 25px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            margin-right: 20px;
                            margin-left: 20px;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            margin-right: 0;
                            margin-left: 10px;
                        }
                    }

                    &:last-of-type {
                        &::after {
                            content: none;

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                content: url(../assets/pictures/divider.png);
                            }

                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                content: url(../assets/pictures/divider.png);
                            }
                        }
                        
                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            margin-bottom: 0;
                        }
                    }

                    .value__info {
                        display: flex;
                        flex-direction: column;
                        align-items: center;

                        .value__information {
                            margin-top: 25px;
                            text-align: center;

                            .value__information__title {
                                font-weight: 700;
                                font-size: 20px;
                                line-height: 150%;

                                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                    font-size: 18px;
                                }

                                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                    font-size: 16px;
                                }

                                @media screen and (min-width: 320px) and (max-width: 767px) { 
                                    font-size: 14px;
                                }
                            }

                            .value__information__paragraph {
                                margin-top: 8px;
                                color: #787A80;
                                width: 240px;

                                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                    width: auto;
                                }

                                @media screen and (min-width: 320px) and (max-width: 767px) { 
                                    width: auto;
                                }
                            }
                        }

                    }
                }

            }
        }

        .about-us__directions__container {
            margin-bottom: 180px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin-bottom: 130px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-bottom: 130px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-bottom: 100px;
            }

            .about-us__directions__title__container {
                text-align: center;
                margin-bottom: 60px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-bottom: 40px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-bottom: 30px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    margin-bottom: 25px;
                }

                .about-us__directions__title__string {
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

                .about-us__directions__title {
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

            .direction__catalog {
                display: flex;
                flex-wrap: wrap;
                width: 1230px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    width: 865px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: auto;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: auto;
                    flex-direction: column;
                }

                .direction__container {
                    width: 390px;
                    background: #FFFFFF;
                    border: 1px solid #E5E8ED;
                    border-radius: 4px;
                    margin-right: 30px;
                    margin-bottom: 30px;
                    box-shadow: transparent;
                    transition: all .5s ease-out;
                    cursor: pointer;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        margin-right: 80px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        width: min-content;
                        margin-right: 15px;
                        margin-bottom: 15px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        width: auto;
                        margin-right: 0;
                        margin-bottom: 15px;
                    }

                    &:hover {
                        box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 4px 4px -4px rgba(30, 33, 44, 0.03);
                    }

                    &:nth-of-type(2),
                    &:nth-of-type(4),
                    &:nth-of-type(6) {

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            margin-right: 0;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            margin-right: 0;
                        }
                    }

                    &:nth-of-type(4),
                    &:nth-of-type(5),
                    &:nth-of-type(6) {
                        margin-bottom: 0;
                    }

                    &:nth-of-type(4) {

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            margin-bottom: 30px !important;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            margin-bottom: 15px !important;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            margin-bottom: 15px !important;
                        }
                    }

                    &:nth-of-type(5) {

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            margin-bottom: 15px !important;
                        }
                    }

                    &:nth-of-type(3) {

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            margin-right: 80px !important;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            margin-right: 15px !important;
                        }
                    }

                    &:nth-of-type(3),
                    &:nth-of-type(6) {
                        margin-right: 0;
                    }

                    &:last-of-type {
                        background: #F4F5F7;
                        border: none;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            width: 315px;
                        }
                        .direction__information__container {
                            width: 242px;

                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                width: auto;
                            }

                            .direction__information {
                                font-weight: 700;
                                font-size: 20px;
                                line-height: 150%;
                                text-align: center;
                                color: #424551;

                                @media screen and (min-width: 320px) and (max-width: 767px) { 
                                    font-size: 18px;
                                }
                            }
                        }
                    }

                    .direction {
                        
                        @media screen and (min-width: 1215px) and (max-width: 1519px) { 
                            width: 350px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            width: 314px;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            width: 100%;
                        }
                        .direction__picture {

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                width: 100%;
                            }

                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                width: 100%;
                            }
                        }
                    }

                    .direction__information__container {
                        margin: 24px;

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            margin: 15px;
                        }

                        .management {
                            background: #5A87FC;
                            width: 111px;
                        }

                        .marketing {
                            background: #03CEA4;
                            width: 90px;
                        }

                        .recruting {
                            background: #F89828;
                            width: 127px;
                        }

                        .design {
                            background: #F52F6E;
                            width: 66px;
                        }

                        .development {
                            background: #7772F1;
                            width: 113px;
                        }

                        .range__info {
                            margin-bottom: 24px;
                            border-radius: 4px;
                            height: 28px;
                            text-align: center;

                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                padding-top: 3px;
                            }

                            .range__info__text {
                                font-weight: 700;
                                font-size: 16px;
                                line-height: 160%;
                                color: #FFFFFF;

                                @media screen and (min-width: 320px) and (max-width: 767px) { 
                                    font-size: 14px;
                                }
                            }
                        }

                        .direction__information {
                            color: #787A80;
                            margin-bottom: 20px;
                        }

                        .direction__button__container {

                            .direction__button {
                                font-weight: 700;
                                color: #1E212C;
                                transition: all 1s ease-out;
                                cursor: pointer;

                                &:hover {
                                    color: #F75E05;
                                }

                                &::after {
                                    content: url(../assets/pictures/right_arrow.png);
                                    margin-left: 11px;
                                }
                            }
                        }
                    }
                }
            }
        }

        .about-us__studying__process__container {
            background: url(../assets/pictures/graduate.png);
            background-repeat: no-repeat;
            background-position-x: right;
            background-position-y: 200%;
            margin-bottom: 180px;
            position: relative;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                background-size: 50%;
                margin-bottom: 160px;
                background-position-y: 100%;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                background: unset;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 5px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                background: unset;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 5px;
            }

            .circles__colors {
                position: absolute;
                top: -20%;
                left: 101.5%;

                @media screen and (min-width: 1215px) and (max-width: 1519px) { 
                    left: 95.5%;
                }

                @media screen and (min-width: 1024px) and (max-width: 1214px) { 
                    left: 94.3%;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    top: -10%;
                    left: 89.5%;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    display: none;
                }
            }

            .studying__process__picture {
                display: none; 

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    display: block;
                    order: 2;
                }

                @media screen and (min-width: 425px) and (max-width: 767px) { 
                    display: block;
                    order: 2;
                    width: 370px;
                }

                @media screen and (min-width: 375px) and (max-width: 424px) { 
                    display: block;
                    order: 2;
                    width: 315px;
                }

                @media screen and (min-width: 320px) and (max-width: 374px) { 
                    display: block;
                    order: 2;
                    width: 280px;
                }
            }

            .about-us__studying__process__title__container {
                margin-bottom: 60px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-bottom: 40px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-bottom: 30px;
                    text-align: center;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    margin-bottom: 25px;
                    text-align: center;
                }
                .about-us__studying__process__title__string {
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

                .about-us__studying__process__title {
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

            .about-us__studying__process__information {
                position: relative;

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-bottom: 30px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    margin-bottom: 25px;
                }

                &::before {

                    content: "";
                    display: block;
                    width: 475px;
                    height: 0px;
                    position: absolute;
                    opacity: 0.5;
                    background: #9A9CA5;
                    border: 1px solid #9A9CA5;
                    transform: rotate(90deg);
                    right: 80.5%;
                    top: 50%;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        width: 460px;
                        right: 73.4%;
                        top: 50%;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        right: 44.5%;
                        top: 50%;
                        width: 436px;
                    }

                    @media screen and (min-width: 712px) and (max-width: 767px) { 
                        right: 64.5%;
                        width: 460px;
                    }
                    
                    @media screen and (min-width: 428px) and (max-width: 711px) { 
                        right: 26%;
                        width: 540px;
                    }

                    @media screen and (min-width: 412px) and (max-width: 427px) { 
                        width: 530px;
                        right: 26.8%;
                    }

                    @media screen and (min-width: 394px) and (max-width: 411px) { 
                        width: 530px;
                        right: 20%;
                    }

                    @media screen and (min-width: 384px) and (max-width: 393px) { 
                        width: 530px;
                        right: 20%;
                    }

                    @media screen and (min-width: 375px) and (max-width: 383px) { 
                        right: 18%;
                        width: 541px;
                    }

                    @media screen and (min-width: 360px) and (max-width: 374px) { 
                        right: 8.5%;
                        width: 560px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 359px) { 
                        right: -8%;
                        width: 640px;
                    }
                }

                .about-us__studying__process {
                    margin-bottom: 32px;
                    margin-left: 40px;
                    width: 447px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        width: 385px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        width: 345px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        width: auto;
                        margin-left: 0;
                        padding-right: 15px;
                        padding-left: 30px;
                    }

                    &:last-of-type {
                        margin-bottom: 0;
                    }
                    .studying__process__string {
                        font-weight: 900;
                        font-size: 12px;
                        line-height: 150%;
                        color: #787A80;
                        margin-bottom: 2px;

                        &::before {
                            content: "";
                            display: block;
                            width: 16px;
                            height: 16px;
                            position: absolute;
                            right: 99.1%;
                            border-radius: 100%;
                            background: #FF3F3A;
                            border: 4px solid #FFFFFF;

                            @media screen and (min-width: 712px) and (max-width: 767px) { 
                                right: 97.5%;
                            }

                            @media screen and (min-width: 428px) and (max-width: 711px) { 
                                right: 93.5%;
                            }

                            @media screen and (min-width: 412px) and (max-width: 427px) { 
                                right: 93.5%;
                            }

                            @media screen and (min-width: 394px) and (max-width: 411px) { 
                                right: 92.5%;
                            }

                            @media screen and (min-width: 384px) and (max-width: 393px) { 
                                right: 95%;
                            }

                            @media screen and (min-width: 375px) and (max-width: 383px) { 
                                right: 96.5%;
                            }

                            @media screen and (min-width: 360px) and (max-width: 374px) { 
                                right: 93.5%;
                            }

                            @media screen and (min-width: 320px) and (max-width: 359px) { 
                                right: 91.5%;
                            }
                        }
                    }

                    .studying__process__title {
                        font-size: 20px;
                        line-height: 150%;
                        margin-bottom: 8px;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            font-size: 20px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            font-size: 20px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            font-size: 18px;
                        }
                    }

                    .studying__process__paragraph {
                        font-weight: 400;
                        font-size: 16px;
                        color: #787A80;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            font-size: 14px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            font-size: 14px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            font-size: 13px;
                        }
                    }
                }   
            }
        }

        .about-us__teacher__container {
            margin-bottom: 120px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin-bottom: 100px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-bottom: 90px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-bottom: 70px;
                padding-top: 65px;
            }

            .about-us__teacher__title__container {
                text-align: center;
                margin-bottom: 128px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-bottom: 100px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-bottom: 90px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    margin-bottom: 50px;
                }

                .about-us__teacher__title__string {
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 150%;
                    text-align: center;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    color: #1E212C;
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

                .about-us__teacher__title {
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

            .about-us__teacher__wrapper {
                display: flex;
                flex-wrap: wrap;
                width: 1230px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    width: 865px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: 650px;
                    justify-content: center;
                    margin: 0 auto;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    flex-direction: column;
                    width: auto;
                    align-items: center;
                }

                .teacher__info__container {
                    margin-right: 30px;
                    margin-bottom: 60px;
                    cursor: pointer;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        margin-right: 35px;
                        width: auto;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        margin-right: 25px;
                        margin-bottom: 35px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        margin-right: 0;
                        margin-bottom: 25px;
                        width: 265px;
                    }

                    &:nth-of-type(2) {

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            margin-right: 0;
                        }
                    }

                    &:nth-of-type(3),
                    &:nth-of-type(6) {
                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            margin-right: 0;
                        }
                    }

                    &:nth-of-type(4) {
                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            margin-right: 35px !important;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            margin-right: 0 !important;
                        }
                    }

                    &:nth-of-type(4),
                    &:nth-of-type(8) {
                        margin-right: 0;
                    }

                    &:nth-of-type(6),
                    &:nth-of-type(8) {

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            margin-right: 0;
                        }
                    }

                    &:nth-of-type(5),
                    &:nth-of-type(6),
                    &:nth-of-type(7),
                    &:nth-of-type(8) {
                        margin-bottom: 0;

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            margin-bottom: 25px;
                        }
                    }

                    &:nth-of-type(5),
                    &:nth-of-type(6) {

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            margin-bottom: 35px;
                        }
                    }

                    .teacher__portret__container {
                        position: relative;

                        .teacher__portret {
                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                width: 265px;
                            }

                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                width: 265px;
                            }
                            
                        }

                        .teacher__portret__gradient {
                            background: linear-gradient(180deg, rgba(30, 33, 44, 0) 43.9%, rgba(30, 33, 44, 0.03) 55.21%, rgba(30, 33, 44, 0.33) 68.73%, rgba(30, 33, 44, 0.56) 76.17%, rgba(30, 33, 44, 0.768225) 83.75%, rgba(30, 33, 44, 0.92) 91.49%, #1E212C 100%);
                            border-radius: 4px;
                            display: flex;
                            align-items: center;
                            width: 285px;
                            height: 340px;
                            position: absolute;
                            opacity: 0;
                            transition: all 1s ease-out;
                            cursor: pointer;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                width: 265px;
                                height: 317px;
                            }

                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                width: 265px;
                                left: 0%;
                                top: -7%;
                            }

                            &:hover {
                                opacity: 1;
                            }

                            .network {
                                width: 24px;
                                height: 24px;
                                margin-right: 10px;
                                position: relative;
                                top: 40.5%;
                                left: 60%;

                                &:last-of-type {
                                    margin-right: 0;
                                }
                            }

                            .facebook {
                                background: url(../assets/pictures/facebook.png);
                                background-repeat: no-repeat;
                                background-position: center;
                                transition: all 1s ease-out;

                                &:hover {
                                    background: url(../assets/pictures/facebook-active.png);
                                    background-repeat: no-repeat;
                                    background-position: center;
                                }
                            }

                            .instagram {
                                background: url(../assets/pictures/instagram.png);
                                background-repeat: no-repeat;
                                background-position: center;
                                transition: all 1s ease-out;

                                &:hover {
                                    background: url(../assets/pictures/instagram-active.png);
                                    background-repeat: no-repeat;
                                    background-position: center;
                                }
                            } 

                            .linked_in {
                                background: url(../assets/pictures/linked_in.png);
                                background-repeat: no-repeat;
                                background-position: center;
                                transition: all 1s ease-out;

                                &:hover {
                                    background: url(../assets/pictures/linked_in-active.png);
                                    background-repeat: no-repeat;
                                    background-position: center;
                                }
                            }
                        }
                    }

                    .teacher__info {
                        margin-top: 16px;
                        text-align: center;
                        .name__teacher {
                            font-weight: 700;
                            font-size: 20px;
                            line-height: 150%;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                font-size: 18px;
                                width: auto;
                            }

                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                font-size: 16px;
                                width: auto;
                            }
                        }

                        .about__teacher {
                            font-size: 16px;
                            line-height: 160%;
                            color: #787A80;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                font-size: 14px;
                                width: auto;
                            }

                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                font-size: 13px;
                                width: auto;
                            }
                        }
                    }
                }
            }
        }
    }

    .about-us__best__jobs__container {
        background: #F4F5F7;
        padding-bottom: 76px;

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            padding-bottom: 56px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            padding-bottom: 46px;
        }

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            padding-bottom: 35px;
        }

        .about-us__best__jobs__title__container {
            text-align: center;
            margin-top: 80px;
            margin-bottom: 32px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin-top: 40px;
                margin-bottom: 20px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-top: 35px;
                margin-bottom: 15px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-top: 25px;
                margin-bottom: 15px;
            }

            .about-us__best__jobs__title__string {
                font-weight: 700;
                font-size: 16px;
                line-height: 150%;
                text-align: center;
                letter-spacing: 1px;
                text-transform: uppercase;
                color: #1E212C;
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

            .about-us__best__jobs__title {
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

        .about-us__best__jobs__partners__container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width: 1230px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                width: 865px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                width: 650px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                width: auto;
            }
            
            .best__jobs__partners {
                width: 155px;
                height: 144px;
                margin-right: 50px;
                padding: 40px 34px;
                filter: grayscale(100%);
                transition: all 1s ease-out;
                opacity: 0.3;
                cursor: pointer;

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: auto;
                    margin-right: 0;
                    padding: 25px 20px;
                }

                &:hover {
                    filter: grayscale(0);
                    opacity: 1;
                }
            }
        }
    }
}
</style>