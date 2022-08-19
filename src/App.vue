<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        components: {}
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }

    .container {
        padding-right: 129px;
        padding-left: 129px;
        display: flex;
        justify-content: center;
        align-items: center;

        @media screen and (min-width: 1250px) and (max-width: 1519px) { 
            margin: 0 auto;
            padding: 0;
            width: 1160px;
        }

        @media screen and (min-width: 1024px) and (max-width: 1240px) { 
            padding-right: 75px;
            padding-left: 75px;
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) { 
            padding-right: 60px;
            padding-left: 60px;
        }

        @media screen and (min-width: 320px) and (max-width: 767px) { 
            padding-right: 20px;
            padding-left: 20px;
        }
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        font-family: 'Lato', sans-serif;
        color: #424551;
        font-size: 16px;
        background: #fff;

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

    a {
        text-decoration: none;
    }

    .btn__style {
        border-radius: 4px;
    }

    .color-btn__style a {
        color: #FFFFFF;
    }

    :hover, :active, :focus {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        outline: none;
    }

    input {
        outline:none;
    }

    ul,
    ol {
        padding: 0;
        list-style: none;
    }

    body, h1, h2, h3, h4, h5, h6,
    p, ul, ol, li, figure, figcaption,
    blockquote, dl, dd {
        margin: 0;
    }

    h1, h2, h3, h4, h5, h6 {
        color: #1E212C;
    }
    
</style>
