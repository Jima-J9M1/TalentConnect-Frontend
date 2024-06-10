"use strict";
exports.id = 536;
exports.ids = [536];
exports.modules = {

/***/ 9536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ mentors)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
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
// EXTERNAL MODULE: external "@mui/material/useMediaQuery"
var useMediaQuery_ = __webpack_require__(9868);
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowBack"
var ArrowBack_ = __webpack_require__(3622);
var ArrowBack_default = /*#__PURE__*/__webpack_require__.n(ArrowBack_);
// EXTERNAL MODULE: external "@mui/icons-material/ArrowForward"
var ArrowForward_ = __webpack_require__(1883);
var ArrowForward_default = /*#__PURE__*/__webpack_require__.n(ArrowForward_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/mentor/mentor-card-item.tsx
"use cleint";





const MentorCardItem = ({ item  })=>{
    var ref, ref1;
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        sx: {
            px: 1.5,
            py: 5
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
                    boxShadow: 2
                }
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                    sx: {
                        lineHeight: 0,
                        overflow: "hidden",
                        borderRadius: 3,
                        height: 200,
                        mb: 2
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: item.photo,
                        width: 570,
                        height: 427,
                        alt: "Mentor " + item.id
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                    sx: {
                        mb: 2
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            component: "h2",
                            variant: "h4",
                            sx: {
                                fontSize: "1.4rem"
                            },
                            children: item.name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            sx: {
                                mb: 2,
                                color: "text.secondary"
                            },
                            children: item.category
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            sx: {
                                mb: 2,
                                color: "text.secondary"
                            },
                            variant: "subtitle1",
                            children: item.description
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            sx: {
                                "& img": {
                                    height: 26
                                }
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: (ref = item.company) === null || ref === void 0 ? void 0 : ref.logo,
                                alt: ((ref1 = item.company) === null || ref1 === void 0 ? void 0 : ref1.name) + " logo"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const mentor_card_item = (MentorCardItem);

;// CONCATENATED MODULE: ./src/components/mentor/index.ts
"use cleint";


;// CONCATENATED MODULE: ./src/components/home/mentors.data.ts
"use client";
const data = [
    {
        id: 1,
        photo: "/images/mentors/christian-buehner-DItYlc26zVI-unsplash.jpg",
        name: "Jhon Dwirian",
        category: "UI/UX Design",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        company: {
            name: "Grab",
            logo: "/images/companies/grab.png"
        }
    },
    {
        id: 2,
        photo: "/images/mentors/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg",
        name: "Leon S Kennedy",
        category: "Machine Learning",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        company: {
            name: "Google",
            logo: "/images/companies/google.png"
        }
    },
    {
        id: 3,
        photo: "/images/mentors/noah-buscher-8A7fD6Y5VF8-unsplash.jpg",
        name: "Nguy\u1EC5n Thuy",
        category: "Android Development",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        company: {
            name: "Airbnb",
            logo: "/images/companies/airbnb.png"
        }
    },
    {
        id: 4,
        photo: "/images/mentors/philip-martin-5aGUyCW_PJw-unsplash.jpg",
        name: "Rizki Known",
        category: "Fullstack Development",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        company: {
            name: "Microsoft",
            logo: "/images/companies/microsoft.png"
        }
    }, 
];

;// CONCATENATED MODULE: ./src/components/home/mentors.tsx
"use client";













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
            bottom: "-28px !important",
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
const HomeOurMentors = ()=>{
    const { breakpoints  } = (0,styles_.useTheme)();
    const matchMobileView = useMediaQuery_default()(breakpoints.down("md"));
    const sliderConfig = {
        infinite: true,
        // autoplay: true,
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
        id: "mentors",
        sx: {
            pt: {
                xs: 6,
                md: 8
            },
            pb: {
                xs: 8,
                md: 12
            },
            backgroundColor: "#ecf3f3"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
            maxWidth: "lg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                    variant: "h1",
                    sx: {
                        fontSize: 40
                    },
                    children: "Our Expert Mentors"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
                    ...sliderConfig,
                    children: data.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(mentor_card_item, {
                            item: item
                        }, String(item.id))
                    )
                })
            ]
        })
    });
};
/* harmony default export */ const mentors = (HomeOurMentors);


/***/ })

};
;