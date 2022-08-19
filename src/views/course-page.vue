<template>
    <div class="course-page">
        <div class="course-page__header__container">
            <div class="container">
                <div class="course-page__header__title__container">
                    <Header/>
                    <img class="shapes__right" src="@/assets/pictures/shapes__right.png" alt="shapes__right">
                    <h3 class="course-page__header__title__string">
                        course
                    </h3>
                    <h1 class="course-page__header__title">
                        User Experience. Principles of Human-Centered Design
                    </h1>
                    <img class="circles" src="@/assets/pictures/circles.png" alt="circles">
                    <img class="dots" src="@/assets/pictures/dots.png" alt="dots">
                    <img class="shapes__up__right" src="@/assets/pictures/shapes__up__right.png" alt="shapes__up__right">
                </div>
            </div>
        </div>
        <div class="container">
            <div class="about-course__container">
                <div class="about-course__indormation__container">
                    <div class="about-course__indormation">
                            <h3 class="about-course__indormation__title">
                                About the course
                            </h3>
                            <p class="about-course__indormation__paragraph">
                                Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. 
                                Leo aenean congue in sagittis, felis maecenas amet varius at. 
                                Pellentesque euismod in faucibus at elementum. 
                                Tellus maecenas libero est tempus sit cras at malesuada diam. 
                                Consequat senectus dictumst non hac dignissim montes, pretium, egestas molestie. 
                                Sed magna aliquet ornare nibh vel lectus diam eget pretium. 
                                Lorem risus nunc tincidunt tortor, mi nulla pellentesque
                            </p>
                    </div>
                    <div class="about-course__list__container">
                        <h3 class="about-course__list__title">
                            You will learn:
                        </h3>
                        <div class="about-course__list__paragraph__container">
                            <p class="about-course__list__paragraph">
                                A fermentum in morbi pretium aliquam adipiscing donec tempus.
                            </p>
                            <p class="about-course__list__paragraph">
                                Vulputate placerat amet pulvinar lorem nisl.
                            </p>
                            <p class="about-course__list__paragraph">
                                Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.
                            </p>
                            <p class="about-course__list__paragraph">
                                Etiam duis lobortis in fames ultrices commodo nibh.
                            </p>
                            <p class="about-course__list__paragraph">
                                Fringilla in nec risus congue venenatis pretium posuere nec.
                            </p>
                            <p class="about-course__list__paragraph">
                                Cursus eu pretium, vulputate tempus quam massa sed at.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="period__course__container">
                    <div class="date__container">
                        <h1 class="date__title">
                            Dates
                        </h1>
                        <div class="date">
                            Sept 7 – Nov 2
                        </div>
                        <p class="date__paragraph">
                            Metus turpis sit lorem lacus, in elit tellus lacus.
                        </p>
                    </div>
                    <div class="duration__container">
                        <h1 class="duration__title">
                            Duration
                        </h1>
                        <p class="duration">
                            2 months – 8 lessons
                        </p>
                        <p class="duration__paragraph">
                            Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.
                        </p>
                    </div>
                    <div class="price__container">
                        <h1 class="price__title">
                            Price
                        </h1>
                        <p class="price">
                            $120 per month
                        </p>
                        <p class="price__paragraph">
                            Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.
                        </p>
                    </div>
                    <div class="join__button__container">
                        <p class="join__button__text">
                            Join the course
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="course__curator__container">
                <div class="course__curator__photo">
                    <img class="curator__photo" src="@/assets/pictures/curator__photo.png" alt="Cody Fisher">
                    <img class="circles__yellow" src="@/assets/pictures/circles__yellow.png" alt="circles__yellow">
                </div>
                <div class="course__curator__info__container">
                    <h6 class="course__curator__info__title">
                        Course curator
                    </h6>
                    <h2 class="curator__name">
                        Cody Fisher
                    </h2>
                    <p class="course__curator__info__paragraph">
                        Senior UX designer in IT Product Company
                    </p>
                    <div class="curator__achievements__container">
                        <p class="curator__achievements">
                            4.9 rate
                        </p>
                        <p class="curator__achievements">
                            4 courses
                        </p>
                        <p class="curator__achievements">
                            350 students
                        </p>
                    </div>
                    <p class="curator__description">
                        Mattis adipiscing aliquam eu proin metus a iaculis faucibus. 
                        Tempus curabitur venenatis, vulputate venenatis fermentum ante. 
                        Nisl, amet id semper semper quis commodo, consequat. 
                        Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. 
                        Sem vulputate molestie laoreet at massa sed pharetra. 
                        Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. 
                        Nam vel aliquam tristique sollicitudin interdum quam. 
                    </p>
                    <div class="curator__networks__container">
                        <div class="network facebook"></div>
                        <div class="network behance"></div>
                        <div class="network twitter"></div>
                        <div class="network linked_in"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="steps__container">
                <div class="steps__title__container">
                    <h3 class="steps__title__string">
                        Main steps
                    </h3>
                    <h1 class="steps__title">
                        Online learning process
                    </h1>
                </div>
                <div class="steps__information__slider__container">
                    <carousel 
                        :navigationEnabled="true"
                        :per-page="1"
                        :navigate-to="someLocalProperty" 
                        :mouse-drag="true" 
                        :NextLabel="true"
                        :autoplay="false"
                    >
                        <slide class="step__slider__container">
                            <div class="step__slider__number">
                                <p class="step__number">
                                    01
                                </p>
                            </div>
                            <div class="step__slider__info__container">
                                <h4 class="step__slider__info__title">
                                    Watching online video lectures
                                </h4>
                                <p class="step__slider__info__paragraph">
                                    Culpa nostrud commodo ea consequat aliquip reprehenderit. 
                                    Veniam velit nostrud aliquip sunt.
                                </p>
                            </div>
                        </slide>
                        <slide class="step__slider__container">
                            <div class="step__slider__number">
                                <p class="step__number">
                                    02
                                </p>
                            </div>
                            <div class="step__slider__info__container">
                                <h4 class="step__slider__info__title">
                                    Passing <br>test
                                </h4>
                                <p class="step__slider__info__paragraph">
                                    Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. 
                                    Minim ad tempor est ea.
                                </p>
                            </div>
                        </slide>
                        <slide class="step__slider__container">
                            <div class="step__slider__number">
                                <p class="step__number">
                                    03
                                </p>
                            </div>
                            <div class="step__slider__info__container">
                                <h4 class="step__slider__info__title">
                                    Curator's <br>feedback
                                </h4>
                                <p class="step__slider__info__paragraph">
                                    Adipisicing esse aliqua aliquip qui amet. 
                                    Aute eiusmod dolore dolore et ad et veniam ad deserunt.
                                </p>
                            </div>
                        </slide>
                        <slide class="step__slider__container">
                            <div class="step__slider__number">
                                <p class="step__number">
                                    04
                                </p>
                            </div>
                            <div class="step__slider__info__container">
                                <h4 class="step__slider__info__title">
                                    Corrections if <br>needed
                                </h4>
                                <p class="step__slider__info__paragraph">
                                    Sit veniam aute dolore adipisicing nulla sit culpa. 
                                    Minim mollit voluptate ullamco proident ea ad.
                                </p>
                            </div>
                        </slide>
                    </carousel>
                </div>
                <div class="steps__information__container">
                    <div class="step__container">
                        <div class="step__number">
                            <p class="number">
                                01
                            </p>
                        </div>
                        <div class="step__info__container">
                            <h4 class="step__info__title">
                                Watching online video lectures
                            </h4>
                            <p class="step__info__paragraph">
                                Culpa nostrud commodo ea consequat aliquip reprehenderit. 
                                Veniam velit nostrud aliquip sunt.
                            </p>
                        </div>
                    </div>                    
                    <div class="step__container">
                        <div class="step__number">
                            <p class="number">
                                02
                            </p>
                        </div>
                        <div class="step__info__container">
                            <h4 class="step__info__title">
                                Passing <br>test
                            </h4>
                            <p class="step__info__paragraph">
                                Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. 
                                Minim ad tempor est ea.
                            </p>
                        </div>
                    </div>                    
                    <div class="step__container">
                        <div class="step__number">
                            <p class="number">
                                03
                            </p>
                        </div>
                        <div class="step__info__container">
                            <h4 class="step__info__title">
                                Curator's <br>feedback
                            </h4>
                            <p class="step__info__paragraph">
                                Adipisicing esse aliqua aliquip qui amet. 
                                Aute eiusmod dolore dolore et ad et veniam ad deserunt.
                            </p>
                        </div>
                    </div>
                    <div class="step__container">
                        <div class="step__number">
                            <p class="number">
                                04
                            </p>
                        </div>
                        <div class="step__info__container">
                            <h4 class="step__info__title">
                                Corrections if <br>needed
                            </h4>
                            <p class="step__info__paragraph">
                                Sit veniam aute dolore adipisicing nulla sit culpa. 
                                Minim mollit voluptate ullamco proident ea ad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="discount__container">
                <img class="half__circles" src="@/assets/pictures/half__circles.png" alt="half__circles">
                <div class="discount__top__info__container">
                    <h2 class="discount__title">20% discount for early birds!</h2>
                    <div class="discount__counter__container">
                        <flip-countdown deadline="2022-12-31 00:00:00"></flip-countdown>
                    </div>
                </div>
                <form class="discount__form__container">
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
                    <input type="submit" value="Join the course" class="discount__form__button">
                </form>
            </div>
        </div>
        <div class="container">
            <div class="benefits__course__container">
                <div class="benefits__course__title__container">
                    <h3 class="benefits__course__title__string">
                        For whom?
                    </h3>
                    <h1 class="benefits__course__title">
                        Who will benefit from the course:
                    </h1>
                </div>
                <div class="benefits__course__list__container">
                    <p class="benefits__course">
                        Specialists with more than 1 year of active work experience
                    </p>
                    <p class="benefits__course">
                        Mobile app designers who want to improve their skills in solving business problems, 
                        creating and testing <br>human-centered interfaces
                    </p>
                    <p class="benefits__course">
                        Professional designers who want to feel more confident in UX
                    </p>
                    <p class="benefits__course">
                        Specialists who would like to structure their knowledge, fill in the gaps
                    </p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="course__program__container">
                <div class="course__program__accordion">
                    <div class="course__program__title__container">
                        <h3 class="course__program__title__string">
                            Course program
                        </h3>
                        <h1 class="course__program__title">
                            What will you learn
                        </h1>
                    </div>
                    <VueFaqAccordion 
                        :items="myItems"
                    />
                </div>
                <div class="course__program__picture__container">
                    <img class="course__program__picture" src="@/assets/pictures/course__pictures.png" alt="course__picture">
                </div>
            </div>
        </div>
        <div class="testimonials__and__register__form">
            <img class="half__circles__left" src="@/assets/pictures/half__circles__left.png" alt="half__circles__left">
            <Testimonials/>
            <div class="container">
                <div class="register__container">
                    <div class="register__picture__container">
                        <img class="registration" src="@/assets/pictures/registration.png" alt="registration">
                    </div>
                <form class="register__form__container">
                    <div class="register__form__title__container">
                        <h6 class="register__form__title__string">
                            Leave a request now and get 20% off!
                        </h6>
                        <h2 class="register__form__title">
                            Register for the course
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
                    <input type="submit" value="Join the course" class="register__form__button">
                </form>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="other__course__container">
                <div class="other__course__title__container">
                    <h3 class="other__course__title__string">
                        Check other courses
                    </h3>
                    <h1 class="other__course__title">
                        You may also like
                    </h1>
                </div>
                <div class="other__course__carousel-wrapper">
                    <carousel 
                        :navigationEnabled="true"
                        :per-page="1"
                        :navigate-to="someLocalProperty" 
                        :mouse-drag="true" 
                        :NextLabel="true"
                        :autoplay="false"
                    >
                        <slide>
                            <div class="course__container">
                                <div class="photo__teacher__container">
                                    <img class="photo__teacher" src="@/assets/pictures/marketing_first__square.png" alt="Jerome_Bell">
                                </div>
                                <div class="course__information__container">
                                    <div class="range__info__container marketing">
                                        <p class="range__info">Marketing</p>
                                    </div>
                                    <h2 class="course__name">The Ultimate Google Ads Training Course</h2>
                                    <div class="course__some__info__container">
                                        <p class="price">$100</p>
                                        <p class="symbol">|</p>
                                        <p class="teacher">by Jerome Bell</p>
                                    </div>
                                </div>
                            </div>
                            <div class="course__container">
                                <div class="photo__teacher__container">
                                    <img class="photo__teacher" src="@/assets/pictures/management_first__square.png" alt="Marvin_McKinney">
                                </div>
                                <div class="course__information__container">
                                    <div class="range__info__container management">
                                        <p class="range__info">Management</p>
                                    </div>
                                    <h2 class="course__name">Product Management Fundamentals</h2>
                                    <div class="course__some__info__container">
                                        <p class="price">$480</p>
                                        <p class="symbol">|</p>
                                        <p class="teacher">by Marvin McKinney</p>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <slide>
                            <div class="course__container">
                                <div class="photo__teacher__container">
                                    <img class="photo__teacher" src="@/assets/pictures/recruting__square.png" alt="Leslie_Alexander_Li">
                                </div>
                                <div class="course__information__container">
                                    <div class="range__info__container recruting">
                                        <p class="range__info">HR & Recruting</p>
                                    </div>
                                    <h2 class="course__name">HR  Management and Analytics</h2>
                                    <div class="course__some__info__container">
                                        <p class="price">$200</p>
                                        <p class="symbol">|</p>
                                        <p class="teacher">by Leslie Alexander Li</p>
                                    </div>
                                </div>
                            </div>
                            <div class="course__container">
                                <div class="photo__teacher__container">
                                    <img class="photo__teacher" src="@/assets/pictures/marketing_second__square.png" alt="Kristin_Watson">
                                </div>
                                <div class="course__information__container">
                                    <div class="range__info__container marketing">
                                        <p class="range__info">Marketing</p>
                                    </div>
                                    <h2 class="course__name">Brand Management & PR Communications</h2>
                                    <div class="course__some__info__container">
                                        <p class="price">$530</p>
                                        <p class="symbol">|</p>
                                        <p class="teacher">by Kristin Watson</p>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <slide>
                            <div class="course__container">
                                <div class="photo__teacher__container">
                                    <img class="photo__teacher" src="@/assets/pictures/management_second__square.png" alt="Dianne_Russell">
                                </div>
                                <div class="course__information__container">
                                    <div class="range__info__container management">
                                        <p class="range__info">Management</p>
                                    </div>
                                    <h2 class="course__name">Business Development Management</h2>
                                    <div class="course__some__info__container">
                                        <p class="price">$400</p>
                                        <p class="symbol">|</p>
                                        <p class="teacher">by Dianne Russell</p>
                                    </div>
                                </div>
                            </div>
                            <div class="course__container">
                                <div class="photo__teacher__container">
                                    <img class="photo__teacher" src="@/assets/pictures/design__square.png" alt="Guy_Hawkins">
                                </div>
                                <div class="course__information__container">
                                    <div class="range__info__container design">
                                        <p class="range__info">Design</p>
                                    </div>
                                    <h2 class="course__name">Graphic Design Basic</h2>
                                    <div class="course__some__info__container">
                                        <p class="price">$500</p>
                                        <p class="symbol">|</p>
                                        <p class="teacher">by Guy Hawkins</p>
                                    </div>
                                </div>
                            </div>
                        </slide>
                    </carousel>
                    <div class="other__course__question__container">
                        <h2 class="course__question">
                            Do you want more courses?
                        </h2>
                        <div class="course__question__btn__container">
                            <router-link class="question__btn__text" to="/courses">Courses</router-link>
                        </div>
                    </div>
                </div>
                <div class="other__course__carousel-mobile__wrapper">
                    <carousel 
                        :navigationEnabled="true"
                        :per-page="1"
                        :navigate-to="someLocalProperty" 
                        :mouse-drag="true" 
                        :NextLabel="true"
                        :autoplay="false"
                    >
                        <slide class="course-сarousel">
                            <div class="course__container">
                                <div class="photo__teacher__container">
                                    <img class="photo__teacher" src="@/assets/pictures/marketing__Bell.png" alt="Jerome_Bell">
                                </div>
                                <div class="course__information__container">
                                    <div class="range__info__container marketing">
                                        <p class="range__info">Marketing</p>
                                    </div>
                                    <h2 class="course__name">The Ultimate Google Ads Training Course</h2>
                                    <div class="course__some__info__container">
                                        <p class="price">$100</p>
                                        <p class="symbol">|</p>
                                        <p class="teacher">by Jerome Bell</p>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <slide class="course-сarousel">
                            <div class="course__container">
                                <div class="photo__teacher__container">
                                    <img class="photo__teacher" src="@/assets/pictures/management__McKinney.png" alt="Marvin_McKinney">
                                </div>
                                <div class="course__information__container">
                                    <div class="range__info__container management">
                                        <p class="range__info">Management</p>
                                    </div>
                                    <h2 class="course__name">Product Management Fundamentals</h2>
                                    <div class="course__some__info__container">
                                        <p class="price">$480</p>
                                        <p class="symbol">|</p>
                                        <p class="teacher">by Marvin McKinney</p>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <slide class="course-сarousel">
                            <div class="course__container">
                                <div class="photo__teacher__container">
                                    <img class="photo__teacher" src="@/assets/pictures/hr__Li.png" alt="Leslie_Alexander_Li">
                                </div>
                                <div class="course__information__container">
                                    <div class="range__info__container recruting">
                                        <p class="range__info">HR & Recruting</p>
                                    </div>
                                    <h2 class="course__name">HR  Management and Analytics</h2>
                                    <div class="course__some__info__container">
                                        <p class="price">$200</p>
                                        <p class="symbol">|</p>
                                        <p class="teacher">by Leslie Alexander Li</p>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <slide class="course-сarousel">
                            <div class="course__container">
                                <div class="photo__teacher__container">
                                    <img class="photo__teacher" src="@/assets/pictures/marketing__Watson.png" alt="Kristin_Watson">
                                </div>
                                <div class="course__information__container">
                                    <div class="range__info__container marketing">
                                        <p class="range__info">Marketing</p>
                                    </div>
                                    <h2 class="course__name">Brand Management & PR Communications</h2>
                                    <div class="course__some__info__container">
                                        <p class="price">$530</p>
                                        <p class="symbol">|</p>
                                        <p class="teacher">by Kristin Watson</p>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <slide class="course-сarousel">
                            <div class="course__container">
                                <div class="photo__teacher__container">
                                    <img class="photo__teacher" src="@/assets/pictures/management__Russell.png" alt="Dianne_Russell">
                                </div>
                                <div class="course__information__container">
                                    <div class="range__info__container management">
                                        <p class="range__info">Management</p>
                                    </div>
                                    <h2 class="course__name">Business Development Management</h2>
                                    <div class="course__some__info__container">
                                        <p class="price">$400</p>
                                        <p class="symbol">|</p>
                                        <p class="teacher">by Dianne Russell</p>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <slide class="course-сarousel">
                            <div class="course__container">
                                <div class="photo__teacher__container">
                                    <img class="photo__teacher" src="@/assets/pictures/design__Hawkins.png" alt="Guy_Hawkins">
                                </div>
                                <div class="course__information__container">
                                    <div class="range__info__container design">
                                        <p class="range__info">Design</p>
                                    </div>
                                    <h2 class="course__name">Graphic Design Basic</h2>
                                    <div class="course__some__info__container">
                                        <p class="price">$500</p>
                                        <p class="symbol">|</p>
                                        <p class="teacher">by Guy Hawkins</p>
                                    </div>
                                </div>
                            </div>
                        </slide>
                    </carousel>
                    <div class="other__course__question__container">
                        <h2 class="course__question">
                            Do you want more courses?
                        </h2>
                        <div class="course__question__btn__container">
                            <router-link class="question__btn__text" to="/courses">Courses</router-link>
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
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import FlipCountdown from 'vue2-flip-countdown';

import VueFaqAccordion from 'vue-faq-accordion'

export default {
    name: "contacts",
    components: {
        Header,
        Testimonials,
        Footer,
        FlipCountdown,
        VueFaqAccordion
    },
      data () {
        return {
            myItems: [
                {
                    title: '<span>Lesson 1.</span> Aliquet lectus urna viverra in odio.',
                    value: 'Lorem ipsum dolor sit amet. At unde quia sit incidunt velit ut sint dolor est autem consequatur et sint facere. Eum totam animi est voluptatem accusantium qui sapiente fugiat. Quo provident autem ea sint rerum in totam vitae ex iure doloribus et eaque architecto ut repudiandae impedit eum itaque dolor. Et molestiae internos aut delectus inventore non consequatur dolorum qui veniam eius.',
                },
                {
                    title: '<span>Lesson 2.</span> Orci commodo, viverra orci mollis ut euismod.',
                    value: 'Et exercitationem ducimus in ipsa rerum aut assumenda quaerat et aperiam nihil non omnis accusamus in corporis reiciendis ut voluptatum quidem. Sit explicabo molestiae ad explicabo tenetur sit quas eligendi. Ut voluptas alias eos sequi omnis At pariatur asperiores. Est sequi voluptas At debitis repudiandae et corrupti enim ut soluta voluptas.',
                },
                {
                    title: '<span>Lesson 3.</span> Sagittis vitae facilisi rutrum amet mauris quisque vel.',
                    value: 'Ex odio nulla cum alias numquam ex dolores corporis et veniam doloremque! Et Quis distinctio et consequuntur explicabo aut sint unde aut enim maxime. 33 architecto dolor non illum dolorem sit magnam totam aut sunt voluptatum rem ipsam perferendis ut laudantium dolor et aliquid laudantium? Est voluptatem quae ad fugiat consequatur et aspernatur exercitationem quo enim enim qui quae velit aut repellendus atque!',
                },
                {
                    title: '<span>Lesson 4.</span> In id dolor quis nunc, urna hendrerit pharetra.',
                    value: 'Aut impedit ducimus nam atque rerum vel optio alias ex harum optio a quasi officia ut quasi tenetur. Ut culpa earum sed rerum quos rem soluta aspernatur id iusto reprehenderit. Vel placeat reprehenderit qui quia iusto eum molestiae cupiditate aut voluptate aliquam et unde dolore et dolorem inventore.',
                },
                {
                    title: '<span>Lesson 5.</span> Est, ut tempus id rutrum facilisi.',
                    value: 'Et voluptatem adipisci ut quia mollitia non magnam nesciunt 33 eligendi deserunt. Et similique rerum sit consequatur harum est minus illo ea fuga aperiam aut quia aliquam et quod deserunt sit magni numquam. Eos repellat voluptates qui corrupti magni et sequi numquam non libero omnis non quas numquam.',
                },
                {
                    title: '<span>Lesson 6.</span> Amet nec in pellentesque.',
                    value: 'Quo nisi dolores qui officiis illo sit dicta voluptatem non cupiditate commodi aut pariatur totam nam quis nesciunt aut atque aliquid. Aut consequatur praesentium nam repellendus maxime ut reprehenderit doloremque a nemo nemo non culpa consequatur et dolor reprehenderit. At autem soluta aut fugit dicta ea totam minima ut asperiores nostrum id veniam quae ut minima nihil! Ut architecto magni eos velit itaque ut incidunt minima vel voluptate voluptas cum vitae nobis.',
                },
                {
                    title: '<span>Lesson 7.</span> Massa vel arcu mauris, id vel rhoncus mattis quis.',
                    value: 'Nam internos voluptates est corrupti dicta sed sunt suscipit 33 praesentium quasi 33 deserunt beatae sed tempora praesentium? Aut inventore voluptas est iusto beatae et omnis velit sit quia autem et ullam dignissimos. Ab enim magnam aut esse iure quo dolores tempore ut mollitia incidunt! In expedita cupiditate qui eaque quibusdam ut distinctio accusamus et quas pariatur et saepe dolores id autem impedit.',
                },
                {
                    title: '<span>Lesson 8.</span> Neque, cursus sapien nullam id.',
                    value: 'Ut voluptas illo eos dolores corrupti et cupiditate doloribus hic aspernatur inventore. Et voluptate assumenda et itaque rerum At quia accusantium aut omnis soluta. Sed rerum accusantium aut voluptate magnam At similique facilis et voluptatem temporibus ut quae quas sit unde fugiat? Et rerum impedit qui dolorem laboriosam et omnis culpa et unde galisum cum illum fugiat.',
                }
            ]
        }
    }
};
</script>

<style lang="scss">
.course-page {
    
    .course-page__header__container {
        padding-bottom: 120px;
        background: linear-gradient(55deg, rgba(255,63,58,0.2) 0%, rgba(247,94,5,0.2) 100%);   

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
            left: 98%;
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

        .course-page__header__title__container {
            text-align: center;
            position: relative;
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: center;

            .course-page__header__title__string {
                font-weight: 700;
                font-size: 16px;
                line-height: 150%;
                letter-spacing: 1px;
                text-transform: uppercase;
                color: #FF3F3A;
                margin-bottom: 12px;
                padding-top: 120px;

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

            .course-page__header__title {
                font-weight: 900;
                font-size: 46px;
                line-height: 130%;
                width: 1020px;
                margin: 0 auto;

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

    .about-course__container {
        margin-top: 120px;
        display: flex;
        align-items: center;
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

        .about-course__indormation__container {
            width: 600px;
            margin-right: 130px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                width: 500px;
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

            .about-course__indormation {
                margin-bottom: 48px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-bottom: 38px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-bottom: 38px;
                }
                
                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    margin-bottom: 36px;
                }

                .about-course__indormation__title {
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
                        text-align: center;
                        margin-bottom: 15px;
                    }
                }

                .about-course__indormation__paragraph {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 160%;
                    color: #424551;
                    margin-bottom: 40px;

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

            .about-course__list__container {
                
                .about-course__list__title {
                    font-weight: 700;
                    font-size: 28px;
                    line-height: 150%;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        font-size: 26px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        font-size: 26px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        font-size: 24px;
                    }
                }

                .about-course__list__paragraph__container {
                    margin-top: 24px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        margin-top: 20px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        margin-top: 20px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        margin-top: 18px;
                    }

                    .about-course__list__paragraph {
                        margin-bottom: 4px;
                        position: relative;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            margin-bottom: 2px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            margin-bottom: 5px;
                            display: flex;
                            align-items: baseline;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            margin-bottom: 5px;
                            display: flex;
                            align-items: baseline;
                        }

                        &:last-of-type {
                            margin-bottom: 0;
                        }

                        &:before {
                            content: url(../assets/pictures/check.png);
                            margin-right: 16px;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                margin-right: 14px;
                            }

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                margin-right: 14px;
                            }

                            position: relative;
                            top: 2px;
                        }
                    }
                }
            }
        }

        .period__course__container {
            background: #fff;
            padding: 40px 32px;
            border: 1px solid #E5E8ED;
            box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 4px 4px -4px rgba(30, 33, 44, 0.03);
            border-radius: 4px;
            width: 495px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                width: 345px;
                padding: 30px 25px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                width: 315px;
                padding: 30px 25px;
                height: fit-content;
            }

            @media screen and (min-width: 425px) and (max-width: 767px) { 
                width: 385px;
                padding: 30px 25px;
                height: fit-content;
            }

            @media screen and (min-width: 375px) and (max-width: 424px) { 
                width: 335px;
                padding: 30px 25px;
                height: fit-content;
            }

            @media screen and (min-width: 360px) and (max-width: 374px) { 
                width: 320px;
                padding: 20px;
                height: fit-content;
            }

            @media screen and (min-width: 320px) and (max-width: 359px) { 
                width: 280px;
                padding: 20px;
                height: fit-content;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-top: 30px;
            }

            .date__container,
            .duration__container,
            .price__container {
                margin-bottom: 32px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-bottom: 26px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-bottom: 26px;
                }

                .date__title,
                .duration__title,
                .price__title {
                    font-size: 14px;
                    line-height: 150%;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    margin-bottom: 4px;
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
                .duration__paragraph,
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

    .course__curator__container {
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

        .course__curator__photo {
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

            .curator__photo {

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

        .course__curator__info__container {
            padding-top: 20px;
            margin-left: 102px;

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
        
            .course__curator__info__title {
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

            .course__curator__info__paragraph {
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

            .curator__achievements__container {
                margin-bottom: 32px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-bottom: 26px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-bottom: 26px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    margin-bottom: 20px;
                }

                .curator__achievements {
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 160%;
                    color: #424551;
                    margin-bottom: 4px;
                    position: relative;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        font-size: 14px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        font-size: 14px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        font-size: 13px;
                    }

                    &:nth-of-type(1) {
                        &::before {
                            content: url(../assets/pictures/star_primary.png);
                            margin-right: 8px;
                            position: relative;
                            top: 1px;
                        }
                    }

                    &:nth-of-type(2) {
                        &::before {
                            content: url(../assets/pictures/play_primary.png);
                            margin-right: 8px;
                            position: relative;                            
                            top: 2px;
                        }
                    }

                    &:last-of-type {
                        margin-bottom: 0;

                        &::before {
                            content: url(../assets/pictures/person_primary.png);
                            margin-right: 8px;
                            position: relative;                            
                            top: 2px;
                        }
                    }
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

                .behance {
                    background: url(../assets/pictures/behance_grey.png);
                    background-repeat: no-repeat;
                    background-position: center;
                    transition: all 1s ease-out;

                    &:hover {
                        background: url(../assets/pictures/behance_primary.png);
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

    .steps__container {

        .steps__title__container {
            margin-bottom: 32px;
            text-align: center;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin-bottom: 26px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-bottom: 26px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-bottom: 24px;
            }

            .steps__title__string {
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

            .steps__title {
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

        .steps__information__slider__container {
            display: none;

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                display: block;
            }

            .VueCarousel {
                max-width: 1575px;
                margin: 0 auto;
                width: 275px;
                
                .VueCarousel-wrapper {
                    width: 1250px;
                    margin: 0;
                    
                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        width: 100%;
                    }

                    .VueCarousel-slide {
                        display: flex;

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            width: 250px;
                            flex-direction: column;
                        }
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

            .step__slider__container {
                margin-right: 0;
                position: relative;
                display: flex;
                align-items: flex-end;

                &:last-of-type {

                    .step__number {
                        .number {

                            &::after {
                                content: none;
                            }
                        }
                    }
                }

                .step__slider__number {
                    transition: all 1s ease;
                    color: #D7DADD;

                    &:hover {
                        color: #FF3F3A;
                    }

                    .step__number {
                        font-weight: 900;
                        line-height: 130%;
                        display: flex;
                        align-items: center;
                        font-size: 30px;

                        &::after {
                            content: "";
                            width: 190px;
                            height: 1%;
                            border: 1px dashed #D7DADD;
                            margin-left: 22px;
                        }
                    }
                }

                .step__slider__info__container {

                    width: 270px;
                    padding-left: 20px;

                    .step__slider__info__title {
                        font-weight: 700;
                        font-size: 16px;
                        line-height: 150%;
                        
                        br {
                            display: none;
                        }
                    }

                    .step__slider__info__paragraph {
                        color: #787A80;
                        margin-top: 8px;
                    }
                }
            }
        }

        .steps__information__container {
            display: flex;
            width: 1230px;
            margin-bottom: 180px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin-bottom: 100px;
                width: auto;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                width: 648px;
                margin: 0 auto 100px auto;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                display: none;
            }

            .step__container {
                width: 285px;
                margin-right: 30px;
                position: relative;
                display: flex;
                align-items: flex-end;
                height: 185px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    width: 190px;
                    margin-right: 26px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: 147px;
                    margin-right: 15px;
                }

                &:last-of-type {

                    .step__number {
                        .number {

                            &::after {
                                content: none;
                            }
                        }
                    }
                }

                .step__number {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    transition: all 1s ease;
                    color: #D7DADD;

                    &::before {
                        content: "";
                        position: absolute;
                        height: 116px;
                        width: 116px;
                        background: transparent;
                        opacity: 0;
                        transition: all 1s ease-out;
                        border-radius: 100%;
                        bottom: 52%;
                        left: -11%;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            height: 85px;
                            width: 85px;
                            bottom: 64%;
                            left: -10.5%;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            height: 85px;
                            width: 85px;
                            bottom: 63%;
                            left: -12%;
                        }

                    }

                    &::after {
                        content: "";
                        position: absolute;
                        height: 84px;
                        width: 84px;
                        background: transparent;
                        opacity: 0;
                        transition: all 1s ease-out;
                        border-radius: 100%;
                        bottom: 61%;
                        left: -5.5%;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            height: 65px;
                            width: 65px;
                            bottom: 69%;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            height: 65px;
                            width: 65px;
                            bottom: 68%;
                            left: -5%;
                        }
                    }

                    &:hover {
                        color: #FF3F3A;

                        &:before {
                            background: #FF3F3A;
                            opacity: 0.06;
                        }

                        &:after {
                            background: #FF3F3A;
                            opacity: 0.12;
                        }
                    }

                    .number {
                        font-weight: 900;
                        font-size: 46px;
                        line-height: 130%;
                        display: flex;
                        align-items: center;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            font-size: 36px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            font-size: 36px;
                        }

                        &::after {
                            content: "";
                            width: 190px;
                            height: 1%;
                            border: 1px dashed #D7DADD;
                            margin-left: 33px;
                        }
                    }
                }

                .step__info__container {

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        position: absolute;
                        top: 35%;
                    }

                    .step__info__title {
                        font-weight: 700;
                        font-size: 20px;
                        line-height: 150%;
                        
                        br {
                            display: none;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                display: block;
                            }
                        }

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            font-size: 18px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            font-size: 18px;
                        }
                    }

                    .step__info__paragraph {
                        color: #787A80;
                        margin-top: 8px;
                    }
                }
            }
        }
    }

    .discount__container {
        background: linear-gradient(55deg, rgba(255,63,58,0.2) 0%, rgba(247,94,5,0.2) 100%);
        width: 1230px;
        padding: 48px 60px;  
        position: relative;

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
            margin-top: 80px;
        }

        @media screen and (min-width: 375px) and (max-width: 424px){
            width: 330px;
            padding: 20px;
            margin-top: 80px;
        }

        @media screen and (min-width: 360px) and (max-width: 374px) { 
            width: 320px;
            padding: 20px;
            margin-top: 80px;
        }

        @media screen and (min-width: 320px) and (max-width: 359px) { 
            width: 285px;
            padding: 20px;
            margin-top: 80px;
        }

        .half__circles {
            position: absolute;
            left: 50%;
            top: 0%;

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                display: none
            }
        }

        .discount__top__info__container {
            display: flex;
            align-items: center;
            justify-content: space-between;

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                flex-direction: column;
                justify-content: center;
                text-align: center;
            }

            .discount__title  {
                font-weight: 900;
                font-size: 32px;
                line-height: 130%;

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

            .discount__counter__container {
                width: 300px;

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: 270px;
                }

                .container {

                    @media screen and (min-width: 1250px) and (max-width: 1519px) { 
                        width: auto;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        width: auto;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        width: auto;
                    }
                }

                @media (min-width: 1000px) {
                    .flip-card[data-v-cff81de8] {
                        font-size: 20px !important;
                    }
                }

                .flip-clock__piece {
                    margin-right: 24px !important;

                    &:last-of-type {
                        margin-right: 0 !important;
                    }
                    .flip-clock__card  {

                        .flip-card__top {
                            font-weight: 700 !important;
                            font-size: 20px !important;
                            line-height: 130% !important;
                            color: #1E212C !important;
                            background: transparent !important;
                        }

                        .flip-card__bottom,
                        .flip-card__back,
                        .flip-card__back-bottom {
                            display: none !important;
                        }

                    }
                }

                .flip-clock__slot {
                    font-weight: 400 !important;
                    font-size: 12px !important;
                    line-height: 150% !important;
                    color: #1E212C !important;
                }
            }
        }

        .discount__form__container {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            margin-top: 32px;

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                flex-wrap: wrap;
                align-items: flex-end;
                justify-content: center;
            }
            
            @media screen and (min-width: 320px) and (max-width: 767px) { 
                flex-wrap: wrap;
                align-items: flex-end;
                justify-content: center;
            }

            .input {
                background: #FFFFFF;
                border: 1px solid #D7DADD;
                border-radius: 4px;
                width: 291px;
                height: 44px;
                padding-top: 11px;
                padding-bottom: 12px;
                padding-left: 16px;
                margin-top: 8px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    width: 200px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: 250px;
                    margin-right: 15px;
                }

                @media screen and (min-width: 375px) and (max-width: 767px) { 
                    width: 290px;
                    margin-bottom: 15px;
                }

                @media screen and (min-width: 320px) and (max-width: 374px) { 
                    width: 250px;
                    margin-bottom: 15px;
                }

                &::placeholder {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 150%;
                    color: #9A9CA5;
                }
            }

            .phone {

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-top: 15px;
                }
            }

            .full_name,
            .email,
            .phone {

                .full_name__text,
                .email__text,
                .phone__text {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 150%;
                    color: #424551;
                }
            }

            .discount__form__button {
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
                width: 165px;
                height: 44px;

                &:hover {
                    background: linear-gradient(55.95deg, #ffa200 0%, #ff0000 100%);
                }


            }
            
        }
    }

    .benefits__course__container {
        display: flex;
        margin-top: 180px;

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            margin-top: 100px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            margin-top: 100px; 
        }

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            margin-top: 100px;
            flex-direction: column;
        }

        .benefits__course__title__container {
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
            
            .benefits__course__title__string {
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

            .benefits__course__title {
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

        .benefits__course__list__container {
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

            .benefits__course {
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

    .course__program__container {
        margin-top: 180px;
        align-items: flex-end;
        margin-bottom: 100px;
        background: url(../assets/pictures/course__pictures.png);
        background-repeat: no-repeat;
        width: 1230px;
        background-position-x: right;
        position: relative;

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            background-size: 50%;
            margin-bottom: 80px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            background-size: 45%;
            margin-bottom: 70px;
        }

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            background: unset;
            margin-top: 100px;
            margin-bottom: 60px;
        }

        .course__program__picture__container {
            display: none;

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                display: block
            }

            .course__program__picture {
                width: 100%;
            }
        }

        .course__program__accordion {
            position: relative;
            bottom: 33px;

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                position: unset;
            }

            .course__program__title__container {
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

                .course__program__title__string {
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

                .course__program__title {
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
                                width: 415px;
                            }

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                width: 375px;
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
    }

    .testimonials__and__register__form {

        background: #F4F5F7;
        padding-bottom: 100px;
        position: relative;

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            padding-bottom: 80px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            padding-bottom: 80px;
        }

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            padding-bottom: 60px;
        }

        .half__circles__left {
            position: absolute;
            right: 0;
            bottom: 40%;

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                bottom: 42%;
                width: 115px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                display: none;
            }
        }

        .register__container {
            display: flex;
            margin-top: 80px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin-top: 60px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-top: 60px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-top: 40px;
                flex-direction: column;
            }

            .register__picture__container {
                margin-top: 10px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-top: 5px;
                    width: 465px;
                    margin-right: 25px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-top: 5px;
                    width: 365px;
                    margin-right: 0;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    margin-top: 25px;
                    width: auto;
                    margin-right: 0;
                }

                .registration {

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
                width: 495px;
                margin-left: 185px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    width: 375px;
                    margin-left: 0;
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
                
            }
        }
    }

    .other__course__container {
        margin-top: 120px;
        margin-bottom: 180px;

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

        .other__course__title__container {
            margin-bottom: 60px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin-bottom: 40px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-bottom: 40px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-bottom: 30px;
            }

            .other__course__title__string {
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

            .other__course__title {
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


        .other__course__carousel-mobile__wrapper {
            display: none;

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                display: block;
            }
        }

        .other__course__carousel-wrapper {

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                display: none;
            }
        }

        .other__course__carousel-wrapper,
        .other__course__carousel-mobile__wrapper {

            .VueCarousel {
                max-width: 1575px;
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
                        width: 385px;
                        padding-bottom: 35px;
                    }

                    @media screen and (min-width: 375px) and (max-width: 424px) { 
                        width: 335px;
                        padding-bottom: 35px;
                    }

                    @media screen and (min-width: 360px) and (max-width: 374px) { 
                        width: 320px;
                        padding-bottom: 35px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 359px) { 
                        width: 275px;
                        padding-bottom: 35px;
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

                .VueCarousel-slide {

                    &:nth-of-type(1) {
                                        
                        .course__container {
                            
                            &:nth-of-type(1) {

                                .photo__teacher__container {

                                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                        background: url(../assets/pictures/marketing_first__square.png);
                                        background-repeat: no-repeat;
                                        background-size: cover;
                                        background-position: center;
                                    }
                                }

                            }

                            &:nth-of-type(2) {

                                .photo__teacher__container {

                                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                        background: url(../assets/pictures/management_first__square.png);
                                        background-repeat: no-repeat;
                                        background-size: cover;
                                        background-position: center;
                                    }
                                }

                            }
                        }
                    }

                    &:nth-of-type(2) {
                                        
                        .course__container {
                            
                            &:nth-of-type(1) {

                                .photo__teacher__container {

                                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                        background: url(../assets/pictures/recruting__square.png);
                                        background-repeat: no-repeat;
                                        background-size: cover;
                                        background-position: center;
                                    }
                                }

                            }

                            &:nth-of-type(2) {

                                .photo__teacher__container {

                                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                        background: url(../assets/pictures/marketing_second__square.png);
                                        background-repeat: no-repeat;
                                        background-size: cover;
                                        background-position: center;
                                    }
                                }

                            }
                        }
                    }

                    &:nth-of-type(3) {
                                        
                        .course__container {
                            
                            &:nth-of-type(1) {

                                .photo__teacher__container {

                                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                        background: url(../assets/pictures/design__square.png);
                                        background-repeat: no-repeat;
                                        background-size: cover;
                                        background-position: center;
                                    }
                                }

                            }

                            &:nth-of-type(2) {

                                .photo__teacher__container {

                                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                        background: url(../assets/pictures/management_second__square.png);
                                        background-repeat: no-repeat;
                                        background-size: cover;
                                        background-position: center;
                                    }
                                }

                            }
                        }
                    }
                    
                }


                .course__container {
                    width: 600px;
                    height: 215px;
                    display: flex;
                    border: 1px solid #E5E8ED;
                    background: #FFFFFF;
                    box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 4px 4px -4px rgba(30, 33, 44, 0.03);                    border-radius: 4px;
                    margin-bottom: 30px;
                    margin-right: 30px;
                    transition: all .5s ease-out;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        width: 425px;
                        margin-bottom: 15px;
                        margin-right: 15px;
                        height: fit-content;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        width: 322px;
                        margin-bottom: 10px;
                        margin-right: 10px;
                        height: fit-content;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        flex-direction: column;
                        width: fit-content;
                        height: fit-content;
                        margin-right: 0;
                    }

                    &:hover {
                        box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.16), 0px 30px 24px -10px rgba(154, 156, 165, 0.1), 0px 12px 10px -6px rgba(154, 156, 165, 0.08), 0px 4px 4px -4px rgba(30, 33, 44, 0.05);
                    }

                    &:nth-of-type(2),
                    &:nth-of-type(4),
                    &:nth-of-type(6) {
                        margin-right: 0;
                    }

                    &:nth-of-type(5),
                    &:nth-of-type(6) {
                        margin-bottom: 0;
                    }

                    &:nth-of-type(5) { 
                        .course__name {
                            width: 322px;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                width: auto;
                            }
                            
                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                width: auto;
                            }
                        }
                    }

                    .photo__teacher__container {

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            width: 190px;
                            height: 190px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            width: 165px;
                            height: 233px;
                        }

                        .photo__teacher{
                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                width: 190px;
                                height: 190px;
                            }

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                display: none;
                            }

                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                width: 100%;
                            }
                        }
                    }

                    .course__information__container {
                        margin-top: 32px;
                        margin-left: 32px;

                        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                            margin-top: 15px;
                            margin-left: 10px;
                            padding-right: 10px;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            margin-top: 15px;
                            margin-left: 10px;
                            padding-right: 12px;
                        }
                        
                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            margin: 20px;
                        }

                        .management {
                            background: #5A87FC;
                            width: 110px;
                        }

                        .marketing {
                            background: #03CEA4;
                            width: 90px;
                        }

                        .recruting {
                            background: #F89828;
                            width: 135px;
                        }

                        .design {
                            background: #F52F6E;
                            width: 59px;
                        }

                        .range__info__container {
                            height: 23px;
                            border-radius: 4px;
                            padding-top: 2px;
                            padding-right: 6px;
                            padding-left: 6px;
                            text-align: center;
                            margin-bottom: 20px;
                         
                            .range__info {
                                color: #FFFFFF;
                            }
                        }

                        .course__name {
                            font-size: 20px;
                            line-height: 150%;
                            margin-bottom: 20px;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                font-size: 18px;
                            }

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                font-size: 18px;
                            }

                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                font-size: 18px;
                            }

                        }

                        .course__some__info__container {
                            display: flex;
                            .price {
                                font-weight: 700;
                                font-size: 18px;
                                line-height: 150%;
                                color: #FF4242;

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

                            .symbol {
                                color: #787A80;
                                margin: 0 8px;

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

                            .teacher {
                                font-size: 18px;
                                line-height: 150%;
                                color: #787A80;

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
                }            
            }

            .other__course__question__container {
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

                .course__question {
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

                .course__question__btn__container {
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
</style>