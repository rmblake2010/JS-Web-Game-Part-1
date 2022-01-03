function newImage(src, pos, left, bottom) {
    let img = document.createElement('img')
    img.src = src
    img.style.position = pos
    img.style.left = left
    img.style.bottom = bottom
    document.body.append(img)
    return img
}


function newItem(src, pos, left, bottom) {
    let item = newImage(src, pos, left, bottom)

    item.addEventListener('dblclick', function() {
        item.remove()
    })
}


function backgroundDraw(srcBottom, srcTop) {
    let height = window.innerHeight - window.innerHeight
    let widthCheck = 0 
    for(let x = 0; x < 12; x++) {
        if (x < 5) {
        for(let i = 0; i  <= window.innerWidth; i += 100) {
            let ground = newImage(srcBottom, "fixed", i+"px", height+"px")
            ground.style.zIndex = -1
            widthCheck += 100
        }
        if (widthCheck >= window.innerWidth) {
        widthCheck = 0
        height += 100
        }
         } else if (x > 5) {
            for(let i = 0; i  <= window.innerWidth; i += 100) {
                let sky = newImage(srcTop, "fixed", i+"px", height+"px")
                sky.style.zIndex = -1
                widthCheck += 100
            }
            if (widthCheck >= window.innerWidth) {
            widthCheck = 0
            height += 100
            }
     }
    }
}


newImage("./assets/green-character.gif", "fixed", "100px", "100px")
newImage("./assets/pine-tree.png", "fixed", "450px", "250px")
newImage("./assets/tree.png", "fixed", "200px", "300px")
newImage("./assets/pillar.png", "fixed", "350px", "100px")
newImage("./assets/crate.png", "fixed", "150px", "200px")
newImage("./assets/well.png", "fixed", "500px", "425px")

newItem("./assets/sword.png", "fixed", "500px", "405px")
newItem("./assets/sheild.png", "fixed", "165px", "185px")
newItem("./assets/staff.png", "fixed", "600px", "100px")

backgroundDraw("./assets/grass.png", "./assets/sky.png")


/*
let height = window.innerHeight - window.innerHeight
let widthCheck = 0 
for(let x = 0; x < 12; x++) {
    if (x < 5) {
    for(let i = 0; i  <= window.innerWidth; i += 100) {
        newImage("./assets/grass.png", "fixed", i+"px", height+"px")
        widthCheck += 100
    }
    if (widthCheck >= window.innerWidth) {
        widthCheck = 0
        height += 100
    }
    } else if (x > 5) {
        for(let i = 0; i  <= window.innerWidth; i += 100) {
            newImage("./assets/sky.png", "fixed", i+"px", height+"px")
            widthCheck += 100
        }
        if (widthCheck >= window.innerWidth) {
            widthCheck = 0
            height += 100
        }
    }
}


console.log(window.innerHeight)

*/