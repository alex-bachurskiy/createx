<template>
    <div class="home">
        <Main/>
        <Why/>
        <Featured/>
        <Benefits/>
        <Workshops/>
        <Certificate/>
        <Tutors/>
        <Testimonials/>
        <Posts/>
        <Subscribe/>
        <Footer/>
    </div>
</template>

<script>
import Main from "../components/Main";
import Why from "../components/Why";
import Featured from "../components/Featured";
import Benefits from "../components/Benefits";
import Workshops from "../components/Workshops";
import Certificate from "../components/Certificate";
import Tutors from "../components/Tutors";
import Testimonials from "../components/Testimonials";
import Posts from "../components/Posts";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

export default {
    name: "home",
    components: {
        Main,
        Why,
        Featured,
        Benefits,
        Workshops,
        Certificate,
        Tutors,
        Testimonials,
        Posts,
        Subscribe,
        Footer
    }
};
</script>