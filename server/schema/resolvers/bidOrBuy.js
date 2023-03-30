const { AuthenticationError, ApolloError } = require('apollo-server-express');
const { response } = require('express');
const { BidOrBuy, Products } = require('../../models');

const bid = (product, highestOfferMade, currentOffer) =>{
    const lastOffer = (highestOfferMade) ? highestOfferMade.price : product.price;
    const saleEndTime = new Date(product.saleEndTime);
    return (lastOffer < currentOffer && saleEndTime > new Date())
}

const buyOut = (product, highestOfferMade, currentOffer) =>{
    const saleEndTime = new Date(product.saleEndTime);
    let response = true;
    if(saleEndTime < new Date()){
        throw new ApolloError('Item nolonger for sale!')
        response = false
    }
    if(highestOfferMade){
        throw new ApolloError('This item is sold already!')
        response = false
    }
    if(product.price != currentOffer ){
        throw new ApolloError('This is a buy out price cannot be lower or higer than listed price!')
        response = false
    }
    return response
}

const bidOrBuyResolver = {

  Mutation: {
    offer: async (parent, { productId, price }, context) => {
        if(context.user){
            const offerBy = context.user._id;

            const product = await Products.findById(productId);
            const highestBid = await BidOrBuy.findOne({productId: productId}).sort({price: 'desc'});
            const isValidOffer = (product.saleType == 'bid') ? bid(product, highestBid, price) : buyOut(product, highestBid, price);
            if(isValidOffer){
                const currentOffer = await(await (await BidOrBuy.create({ productId, price, offerBy})).populate({
                    path: 'productId',
                    populate: [{
                        path: 'category',
                        select: ['id', 'name']
                    },{
                        path: 'createdBy',
                        select: ['id', 'email', 'name']
                    }]
                })).populate('offerBy');

                return currentOffer;
            }else{
                throw new ApolloError('Unacceptable bid!')
            }
        }
        throw new AuthenticationError('Not logged in');
    }
  },
};

module.exports = bidOrBuyResolver;
