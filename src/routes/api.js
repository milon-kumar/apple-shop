import express from "express"
import {
    BrandList,
    CategoryList,
    CartList,
    CreateCart, CreateWishProduct, ListByBrandProduct,
    ListByCategoryProduct,
    ListByKeywordProduct,
    ListByRemarkProduct, ListByReviewProduct, ListBySmilierProduct, ListWishProduct,
    ProductDetails,
    RemoveCart, RemoveWishProduct,
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
router.get('/cart-list',CartList);
router.post('/create-cart',CreateCart);
router.get('/remove-cart',RemoveCart);
router.get('/wishlist-product',ListWishProduct);
router.get('/wish-create-product',CreateWishProduct);
router.get('/wish-remove-product/:id',RemoveWishProduct);

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