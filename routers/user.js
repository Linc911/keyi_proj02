var express = require("express");
var _ = require("lodash");
var crypto = require("crypto");
var user = require("../models/user.js");
var router = express.Router();

const secret = "hwn";
router.all("/login", function (req, res, next) {
  user.find(req.query["username"], (err, data) => {
    if (err) {
      next(err)
    } else {
      if (data.length) {
        var pw = crypto.createHmac("sha256", secret).update(req.query["password"]).digest("hex")
        if (data[0].password == pw) {
          res.json({
            msg:"success",
            status:"200",
            data:[]
          })
          
        } else {
          res.send("密码错误")
        }
      } else {
        res.send("用户名不存在")
      }
      // res.send(JSON.stringify({
      //   data:data,
      // }))
    }

  })
});
router.get("/add/:user/:pd", function (req, res, next) {
  
  // const hash = crypto.createHmac('sha256', secret).digest('hex');
  user.add({
    name: req.params["user"],
    password: crypto.createHmac("sha256", secret).update(req.params["pd"]).digest("hex")
  }, (err, data) => {
    if (err) {
      next(err)
    } else {
      res.send(JSON.stringify({
        data: data,
      }))
    }

  })
});
router.get("/remove/:name", function (req, res) {
  user.removeByCond({
    name: req.params['name'],
  }, (err, data) => {
    res.send(JSON.stringify({
      data: data,
    }))
  })
});
router.get("/clear", function (req, res) {
  user.removeByCond({}, (err, data) => {
    res.send(JSON.stringify({
      data: data,
    }))
  })
});
router.get("/removeById", function (req, res) {
  user.removeById(req.query.id, (err, data) => {
    res.send(JSON.stringify({
      data: data,
    }))
  })
});
router.get("/list", function (req, res) {
  user.list({}, (err, data) => {
    res.send(JSON.stringify({
      data: data,
    }))
  })
});
module.exports = router;