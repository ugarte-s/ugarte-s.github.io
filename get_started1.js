// Add membership options
const listItems = document.getElementById('listfinal')
const gf1 = document.getElementById('gf1')
const gf2 = document.getElementById('gf2')
const gf3 = document.getElementById('gf3')
const gf4 = document.getElementById('gf4')
const axs1 = document.getElementById('axs1')
const axs2 = document.getElementById('axs2')
const axs3 = document.getElementById('axs3')
const axs4 = document.getElementById('axs4')

objBase = {name: 'Gym only', price: 375000}
objGF1 = {name: 'Cycling', price: 75000}
objGF2 = {name: 'FGT', price: 75000}
objGF3 = {name: 'M&B', price: 75000}
objGF4 = {name: 'All Classes', price: 150000}
objAxs1 = {name: 'Dual Indonesia', price: 375000}
objAxs2 = {name: 'Dual Jakarta', price: 275000}
objAxs3 = {name: 'Dual Area', price: 225000}
objAxs4 = {name: 'Merah Putih', price: 175000}
cart = [objBase]

//add GF1
function addGF1() {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i] === objGF1) {
            cart.splice(i, 1)
            gf1.style.backgroundColor = 'rgb(153,102,186)';
            showItems()
            console.log(cart)
            return
        }
    }
    let a = cart.indexOf(objGF4)
    if (a>=0) {
        cart.splice(a, 1)
    }
    cart.push(objGF1)
    gf1.style.backgroundColor = 'rgb(39,253,204)';
    gf4.style.backgroundColor = 'rgb(153,102,186)';
    showItems()
    console.log(cart)
}

//add GF2
function addGF2() {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i] === objGF2) {
            cart.splice(i, 1)
            gf2.style.backgroundColor = 'rgb(153,102,186)';
            showItems()
            console.log(cart)
            return
        }
    }
    let a = cart.indexOf(objGF4)
    if (a>=0) {
        cart.splice(a, 1)
    }
    cart.push(objGF2)
    gf2.style.backgroundColor = 'rgb(39,253,204)';
    gf4.style.backgroundColor = 'rgb(153,102,186)';
    showItems()
    console.log(cart)
}

//add GF3
function addGF3() {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i] === objGF3) {
            cart.splice(i, 1)
            gf3.style.backgroundColor = 'rgb(153,102,186)';
            showItems()
            console.log(cart)
            return
        }
    }
    let a = cart.indexOf(objGF4)
    if (a>=0) {
        cart.splice(a, 1)
    }
    cart.push(objGF3)
    gf3.style.backgroundColor = 'rgb(39,253,204)';
    gf4.style.backgroundColor = 'rgb(153,102,186)';
    showItems()
    console.log(cart)
}

//add GF4
function addGF4() {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i] === objGF4) {
            cart.splice(i, 1)
            gf4.style.backgroundColor = 'rgb(153,102,186)';
            showItems()
            console.log(cart)
            return
        }
    }
    let a = cart.indexOf(objGF1)
    if (a>=0) {
        cart.splice(a, 1)
        gf1.style.backgroundColor = 'rgb(153,102,186)';
    }
    let b = cart.indexOf(objGF2)
    if (b>=0) {
        cart.splice(b, 1)
        gf2.style.backgroundColor = 'rgb(153,102,186)';
    }
    let c = cart.indexOf(objGF3)
    if (c>=0) {
        cart.splice(c, 1)
        gf3.style.backgroundColor = 'rgb(153,102,186)';
    }
    cart.push(objGF4)
    gf4.style.backgroundColor = 'rgb(39,253,204)';
    showItems()
    console.log(cart)
}

//add access1
function addAxs1() {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i] === objAxs1) {
            cart.splice(i, 1)
            axs1.style.backgroundColor = 'rgb(187,153,209)';
            showItems()
            console.log(cart)
            return
        }
    }
    let a = cart.indexOf(objAxs2)
    if (a>=0) {
        cart.splice(a, 1)
        axs2.style.backgroundColor = 'rgb(187,153,209)';
    }
    let b = cart.indexOf(objAxs3)
    if (b>=0) {
        cart.splice(b, 1)
        axs3.style.backgroundColor = 'rgb(187,153,209)';
    }
    let c = cart.indexOf(objAxs4)
    if (c>=0) {
        cart.splice(c, 1)
        axs4.style.backgroundColor = 'rgb(187,153,209)';
    }
    cart.push(objAxs1)
    axs1.style.backgroundColor = 'rgb(39,253,204)';
    showItems()
    console.log(cart)
}

//add access2
function addAxs2() {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i] === objAxs2) {
            cart.splice(i, 1)
            axs2.style.backgroundColor = 'rgb(187,153,209)';
            showItems()
            console.log(cart)
            return
        }
    }
    let a = cart.indexOf(objAxs1)
    if (a>=0) {
            cart.splice(a, 1)
            axs1.style.backgroundColor = 'rgb(187,153,209)';
    }
    let b = cart.indexOf(objAxs3)
    if (b>=0) {
        cart.splice(b, 1)
        axs3.style.backgroundColor = 'rgb(187,153,209)';
    }
    let c = cart.indexOf(objAxs4)
    if (c>=0) {
        cart.splice(c, 1)
        axs4.style.backgroundColor = 'rgb(187,153,209)';
    }
    cart.push(objAxs2)
    axs2.style.backgroundColor = 'rgb(39,253,204)';
    showItems()
    console.log(cart)
}

//add access3
function addAxs3() {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i] === objAxs3) {
            cart.splice(i, 1)
            axs3.style.backgroundColor = 'rgb(187,153,209)';
            showItems()
            console.log(cart)
            return
        }
    }
    let a = cart.indexOf(objAxs1)
    if (a>=0) {
        cart.splice(a, 1)
        axs1.style.backgroundColor = 'rgb(187,153,209)';
    }
    let b = cart.indexOf(objAxs2)
    if (b>=0) {
        cart.splice(b, 1)
        axs2.style.backgroundColor = 'rgb(187,153,209)';
    }
    let c = cart.indexOf(objAxs4)
    if (c>=0) {
        cart.splice(c, 1)
        axs4.style.backgroundColor = 'rgb(187,153,209)';
    }
    cart.push(objAxs3)
    axs3.style.backgroundColor = 'rgb(39,253,204)';
    showItems()
    console.log(cart)
}

//add access4
function addAxs4() {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i] === objAxs4) {
            cart.splice(i, 1)
            axs4.style.backgroundColor = 'rgb(187,153,209)';
            showItems()
            console.log(cart)
            return
        }
    }
    let a = cart.indexOf(objAxs1)
    if (a>=0) {
        cart.splice(a, 1)
        axs1.style.backgroundColor = 'rgb(187,153,209)';
    }
    let b = cart.indexOf(objAxs2)
    if (b>=0) {
        cart.splice(b, 1)
        axs2.style.backgroundColor = 'rgb(187,153,209)';
    }
    let c = cart.indexOf(objAxs3)
    if (c>=0) {
        cart.splice(c, 1)
        axs3.style.backgroundColor = 'rgb(187,153,209)';
    }
    cart.push(objAxs4)
    axs4.style.backgroundColor = 'rgb(39,253,204)';
    showItems()
    console.log(cart)
}

//show items
function showItems() {
    let str = ''
    for (let i = 0; i < cart.length; i +=1) {
        str += `<li><span>${cart[i].name}</span> <span>${cart[i].price}</span></li>`
    }
    str2 = `<span>Your monthly dues</span> <span>${getTotal()}</span>`
    listItems.innerHTML = str
    listtotal.innerHTML = str2
}

//get total price
function getTotal() {
    let total = 0
    for (let i = 0; i < cart.length; i += 1) {
        total += cart[i].price
    }
    return total
}

showItems()

//save to localstorage
function saveto() {
    cartTemp = JSON.stringify(cart)
    localStorage.setItem('cartLocal', cartTemp)

    //retrieve from localstorage
    text = localStorage.getItem('cartLocal')
    cartNew = JSON.parse(text)
    console.log(cartNew)

    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i] === objAxs1) {
            window.location.href = 'get_started2a.html';
            return
        }
        if (cart[i] === objAxs2) {
            window.location.href = 'get_started2a.html';
            return
        }
        if (cart[i] === objAxs3) {
            window.location.href = 'get_started2a.html';
            return
        }
            else {
            window.location.href = 'get_started2.html';
            }
    }
}

// Overlay Menu
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
