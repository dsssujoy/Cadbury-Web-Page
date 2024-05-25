gsap.to(".for-pin",{
    x:-7650,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        start:"top -15%",
        end:"top -80%",
        scrub:1,
        pin:true,
        
        
    }
})

let tl=gsap.timeline({scrollTrigger:{
    trigger:".page2",
    start:"top 70%",
    end:"top 15%",
    scrub:3,
    // markers:true
}})

let tl1=gsap.timeline({scrollTrigger:{
    trigger:".page2",
    start:"top 60%",
    end:"top 15%",
    scrub:4,
    // markers:true
}})
let tl3=gsap.timeline({scrollTrigger:{
    trigger:".page2",
    start:"top 60%",
    end:"top 15%",
    scrub:4,
    // markers:true
}})
let tl4=gsap.timeline({scrollTrigger:{
    trigger:".page3",
    start:"top 50%",
    end:"top 5%",
    scrub:1,
    // markers:true
}})
let tl5=gsap.timeline({scrollTrigger:{
    trigger:".page4",
    start:"top 40%",
    end:"top 5%",
    scrub:1,
    // markers:true
}})

tl.to(".mint",{
    top:"140%",
    right:"5%",
    width:"35%"
})
tl3.to(".choco1",{
    top:"130%",
    right:"34%",
    width:"10%",
    rotate:"60deg"
})
tl.to(".mint_leaf2",{
    top:"157%",
    left:"85%",
    width:"13%",
    rotate:"130deg"
})
tl1.to(".mint_leaf",{
    top:"116%",
    left:"0%",
    width:"13%",
    rotate:"-70deg"
})

tl4.to(".mint",{
    top:"240%",
    right:"27.5%",
    width:"45%",
    rotate:"90deg"
})

tl4.to(".mint_tiltle",{
    y:-150,
    // width:"60%",
    scrollTrigger:{
        scroller:"body",
        trigger:".mint_tiltle",
        scrub:3
    }
    
})
tl4.from(".bubbly,.milk-chocolate",{
    y:400
})
tl5.from(".hover1,.hover2",{
    width:"25%",
    
})



// tl2.to({

//     scrollTrigger:{
//         trigger:".mint",
//         scroller:"body",
//         start:"top -15%",
//         end:"top -80%",
//         scrub:1,
//         pin:true,
//         color:"black"
        
//     }
// })