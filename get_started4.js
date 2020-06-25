//Show payment Summary

text = localStorage.getItem('cartLocal')
cart = JSON.parse(text)
console.log(cart)

text = localStorage.getItem('total')
total2 = JSON.parse(text)
console.log(total2)

text = localStorage.getItem('cartPOS')
cartPOS = JSON.parse(text)
console.log(cartPOS)

const listItems = document.getElementById('listfinal')
const paytoday = document.getElementById('listpaytoday')
const paytoday2 = document.getElementById('listpaytoday2')
const today = new Date()
const datetoday = today.getDate()
const monthtoday = today.getMonth()
const listmonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const daysinmonth = listmonth[monthtoday]
const daysleft = daysinmonth - datetoday
const monthleft = daysleft/daysinmonth
const prorate = total2*monthleft
const prorateround = parseInt(prorate)
const restofmonth = "This month: " + daysleft + " days"
const total3 = 0

objmcp12 = {name: 'Lifestyle (12mo)', price: 0}
objmcp4 = {name: 'Premier (4mo)', price: 80000}
objmcp0 = {name: 'Flexible contract', price: 100000}
objpay1 = {name: 'Credit card', price: 0}
objpay2 = {name: 'Lumpsum', price: 0}
objpay2a = {name: 'Additional 2 months free', price: 0}
objpay3 = {name: 'Direct debit', price: 100000}

objProrate = {name: restofmonth, price: prorateround}
const totaltoday = objProrate.price
lumpsum12 = {name: 'Lumpsum 12 month', price: total2*12}
lumpsum4 = {name: 'Lumpsum 4 month', price: total2*4}
cartNow = [objProrate]

// Calculate lumpsum
function lumpsum() {
    let a
    for (let j = 0; j < cart.length; j += 1) {
        if (cart[j].name === "Lumpsum") {
            for (let k = 0; k < cart.length; k += 1) {
                if (cart[k].name === "Lifestyle (12mo)") {
                    cartNow.push(lumpsum12)
                    if (cartPOS[0] !== undefined) {
                        cartNow.push(cartPOS[0])
                    }
                    console.log(cartNow)
                    return
                }
                if (cart[k].name === "Premier (4mo)") {
                    cartNow.push(lumpsum4)
                    if (cartPOS[0] !== undefined) {
                        cartNow.push(cartPOS[0])
                    }
                    console.log(cartNow)
                    return
                }
            }
        }
    }
    if (cartPOS[0] !== undefined) {
        cartNow.push(cartPOS[0])
    }
    console.log(cartNow)
}

// Calculate Totals
function getTotal() {
    let total = 0
    for (let i = 0; i < cartNow.length; i += 1) {
        total += cartNow[i].price
    }
    total3.value = total
    return total
}

// Show Totals
function showTotal() {
    let str = ''
    for (let i = 0; i < cart.length; i +=1) {
        str += `<li><span>${cart[i].name}</span> <span>${cart[i].price}</span></li>`
    }
    str2 = `<li><span>YOUR MONTHLY DUES</span> <span class="totpay">${total2}</span></li>`
    let str3 = ''
    for (let i = 0; i < cartNow.length; i +=1) {
        str3 += `<li><span>${cartNow[i].name}</span> <span>${cartNow[i].price}</span></li>`
    }
    str4 = `<li><span>GET STARTED TODAY</span> <span class="totpay">${getTotal()}</span></li>`
    listItems.innerHTML = str
    listtotal.innerHTML = str2
    paytoday.innerHTML = str3
    paytoday2.innerHTML = str4
}

// Overlay Menu
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

lumpsum()
getTotal()
showTotal()
