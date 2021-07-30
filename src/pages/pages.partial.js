import { component } from "sms-plugin---components";

import pageComponent from "./page.svelte";

import home from "./home/home.partial.js";
import about from "./about/about.partial.js";

export default {
    initial : "show",

    on : {
        PAGES_SHOW_HOME : ".show.home",
        PAGES_SHOW_ABOUT : ".show.about",
        PAGES_HIDE : ".hide",
    },

    states : {
        hide : {},
        show : component(pageComponent, {
            initial : "home",

            states : {
                home,
                about,
            },
        }),
    },
}