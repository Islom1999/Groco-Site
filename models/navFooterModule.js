const mongoose = require('mongoose')

const NavFooters = new mongoose.Schema(
    {
        navbarUz: {
            logo: {
                type: String,
                required: true
            },
            pages: {
                home: {
                    type: String,
                    required: true
                },
                about: {
                    type: String,
                    required: true
                },
                contact: {
                    type: String,
                    required: true
                },
                shop: {
                    type: String,
                    required: true
                },
                review: {
                    type: String,
                    required: true
                },
                blog: {
                    type: String,
                    required: true
                }
            },
            modals: {
                search: {
                    type: String,
                    required: true
                },
                total: {
                    type: String,
                    required: true
                },
                checkout: {
                    type: String,
                    required: true
                },
                loginLabel: {
                    type: String,
                    required: true
                },
                emailPlaceholder: {
                    type: String,
                    required: true
                },
                passwordPlaceholder: {
                    type: String,
                    required: true
                },
                loginBtn: {
                    type: String,
                    required: true
                },
                rememberCheck:{
                    type: String,
                    required: true
                },
                forgetPassword: {
                    text: {
                        type: String,
                        required: true
                    },
                    link:{
                        type: String,
                        required: true
                    }
                },
                registerLink: {
                    text: {
                        type: String,
                        required: true
                    },
                    link:{
                        type: String,
                        required: true
                    }
                },
            }
        },
        navbarEng: {
            logo: {
                type: String,
                required: true
            },
            pages: {
                home: {
                    type: String,
                    required: true
                },
                about: {
                    type: String,
                    required: true
                },
                contact: {
                    type: String,
                    required: true
                },
                shop: {
                    type: String,
                    required: true
                },
                review: {
                    type: String,
                    required: true
                },
                blog: {
                    type: String,
                    required: true
                }
            },
            modals: {
                search: {
                    type: String,
                    required: true
                },
                total: {
                    type: String,
                    required: true
                },
                checkout: {
                    type: String,
                    required: true
                },
                loginLabel: {
                    type: String,
                    required: true
                },
                emailPlaceholder: {
                    type: String,
                    required: true
                },
                passwordPlaceholder: {
                    type: String,
                    required: true
                },
                loginBtn: {
                    type: String,
                    required: true
                },
                rememberCheck:{
                    type: String,
                    required: true
                },
                forgetPassword: {
                    text: {
                        type: String,
                        required: true
                    },
                    link:{
                        type: String,
                        required: true
                    }
                },
                registerLink: {
                    text: {
                        type: String,
                        required: true
                    },
                    link:{
                        type: String,
                        required: true
                    }
                },
            }
        },
        footerUz:{
            quickLinks: {
                title: {
                    type: String,
                    required: true
                },
                home: {
                    type: String,
                    required: true
                },
                about: {
                    type: String,
                    required: true
                },
                contact: {
                    type: String,
                    required: true
                },
                shop: {
                    type: String,
                    required: true
                },
                review: {
                    type: String,
                    required: true
                },
                blog: {
                    type: String,
                    required: true
                }
            },
            extraLinks: {
                title: {
                    type: String,
                    required: true
                },
                myOrder: {
                    type: String,
                    required: true
                },
                myFavorite: {
                    type: String,
                    required: true
                },
                myWishlist: {
                    type: String,
                    required: true
                },
                myAccount: {
                    type: String,
                    required: true
                },
                termsOrUse: {
                    type: String,
                    required: true
                }
            },
            followUs: {
                title: {
                    type: String,
                    required: true
                },
                facebook: {
                    type: String,
                    required: true
                },
                instagram: {
                    type: String,
                    required: true
                },
                twitter: {
                    type: String,
                    required: true
                },
                linkedin: {
                    type: String,
                    required: true
                },
                pinterest:{
                    type: String,
                    required: true
                }
            },
            newsLetter: {
                title: {
                    type: String,
                    required: true
                },
                label: {
                    type: String,
                    required: true
                },
                placeholder: {
                    type: String,
                    required: true
                },
                btn: {
                    type: String,
                    required: true
                },
                payments: {
                    type: String,
                }
            },
            copyright: {
                type: String,
                required: true
            }
        },
        footerEng:{
            quickLinks: {
                title: {
                    type: String,
                    required: true
                },
                home: {
                    type: String,
                    required: true
                },
                about: {
                    type: String,
                    required: true
                },
                contact: {
                    type: String,
                    required: true
                },
                shop: {
                    type: String,
                    required: true
                },
                review: {
                    type: String,
                    required: true
                },
                blog: {
                    type: String,
                    required: true
                }
            },
            extraLinks: {
                title: {
                    type: String,
                    required: true
                },
                myOrder: {
                    type: String,
                    required: true
                },
                myFavorite: {
                    type: String,
                    required: true
                },
                myWishlist: {
                    type: String,
                    required: true
                },
                myAccount: {
                    type: String,
                    required: true
                },
                termsOrUse: {
                    type: String,
                    required: true
                }
            },
            followUs: {
                title: {
                    type: String,
                    required: true
                },
                facebook: {
                    type: String,
                    required: true
                },
                instagram: {
                    type: String,
                    required: true
                },
                twitter: {
                    type: String,
                    required: true
                },
                linkedin: {
                    type: String,
                    required: true
                },
                pinterest:{
                    type: String,
                    required: true
                }
            },
            newsLetter: {
                title: {
                    type: String,
                    required: true
                },
                label: {
                    type: String,
                    required: true
                },
                placeholder: {
                    type: String,
                    required: true
                },
                btn: {
                    type: String,
                    required: true
                },
                payments: {
                    type: String,
                }
            },
            copyright: {
                type: String,
                required: true
            }
        }
    }
)

module.exports = mongoose.model('NavFooters', NavFooters)