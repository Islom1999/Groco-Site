const mongoose = require('mongoose')

const Pages = new mongoose.Schema(
    {
        pagesUz: {
            home: {
                btn: {
                    type: String,
                    required: true
                }
            },
            shop:{
                image: {
                    type: String,
                    required: true
                },
                title: {
                    type: String,
                    required: true
                },
                descr: {
                    type: String,
                    required: true
                },
                category:{
                    text1:{
                        type: String,
                        required: true
                    },
                    text2:{
                        type: String,
                        required: true
                    },
                },
                product:{
                    text1:{
                        type: String,
                        required: true
                    },
                    text2:{
                        type: String,
                        required: true
                    },
                },
                views:{
                    type: String,
                    required: true
                }
            },
            about:{
                image: {
                    type: String,
                    required: true
                },
                title: {
                    type: String,
                    required: true
                },
                descr: {
                    type: String,
                    required: true
                },
                post: {
                    image: {
                        type: String,
                        required: true
                    },
                    h1: {
                        type: String,
                        required: true
                    },
                    h2:{
                        type: String,
                        required: true
                    },
                    descr: {
                        type: String,
                        required: true
                    },
                    btn: {
                        type: String,
                        required: true
                    }
                }
            },
            review:{
                image: {
                    type: String,
                    required: true
                },
                title: {
                    type: String,
                    required: true
                },
                descr: {
                    type: String,
                    required: true
                },
                servis:[
                    {
                        image: {
                            type: String,
                            required: true
                        },
                        title: {
                            type: String,
                            required: true
                        },
                        descr: {
                            type: String,
                            required: true
                        }   
                    }
                ]
            },
            blog: {
                image: {
                    type: String,
                    required: true
                },
                title: {
                    type: String,
                    required: true
                },
                descr: {
                    type: String,
                    required: true
                },
                blogs: {
                    text1: {
                        type: String,
                        required: true
                    },
                    text2: {
                        type: String,
                        required: true
                    }
                },
                views: {
                    type: String,
                    required: true
                },
                btn: {
                    type: String,
                    required: true
                }
            },
            contact: {
                image: {
                    type: String,
                    required: true
                },
                title: {
                    type: String,
                    required: true
                },
                descr: {
                    type: String,
                    required: true
                },
                contactUs: {
                    number:{
                        title:{
                            type: String,
                            required: true
                        },
                        phone1: {
                            type: String,
                            required: true
                        },
                        phone2: {
                            type: String,
                        },
                    },
                    email:{
                        title:{
                            type: String,
                            required: true
                        },
                        email1: {
                            type: String,
                            required: true
                        },
                        email2: {
                            type: String,
                        },
                    },
                    adress:{
                        title:{
                            type: String,
                            required: true
                        },
                        adress1: {
                            type: String,
                            required: true
                        },
                        adress2: {
                            type: String,
                        },
                    }
                },
                form: {
                    title:{
                        type: String,
                        required: true
                    },
                    name:{
                        type: String,
                        required: true
                    },
                    email:{
                        type: String,
                        required: true
                    },
                    number:{
                        type: String,
                        required: true
                    },
                    subject:{
                        type: String,
                        required: true
                    },
                    message:{
                        type: String,
                        required: true
                    },
                    btn: {
                        type: String,
                        required: true
                    },
                    map: {
                        type: String,
                        required: true
                    }
                }
            }
        },
        pagesEng: {
            home: {
                btn: {
                    type: String,
                    required: true
                }
            },
            shop:{
                image: {
                    type: String,
                    required: true
                },
                title: {
                    type: String,
                    required: true
                },
                descr: {
                    type: String,
                    required: true
                },
                category:{
                    text1:{
                        type: String,
                        required: true
                    },
                    text2:{
                        type: String,
                        required: true
                    },
                },
                product:{
                    text1:{
                        type: String,
                        required: true
                    },
                    text2:{
                        type: String,
                        required: true
                    },
                },
                views:{
                    type: String,
                    required: true
                }
            },
            about:{
                image: {
                    type: String,
                    required: true
                },
                title: {
                    type: String,
                    required: true
                },
                descr: {
                    type: String,
                    required: true
                },
                post: {
                    image: {
                        type: String,
                        required: true
                    },
                    h1: {
                        type: String,
                        required: true
                    },
                    h2:{
                        type: String,
                        required: true
                    },
                    descr: {
                        type: String,
                        required: true
                    },
                    btn: {
                        type: String,
                        required: true
                    }
                }
            },
            review:{
                image: {
                    type: String,
                    required: true
                },
                title: {
                    type: String,
                    required: true
                },
                descr: {
                    type: String,
                    required: true
                },
                servis:[
                    {
                        image: {
                            type: String,
                            required: true
                        },
                        title: {
                            type: String,
                            required: true
                        },
                        descr: {
                            type: String,
                            required: true
                        }   
                    }
                ]
            },
            blog: {
                image: {
                    type: String,
                    required: true
                },
                title: {
                    type: String,
                    required: true
                },
                descr: {
                    type: String,
                    required: true
                },
                blogs: {
                    text1: {
                        type: String,
                        required: true
                    },
                    text2: {
                        type: String,
                        required: true
                    }
                },
                views: {
                    type: String,
                    required: true
                },
                btn: {
                    type: String,
                    required: true
                }
            },
            contact: {
                image: {
                    type: String,
                    required: true
                },
                title: {
                    type: String,
                    required: true
                },
                descr: {
                    type: String,
                    required: true
                },
                contactUs: {
                    number:{
                        title:{
                            type: String,
                            required: true
                        },
                        phone1: {
                            type: String,
                            required: true
                        },
                        phone2: {
                            type: String,
                        },
                    },
                    email:{
                        title:{
                            type: String,
                            required: true
                        },
                        email1: {
                            type: String,
                            required: true
                        },
                        email2: {
                            type: String,
                        },
                    },
                    adress:{
                        title:{
                            type: String,
                            required: true
                        },
                        adress1: {
                            type: String,
                            required: true
                        },
                        adress2: {
                            type: String,
                        },
                    }
                },
                form: {
                    title:{
                        type: String,
                        required: true
                    },
                    name:{
                        type: String,
                        required: true
                    },
                    email:{
                        type: String,
                        required: true
                    },
                    number:{
                        type: String,
                        required: true
                    },
                    subject:{
                        type: String,
                        required: true
                    },
                    message:{
                        type: String,
                        required: true
                    },
                    btn: {
                        type: String,
                        required: true
                    },
                    map: {
                        type: String,
                        required: true
                    }
                }
            }
        },
    }
)

module.exports = mongoose.model('Pages', Pages)