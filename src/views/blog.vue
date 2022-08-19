<template>
    <div class="blog">
        <div class="container">
            <div class="blog__container">
                <Header/>
                <div class="blog__title__container">
                    <h3 class="blog__title__string">
                        Our blog
                    </h3>
                    <h1 class="blog__title">
                        Createx School Journal
                    </h1>
                </div>
                <div class="blog__menu__container">
                    <button :class="[`blog__menu-item blog__menu-item-${ button.id }`, { active: button.active }]"
                        v-for="button in buttons"
                        :key="button.id"
                        @click="filterItems(button)"
                        v-html="button.name"/>
                    <div class="blog__category__container">
                        <p class="blog__category__text" for="event-show">Blog category</p>
                        <select class="blog__category" disabled>
                            <option>All themes</option>
                            <option>Management</option>
                            <option>Development</option>
                            <option>Marketing</option>
                            <option>Design</option>
                            <option>HR & Recruting</option>
                        </select>
                    </div>
                    <div class="search-blog__container">
                        <input class="search-blog__input" type="text" placeholder="Search blog..." disabled>
                        <button class="search-blog__button" type="button">
                            <img class="search__image" src="@/assets/pictures/search.png" alt="search">
                        </button>
                    </div>
                </div>
                <div class="blog__list__container">
                    <router-link :to="blog.profile"
                        class="blog__info__container"
                        v-for="blog in filteredblogs"
                        :key="blog.id">
                            <div class="blog__pictures__container">
                                <img :src="require(`@/assets/pictures/${blog.mainImage}`)" :alt="blog.rangeInfo" class="main-pictures">
                                <img :src="require(`@/assets/pictures/${blog.image}`)" :alt="blog.rangeInfo" class="themes">
                            </div>
                            <div class="post__info__string__container">
                                <div class="subjects__container">
                                    <p class="subjects" v-text="blog.rangeInfo"/>
                                </div>
                                <div class="time__container">
                                    <p :class="['time', blog.dateInfo.styles]" v-text="blog.dateInfo.title"/>
                                </div>
                                <div class="duration__container">
                                    <p :class="['duration', blog.durationInfo.styles]" v-text="blog.durationInfo.title"/>
                                </div>
                            </div>
                            <h2 class="blog__name" v-text="blog.blogName"/>
                            <p class="blog__paragraph" v-text="blog.blogParagraph"/>
                            <div class="post__button__container">
                                <p class="button__text" v-text="blog.blogButtonText"/>
                            </div>
                    </router-link>
                </div>
                <div class="blog__more__container">
                    <div class="more"></div>
                    <a class="blog__more__text" href="#header" v-scroll-to="'#header'">Load more</a>
                </div>
            </div>
        </div>
        <div class="blog__subscribe">
            <div class="container">
                <div class="blog__subscribe__container">
                    <div class="blog__subcribe__image__container">
                        <img class="subscribe__img" src="@/assets/pictures/subscribe.png" alt="subscribe">
                    </div>
                    <div class="blog__subscribe__title__container">
                        <h1 class="blog__subscribe__title">
                            Want to get the best articles weekly? Subscribe to our newsletter!
                        </h1>
                        <form class="blog__subscribe__form">
                            <input class="blog__subscribe__input" type="email" name="subscribe" placeholder="Your working email" required>
                            <input type="submit" value="Subscribe" class="blog__subscribe__submit">
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
        </div>
        <Footer/>
    </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
    name: "blog",

    components: {
        Header,
        Footer
    },

    data () {
        return {
        buttons: [
            { id: 0, index: 0, name: "All", active: true },
            { id: 1, index: 1, name: "Articles", active: false },
            { id: 2, index: 2, name: "Videos", active: false },
            { id: 3, index: 3, name: "Podcasts", active: false },
        ],

        blogs: [
            {
            id: 0,
            index: 3,
            mainImage: "abstract.png",
            image: "podcast.png",
            rangeInfo: "Marketing",
            dateInfo: {
                styles: "date-style",
                title: "September 4, 2020"
            },
            durationInfo: {
                styles: "duration-style",
                title: "36 min"
            },
            blogName: "What is traffic arbitrage and does it really make money?",
            blogParagraph: "Lorem ipsum dolor sit amet. Et internos consequatur a repudiandae omnis et saepe vitae aut quia consequuntur! Qui voluptatem quas sit debitis quaerat qui voluptatem quos...",
            blogButtonText: "Listen",
            profile: "blog/single-post"
            },
            {
            id: 1,
            index: 1,
            mainImage: "severity.png",
            image: "article.png",
            rangeInfo: "Development",
            dateInfo: {
                styles: "date-style",
                title: "September 1, 2020"
            },
            durationInfo: {
                styles: "duration-unset",
            },
            blogName: "How to choose the first programming language for a beginner",
            blogParagraph: "Aut necessitatibus debitis sed placeat aliquam ut repudiandae dolor. Est quod voluptas id labore consectetur sit corporis tempora et dolorem autem id accusantium voluptatem...",
            blogButtonText: "Read",
            profile: "blog/single-post"
            },
            {
            id: 2,
            index: 2,
            mainImage: "student.png",
            image: "video.png",
            rangeInfo: "Design",
            dateInfo: {
                styles: "date-style",
                title: "August 8, 2020"
            },
            durationInfo: {
                styles: "duration-style",
                title: "40 min"
            },
            blogName: "Should you choose a creative profession if you are attracted to creativity?",
            blogParagraph: "Aut necessitatibus debitis sed placeat aliquam ut repudiandae dolor. Est quod voluptas id labore consectetur sit corporis tempora et dolorem autem id accusantium voluptatem...",
            blogButtonText: "Watch",
            profile: "blog/single-post"
            },
            {
            id: 3,
            index: 1,
            mainImage: "businesslike.png",
            image: "article.png",
            rangeInfo: "HR & Recruting",
            dateInfo: {
                styles: "date-style",
                title: "August 3, 2020"
            },
            durationInfo: {
                styles: "duration-unset",
            },
            blogName: "HR statistics: job search,  interviews, hiring and recruiting",
            blogParagraph: "Non laudantium maxime sit nisi quia rem rerum eos autem earum sit tenetur enim. Ex omnis rerum At odio quia qui voluptas obcaecati est quia odit qui harum architecto et itaque repellendus et facere voluptatem...",
            blogButtonText: "Read",
            profile: "blog/single-post"
            },
            {
            id: 4,
            index: 2,
            mainImage: "ideas_495.png",
            image: "video.png",
            rangeInfo: "Management",
            dateInfo: {
                styles: "date-style",
                title: "August 2, 2020"
            },
            durationInfo: {
                styles: "duration-style",
                title: "40 min"
            },
            blogName: "What to do and who to talk to if you want to get feedback on the product",
            blogParagraph: "Cum molestiae molestias quo officiis voluptatum et quisquam dolorem. Quo repellat rerum ea dolor eaque et ipsam dignissimos ea enim tempora et voluptatem expedita et autem aliquam in laborum vitae...",
            blogButtonText: "Watch",
            profile: "blog/single-post"
            },
            {
            id: 5,
            index: 3,
            mainImage: "purpose.png",
            image: "podcast.png",
            rangeInfo: "Design",
            dateInfo: {
                styles: "date-style",
                title: "July 28, 2020"
            },
            durationInfo: {
                styles: "duration-style",
                title: "36 min"
            },
            blogName: "What are color profiles and how they work in graphic design",
            blogParagraph: "Et odit vitae aut inventore laborum et tempore reiciendis qui iste exercitationem ad consequuntur iste. Et perferendis iusto qui nulla dolor et doloremque galisum ut minima optio...",
            blogButtonText: "Listen",
            profile: "blog/single-post"
            },
            {
            id: 6,
            index: 2,
            mainImage: "many.png",
            image: "video.png",
            rangeInfo: "Management",
            dateInfo: {
                styles: "date-style",
                title: "July 15, 2020"
            },
            durationInfo: {
                styles: "duration-style",
                title: "45 min"
            },
            blogName: "Startup: how to build a team that will live longer than a year",
            blogParagraph: "At ipsa quaerat est esse labore aut maiores consectetur in totam molestiae. Eos incidunt modi vel omnis impedit eum quaerat assumenda est molestiae voluptatem et dicta debitis...",
            blogButtonText: "Watch",
            profile: "blog/single-post"
            },
            {
            id: 7,
            index: 1,
            mainImage: "machine.png",
            image: "article.png",
            rangeInfo: "Marketing",
            dateInfo: {
                styles: "date-style",
                title: "July 9, 2020"
            },
            durationInfo: {
                styles: "duration-unset",
            },
            blogName: "How to get customers to love your business from the start",
            blogParagraph: "Eum laboriosam quia eum dolores error aut debitis ipsum. Sed voluptatem omnis et temporibus recusandae At iure perspiciatis sed doloremque consequuntur in omnis accusantium...",
            blogButtonText: "Read",
            profile: "blog/single-post"
            },
            {
            id: 8,
            index: 3,
            mainImage: "human-resources.png",
            image: "video.png",
            rangeInfo: "HR & Recruting",
            dateInfo: {
                styles: "date-style",
                title: "September 13, 2020"
            },
            durationInfo: {
                styles: "duration-style",
                title: "15 min"
            },
            blogName: "Why does an IT recruiter need technical skills?",
            blogParagraph: "Qui autem repellendus quo ratione excepturi id unde ullam ut ducimus sunt aut placeat eius est sapiente quia. Sed vero optio et quia illum hic consequuntur neque et aspernatur quia et sunt cupiditate...",
            blogButtonText: "Watch",
            profile: "blog/single-post"
            },
        ],

        filteredblogs: []
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
        // Filter blogs
        if (item.index === 0) this.filteredblogs = this.blogs;
        else this.filteredblogs = this.blogs.filter(blog => blog.index === item.index);
        }
    }
};
</script>

<style lang="scss" scoped>
.blog {
    
    &__container {
        padding-bottom: 180px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media screen and (min-width: 1250px) and (max-width: 1519px) { 
            padding-bottom: 160px;
        }

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            padding-bottom: 130px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            padding-bottom: 120px;
        }

        @media screen and (min-width: 320px) and (max-width: 1240px) { 
            padding-bottom: 100px;
        }


        .blog__title__container {
            margin-top: 80px;
            margin-bottom: 60px;
            text-align: center;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                margin-top: 60px;
                margin-bottom: 40px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                margin-top: 40px;
                margin-bottom: 30px;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                margin-top: 30px;
                margin-bottom: 10px;
            }

            .blog__title__string {
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

            .blog__title {
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

        .blog__menu__container {
            display: flex;
            align-items: center;
            margin-bottom: 60px;
            
            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                flex-wrap: wrap;
            }
            
            @media screen and (min-width: 320px) and (max-width: 767px) { 
                flex-direction: column;
                align-items: flex-start;
            }

            a.router-link-active, li.router-link-active>a {
                color: #FF3F3A;
                border-color: #FF3F3A;
            }

            .blog__menu-item {
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
                cursor: pointer;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    font-size: 14px;
                    margin-right: 5px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    font-size: 14px;
                    margin-right: 13px;
                    padding: 0 10px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    font-size: 14px;
                    width: 100%;
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

            .blog__menu-item-1 {
                position: relative;
                &:before {
                    content: url(../assets/pictures/files.png);      
                    position: relative;
                    margin-right: 10px;
                    top: 2px;      
                }
                
            }

            .blog__menu-item-2 {
                position: relative;
                &:before {
                    content: url(../assets/pictures/playing.png);
                    position: relative;
                    margin-right: 10px;
                    top: 2px;                
                }
                
            }

            .blog__menu-item-3 {
                position: relative;
                &:before {
                    content: url(../assets/pictures/mic.png);
                    position: relative;
                    margin-right: 10px;
                    top: 2px;          
                }
                
            }

            .blog__category__container {
                display: flex;
                align-items: center;
                margin-left: 120px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-left: 12px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin-left: 9px;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    margin: 0 auto;
                }

                .blog__category__text {
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 160%;
                    color: #424551;
                    margin-right: 12px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        font-size: 14px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        font-size: 14px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        font-size: 13px;
                        margin-right: 0;
                        margin-bottom: 15px;
                    }
                }

                .blog__category {
                    width: 160px;
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

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        width: 130px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        width: 160px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        width: 100%;
                    }

                    &:hover {
                        border: 1px solid #FF3F3A;
                        background: url(../assets/pictures/stroke__color.png);
                        background-repeat: no-repeat;
                        background-position-x: 90%;
                        background-position-y: center;
                    }
                }
            }

            .search-blog__container {
                position: relative;
                margin-left: 40px;

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    margin: 0 auto;
                }

                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    margin: 0 auto;
                }

                .search-blog__input {
                    transition: all 1s ease-out;
                    border: 1px solid #D7DADD;
                    width: 282px;
                    height: 44px;
                    padding-left: 16px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        width: 160px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        width: 280px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        margin-top: 15px;
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

                .search-blog__button {
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
                    top: 30%;

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        left: 85.5%;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        top: 45%;
                    }

                    &:hover {
                        background: url(../assets/pictures/search__color.png);
                        background-repeat: no-repeat;
                        background-position: center;
                    }
                }
            }
        }

        .blog__list__container {
            display: flex;
            flex-wrap: wrap;
            justify-content: left;
            width: 1230px;
            margin-bottom: 65px;

            @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                width: 875px;
            }

            @media screen and (min-width: 768px) and (max-width: 1023px) { 
                width: 640px;
                margin: 0 auto;
            }

            @media screen and (min-width: 320px) and (max-width: 767px) { 
                width: auto;
            }

            .blog__info__container {
                display: flex;
                flex-direction: column;
                background: #FFFFFF;
                border-radius: 4px;
                margin: 0 30px 60px 0;
                width: 390px;
                cursor: pointer;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    width: 275px;
                    margin-right: 25px;
                }

                @media screen and (min-width: 768px) and (max-width: 1023px) { 
                    width: 196px;
                    margin-right: 26px;
                }
                
                @media screen and (min-width: 320px) and (max-width: 767px) { 
                    width: auto;
                    margin-right: 0;
                    margin-bottom: 25px;
                }

                &:nth-child(3n) {
                  margin-right: 0;
                }

                .blog__pictures__container {
                    margin-bottom: 16px;
                    position: relative;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        width: 275px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        width: 196px;
                    }

                    .themes {
                        left: 3%;
                        top: 3%;
                        position: absolute;
                    }

                    .main-pictures {
                        box-shadow: transparent;
                        transition: all .5s ease;
                        border-radius: 5px;
                        
                        @media screen and (min-width: 320px) and (max-width: 1240px) { 
                            width: 100%;
                        }

                        &:hover {
                            box-shadow: 1px 2px 5px 2px rgba(0, 0, 0, 0.4);
                        }
                    }
                }

                .post__info__string__container {
                    color: #787A80;
                    font-size: 14px;
                    line-height: 150%;
                    display: flex;
                    align-items: center;
                    margin-bottom: 8px;

                    @media screen and (min-width: 320px) and (max-width: 1240px) { 
                        flex-direction: column;
                        font-size: 13px;
                    }

                    .subjects__container {
                        position: relative;
                        padding-right: 12px;

                        @media screen and (min-width: 320px) and (max-width: 1240px) { 
                            padding-right: 0px;
                        }

                        .subjects {
                            font-weight: 700;
                        }

                        &::before {
                            display: block;
                            content: "";
                            width: 13px;
                            height: 1px;
                            background: #787A80;
                            transform: rotate(90deg);
                            position: absolute;
                            right: -6px;
                            top: 10px;

                            @media screen and (min-width: 320px) and (max-width: 1240px) { 
                                display: none;
                            }
                        }
                    }

                    .time__container {
                        padding-right: 12px;
                        padding-left: 12px;
                        position: relative;

                        @media screen and (min-width: 320px) and (max-width: 1240px) { 
                            padding: 0;
                        }

                        &::before {
                            display: block;
                            content: "";
                            width: 13px;
                            height: 1px;
                            background: #787A80;
                            transform: rotate(90deg);
                            position: absolute;
                            right: -6px;
                            top: 10px;

                            @media screen and (min-width: 320px) and (max-width: 1240px) { 
                                display: none;
                            }
                        }

                        .time {
                            position: relative;
                        }

                        .date-style {
                            &:before {
                                content: url(../assets/pictures/calendar.png);
                                margin-right: 8px;
                                margin-top: 3px;
                                position: relative;
                                top: 2px;
                            }
                        }
                    }

                    .duration__container {
                        padding-left: 12px;

                        @media screen and (min-width: 320px) and (max-width: 1240px) { 
                            padding-left: 0;
                        }

                        .duration {
                            position: relative;
                        }

                        .duration-style {
                            &:before {
                                content: url(../assets/pictures/clock.png);
                                margin-right: 8px;
                                margin-top: 3px;
                                position: relative;
                                top: 2px;
                            }
                        }
                    }
                }

                .blog__name {
                    font-size: 20px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        font-size: 18px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        font-size: 18px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 1240px) { 
                        font-size: 16px;
                    }
                }

                .blog__paragraph {
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 160%;
                    margin-top: 8px;
                    margin-bottom: 16px;
                    color: #424551;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        font-size: 14px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        font-size: 14px;
                    }

                    @media screen and (min-width: 320px) and (max-width: 1240px) { 
                        font-size: 13px;
                    }
                }

                .post__button__container {

                    .button__text {
                        display: flex;
                        align-items: center;
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

        .blog__more__container {
            cursor: pointer;
            display: flex;
            justify-content: center;

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

            .blog__more__text {
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

    .blog__subscribe {
        background: #F4F5F7;
        .blog__subscribe__container {

            display: flex;

            @media screen and (min-width: 320px) and (max-width: 1023px) { 
                flex-direction: column;
            }

            .blog__subcribe__image__container {

                .subscribe__img {
                    @media screen and (min-width: 320px) and (max-width: 1023px) { 
                        width: 100%;
                    }
                }
            }

            .blog__subscribe__title__container {
                margin-top: 100px;
                margin-left: 125px;
                width: 600px;

                @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                    margin-left: 60px;
                    margin-top: 45px;
                }

                @media screen and (min-width: 320px) and (max-width: 1240px) { 
                    width: auto;
                }

                @media screen and (min-width: 320px) and (max-width: 1023px) { 
                    order: -1;
                    margin-left: 0;
                    margin-top: 50px;
                }


                .blog__subscribe__title {
                    font-weight: 900;
                    font-size: 32px;
                    line-height: 130%;
                    margin-bottom: 48px;

                    @media screen and (min-width: 1024px) and (max-width: 1240px) { 
                        font-size: 28px;
                    }

                    @media screen and (min-width: 768px) and (max-width: 1023px) { 
                        font-size: 28px;
                        text-align: center;
                    }

                    @media screen and (min-width: 320px) and (max-width: 767px) { 
                        font-size: 26px;
                        text-align: center;
                    }
                }

                .blog__subscribe__form {
                    display: flex;
                    flex-wrap: wrap;

                    .blog__subscribe__input {
                        width: 422px;
                        background: #FFFFFF;
                        border: 1px solid #D7DADD;
                        border-radius: 4px;
                        padding-left: 15px;
                        height: 52px;

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            width: 430px;
                            margin-bottom: 15px;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            width: 100%;
                            margin-bottom: 15px;
                        }

                        &::placeholder {
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 160%;
                            color: #9A9CA5;
                        }
                    }

                    .blog__subscribe__submit {
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
                            font-size: 14px;
                            margin-left: 0;
                        }

                        @media screen and (min-width: 768px) and (max-width: 1023px) { 
                            font-size: 14px;
                            width: 200px;
                            margin-left: 15px;
                        }

                        @media screen and (min-width: 320px) and (max-width: 767px) { 
                            width: 100%;
                            margin-left: 0;
                        }

                        &:hover {
                            background: linear-gradient(55.95deg, #ffa200 0%, #ff0000 100%);
                        }
                    }

                    .custom-checkbox {
                        margin-top: 24px;
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

                            @media screen and (min-width: 320px) and (max-width: 1023px) { 
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
                                top: 1.5px;
                            }
                        }
                    } 
                }
            }
        }
    }
}
</style>