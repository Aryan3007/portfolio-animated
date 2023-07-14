
gsap.registerPlugin(ScrollTrigger)

gsap.from("#nav1,#nav2,#nav3,#nav4,#nav5, #logo-image", {
    opacity: 0,
    scale: .5,
    duration: 1,
    delay: 1
})
gsap.from(".contactdiv", {
    width: "0px",
    duration: 3,
    delay: 1,
})
gsap.from(".line", {
    width: "0px",
    duration: 1,
    delay: 1
})
gsap.from(".right1 h1", {
    opacity: 0,
    duration: 2,
    delay: 1
})
gsap.from(".left1 p", {
    opacity: 0,
    duration: 2,
    delay: 1
})


gsap.to(".page1", {
    height: "0px",
    opacity: 0,
    scrollTrigger: {
        trigger: ".blank",
        scroller: "body",
        // markers:true,
        start: "top 20%",
        end: "top 80%",
        scrub: 2,

    },
    duration: 10

})
gsap.from("#box1 p, #box2 p, #box2 h5, .images1", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#box2",
        scroller: "body",
        // markers:true,
        start: "top 110%",
        end: "top 60%",
        scrub: 1,
    },
    duration: 2,
})

gsap.from("#bar1, #bar2, #bar3", {
    width: "0px",
    scrollTrigger: {
        trigger: "#box1",
        scroller: "body",
        // markers:true,
        start: "top 120%",
        end: "top 95%",
        scrub: 1,

    },
    duration: .1
})

gsap.to("#coding", {
    height: "300px",
    opacity: 0,
    scrollTrigger: {
        trigger: "#box2",
        scroller: "body",
        // markers:true,
        start: "top 80%",
        end: "top 50%",
        scrub: 2,

    },

    duration: 8

})

gsap.from("#box3 p, #box4 p, #box4 h5 , .images2", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".head2",
        scroller: "body",
        // markers:true,
        start: "top 120%",
        end: "top 80%",
        scrub: 1,
    },
    duration: 1,
})

gsap.from("#bar4, #bar5, #bar6", {
    width: "0px",
    scrollTrigger: {
        trigger: ".head2",
        scroller: "body",
        // markers:true,
        start: "top 125%",
        end: "top 95%",
        scrub: 1,

    },
    duration: .05
})

gsap.to("#webd", {
    height: "300px",
    opacity: 0,
    scrollTrigger: {
        trigger: "#webd",
        scroller: "body",
        // markers:true,
        start: "top 80%",
        end: "top 60%",
        scrub: 2,

    },
    duration: 8

})


gsap.from("#box5 p, #box6 p, #box6 h5, .images3", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#designhead",
        scroller: "body",
        // markers:true,
        start: "top 160%",
        end: "top 100%",
        scrub: 1,
    },
    duration: 2,
})

gsap.from("#bar7, #bar8, #bar9", {
    width: "0px",
    scrollTrigger: {
        trigger: "#bar6",
        scroller: "body",
        // markers:true,
        start: "top 120%",
        end: "top 90%",
        scrub: 1,

    },
    duration: .1
})


gsap.to("#design", {
    height: "300px",
    opacity: 0,
    scrollTrigger: {
        trigger: "#design",
        scroller: "body",
        // markers:true,
        start: "top 100%",
        end: "top 90%",
        scrub: 2,

    },
    duration: 10

})

gsap.from("#box7 p, #box8 p, #box8 h5", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".head4",
        scroller: "body",
        // markers:true,
        start: "top 210%",
        end: "top 150%",
        scrub: 1,
    },
    duration: 2,
})

gsap.from("#green", {
    height: "650px",
    opacity: 1,
    scrollTrigger: {
        trigger: ".contact-logo",
        scroller: "body",
        // markers:true,
        start: "top 40%",
        end: "top 90%",
        scrub: 2,
    },
    duration: 8
})

gsap.to("#green", {
    opacity: .8,
    scrollTrigger: {
        trigger: ".contact-logo",
        scroller: "body",
        // markers:true,
        start: "top 40%",
        end: "top 90%",
        scrub: 3,
    },
    duration: 8
})

gsap.to("#green", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#box7",
        scroller: "body",
        // markers:true,
        start: "top 200%",
        end: "top 120%",
        scrub: 3,
    },
    duration: 5
})

gsap.from("#port-bar", {
    width: "0px",
    scrollTrigger: {
        trigger: ".head4",
        scroller: "body",
        // markers:true,
        start: "top 97%",
        end: "top 80%",
        scrub: 1,

    },
    duration: 1
})

gsap.from(".domains1", {
    width: "0px",
    marginLeft: "675px",
    margin: "0px",
    opacity: 0,
    scrollTrigger: {
        trigger: ".head4",
        scroller: "body",
        // markers:true,
        start: "top 97%",
        end: "top 80%",
        scrub: 2,

    },
    duration: .1

})
gsap.from(".domains2", {
    width: "0px",
    marginRight: "600px",
    margin: "0px",
    opacity: 0,
    scrollTrigger: {
        trigger: ".head4",
        scroller: "body",
        // markers:true,
        start: "top 97%",
        end: "top 85%",
        scrub: 2,

    },
    duration: .1

})



// let sideBox = document.getElementById('sidebox')
// let reveal = document.getElementById('reveal')
// reveal.addEventListener("click", function change() {

//     gsap.to("#sidebox", {
//         width: "485px",
//         height: "550px",
//         duration: .5,

//     })

// })
// sideBox.addEventListener("click", function show() {
//     gsap.to("#sidebox", {
//         width: "0px",
//         height: "0px",
//         duration: .5,
//     })


// })


// let element = document.body
// var htmlElement = document.querySelector("html");
// let nav=document.getElementById('nav-back')
// let aryan=document.getElementById('aryan')
// let box=document.getElementById('box')
// let box1=document.getElementById('box1')
// let box2=document.getElementById('box2')
// let box3=document.getElementById('box3')
// let box4=document.getElementById('box4')
// let back1=document.getElementById('back1')
// let blank=document.getElementById('blank')
// let head1=document.getElementById('headcode')
// let webd=document.getElementById('webd')
// let head2=document.getElementById('headweb')
// const light=document.getElementById('light')

// light.addEventListener("click", function(){
//     light.textContent="Dark Theme"

//     element.style.backgroundColor="white"
//     aryan.style.color="black"
//     box.style.color="black"
//     box1.style.color="black"
//     box2.style.color="black"
//     box3.style.color="black"
//     box4.style.color="black"
//     head1.style.color="rgb(15, 15, 15)"
//     head2.style.color="rgb(15, 15, 15)"
//     back1.style.backgroundColor="white"
//     htmlElement.style.backgroundColor="white"
//     blank.style.backgroundColor="white"
//     webd.style.backgroundColor="white"

// })