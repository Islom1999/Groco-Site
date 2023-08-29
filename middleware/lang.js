
require('dotenv').config()

const defaultLang = async ( req, res, next ) => {
    try {
        if(req.session.lang){
            next()
        }else{
            req.session.lang = 'uz'
            next()  
        }
    } catch (error) {
        confirm(error)
    }
} 

const changeLang = async ( req, res, next ) => {
    try {
        const domain = process.env.DOMAIN || 'http://localhost:5000'
        const url = new URL( domain + req.url ) 
    
        const route = url.pathname
        if( url.search.includes('?lang=') ){
            const lang = url.search.replace('?lang=', '')
    
            if(lang === 'uz'){
                req.session.lang = 'uz'
            }else if(lang === 'eng'){
                req.session.lang = 'eng'
            }
            
            return res.redirect(route)
        }else{
            next()
        }

    } catch (error) {
        console.log(error)
    }
}


module.exports = { defaultLang, changeLang }