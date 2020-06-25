//Add Fitness Product

text = localStorage.getItem('cartLocal')
cart = JSON.parse(text)
console.log(cart)

text = localStorage.getItem('total')
total2 = JSON.parse(text)
console.log(total2)

cartPOS = []
const listItems = document.getElementById('listfinal')
const listPOS = document.getElementById('listPOS')
const fit3 = document.getElementById('fit3')
const fit6 = document.getElementById('fit6')
const pt1 = document.getElementById('pt1')
const pt2 = document.getElementById('pt2')
const pt3 = document.getElementById('pt3')
const pt4 = document.getElementById('pt4')
const pt5 = document.getElementById('pt5')

objFIT3 = {name: 'FIT3', price: 600000}
objFIT6 = {name: 'FIT6', price: 1150000}
objPT1 = {name: 'PT 8 sessions', price: 1826000}
objPT2 = {name: 'PT 16 sessions', price: 3722000}
objPT3 = {name: 'PT 24 sessions + 3 free', price: 6377000}
objPT4 = {name: 'PT 32 sessions + 3 free', price: 9189000}
objPT5 = {name: 'PT 40 sessions + 3 free', price: 14194000}

//add FIT3
function addFIT3() {
    for (let i = 0; i < cartPOS.length; i += 1) {
    if (cartPOS[i] === objFIT3) {
        cartPOS.splice(i, 1)
        fit3.style.backgroundColor = 'rgb(153,102,186)';
        showItems()
        console.log(cartPOS)
        return
    }
    }
    let a = cartPOS.indexOf(objFIT6)
    if (a>=0) {
        cartPOS.splice(a, 1)
        fit6.style.backgroundColor = 'rgb(153,102,186)';
    }
    let b = cartPOS.indexOf(objPT1)
    if (b>=0) {
        cartPOS.splice(b, 1)
        pt1.style.backgroundColor = 'rgb(187,153,209)';
    }
    let c = cartPOS.indexOf(objPT2)
    if (c>=0) {
        cartPOS.splice(c, 1)
        pt2.style.backgroundColor = 'rgb(187,153,209)';
    }
    let d = cartPOS.indexOf(objPT3)
    if (d>=0) {
        cartPOS.splice(d, 1)
        pt3.style.backgroundColor = 'rgb(187,153,209)';
    }
    let e = cartPOS.indexOf(objPT4)
    if (e>=0) {
        cartPOS.splice(e, 1)
        pt4.style.backgroundColor = 'rgb(187,153,209)';
    }
    let f = cartPOS.indexOf(objPT5)
    if (f>=0) {
        cartPOS.splice(e, 1)
        pt5.style.backgroundColor = 'rgb(187,153,209)';
    }
    cartPOS.push(objFIT3)
    fit3.style.backgroundColor = 'rgb(39,253,204)';
    showItems()
    console.log(cartPOS)
}

//add FIT6
function addFIT6() {
    for (let i = 0; i < cartPOS.length; i += 1) {
        if (cartPOS[i] === objFIT6) {
            cartPOS.splice(i, 1)
            fit6.style.backgroundColor = 'rgb(153,102,186)';
            showItems()
            console.log(cartPOS)
            return
        }
    }
    let a = cartPOS.indexOf(objFIT3)
    if (a>=0) {
        cartPOS.splice(a, 1)
        fit3.style.backgroundColor = 'rgb(153,102,186)';
    }
    let b = cartPOS.indexOf(objPT1)
    if (b>=0) {
        cartPOS.splice(b, 1)
        pt1.style.backgroundColor = 'rgb(187,153,209)';
    }
    let c = cartPOS.indexOf(objPT2)
    if (c>=0) {
        cartPOS.splice(c, 1)
        pt2.style.backgroundColor = 'rgb(187,153,209)';
    }
    let d = cartPOS.indexOf(objPT3)
    if (d>=0) {
        cartPOS.splice(d, 1)
        pt3.style.backgroundColor = 'rgb(187,153,209)';
    }
    let e = cartPOS.indexOf(objPT4)
    if (e>=0) {
        cartPOS.splice(e, 1)
        pt4.style.backgroundColor = 'rgb(187,153,209)';
    }
    let f = cartPOS.indexOf(objPT5)
    if (f>=0) {
        cartPOS.splice(e, 1)
        pt5.style.backgroundColor = 'rgb(187,153,209)';
    }
    cartPOS.push(objFIT6)
    fit6.style.backgroundColor = 'rgb(39,253,204)';
    showItems()
    console.log(cartPOS)
}

//add PT 8 sessions
function addPT1() {
    for (let i = 0; i < cartPOS.length; i += 1) {
        if (cartPOS[i] === objPT1) {
            cartPOS.splice(i, 1)
            pt1.style.backgroundColor = 'rgb(187,153,209)';
            showItems()
            console.log(cartPOS)
            return
        }
    }
    let a = cartPOS.indexOf(objFIT6)
    if (a>=0) {
        cartPOS.splice(a, 1)
        fit6.style.backgroundColor = 'rgb(153,102,186)';
    }
    let b = cartPOS.indexOf(objFIT3)
    if (b>=0) {
        cartPOS.splice(b, 1)
        fit3.style.backgroundColor = 'rgb(153,102,186)';
    }
    let c = cartPOS.indexOf(objPT2)
    if (c>=0) {
        cartPOS.splice(c, 1)
        pt2.style.backgroundColor = 'rgb(187,153,209)';
    }
    let d = cartPOS.indexOf(objPT3)
    if (d>=0) {
        cartPOS.splice(d, 1)
        pt3.style.backgroundColor = 'rgb(187,153,209)';
    }
    let e = cartPOS.indexOf(objPT4)
    if (e>=0) {
        cartPOS.splice(e, 1)
        pt4.style.backgroundColor = 'rgb(187,153,209)';
    }
    let f = cartPOS.indexOf(objPT5)
    if (f>=0) {
        cartPOS.splice(e, 1)
        pt5.style.backgroundColor = 'rgb(187,153,209)';
    }
    cartPOS.push(objPT1)
    pt1.style.backgroundColor = 'rgb(39,253,204)';
    showItems()
    console.log(cartPOS)
}

//add PT 16 sessions
function addPT2() {
    for (let i = 0; i < cartPOS.length; i += 1) {
        if (cartPOS[i] === objPT2) {
            cartPOS.splice(i, 1)
            pt2.style.backgroundColor = 'rgb(187,153,209)';
            showItems()
            console.log(cartPOS)
            return
        }
    }
    let a = cartPOS.indexOf(objFIT6)
    if (a>=0) {
        cartPOS.splice(a, 1)
        fit6.style.backgroundColor = 'rgb(153,102,186)';
    }
    let b = cartPOS.indexOf(objFIT3)
    if (b>=0) {
        cartPOS.splice(b, 1)
        fit3.style.backgroundColor = 'rgb(153,102,186)';
    }
    let c = cartPOS.indexOf(objPT1)
    if (c>=0) {
        cartPOS.splice(c, 1)
        pt1.style.backgroundColor = 'rgb(187,153,209)';
    }
    let d = cartPOS.indexOf(objPT3)
    if (d>=0) {
        cartPOS.splice(d, 1)
        pt3.style.backgroundColor = 'rgb(187,153,209)';
    }
    let e = cartPOS.indexOf(objPT4)
    if (e>=0) {
        cartPOS.splice(e, 1)
        pt4.style.backgroundColor = 'rgb(187,153,209)';
    }
    let f = cartPOS.indexOf(objPT5)
    if (f>=0) {
        cartPOS.splice(e, 1)
        pt5.style.backgroundColor = 'rgb(187,153,209)';
    }
    cartPOS.push(objPT2)
    pt2.style.backgroundColor = 'rgb(39,253,204)';
    showItems()
    console.log(cartPOS)
}

//add PT 24 sessions
function addPT3() {
    for (let i = 0; i < cartPOS.length; i += 1) {
        if (cartPOS[i] === objPT3) {
            cartPOS.splice(i, 1)
            pt3.style.backgroundColor = 'rgb(187,153,209)';
            showItems()
            console.log(cartPOS)
            return
        }
    }
    let a = cartPOS.indexOf(objFIT6)
    if (a>=0) {
        cartPOS.splice(a, 1)
        fit6.style.backgroundColor = 'rgb(153,102,186)';
    }
    let b = cartPOS.indexOf(objFIT3)
    if (b>=0) {
        cartPOS.splice(b, 1)
        fit3.style.backgroundColor = 'rgb(153,102,186)';
    }
    let c = cartPOS.indexOf(objPT1)
    if (c>=0) {
        cartPOS.splice(c, 1)
        pt1.style.backgroundColor = 'rgb(187,153,209)';
    }
    let d = cartPOS.indexOf(objPT2)
    if (d>=0) {
        cartPOS.splice(d, 1)
        pt2.style.backgroundColor = 'rgb(187,153,209)';
    }
    let e = cartPOS.indexOf(objPT4)
    if (e>=0) {
        cartPOS.splice(e, 1)
        pt4.style.backgroundColor = 'rgb(187,153,209)';
    }
    let f = cartPOS.indexOf(objPT5)
    if (f>=0) {
        cartPOS.splice(e, 1)
        pt5.style.backgroundColor = 'rgb(187,153,209)';
    }
    cartPOS.push(objPT3)
    pt3.style.backgroundColor = 'rgb(39,253,204)';
    showItems()
    console.log(cartPOS)
}

//add PT 32 sessions
function addPT4() {
    for (let i = 0; i < cartPOS.length; i += 1) {
        if (cartPOS[i] === objPT4) {
            cartPOS.splice(i, 1)
            pt4.style.backgroundColor = 'rgb(187,153,209)';
            showItems()
            console.log(cartPOS)
            return
        }
    }
    let a = cartPOS.indexOf(objFIT6)
    if (a>=0) {
        cartPOS.splice(a, 1)
        fit6.style.backgroundColor = 'rgb(153,102,186)';
    }
    let b = cartPOS.indexOf(objFIT3)
    if (b>=0) {
        cartPOS.splice(b, 1)
        fit3.style.backgroundColor = 'rgb(153,102,186)';
    }
    let c = cartPOS.indexOf(objPT1)
    if (c>=0) {
        cartPOS.splice(c, 1)
        pt1.style.backgroundColor = 'rgb(187,153,209)';
    }
    let d = cartPOS.indexOf(objPT2)
    if (d>=0) {
        cartPOS.splice(d, 1)
        pt2.style.backgroundColor = 'rgb(187,153,209)';
    }
    let e = cartPOS.indexOf(objPT3)
    if (e>=0) {
        cartPOS.splice(e, 1)
        pt3.style.backgroundColor = 'rgb(187,153,209)';
    }
    let f = cartPOS.indexOf(objPT5)
    if (f>=0) {
        cartPOS.splice(e, 1)
        pt5.style.backgroundColor = 'rgb(187,153,209)';
    }
    cartPOS.push(objPT4)
    pt4.style.backgroundColor = 'rgb(39,253,204)';
    showItems()
    console.log(cartPOS)
}

//add PT 40 sessions
function addPT5() {
    for (let i = 0; i < cartPOS.length; i += 1) {
        if (cartPOS[i] === objPT5) {
            cartPOS.splice(i, 1)
            pt5.style.backgroundColor = 'rgb(187,153,209)';
            showItems()
            console.log(cartPOS)
            return
        }
    }
    let a = cartPOS.indexOf(objFIT6)
    if (a>=0) {
        cartPOS.splice(a, 1)
        fit6.style.backgroundColor = 'rgb(153,102,186)';
    }
    let b = cartPOS.indexOf(objFIT3)
    if (b>=0) {
        cartPOS.splice(b, 1)
        fit3.style.backgroundColor = 'rgb(153,102,186)';
    }
    let c = cartPOS.indexOf(objPT1)
    if (c>=0) {
        cartPOS.splice(c, 1)
        pt1.style.backgroundColor = 'rgb(187,153,209)';
    }
    let d = cartPOS.indexOf(objPT2)
    if (d>=0) {
        cartPOS.splice(d, 1)
        pt2.style.backgroundColor = 'rgb(187,153,209)';
    }
    let e = cartPOS.indexOf(objPT3)
    if (e>=0) {
        cartPOS.splice(e, 1)
        pt3.style.backgroundColor = 'rgb(187,153,209)';
    }
    let f = cartPOS.indexOf(objPT4)
    if (f>=0) {
        cartPOS.splice(e, 1)
        pt4.style.backgroundColor = 'rgb(187,153,209)';
    }
    cartPOS.push(objPT5)
    pt5.style.backgroundColor = 'rgb(39,253,204)';
    showItems()
    console.log(cartPOS)
}

//show items
function showItems() {
    let str = ''
    for (let i = 0; i < cart.length; i +=1) {
        str += `<li><span>${cart[i].name}</span> <span>${cart[i].price}</span></li>`
    }
    str2 = `<span>Your monthly dues</span> <span>${getTotal()}</span>`

    let str3 = ''
    for (let j = 0; j < cartPOS.length; j +=1) {
        str3 += `<li><span>${cartPOS[j].name}</span> <span>${cartPOS[j].price}</span></li>`
    }
    listItems.innerHTML = str
    listtotal.innerHTML = str2
    listPOS.innerHTML = str3
}

//get total price
function getTotal() {
    let total = 0
    for (let i = 0; i < cart.length; i += 1) {
        total += cart[i].price
    }
    total1 = JSON.stringify(total)
    localStorage.setItem('total', total1)
    return total
}

//save to localstorage
function saveto() {
    savePOS = JSON.stringify(cartPOS)
    localStorage.setItem('cartPOS', savePOS)

    //retrieve from localstorage
    text = localStorage.getItem('cartPOS')
    retrPOS = JSON.parse(text)
    console.log(retrPOS)

    window.location.href = "get_started4.html"
}

// Overlay Menu
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

showItems()
