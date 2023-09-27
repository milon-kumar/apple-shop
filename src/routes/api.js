import express from "express"
import {
    BrandList,
    CategoryList,
    ListByBrandProduct,
    ListByCategoryProduct,
    ListByKeywordProduct,
    ListByRemarkProduct, ListByReviewProduct, ListBySmilierProduct,
    ProductDetails,
    SliderList
} from "../controllers/ProductController.js";
import {UserLogin,VerifyUser,UserLogout} from "../controllers/UserController.js";
import {ReadProfile,CreateProfile, UpdateProfile } from "../controllers/ProfileController.js";
import {
    InvoiceCreate,
    InvoiceList,
    InvoiceProductList,
    PaymentCancel,
    PaymentFail, PaymentIpn,
    PaymentSuccess
} from "../controllers/InvoiceController.js";
import { CartList,CreateCart,RemoveCart } from "../controllers/CartController.js";
import { WishList,CreateWish,RemoveWish } from "../controllers/WishController.js";
import AuthVerification from "../middlewares/AuthVerification.js";
const router = express.Router();

router.get('/brand-list',BrandList);
router.get('/category-list',CategoryList);

router.get('/slider-list',SliderList);
router.get('/list-by-category/:slug',ListByCategoryProduct);
router.get('/list-by-brand/:slug',ListByBrandProduct);
router.get('/list-by-keyword',ListByKeywordProduct);
router.get('/list-by-smilier/:slug',ListBySmilierProduct);
router.get('/list-by-review',ListByReviewProduct);
router.get('/list-by-remark/:remark',ListByRemarkProduct);
router.get('/product-details/:slug',ProductDetails);

router.get('/cart-list',AuthVerification,CartList);
router.post('/create-cart',AuthVerification,CreateCart);
router.get('/remove-cart/:id',AuthVerification,RemoveCart);

router.get('/wishlist-product',AuthVerification,WishList);
router.post('/wish-create-product',AuthVerification,CreateWish);
router.get('/wish-remove-product/:id',AuthVerification,RemoveWish);

router.get('/login-user/:email',UserLogin);
router.get('/user-verify/:email/:otp',VerifyUser);
router.get('/logout-user',AuthVerification,UserLogout);

router.post('/create-profile',AuthVerification,CreateProfile);
router.get('/read-profile',AuthVerification,ReadProfile);
router.post('/update-profile',AuthVerification,UpdateProfile);

router.post('/invoice-create',AuthVerification,InvoiceCreate);
router.get('/invoice-list',AuthVerification,InvoiceList);
router.get('/invoice-product-list',AuthVerification,InvoiceProductList);

router.get('/payment-success',PaymentSuccess);
router.get('/payment-cancel',PaymentCancel);
router.get('/payment-fail',PaymentFail);
router.get('/payment-ipn',PaymentIpn);

export default  router;