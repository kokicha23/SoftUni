class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }
 
    loadingVegetables(vegetables) {
        let typeArr = [];
 
        for (let strSequence of vegetables) {
            let [type, quantity, price] = strSequence.split(' ');
            quantity = Number(quantity);
            price = Number(price);
 
            let productObj = this.availableProducts.find(
                (x) => x.type === type
            );
 
            if (productObj) {
                productObj.quantity += quantity;
                if (price > productObj.price) {
                    productObj.price = price;
                }
            } else {
                typeArr.push(type);
                this.availableProducts.push({ type, quantity, price });
            }
 
        }
 
        return `Successfully added ${typeArr.join(', ')}`;
    }
 
    buyingVegetables(selectedProducts) {
        let totalPrice = 0.0;
 
        for (let strSequence of selectedProducts) {
            let [type, quantity] = strSequence.split(' ');
            quantity = Number(quantity);
 
            let productToBuy = this.availableProducts.find(
                (x) => x.type === type
            );
            if (!productToBuy) {
                throw new Error(
                    `${type} is not available in the store, your current bill is $${totalPrice.toFixed(
                        2
                    )}.`
                );
            }
 
            if (quantity > productToBuy.quantity) {
                throw new Error(
                    `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(
                        2
                    )}.`
                );
            }
 
            totalPrice += productToBuy.price * quantity;
            productToBuy.quantity -= quantity;
        }
 
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(
            2
        )}.`;
    }
 
    rottingVegetable(type, quantity) {
        let productToRemove = this.availableProducts.find(
            (x) => x.type === type
        );
 
        if (!productToRemove) {
            throw new Error(`${type} is not available in the store.`);
        }
 
        productToRemove.quantity -= quantity;
 
        if (productToRemove.quantity < 0) {
            productToRemove.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }
 
        return `Some quantity of the ${type} has been removed.`;
    }
 
    revision() {
        let stringArr = [];
        stringArr.push('Available vegetables:');
 
        this.availableProducts
            .sort((a, b) => a.price - b.price)
            .forEach(x => stringArr.push(`${x.type}-${x.quantity}-$${x.price}`));
 
        stringArr.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        return stringArr.join('\n');
    }
}