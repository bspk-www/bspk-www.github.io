(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{333:function(t,e,r){},374:function(t,e,r){"use strict";r(333)},407:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{isMobile:!1}},props:{page:{type:String,required:!0},list:{type:Boolean,default:!1}},mounted:function(){this.isMobile=window.innerWidth<500}},a=(r(374),r(23)),s=Object(a.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"counter-gallery",class:"counter-gallery--"+t.page,attrs:{id:t.$frontmatter.counterGallery.id}},[t.$frontmatter.counterGallery.title||t.$frontmatter.counterGallery.subtitle||t.$frontmatter.counterGallery.intro?r("header",{staticClass:"counter-gallery__header container"},[r("div",{attrs:{"data-scroll":""}},[t.$frontmatter.counterGallery.title?r("Heading",{staticClass:"heading--default",attrs:{firstPartHeadlines:[t.$frontmatter.counterGallery.title],tag:"h2",tagStyle:"h1"}}):t._e(),t._v(" "),t.$frontmatter.counterGallery.intro?r("div",t._l(t.$frontmatter.counterGallery.intro,(function(e,n){return r("p",{key:n,staticClass:"counter-gallery__intro"},[t._v("\n          "+t._s(e)+"\n        ")])})),0):t._e()],1),t._v(" "),t.$frontmatter.counterGallery.video?r("div",{staticClass:"video-wrapper",attrs:{"data-scroll":"","data-scroll-call":"playTechnologyVideo"}},[r("video",{attrs:{autoplay:"",loop:"",muted:"",playsinline:"",id:"technologyVideoElement"},domProps:{muted:!0}},[r("source",{attrs:{src:t.isMobile?t.$withBase(t.$frontmatter.counterGallery.video.mobile):t.$withBase(t.$frontmatter.counterGallery.video.desktop),type:"video/mp4"}})])]):t._e(),t._v(" "),r("div",{staticClass:"counter-gallery__subtitle",attrs:{"data-scroll":""}},[t.$frontmatter.counterGallery.subtitle?r("Heading",{attrs:{firstPartHeadlines:[t.$frontmatter.counterGallery.subtitle],tag:"h2",tagStyle:"h1"}}):t._e()],1)]):t._e(),t._v(" "),t._l(t.$frontmatter.counterGallery.sections,(function(e,n){return r("article",{key:n,staticClass:"counter-section container grid-container"},[r("div",{staticClass:"counter-section__image"},[r("img-lazy",{staticClass:"desktop",attrs:{src:e.image.src,alt:e.image.alt}}),t._v(" "),r("img-lazy",{staticClass:"mobile",attrs:{src:e.mobileImage.src,alt:e.mobileImage.alt}})],1),t._v(" "),r("div",{staticClass:"counter-section__content"},[r("span",{staticClass:"counter-section__counter counter"},[t._v("\n        "+t._s("0"+(n+1))+"\n      ")]),t._v(" "),r("div",{attrs:{"data-scroll":""}},[r("Heading",{attrs:{firstPartHeadlines:[e.title],tag:"h3",tagStyle:"counter-sections"}})],1),t._v(" "),"customers"===t.page?r("div",{staticClass:"counter-section__copy counter-section__copy--list counter-section__copy--condensed"},t._l(e.content,(function(e,n){return r("div",{key:n},[r("strong",{staticClass:"counter-section__copy-title"},[t._v("\n            "+t._s(e.title)+" \n\n          ")]),t._v(" "),e.list?r("ul",t._l(e.list,(function(e,n){return r("li",{key:n},[t._v("\n              "+t._s(e)+"\n            ")])})),0):t._e()])})),0):r("div",{staticClass:"counter-section__copy",class:{"counter-section__copy--list":t.list}},[t.list?r("div",[r("ul",t._l(e.content,(function(e,n){return r("li",{key:n,domProps:{innerHTML:t._s(e)}})})),0)]):r("div",[t._v("\n          "+t._s(e.content)+"\n        ")])])])])}))],2)}),[],!1,null,"65ac98d4",null);e.default=s.exports}}]);