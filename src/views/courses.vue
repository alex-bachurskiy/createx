<template>
    <div class="courses">
        <div class="container">
            <div class="courses__container">
                <Header/>
                <div class="courses__title__container">
                    <h3 class="courses__title__string">
                        Enjoy your studying!
                    </h3>
                    <h1 class="courses__title">
                        Our online courses
                    </h1>
                </div>
                <div class="courses__menu__and__search__container">
                    <div class="courses__menu__container">
                        <button :class="[`courses__menu-item courses__menu-item-${ button.id }`, { active: button.active }]"
                            v-for="button in buttons"
                            :key="button.id"
                            @click="filterItems(button)"
                            v-html="button.name"/>
                    </div>
                    <div class="search-courses__container">
                        <input class="search-courses__input" type="text" placeholder="Search course" disabled>
                        <button class="search-courses__button" type="button">
                            <img class="search__image" src="@/assets/pictures/search.png" alt="search">
                        </button>
                    </div>
                </div>
                <div class="courses__list__container">
                    <router-link :to="teacher.profile"
                                class="course__container"
                                v-for="teacher in filteredTeachers"
                                :key="teacher.id">
                        <div class="course__teacher__photo">
                            <img :src="require(`@/assets/pictures/${teacher.image}`)" :alt="teacher.rangeInfo">
                        </div>
                        <div class="course__information__container">
                            <div class="range__info__container">
                                <p :class="['range__info', teacher.rangeInfo.styles]" v-text="teacher.rangeInfo.title"/>
                            </div>
                            <h2 class="course__name" v-text="teacher.courseName"/>
                                <div class="course__some__info__container">
                                <p class="price" v-text="teacher.price"/>
                                <p class="symbol">|</p>
                                <p class="teacher" v-text="'by ' + teacher.teacherName"/>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="courses__more__contaianer">
                    <div class="more"></div>
                    <a class="courses__more__text" href="#header" v-scroll-to="'#header'">Load more</a>
                </div>
            </div>
        </div>
        <Testimonials/>
        <Subscribe/>
        <Footer/>
    </div>
</template>

<script>
import Header from "../components/Header";
import Testimonials from "../components/Testimonials";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

export default {
    name: "contacts",

    components: {
        Header,
        Testimonials,
        Subscribe,
        Footer
    },

    data () {
        return {
        buttons: [
            { id: 0, index: 0, name: "All", active: true },
            { id: 1, index: 1, name: "Marketing<sup>2</sup>", active: false },
            { id: 2, index: 2, name: "Management<sup>2</sup>", active: false },
            { id: 3, index: 3, name: "HR & Recruting<sup>2</sup>", active: false },
            { id: 4, index: 4, name: "Design<sup>2</sup>", active: false },
            { id: 5, index: 5, name: "Development<sup>1</sup>", active: false }
        ],

        teachers: [
            {
            id: 0,
            index: 1,
            image: "marketing__Bell.png",
            rangeInfo: {
                title: "Marketing",
                styles: "marketing-color" // Also you can set yours names like this
            },
            courseName: "The Ultimate Google Ads Training Course",
            price: "$100",
            teacherName: "Jerome Bell",
            profile: "courses/course-page"
            },
            {
            id: 1,
            index: 2,
            image: "management__McKinney.png",
            rangeInfo: {
                title: "Management",
                styles: "management-color"
            },
            courseName: "Product Management Fundamentals",
            price: "$480",
            teacherName: "Marvin McKinney",
            profile: "courses/course-page"
            },
            {
            id: 2,
            index: 3,
            image: "hr__Li.png",
            rangeInfo: {
                title: "HR & Recruting",
                styles: "recruting-color"
            },
            courseName: "HR  Management and Analytics",
            price: "$200",
            teacherName: "Leslie Alexander Li",
            profile: "courses/course-page"
            },
            {
            id: 3,
            index: 1,
            image: "marketing__Watson.png",
            rangeInfo: {
                title: "Marketing",
                styles: "marketing-color"
            },
            courseName: "Brand Management & PR Communications",
            price: "$530",
            teacherName: "Kristin Watson",
            profile: "courses/course-page"
            },
            {
            id: 4,
            index: 4,
            image: "design__Hawkins.png",
            rangeInfo: {
                title: "Design",
                styles: "design-color"
            },
            courseName: "Graphic Design Basic",
            price: "$500",
            teacherName: "Guy Hawkins",
            profile: "courses/course-page"
            },
            {
            id: 5,
            index: 2,
            image: "management__Russell.png",
            rangeInfo: {
                title: "Management",
                styles: "management-color"
            },
            courseName: "Business Development Management",
            price: "$400",
            teacherName: "Dianne Russell",
            profile: "courses/course-page"
            },
            {
            id: 6,
            index: 5,
            image: "development__Simmons.png",
            rangeInfo: {
                title: "Development",
                styles: "development-color"
            },
            courseName: "Highland Software Architecture",
            price: "$600",
            teacherName: "Brooklyn Simmons",
            profile: "courses/course-page"
            },
            {
            id: 7,
            index: 3,
            image: "hr__Murphy.png",
            rangeInfo: {
                title: "HR & Recruting",
                styles: "recruting-color"
            },
            courseName: "Human Resources – Selection and Recruitment",
            price: "$150",
            teacherName: "Kathryn Murphy",
            profile: "courses/course-page"
            },
            {
            id: 8,
            index: 4,
            image: "design__Fisher.png",
            rangeInfo: {
                title: "Design",
                styles: "design-color"
            },
            courseName: "User Experience. Human-centered Design",
            price: "$240",
            teacherName: "Cody Fisher",
            profile: "courses/course-page"
            },
        ],

        filteredTeachers: []
        };
    },

    mounted () {
        // Find default active filter
        this.buttons.forEach(button => {
        if (button.active) this.filterItems(button);
        });
    },

    methods: {
        filterItems (item) {
        // Reset active state
        this.buttons.map(button => button.active = false);
        // Set new active button state
        this.buttons[item.id].active = true;
        // Filter teachers
        if (item.index === 0) this.filteredTeachers = this.teachers;
        else this.filteredTeachers = this.teachers.filter(teacher => teacher.index === item.index);
        }
    }
};
</script>

<style lang="scss" scoped>
.courses {
    background: #fff;

    &__container {
        padding-bottom: 120px;
        width: auto;
        @media screen and (min-width: 1250px) and (max-width: 1519px) { 
            width: auto;
        }

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            padding-bottom: 100px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            padding-bottom: 100px;
        }

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            padding-bottom: 80px;
        }

        .courses__title__container {
            margin-top: 60px;
            margin-bottom: 70px;
            text-align: center;

            @media screen and (min-width: 1024px) and (max-width: 1240px) {
                margin-top: 50px; 
                margin-bottom: 50px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) {
                margin-top: 40px; 
                margin-bottom: 40px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-top: 30px;
                margin-bottom: 30px;
            }

            .courses__title__string {
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

            .courses__title {
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

        .courses__menu__and__search__container {
            display: flex;

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .courses__menu__container {
                display: flex;
                align-items: center;
                margin-bottom: 60px;

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    overflow-x: scroll;
                    padding-bottom: 10px;
                    width: 390px;
                }

                @media screen and (min-width: 425px) and (max-width: 767px) { 
                    overflow-x: scroll;
                    padding-bottom: 10px;
                    width: 387px;
                    margin-bottom: 30px;
                }

                @media screen and (min-width: 375px) and (max-width: 424px) { 
                    overflow-x: scroll;
                    padding-bottom: 10px;
                    width: 335px;
                    margin-bottom: 30px;
                }

                @media screen and (min-width: 320px) and (max-width: 374px) { 
                    overflow-x: scroll;
                    padding-bottom: 10px;
                    width: 280px;
                    margin-bottom: 30px;
                }

                a.router-link-active, li.router-link-active>a {
                    color: #FF3F3A;
                    border-color: #FF3F3A;
                }
                .courses__menu-item {
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 160%;
                    text-align: center;
                    color: #9A9CA5;
                    height: 46px;
                    border: 1px solid transparent;
                    padding: 0 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 4px;
                    transition: all .5s ease-out;
                    margin-right: 25px;
                    background: transparent;

                    @media screen and (min-width: 1250px) and (max-width: 1519px) { 
                        margin-right: 25px;
                        padding: 0 15px;
                    }

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        font-size: 14px;
                        margin-right: 3px;
                        padding: 0 10px;
                    }
                    
                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        font-size: 14px;
                        margin-right: 10px;
                        padding: 0 15px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        font-size: 13px;
                        margin-right: 10px;
                        padding: 0 25px;
                    }


                    &.active {
                        color: #FF3F3A;
                        border: 1px solid #FF3F3A;
                    }

                    &:last-of-type {
                        margin-right: 0;
                    }

                    &:hover {
                    color: #FF3F3A;
                    }

                    &::v-deep sup {
                        font-weight: 900;
                        font-size: 10px;
                        margin-left: 4px;
                        position: relative;
                        bottom: 15%;
                    }
                }
            }

            .search-courses__container {
                position: relative;
                margin-left: 40px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-left: 17px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-left: 30px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    margin: 0 auto;
                    padding-bottom: 15px;
                }

                .search-courses__input {
                    transition: all 1s ease-out;
                    border: 1px solid #D7DADD;
                    width: 282px;
                    height: 44px;
                    padding-left: 16px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        width: 225px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        width: 230px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        width: 282px;
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

                .search-courses__button {
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
                    top: 13%;

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        top: 23%;
                    }

                    &:hover {
                        background: url(../assets/pictures/search__color.png);
                        background-repeat: no-repeat;
                        background-position: center;
                    }
                }
            }
        }

        .courses__list__container {
            display: flex;
            flex-wrap: wrap;
            justify-content: left;
            width: 1230px;
            margin-bottom: 65px;

            @media screen and (min-width: 1250px) and (max-width: 1519px) { 
                width: auto
            }

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                width: auto;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                width: auto;
                justify-content: space-between;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                flex-direction: column;
                flex-wrap: nowrap;
                margin-bottom: 35px;
                align-items: center;
                justify-content: center;
                width: auto;
            }

            .course__container {
                width: 392px;
                height: 438px;
                border: 1px solid #E5E8ED;
                background: #FFFFFF;
                box-shadow: 0 80px 80px -20px rgba(154, 156, 165, 0.08), 0px 30px 24px -10px rgba(154, 156, 165, 0.05), 0px 12px 10px -6px rgba(154, 156, 165, 0.04), 0px 4px 4px -4px rgba(30, 33, 44, 0.03);
                border-radius: 4px;
                margin: 0 22px 22px 0;
                transition: all .5s ease-out;
                cursor: pointer;

                @media screen and (min-width: 1250px) and (max-width: 1519px) { 
                    width: 370px;
                }

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    width: 273px;
                    height: auto;
                    margin: 0 15px 15px 0;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: 315px;
                    height: auto;
                    margin: 0;
                    padding-bottom: 15px;
                    margin-bottom: 20px;
                }

                @media screen and (min-width: 375px) and (max-width: 767px) { 
                    margin: 0;
                    margin-bottom: 15px;
                    width: auto;
                    padding-bottom: 15px;
                    height: auto;
                }

                @media screen and (min-width: 320px) and (max-width: 374px) { 
                    margin: 0;
                    margin-bottom: 15px;
                    width: fit-content;
                    padding-bottom: 15px;
                    height: auto;
                }

               // selects every third element
                &:nth-child(3n) {
                  margin-right: 0;
                }

                &:hover {
                    box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.16), 0px 30px 24px -10px rgba(154, 156, 165, 0.1), 0px 12px 10px -6px rgba(154, 156, 165, 0.08), 0px 4px 4px -4px rgba(30, 33, 44, 0.05);
                }

                &:nth-of-type(7),
                &:nth-of-type(8),
                &:nth-of-type(9) {
                    margin-bottom: 0;
                }

                &:nth-of-type(7) {

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        margin-bottom: 20px !important;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        margin-bottom: 15px !important;
                    }
                }

                &:nth-of-type(8) {

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        height: 395px !important;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        margin-bottom: 15px !important;
                    }
                }

                .course__teacher__photo {

                    @media screen and (min-width: 1250px) and (max-width: 1519px) { 
                        width: 368px;
                    }

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        width: auto;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        width: 315px;
                    }

                    @media screen and (min-width: 425px) and (max-width: 767px) { 
                        width: 380px;
                    }

                    @media screen and (min-width: 375px) and (max-width: 424px) { 
                        width: 335px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 374px) { 
                        width: auto;
                    }

                    img {
                        @media screen and (min-width: 1250px) and (max-width: 1519px) { 
                            width: 100%;
                        }

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

                .course__information__container {
                    margin: 24px;

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        margin: 0;
                        padding-top: 20px;
                        padding-left: 15px;
                    }

                    .marketing-color {
                        background: #03CEA4;
                    
                    }

                    .management-color {
                        background: #5A87FC;
                    }

                    .design-color {
                        background: #F52F6E;
                    }

                    .development-color {
                        background: #7772F1;
                    }

                    .recruting-color {
                        background: #F89828;
                    }

                    .range__info {
                        color: #FFFFFF;
                        height: 23px;
                        border-radius: 4px;
                        text-align: center;
                        margin-bottom: 20px;
                        width: max-content;
                        padding: 2px 10px;
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
                            font-size: 16px;
                            width: auto;
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
                                font-size: 14px;
                            }

                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                font-size: 13px;
                            }
                        }

                        .symbol {
                            color: #787A80;
                            margin: 0 8px;

                            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                                font-size: 16px;
                            }

                            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                                font-size: 14px;
                            }

                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                font-size: 13px;
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
                                font-size: 14px;
                            }

                            @media screen and (min-width: 320px) and (max-width: 767px) { 
                                font-size: 13px;
                            }
                        }
                    }
                }
            }
        }

        .courses__more__contaianer {
            cursor: pointer;
            display: flex;
            justify-content: center;

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                width: auto;
                margin: 0 auto;
            }

            @keyframes move {
            0% {
                transform: rotate(0deg);
            }
            50% {
                transform: rotate(180deg);
            }
            100% {
                transform: rotate(360deg);
            }
            }

            .courses__more__text {
                font-weight: 700;
                font-size: 16px;
                line-height: 160%;
                display: flex;
                align-items: center;
                color: #424551;
                transition: all .3s linear;

                &:before {
                    content: url(../assets/pictures/load.png);
                    transform: rotate(0deg);
                    height: 24px;
                    margin-right: 16px;
                }

                &:hover {
                    color: #FF3F3A;

                    &:before {
                        content: url(../assets/pictures/load__color.png);
                        animation: move 1s infinite linear;
                    }
                }

            }
        }
    }
}
</style>
