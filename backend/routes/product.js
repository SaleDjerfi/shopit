const express = require('express');
const router = express.Router();

const {
  getProducts,
  getAdminProducts,
  newProduct,
  getSingleProducts,
  updateProduct,
  deleteProduct,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require('../controllers/productController');

const { isAuthenticatedUser, authoriseRoles } = require('../middlewares/auth');

router.route('/products').get(getProducts);
router.route('/admin/products').get(getAdminProducts);
router.route('/products/:id').get(getSingleProducts);

router
  .route('/admin/product/new')
  .post(isAuthenticatedUser, authoriseRoles('admin'), newProduct);

router
  .route('/admin/products/:id')
  .put(isAuthenticatedUser, authoriseRoles('admin'), updateProduct);

router
  .route('/admin/products/:id')
  .delete(isAuthenticatedUser, authoriseRoles('admin'), deleteProduct);

router.route('/review').put(isAuthenticatedUser, createProductReview);
router.route('/reviews').get(isAuthenticatedUser, getProductReviews);
router.route('/reviews').delete(isAuthenticatedUser, deleteReview);

module.exports = router;
