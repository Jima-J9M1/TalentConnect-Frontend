"use strict";
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 4521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ testimonial)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowBack"
var ArrowBack_ = __webpack_require__(3622);
var ArrowBack_default = /*#__PURE__*/__webpack_require__.n(ArrowBack_);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowForward"
var ArrowForward_ = __webpack_require__(1883);
var ArrowForward_default = /*#__PURE__*/__webpack_require__.n(ArrowForward_);
;// CONCATENATED MODULE: ./src/components/testimonial/testimonial-item.tsx
"use cleint";





const TestimonialItem = ({ item  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            padding: "30px"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    mb: 2
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        component: "h2",
                        variant: "h4",
                        sx: {
                            mb: 2
                        },
                        children: item.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        sx: {
                            mb: 2,
                            color: "text.secondary"
                        },
                        children: item.content
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                sx: {
                    boxShadow: 1,
                    borderRadius: 1,
                    px: 2,
                    py: 2,
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    width: 270,
                    backgroundColor: "background.paper"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        sx: {
                            borderRadius: "50%",
                            height: 52,
                            width: 52,
                            overflow: "hidden",
                            mr: 2,
                            "& img": {
                                width: "100%"
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: `/images/avatars/${item.user.photo}`,
                            width: 100,
                            height: 100,
                            quality: 97,
                            alt: item.user.name
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h6",
                                children: item.user.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "subtitle1",
                                sx: {
                                    color: "text.secondary"
                                },
                                children: item.user.professional
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const testimonial_item = (TestimonialItem);

;// CONCATENATED MODULE: ./src/components/testimonial/index.ts
"use cleint";


;// CONCATENATED MODULE: ./src/components/home/testimonial.data.ts
"use cleint";
const data = [
    {
        id: 1,
        title: "Detailed learning materials",
        content: "Classes that provide very detailed material in term of making UI UX Design starting team making low and hight quality, system designs, using data layout and make prototypes and testing.",
        user: {
            id: 1,
            name: "Luis Sera",
            professional: "UI/UX Engineer",
            photo: "1.jpg"
        }
    },
    {
        id: 2,
        title: "Best Quality Online Course!",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        user: {
            id: 1,
            name: "Riski",
            professional: "Software Engineer",
            photo: "2.jpg"
        }
    },
    {
        id: 3,
        title: "Very complete class",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        user: {
            id: 1,
            name: "Nguy\u1EC5n V\u0103n",
            professional: "FullStack Designer",
            photo: "3.jpg"
        }
    },
    {
        id: 4,
        title: "Great Quality!",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        user: {
            id: 1,
            name: "Diana Jordan",
            professional: "SEO Expert",
            photo: "4.jpg"
        }
    },
    {
        id: 5,
        title: "Detailed learning materials",
        content: "Classes that provide very detailed material in term of making UI UX Design starting team making low and hight quality, system designs, using data layout and make prototypes and testing.",
        user: {
            id: 1,
            name: "Ashley Graham",
            professional: "Back-End Developer",
            photo: "5.jpg"
        }
    }, 
];

;// CONCATENATED MODULE: ./src/components/home/testimonial.tsx
"use cleint";














const SliderArrow = (props)=>{
    const { onClick , type , className  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
        sx: {
            backgroundColor: "background.paper",
            color: "primary.main",
            "&:hover": {
                backgroundColor: "primary.main",
                color: "primary.contrastText"
            },
            bottom: {
                xs: "-28px !important",
                md: "64px !important"
            },
            left: "unset !important",
            right: type === "prev" ? "90px !important" : "30px !important",
            zIndex: 10,
            boxShadow: 1
        },
        disableRipple: true,
        color: "inherit",
        onClick: onClick,
        className: className,
        children: type === "next" ? /*#__PURE__*/ jsx_runtime_.jsx((ArrowForward_default()), {
            sx: {
                fontSize: 22
            }
        }) : /*#__PURE__*/ jsx_runtime_.jsx((ArrowBack_default()), {
            sx: {
                fontSize: 22
            }
        })
    });
};
const StyledSlickContainer = (0,styles_.styled)("div")(()=>({
        position: "relative",
        "& .slick-list": {
            marginLeft: "-30px",
            marginBottom: "24px"
        }
    })
);
const HomeTestimonial = ()=>{
    const sliderRef = (0,external_react_.useRef)(null);
    const sliderConfig = {
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: /*#__PURE__*/ jsx_runtime_.jsx(SliderArrow, {
            type: "prev"
        }),
        nextArrow: /*#__PURE__*/ jsx_runtime_.jsx(SliderArrow, {
            type: "next"
        })
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        id: "testimonial",
        sx: {
            pb: {
                xs: 6,
                md: 10
            },
            backgroundColor: "background.paper"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                container: true,
                spacing: 5,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: 6,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                component: "h2",
                                sx: {
                                    position: "relative",
                                    fontSize: {
                                        xs: 36,
                                        md: 46
                                    },
                                    mt: {
                                        xs: 0,
                                        md: 7
                                    },
                                    mb: 4,
                                    lineHeight: 1,
                                    fontWeight: "bold"
                                },
                                children: [
                                    "Testimonial What our",
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                        component: "mark",
                                        sx: {
                                            position: "relative",
                                            color: "primary.main",
                                            fontSize: "inherit",
                                            fontWeight: "inherit",
                                            backgroundColor: "unset"
                                        },
                                        children: [
                                            "Students",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                sx: {
                                                    position: "absolute",
                                                    top: {
                                                        xs: 20,
                                                        md: 28
                                                    },
                                                    left: 2,
                                                    "& img": {
                                                        width: {
                                                            xs: 130,
                                                            md: 175
                                                        },
                                                        height: "auto"
                                                    }
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "/images/headline-curve.svg",
                                                    alt: "Headline curve"
                                                })
                                            })
                                        ]
                                    }),
                                    "Say"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(StyledSlickContainer, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                                    ref: sliderRef,
                                    ...sliderConfig,
                                    children: data.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(testimonial_item, {
                                            item: item
                                        }, String(index))
                                    )
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: 6,
                        sx: {
                            display: {
                                xs: "none",
                                md: "block"
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                width: {
                                    xs: "100%",
                                    md: "90%"
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/images/home-testimonial.png",
                                width: 520,
                                height: 540,
                                quality: 97,
                                alt: "Testimonial img"
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const testimonial = (HomeTestimonial);


/***/ })

};
;