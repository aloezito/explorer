import { Router } from "./router.js"

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/exploration", "/pages/exploration.html")
router.add("/universe", "/pages/universe.html")
router.add(404, "/pages/404.html")

/* Live Server Router */
/* router.add("/", "/projetos/10-spa/pages/home.html")
router.add("/exploration", "/projetos/10-spa/pages/exploration.html")
router.add("/universe", "/projetos/10-spa/pages/universe.html")
router.add(404, "/projetos/10-spa/pages/404.html") */

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
