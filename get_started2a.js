// Add Contract & FOP
text = localStorage.getItem('cartLocal')
cart = JSON.parse(text)
console.log(cart)

cartpay = []
const mcp12 = document.getElementById('mcp12')
const mcp4 = document.getElementById('mcp4')
const mcp0 = document.getElementById('mcp0')
const paycc = document.getElementById('paycc')
const payls = document.getElementById('payls')
const paydd = document.getElementById('paydd')
const paycash = document.getElementById('paycash')
const listItems = document.getElementById('listfinal')
const listpay = document.getElementById('listpay')

objmcp12 = {name: 'Lifestyle (12mo)', price: 0}
objmcp4 = {name: 'Premier (4mo)', price: 80000}
objmcp0 = {name: 'Flexible contract', price: 100000}
objmcp0cash = {name: 'Flexible contract - cash', price: 100000}
objpaycc = {name: 'Credit card', price: 0}
objpayls = {name: 'Lumpsum', price: 0}
objpaydd = {name: 'Direct debit', price: 100000}
objpaycash = {name: 'Cash', price: 100000}


//add mcp12
function addmcp12() {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i] === objmcp12) {
            showItems()
            console.log(cart)
            return
        }
    }
    let a = cart.indexOf(objmcp4)
    if (a>=0) {
        cart.splice(a, 1)
        mcp4.style.backgroundColor = 'rgb(153,102,186)';
    }
    let b = cart.indexOf(objmcp0)
    if (b>=0) {
        cart.splice(b, 1)
        mcp0.style.backgroundColor = 'rgb(153,102,186)';
    }
    cart.push(objmcp12)
    mcp12.style.backgroundColor = 'rgb(39,253,204)';
    addpaycc()
    showItems()
    console.log(cart)
}

//add mcp4
function addmcp4() {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i] === objmcp4) {
            showItems()
            console.log(cart)
            return
        }
    }
    let a = cart.indexOf(objmcp12)
    if (a>=0) {
        cart.splice(a, 1)
        mcp12.style.backgroundColor = 'rgb(153,102,186)';
    }
    let b = cart.indexOf(objmcp0)
    if (b>=0) {
        cart.splice(b, 1)
        mcp0.style.backgroundColor = 'rgb(153,102,186)';
    }
    cart.push(objmcp4)
    mcp4.style.backgroundColor = 'rgb(39,253,204)';
    addpaycc()
    showItems()
    console.log(cart)
}

//add mcp0
function addmcp0() {
    for (let j = 0; j < cart.length; j += 1) {
        if (cart[j] === objpayls) {
            cart.splice(j, 1)
            addpaycc()
            let a = cart.indexOf(objmcp12)
            if (a>=0) {
                cart.splice(a, 1)
                mcp12.style.backgroundColor = 'rgb(153,102,186)';
            }
            let b = cart.indexOf(objmcp4)
            if (b>=0) {
                cart.splice(b, 1)
                mcp4.style.backgroundColor = 'rgb(153,102,186)';
            }
            cart.push(objmcp0)
            mcp0.style.backgroundColor = 'rgb(39,253,204)';
            payls.style.backgroundColor = 'rgb(187,153,209)';
            paydd.style.backgroundColor = 'rgb(187,153,209)';
            showItems()
            console.log(cart)
            alert('Flex contract not available with lumpsum')
            return
        }
    }
    for (let k = 0; k < cart.length; k += 1) {
        if (cart[k] === objpaydd) {
            cart.splice(k, 1)
            addpaycc()
            let a = cart.indexOf(objmcp12)
            if (a>=0) {
                cart.splice(a, 1)
                mcp12.style.backgroundColor = 'rgb(153,102,186)';
            }
            let b = cart.indexOf(objmcp4)
            if (b>=0) {
                cart.splice(b, 1)
                mcp4.style.backgroundColor = 'rgb(153,102,186)';
            }
            cart.push(objmcp0)
            mcp0.style.backgroundColor = 'rgb(39,253,204)';
            payls.style.backgroundColor = 'rgb(187,153,209)';
            paydd.style.backgroundColor = 'rgb(187,153,209)';
            showItems()
            console.log(cart)
            alert('Flex contract not available with lumpsum')
            return
        }
    }
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i] === objmcp0) {
            showItems()
            console.log(cart)
            return
        }
    }
    let a = cart.indexOf(objmcp12)
    if (a>=0) {
        cart.splice(a, 1)
        mcp12.style.backgroundColor = 'rgb(153,102,186)';
    }
    let b = cart.indexOf(objmcp4)
    if (b>=0) {
        cart.splice(b, 1)
        mcp4.style.backgroundColor = 'rgb(153,102,186)';
    }
    cart.push(objmcp0)
    mcp0.style.backgroundColor = 'rgb(39,253,204)';
    addpaycc()
    showItems()
    console.log(cart)
}

//add pay by cc
function addpaycc() {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i] === objpaycc) {
            showItems()
            console.log(cart)
            return
        }
    }
    let a = cart.indexOf(objpayls)
    if (a>=0) {
        cart.splice(a, 1)
        payls.style.backgroundColor = 'rgb(187,153,209)';
    }
    let b = cart.indexOf(objpaydd)
    if (b>=0) {
        cart.splice(b, 1)
        paydd.style.backgroundColor = 'rgb(187,153,209)';
    }
    cart.push(objpaycc)
    paycc.style.backgroundColor = 'rgb(39,253,204)';
    showItems()
    console.log(cart)
}

//add pay by ls
function addpayls() {
    for (let j = 0; j < cart.length; j += 1) {
        if (cart[j] === objmcp0) {
            for (let k = 0; k < cart.length; k += 1) {
                if (cart[k] === objpaycc) {
                    showItems()
                    console.log(cart)
                    alert("Not available with Flex commitment")
                    return
                } else {
                    addpaycc()
                    showItems()
                    console.log(cart)
                    alert('Not available with Flex commitment')
                    return
                }
            }
        }
    }
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i] === objpayls) {
            showItems()
            console.log(cart)
            return
        }
    }
    let a = cart.indexOf(objpaycc)
    if (a>=0) {
        cart.splice(a, 1)
        paycc.style.backgroundColor = 'rgb(187,153,209)';
    }
    let b = cart.indexOf(objpaydd)
    if (b>=0) {
        cart.splice(b, 1)
        paydd.style.backgroundColor = 'rgb(187,153,209)';
    }
    cart.push(objpayls)
    payls.style.backgroundColor = 'rgb(39,253,204)';
    showItems()
    console.log(cart)
}

//add pay by dd
function addpaydd() {
    for (let j = 0; j < cart.length; j += 1) {
        if (cart[j] === objmcp0) {
            for (let k = 0; k < cart.length; k += 1) {
                if (cart[k] === objpaycc) {
                    showItems()
                    console.log(cart)
                    alert("Not available with Flex commitment")
                    return
                } else {
                    addpaycc()
                    showItems()
                    console.log(cart)
                    alert('Not available with Flex commitment')
                    return
                }
            }
        }
    }
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i] === objpaydd) {
            showItems()
            console.log(cart)
            return
        }
    }
    let a = cart.indexOf(objpaycc)
    if (a>=0) {
        cart.splice(a, 1)
        paycc.style.backgroundColor = 'rgb(187,153,209)';
    }
    let b = cart.indexOf(objpayls)
    if (b>=0) {
        cart.splice(b, 1)
        payls.style.backgroundColor = 'rgb(187,153,209)';
    }
    cart.push(objpaydd)
    paydd.style.backgroundColor = 'rgb(39,253,204)';
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
    total1 = JSON.stringify(total)
    localStorage.setItem('total', total1)
    return total
}

//save to localstorage
function saveto() {
    cartTemp = JSON.stringify(cart)
    localStorage.setItem('cartLocal', cartTemp)

    //retrieve from localstorage
    text = localStorage.getItem('cartLocal')
    cartNew = JSON.parse(text)
    console.log(cartNew)

    window.location.href = "get_started3.html"
}

// Overlay Menu
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

addmcp12()
showItems()
