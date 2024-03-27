const express=require('express')
const {getAllProducts, getSingleProduct }=require('../Controller/productController')
const {register, login, }=require('../Controller/userController')
const {addToWishList, getWishList, removeWishListItem}=require('../Controller/wishlistController')
const { middlewareFunction } = require('../middlewares/jwtMiddleware')
const {addToCart, getCart, removeCartItem, incrementCount, decrementCount, emptyCart}=require('../Controller/cartController')





const router= new express.Router()



// get all products

router.get('/get-all-products',getAllProducts)
router.get('/single-product/:id',getSingleProduct)
router.post('/addd-new-user',register)
router.post('/login',login)
router.post('/user/add-to-wishlist',middlewareFunction,addToWishList)
router.get('/user/get-wishlist/:userId',middlewareFunction,getWishList)
router.delete('/user/delete-wishlist-item/:_id',middlewareFunction,removeWishListItem)
router.post('/user/add-to-cart',middlewareFunction,addToCart)
router.get('/user/get-cart',middlewareFunction,getCart)
router.delete('/user/delete-cart-item/:_id',middlewareFunction,removeCartItem)
router.get('/user/increment-cart/:_id',middlewareFunction,incrementCount)
router.get('/user/decrement-cart/:_id',middlewareFunction,decrementCount)
router.delete('/user/empty-cart',middlewareFunction,emptyCart)














module.exports=router