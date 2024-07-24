import { Router } from "./router.js"

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/about", "/pages/about.html")
router.add("/contact", "/pages/contact.html")
router.add(404, "/pages/404.html")

/* Live Server Router */
/* router.add("/", "/projetos/10-spa/pages/home.html")
router.add("/about", "/projetos/10-spa/pages/about.html")
router.add("/contact", "/projetos/10-spa/pages/contact.html")
router.add(404, "/projetos/10-spa/pages/404.html") */

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
