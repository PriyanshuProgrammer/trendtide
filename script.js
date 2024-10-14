let btn = document.querySelector(".nav .option .product");
let dropdown = document.querySelector(".dropdown");
let overlay = document.querySelector(".overlay");
let container = document.querySelector(".container");
let row1 = document.querySelectorAll(".dropdown .r1");
let row2 = document.querySelectorAll(".dropdown .r2");
let row3 = document.querySelectorAll(".dropdown .r3");
let row4 = document.querySelectorAll(".dropdown .r4");
let nav = document.querySelector("nav");
let ishover = false;
let opened = false;


btn.addEventListener("mouseenter", (event) => {
    ishover = true;
    if (!opened) {
        opened = true;
        overlay.style.display = "block";
        nav.style.backgroundColor = "black";
        gsap.to(dropdown, {
            height: "auto",
            duration: 0.2,
        })
        gsap.from(row1, {
            y: -2,
            opacity: 0,
            duration: 0.2,
            delay: 0.1,
            ease: "expo.out",
        })
        gsap.from(row2, {
            y: -5,
            opacity: 0,
            duration: 0.2,
            delay: 0.12,
            ease: "expo.out",
        })
        gsap.from(row3, {
            y: -8,
            opacity: 0,
            duration: 0.2,
            delay: 0.14,
            ease: "expo.out",
        })
        gsap.from(row4, {
            y: -11,
            opacity: 0,
            duration: 0.2,
            delay: 0.16,
            ease: "expo.out",
        })
    }
})

btn.addEventListener("mouseleave", (event) => {
    ishover = false;
    setTimeout(() => {
        if (!ishover) {
            overlay.style.display = "none";
            nav.style.backgroundColor = "rgba(0, 0, 0, 0.767)";
            opened = false;
            gsap.to(dropdown, {
                height: "0",
                duration: 0.2,
            })
        }
    }, 100);
})

container.addEventListener("mousemove", (event) => {
    ishover = true;
})

container.addEventListener("mouseleave", (event) => {
    ishover = false;
    setTimeout(() => {
        if (!ishover) {
            overlay.style.display = "none";
            nav.style.backgroundColor = "rgba(0, 0, 0, 0.767)";
            opened = false;
            gsap.to(dropdown, {
                height: "0",
                duration: 0.2,
            })
        }
    }, 100);
})


let secfirst = document.querySelector(".firstsection");

gsap.to(secfirst, {
    scale: 0.7,
    duration: 0.58,
    scrollTrigger: {
      trigger: secfirst,
      scroller: "body",
      start:"top 0%",
      end:"top -100%",
      scrub:1.5,
    }
});

let temp = document.querySelector(".temp");
let sec2 = document.querySelector(".second");


gsap.to(temp,{
    display:"block",
    backgroundColor:"white",
    duration:1,
    scrollTrigger: {
        trigger: sec2,
        scroller: "body",
        start:"top 95%",
        end:"top 20%",
        scrub:1.5,
    }
})

gsap.to(".continue .first .packs .img2",{
    top:"5%",
    duration:1,
    scrollTrigger:{
        trigger:".continue .packs",
        scroller:"body",
        start:"top 80%",
        scrub:1.5,
    }
})


gsap.from(".continue .first .head h3",{
    y:-50,
    opacity:0,
    duration:1,
    dealy:1,
    scrollTrigger:{
        trigger:".continue .first",
        scroller:"body",
        start:"top 60%",
    }
})

gsap.from(".continue .first .head .btn",{
    y:50,
    opacity:0,
    duration:1,
    dealy:1,
    scrollTrigger:{
        trigger:".continue .first",
        scroller:"body",
        start:"top 60%",
    }
})

gsap.from(".continue .first .head2 h3",{
    y:-50,
    opacity:0,
    duration:1,
    dealy:1,
    scrollTrigger:{
        trigger:".continue .head2",
        scroller:"body",
        start:"top 60%",
    }
})

gsap.from(".continue .first .head2 .btn",{
    y:50,
    opacity:0,
    duration:1,
    dealy:1,
    scrollTrigger:{
        trigger:".continue .head2",
        scroller:"body",
        start:"top 60%",
    }
})

gsap.to(".continue .first .packs2 .img2",{
    top:"5%",
    duration:1,
    scrollTrigger:{
        trigger:".continue .packs2",
        scroller:"body",
        start:"top 80%",
        scrub:1.5,
    }
})


gsap.from(".secondsection_box1",{
    x:"-30vw",
    duration:1,
    scrollTrigger:{
        trigger:".secondsection_box1",
        scroller:"body",
        end:"top 50%",
        scrub:1.5,
    }

})


gsap.from(".secondsection_box2",{
    x:"30vw",
    duration:1,
    scrollTrigger:{
        trigger:".secondsection_box2",
        scroller:"body",
        end:"top 50%",
        scrub:1.5,
    }

})

gsap.to(".endsection .gridend",{
    transform: "translateY(-40%)",
    duration:1,
    scrollTrigger:{
        trigger:".endsection .gridend",
        scroller:"body",
        end:"top 70%",
        scrub:1.5,
    }
})