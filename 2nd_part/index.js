const goods = [
    {
        id:2332,
        name: "Ботинки",
        description: "Такие штуки на ноги чтобы ходить было не больно",
        sizes: ["24", "31", "40"],
        price: 40000,
        available: true,
    },
    {
        id:2267,
        name: "Штаны",
        description: "Чтобы прикрыть уродливые коленки",
        sizes: ["20", "21", "22", "23", "24"],
        price: 23000,
        available: true,
    },
    {
        id:2121,
        name: "Рубашка",
        description: "Может хоть в ней будешь выглядеть презентабельно",
        sizes: ["32", "33"],
        price: 12000,
        available: true,
    },
    {
        id:2552,
        name: "Кепка",
        description: "Обязательно надень с рубашкой",
        sizes: ["24"],
        price: 4000,
        available: true,
    },
    {
        id:2862,
        name: "Сандали",
        description: "Отлично подчеркнет твой образ если надеть с носками",
        sizes: ["24", "31", "40"],
        price: 22000,
        available: true,
    },
]

let bascket = [
    {
        good: goods[1],
        amount: 1
    },
    
    {
        good: goods[2],
        amount: 2
    }
]

function addItemToBuscket(item, amount) {
    // Добавляет новый итем в корзину и его количество
    let newGood = {
        "good": goods[item],
        "amount": amount
    }
    bascket[bascket.length] = newGood
    return bascket
}

function deleteItemFromBuscket() {
    // Удаляет последний итем из корзины
    bascket.pop()
    return bascket
}

function deleteOneItemByItemId(itemId) {
    // Уменьшает количество итема в корзине на 1 по его id, если число этого итема стало 0 - удаляет его из корзины
    for (let i = 0; i < bascket.length; i++) {
        if (bascket[i].good.id == itemId) {
            bascket[i].amount -= 1
            if (bascket[i].amount == 0) {
                bascket.splice(i, 1)
            }
        }
    }
    return bascket
}

function clearBascket() {
    // Очищает корзину
    bascket = []
    return bascket
}

function calculateBasket() {
    let result = {
        "totalAmount": 0,
        "totalResult": 0
    }
    for (let i = 0; i < bascket.length; i++) {
        result.totalAmount += bascket[i].amount
        result.totalResult += bascket[i].good.price
    }
    return result
}


// Добавляем новые итемы
addItemToBuscket(3, 1)
addItemToBuscket(4, 2)
addItemToBuscket(5, 5)

//Удаляем последний итем
deleteItemFromBuscket()

//Удаляем несколько итемов
deleteOneItemByItemId(2332)
deleteOneItemByItemId(2862)
deleteOneItemByItemId(2552)

console.log(bascket)
console.log(calculateBasket())
