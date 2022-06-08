const Cart = require('../models/Cart')
const {
  verifyTokenAndAdmin,
  verifyToken,
  verifyTokenAndAuthorization,
} = require('./verifyToken')

const router = require('express').Router()

// GET USER CART
router.get('/find/:userId', verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId })
    if (!cart) return res.status(404).json({ message: 'Cart not found' })
    res.json(cart)
  } catch (err) {
    res.status(500).json(err)
  }
})
// GET ALL
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find()
    res.status(200).json(carts)
  } catch (err) {
    res.status(500).json(err)
  }
})

// UPDATE
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
      }
    )
    res.status(200).json(updatedCart)
  } catch (err) {
    res.status(500).json(err)
  }
})

// CREATE
router.post('/', verifyToken, async (req, res) => {
  const newCart = new Cart(req.body)
  try {
    const cart = await newCart.save()
    res.status(201).json(cart)
  } catch (err) {
    res.status(500).json(err)
  }
})

// DELETE
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: 'Cart deleted' })
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
