const routes = [{
  method: 'post',
  controller: 'productController@add',
  path: '/product'
}, {
  method: 'get',
  controller: 'productController@find',
  path: '/product/:productId'
}, {
  method: 'get',
  controller: 'productController@findAll',
  path: '/products'
}, {
  method: 'put',
  controller: 'productController@update',
  path: '/product/:productId'
}, {
  method: 'delete',
  controller: 'productController@remove',
  path: '/product/:productId'
}];


let express = require("express");
let router = express.Router();

for (route of routes) {
  let ctl = route.controller.split('@');
  let controller = require("./../controllers/"+ctl[0]);

  router[route.method](route.path, controller[ctl[1]]);
}

module.exports = router;

