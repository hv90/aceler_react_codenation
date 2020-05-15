const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

const productsArrayMaker = (ids, productsList) => {
    let productsArray = [];

    const productContainsId = (product, ids) => {
        for (let i = 0; i < ids.length; i++) {
            if (product.id === ids[i]) {
                ids.splice(i, 1); //reduce the number of tasks to do
                return true;
            }
        }
        return false;
    }

    const pushIntoProductsArray = product => {
        productsArray.push({
            name: product.name,
            category: product.category
        });
    }


    productsList.forEach(product => {
        productContainsId(product, ids) ? pushIntoProductsArray(product) : null;
    });

    return productsArray;
}

const getPromotion = products => {
    let categories = new Set();


    products.forEach(product => {
        categories.add(product.category)
    });

    switch (categories.size) { //checks how many elements has the set
        case 1:
            return promotions[0];
        case 2:
            return promotions[1];
        case 3:
            return promotions[2];
        case 4:
            return promotions[3];
        default: //if greater than 4, also it is full look
            return promotions[3];
    }
}

const doesAllTheMathHandler = (productsList, products, promotion) => {
    let totalPromoPrice = 0;
    let totalRegularPrice = 0;
    let totalPrice = 0;
    let discountValue = 0;
    let discount = 0;


    const getRegularPrice = prodListElem => {
        return prodListElem.regularPrice;
    }

    const checkForPromotions = prodListElem => {
        let promos = prodListElem.promotions;

        for (let i = 0; i < promos.length; i++)
            if (promos[i].looks.includes(promotion))
                return promos[i].price;

        return 0;
    }

    const getTotalPriceByParts = prodListElem => {
        const regularPrice = getRegularPrice(prodListElem);
        const promoPrice = checkForPromotions(prodListElem);

        totalRegularPrice += regularPrice;
        totalPromoPrice += promoPrice;
        promoPrice !== 0 ? totalPrice += promoPrice : totalPrice += regularPrice;
    }

    const getTotalPrice = product => {
        for (let i = 0; i < productsList.length; i++) {
            productsList[i].name === product ? getTotalPriceByParts(productsList[i]) : null;
        }
    }


    products.forEach(product => {
        getTotalPrice(product.name)
    })

    discountValue = (totalRegularPrice - totalPrice)
    discount = (discountValue / (discountValue + totalPrice)) * 100;

    totalPrice = totalPrice.toFixed(2);
    discountValue = discountValue.toFixed(2);
    discount = discount.toFixed(2);

    return { totalPrice, discountValue, discount };
}


function getShoppingCart(ids, productsList) {
    const products = productsArrayMaker(ids, productsList);
    const promotion = getPromotion(products);
    const args = [productsList, products, promotion];
    const { totalPrice, discountValue, discount } = doesAllTheMathHandler(...args);

    return {
        products: products,
        promotion: promotion,
        totalPrice: totalPrice,
        discountValue: discountValue,
        discount: `${discount}%`
    };
}

//getShoppingCart([120, 230, 310, 490], productsList)

module.exports = { getShoppingCart };