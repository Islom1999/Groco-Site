const Categories = require("../models/categoryModule")
const Products = require("../models/productsModule")
const Gallary = require("../models/gallariesModule")
const Workers = require("../models/workerModule")
const Blog = require("../models/blogsModule")
const Sliders = require("../models/sliderModule")
const NavFooters = require("../models/navFooterModule")
const Pages = require("../models/pagesModule")

const getHome = async(req, res) => {
    try {
        let sliders = await Sliders.find().lean();
        const navFooter = await NavFooters.find().lean();
        const pagesDb = await Pages.find().lean();
        
        let lang = req.session.lang
        let pages, navbar, footer

        sliders[0].isActivClass = 'active'

        if(lang == 'uz') {
            pages = pagesDb[0].pagesUz
            navbar = navFooter[0].navbarUz
            footer = navFooter[0].footerUz

            sliders = sliders.map(sliders => {
                sliders.title = sliders.titleUz;
                sliders.discount = sliders.discountUz;
                return sliders;
        })
        }else if ('eng'){

            pages = pagesDb[0].pagesEng
            navbar = navFooter[0].navbarEng
            footer = navFooter[0].footerEng
            
            sliders = sliders.map(sliders => {
                sliders.title = sliders.titleEng;
                sliders.discount = sliders.discountEng;
                return sliders;
        })
        }else{
            pages = pagesDb[0].pagesUz
            navbar = navFooter[0].navbarUz
            footer = navFooter[0].footerUz

            
            sliders = Sliders.map(sliders => {
                sliders.title = sliders.titleUz;
                sliders.discount = sliders.discountUz;
                return sliders;
        })
        }

        res.render('home', {
            title: 'Home Page',
            sliders,
            navbar,
            footer,
            pages
        })
      } catch (error) {
        res.render('error', {
            error: " Serverda Xatolik bor"
        })
            console.log(error)
      }
}

const getShop = async(req, res) => {
    try {
        let categories = await Categories.find().lean();
        let products = await Products.find().lean();
        const navFooter = await NavFooters.find().lean();
        const pagesDb = await Pages.find().lean();

        let lang = req.session.lang
        let pages, navbar, footer

        if(lang == 'uz') {
            pages = pagesDb[0].pagesUz
            navbar = navFooter[0].navbarUz
            footer = navFooter[0].footerUz
            
            categories = categories.map((category) => {
                category.title = category.titleUz
                return category;
        })

            products = products.map(product => {
                product.title = product.titleUz
                return product
        })

        }else if ('eng'){

            pages = pagesDb[0].pagesEng
            navbar = navFooter[0].navbarEng
            footer = navFooter[0].footerEng
            
            categories = categories.map((category) => {
                category.title = category.titleEng
                return category;
        })

            products = products.map(product => {
                product.title = product.titleEng
                return product
        })

        }else{
            pages = pagesDb[0].pagesUz
            navbar = navFooter[0].navbarUz
            footer = navFooter[0].footerUz
            

            categories = categories.map((category) => {
                category.title = category.titleUz
                return category;
        })

            products = products.map(product => {
                product.title = product.titleUz
                return product
        })
        }

        res.render('shop', {
            title: 'Shop Page',
            categories,
            products,
            navbar,
            footer,
            pages
        })
      } catch (error) {
        res.render('error', {
            error: " Serverda Xatolik bor"
        })
            console.log(error)
      }
}

const getAbout = async(req, res) => {
    try {
        const navFooter = await NavFooters.find().lean();
        const gallary = await Gallary.find().lean();
        const pagesDb = await Pages.find().lean();

        let lang = req.session.lang
        let pages, navbar, footer

        if(lang == 'uz') {
            pages = pagesDb[0].pagesUz
            navbar = navFooter[0].navbarUz
            footer = navFooter[0].footerUz
        }else if ('eng'){

            pages = pagesDb[0].pagesEng
            navbar = navFooter[0].navbarEng
            footer = navFooter[0].footerEng
        }else{
            pages = pagesDb[0].pagesUz
            navbar = navFooter[0].navbarUz
            footer = navFooter[0].footerUz
        }

        res.render('about', {
            title: 'About Page',
            gallary,
            navbar,
            footer,
            pages
        })
      } catch (error) {
        res.render('error', {
            error: " Serverda Xatolik bor"
        })
            console.log(error)
      }
}

const getReview = async(req, res) => {
    try {
        let workers = await Workers.find().lean();
        const pagesDb = await Pages.find().lean();
        const navFooter = await NavFooters.find().lean();

        let lang = req.session.lang
        let pages, navbar, footer

        if(lang == 'uz') {
            pages = pagesDb[0].pagesUz
            navbar = navFooter[0].navbarUz
            footer = navFooter[0].footerUz
            
            workers = workers.map(worker => {
                worker.title = worker.workUz
                worker.descr = worker.descrUz
                return worker
        })

        }else if ('eng'){

            pages = pagesDb[0].pagesEng
            navbar = navFooter[0].navbarEng
            footer = navFooter[0].footerEng
            
            workers = workers.map(worker => {
                worker.title = worker.workEng
                worker.descr = worker.descrEng
                return worker
        })

        }else{
            pages = pagesDb[0].pagesUz
            navbar = navFooter[0].navbarUz
            footer = navFooter[0].footerUz
            
            workers = workers.map(worker => {
                worker.title = worker.workUz
                worker.descr = worker.descrUz
                return worker
        })

        }

        res.render('review', {
            title: 'Review Page',
            workers,
            navbar,
            footer,
            pages
        })
      } catch (error) {
        res.render('error', {
            error: " Serverda Xatolik bor"
        })
            console.log(error)
      }
}

const getContact = async(req, res) => {
    try {
        const navFooter = await NavFooters.find().lean();
        const pagesDb = await Pages.find().lean();

        let lang = req.session.lang
        let pages, navbar, footer

        if(lang == 'uz') {
            pages = pagesDb[0].pagesUz
            navbar = navFooter[0].navbarUz
            footer = navFooter[0].footerUz
        }else if ('eng'){

            pages = pagesDb[0].pagesEng
            navbar = navFooter[0].navbarEng
            footer = navFooter[0].footerEng
        }else{
            pages = pagesDb[0].pagesUz
            navbar = navFooter[0].navbarUz
            footer = navFooter[0].footerUz
        }


        res.render('contact', {
            title: 'Contact Page',
            navbar,
            footer,
            pages
        })
      } catch (error) {
        res.render('error', {
            error: " Serverda Xatolik bor"
        })
            console.log(error)
      }
}

const getBlog = async(req, res) => {
    try {
        const navFooter = await NavFooters.find().lean();
        const pagesDb = await Pages.find().lean();
        let blogs = await Blog.find().lean();

        let lang = req.session.lang
        let pages, navbar, footer

        if(lang == 'uz') {
            pages = pagesDb[0].pagesUz
            navbar = navFooter[0].navbarUz
            footer = navFooter[0].footerUz
            
            blogs = blogs.map(blog => {
                blog.title = blog.titleUz
                blog.descr = blog.descrUz
                return blog
        })

        }else if ('eng'){

            pages = pagesDb[0].pagesEng
            navbar = navFooter[0].navbarEng
            footer = navFooter[0].footerEng

            blogs = blogs.map(blog => {
                blog.title = blog.titleEng
                blog.descr = blog.descrEng
                return blog
        })

        }else{
            pages = pagesDb[0].pagesUz
            navbar = navFooter[0].navbarUz
            footer = navFooter[0].footerUz

            blogs = blogs.map(blog => {
                blog.title = blog.titleUz
                blog.descr = blog.descrUz
                return blog
        })

        }

        res.render('blog', {
            title: 'Blog Page',
            blogs,
            navbar,
            footer,
            pages
        })
      } catch (error) {
        res.render('error', {
            error: " Serverda Xatolik bor"
        })
            console.log(error)
      }
    }


module.exports = {
    getHome,
    getShop,
    getAbout,
    getReview,
    getContact,
    getBlog
}