"use strict";
exports.id = 153;
exports.ids = [153];
exports.modules = {

/***/ 8153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ popular_courses)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
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
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowBack"
var ArrowBack_ = __webpack_require__(3622);
var ArrowBack_default = /*#__PURE__*/__webpack_require__.n(ArrowBack_);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowForward"
var ArrowForward_ = __webpack_require__(1883);
var ArrowForward_default = /*#__PURE__*/__webpack_require__.n(ArrowForward_);
;// CONCATENATED MODULE: ./src/components/home/popular-course.data.ts
"use client";
const data = [
    {
        id: 1,
        cover: "/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg",
        title: "Android Development from Zeo to Hero",
        rating: 5,
        ratingCount: 8,
        price: 25,
        category: "Beginner"
    },
    {
        id: 2,
        cover: "/images/courses/alvaro-reyes-qWwpHwip31M-unsplash.jpg",
        title: "UI/UX Complete Guide",
        rating: 5,
        ratingCount: 15,
        price: 20,
        category: "Intermediate"
    },
    {
        id: 3,
        cover: "/images/courses/christopher-gower-m_HRfLhgABo-unsplash.jpg",
        title: "Mastering Data Modeling Fundamentals",
        rating: 4,
        ratingCount: 7,
        price: 30,
        category: "Beginner"
    },
    {
        id: 4,
        cover: "/images/courses/true-agency-o4UhdLv5jbQ-unsplash.jpg",
        title: "The Complete Guide Docker and Kubernetes",
        rating: 4,
        ratingCount: 12,
        price: 30,
        category: "Intermediate"
    },
    {
        id: 5,
        cover: "/images/courses/stillness-inmotion-Jh6aQX-25Uo-unsplash.jpg",
        title: "Modern React with MUI & Redux",
        rating: 4,
        ratingCount: 32,
        price: 35,
        category: "Intermediate"
    },
    {
        id: 6,
        cover: "/images/courses/stillness-inmotion-YSCCnRGrD-4-unsplash.jpg",
        title: "Ethical Hacking Bootcamp Zero to Mastery",
        rating: 5,
        ratingCount: 14,
        price: 35,
        category: "Beginner"
    },
    {
        id: 7,
        cover: "/images/courses/grovemade-RvPDe41lYBA-unsplash.jpg",
        title: "Adobe Lightroom For Beginners: Complete Photo Editing",
        rating: 4,
        ratingCount: 6,
        price: 25,
        category: "Beginner"
    }, 
];

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@mui/material/Rating"
var Rating_ = __webpack_require__(802);
var Rating_default = /*#__PURE__*/__webpack_require__.n(Rating_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
;// CONCATENATED MODULE: ./src/components/course/course-card-item.tsx
"use client";








const CourseCardItem = ({ item  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        sx: {
            px: 1,
            py: 4
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
            sx: {
                p: 2,
                backgroundColor: "background.paper",
                borderRadius: 4,
                transition: (theme)=>theme.transitions.create([
                        "box-shadow"
                    ])
                ,
                "&:hover": {
                    boxShadow: 2,
                    [`& .${IconButton_.iconButtonClasses.root}`]: {
                        backgroundColor: "primary.main",
                        color: "primary.contrastText",
                        boxShadow: 2
                    }
                }
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    sx: {
                        lineHeight: 0,
                        overflow: "hidden",
                        borderRadius: 3,
                        mb: 2
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: item.cover,
                        width: 760,
                        height: 760,
                        alt: "Course " + item.id
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        mb: 2
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            component: "h2",
                            variant: "h5",
                            sx: {
                                mb: 2,
                                height: 56,
                                overflow: "hidden",
                                fontSize: "1.2rem"
                            },
                            children: item.title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Rating_default()), {
                                    name: "rating-course",
                                    value: item.rating,
                                    max: 5,
                                    sx: {
                                        color: "#ffce31",
                                        mr: 1
                                    },
                                    readOnly: true
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                    component: "span",
                                    variant: "h5",
                                    children: [
                                        "(",
                                        item.ratingCount,
                                        ")"
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h5",
                                    color: "primary.main",
                                    children: "$" + item.price
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    children: "/ course"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            color: "primary",
                            sx: {
                                "&:hover": {
                                    backgroundColor: "primary.main",
                                    color: "primary.contrastText"
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((ArrowForward_default()), {})
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const course_card_item = (CourseCardItem);

;// CONCATENATED MODULE: ./src/components/course/index.ts
"use client";


;// CONCATENATED MODULE: ./src/components/home/popular-courses.tsx
"use cleint";













const SliderArrow = (props)=>{
    const { onClick , type , className  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.IconButton, {
        sx: {
            backgroundColor: "background.paper",
            color: "primary.main",
            "&:hover": {
                backgroundColor: "primary.main",
                color: "primary.contrastText"
            },
            bottom: {
                xs: "-70px !important",
                md: "-28px !important"
            },
            left: "unset !important",
            right: type === "prev" ? "60px !important" : "0 !important",
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
const StyledDots = (0,styles_.styled)("ul")(({ theme  })=>({
        "&.slick-dots": {
            position: "absolute",
            left: 0,
            bottom: -20,
            paddingLeft: theme.spacing(1),
            textAlign: "left",
            "& li": {
                marginRight: theme.spacing(2),
                "&.slick-active>div": {
                    backgroundColor: theme.palette.primary.main
                }
            }
        }
    })
);
const HomePopularCourse = ()=>{
    const { breakpoints  } = (0,styles_.useTheme)();
    const matchMobileView = (0,material_.useMediaQuery)(breakpoints.down("md"));
    const sliderConfig = {
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: matchMobileView ? 1 : 3,
        slidesToScroll: 1,
        prevArrow: /*#__PURE__*/ jsx_runtime_.jsx(SliderArrow, {
            type: "prev"
        }),
        nextArrow: /*#__PURE__*/ jsx_runtime_.jsx(SliderArrow, {
            type: "next"
        }),
        dots: true,
        appendDots: (dots)=>/*#__PURE__*/ jsx_runtime_.jsx(StyledDots, {
                children: dots
            })
        ,
        customPaging: ()=>/*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                sx: {
                    height: 8,
                    width: 30,
                    backgroundColor: "divider",
                    display: "inline-block",
                    borderRadius: 4
                }
            })
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        id: "popular-course",
        sx: {
            pt: {
                xs: 6,
                md: 8
            },
            pb: 14,
            backgroundColor: "background.default"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
            maxWidth: "lg",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                container: true,
                spacing: 2,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: 3,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                height: "100%",
                                width: {
                                    xs: "100%",
                                    md: "90%"
                                },
                                display: "flex",
                                alignItems: "center",
                                justifyContent: {
                                    xs: "center",
                                    md: "flex-start"
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "h1",
                                sx: {
                                    mt: {
                                        xs: 0,
                                        md: -5
                                    },
                                    fontSize: {
                                        xs: 30,
                                        md: 48
                                    }
                                },
                                children: "Most Popular Courses"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: 9,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                            ...sliderConfig,
                            children: data.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(course_card_item, {
                                    item: item
                                }, String(item.id))
                            )
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const popular_courses = (HomePopularCourse);


/***/ })

};
;