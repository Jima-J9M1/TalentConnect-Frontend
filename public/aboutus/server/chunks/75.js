"use strict";
exports.id = 75;
exports.ids = [75];
exports.modules = {

/***/ 2075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ feature)
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
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/CircularProgress"
var CircularProgress_ = __webpack_require__(9048);
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);
// EXTERNAL MODULE: external "@mui/material/LinearProgress"
var LinearProgress_ = __webpack_require__(5545);
var LinearProgress_default = /*#__PURE__*/__webpack_require__.n(LinearProgress_);
// EXTERNAL MODULE: external "@mui/icons-material/ArtTrack"
var ArtTrack_ = __webpack_require__(2634);
var ArtTrack_default = /*#__PURE__*/__webpack_require__.n(ArtTrack_);
// EXTERNAL MODULE: external "@mui/icons-material/AttachMoney"
var AttachMoney_ = __webpack_require__(6000);
var AttachMoney_default = /*#__PURE__*/__webpack_require__.n(AttachMoney_);
// EXTERNAL MODULE: external "@mui/icons-material/LocalLibrary"
var LocalLibrary_ = __webpack_require__(1419);
var LocalLibrary_default = /*#__PURE__*/__webpack_require__.n(LocalLibrary_);
// EXTERNAL MODULE: external "@mui/icons-material/ContactSupport"
var ContactSupport_ = __webpack_require__(4406);
var ContactSupport_default = /*#__PURE__*/__webpack_require__.n(ContactSupport_);
;// CONCATENATED MODULE: ./src/components/home/feature.data.tsx
"use client";






const data = [
    {
        title: "Easy Accessable",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((ArtTrack_default()), {})
    },
    {
        title: "More Affordable Cost",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((AttachMoney_default()), {})
    },
    {
        title: "Flexible Study Time",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((LocalLibrary_default()), {})
    },
    {
        title: "Consultation With Mentor",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
        icon: /*#__PURE__*/ jsx_runtime_.jsx((ContactSupport_default()), {})
    }, 
];

;// CONCATENATED MODULE: ./src/components/home/feature.tsx
"use client";











const BorderLinearProgress = (0,styles_.styled)((LinearProgress_default()), {
    shouldForwardProp: (prop)=>prop !== "color"
})(({ theme , order  })=>({
        height: 6,
        borderRadius: 5,
        [`&.${LinearProgress_.linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[200]
        },
        [`& .${LinearProgress_.linearProgressClasses.bar}`]: {
            borderRadius: 5,
            ...order === 1 && {
                backgroundColor: "#f303ff"
            },
            ...order === 2 && {
                backgroundColor: "#26e8bd"
            },
            ...order === 3 && {
                backgroundColor: "#0063ff"
            }
        }
    })
);
const HomeFeature = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        id: "feature",
        sx: {
            py: {
                xs: 10,
                md: 14
            },
            backgroundColor: "background.paper"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                container: true,
                spacing: 3,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: 5,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                            sx: {
                                position: "relative"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/images/home-feature.png",
                                    width: 650,
                                    height: 678,
                                    quality: 97,
                                    alt: "Feature img"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                    sx: {
                                        position: "absolute",
                                        top: -36,
                                        right: {
                                            xs: 0,
                                            md: -36
                                        },
                                        boxShadow: 2,
                                        borderRadius: 1,
                                        px: 2.2,
                                        py: 1.4,
                                        zIndex: 1,
                                        backgroundColor: "background.paper",
                                        width: 190
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            variant: "h5",
                                            sx: {
                                                mb: 1
                                            },
                                            children: "Lorem ipsum dolor"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                mb: 2
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    variant: "subtitle1",
                                                    color: "text.secondary",
                                                    children: "UI/UI Design"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(BorderLinearProgress, {
                                                    variant: "determinate",
                                                    color: "inherit",
                                                    value: 65,
                                                    order: 1
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                mb: 2
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    variant: "subtitle1",
                                                    color: "text.secondary",
                                                    children: "Mobile Development"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(BorderLinearProgress, {
                                                    variant: "determinate",
                                                    color: "inherit",
                                                    value: 40,
                                                    order: 2
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                mb: 2
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                    variant: "subtitle1",
                                                    color: "text.secondary",
                                                    children: "Web Development"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(BorderLinearProgress, {
                                                    variant: "determinate",
                                                    color: "inherit",
                                                    value: 50,
                                                    order: 3
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                    sx: {
                                        position: "absolute",
                                        bottom: -12,
                                        left: {
                                            xs: 0,
                                            md: -24
                                        },
                                        boxShadow: 2,
                                        borderRadius: 1,
                                        px: 2.2,
                                        py: 2,
                                        zIndex: 1,
                                        backgroundColor: "background.paper",
                                        textAlign: "center"
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                        sx: {
                                            position: "relative",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexDirection: "column"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                sx: {
                                                    fontWeight: 600,
                                                    lineHeight: 1
                                                },
                                                children: "Lorem ipsum"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                variant: "subtitle1",
                                                sx: {
                                                    mb: 1,
                                                    color: "text.disabled"
                                                },
                                                children: "Lorem ipsum"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                sx: {
                                                    height: 85,
                                                    width: 85,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    flexDirection: "column"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "h4",
                                                        sx: {
                                                            color: "#32dc88"
                                                        },
                                                        children: "75%"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((CircularProgress_default()), {
                                                        sx: {
                                                            position: "absolute",
                                                            color: "divider"
                                                        },
                                                        thickness: 2,
                                                        variant: "determinate",
                                                        value: 85,
                                                        size: 85
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((CircularProgress_default()), {
                                                        disableShrink: true,
                                                        thickness: 2,
                                                        variant: "determinate",
                                                        value: 75,
                                                        size: 85,
                                                        sx: {
                                                            transform: "rotate(96deg) !important",
                                                            color: "#32dc88",
                                                            position: "absolute"
                                                        }
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        item: true,
                        xs: 12,
                        md: 7,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                component: "h2",
                                sx: {
                                    position: "relative",
                                    fontSize: {
                                        xs: 40,
                                        md: 50
                                    },
                                    ml: {
                                        xs: 0,
                                        md: 4
                                    },
                                    mt: 2,
                                    mb: 3,
                                    lineHeight: 1,
                                    fontWeight: "bold"
                                },
                                children: [
                                    "Make your",
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
                                            "Learning ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                sx: {
                                                    position: "absolute",
                                                    top: {
                                                        xs: 20,
                                                        md: 28
                                                    },
                                                    transform: "rotate(3deg)",
                                                    left: 2,
                                                    "& img": {
                                                        width: {
                                                            xs: 140,
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
                                    "Enjoyable"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                sx: {
                                    color: "text.secondary",
                                    mb: 2,
                                    ml: {
                                        xs: 0,
                                        md: 4
                                    }
                                },
                                children: "Set the way of learning according to your wishes with some of the benefits that you get us, so you on enjoy the lessons that we provide."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                container: true,
                                spacing: 2,
                                sx: {
                                    ml: {
                                        xs: 0,
                                        md: 2
                                    }
                                },
                                children: data.map(({ title , description , icon  }, index)=>/*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        item: true,
                                        xs: 12,
                                        md: 6,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                            sx: {
                                                px: 2,
                                                py: 1.5,
                                                boxShadow: 1,
                                                borderRadius: 4,
                                                display: "flex",
                                                alignItems: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                    sx: {
                                                        mr: 1,
                                                        backgroundColor: "primary.main",
                                                        borderRadius: "50%",
                                                        height: 36,
                                                        width: 36,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        color: "primary.contrastText",
                                                        "& svg": {
                                                            fontSize: 20
                                                        }
                                                    },
                                                    children: icon
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                    sx: {
                                                        display: "flex",
                                                        flex: 1,
                                                        flexDirection: "column"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "h6",
                                                            sx: {
                                                                fontSize: "1rem",
                                                                mb: 1,
                                                                color: "secondary.main"
                                                            },
                                                            children: title
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            sx: {
                                                                lineHeight: 1.3,
                                                                color: "text.secondary"
                                                            },
                                                            variant: "subtitle1",
                                                            children: description
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, String(index))
                                )
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const feature = (HomeFeature);


/***/ })

};
;