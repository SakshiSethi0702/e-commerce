// 
export function stopScrolling(stopScroll) {
    let body = document.getElementsByTagName('body')
    console.log(typeof stopScroll, "==============================")
    if (stopScroll === true) {
        body[0].style.overflow = "hidden"
    }
    else {
        body[0].style.overflow = "auto"
    }
}



// 