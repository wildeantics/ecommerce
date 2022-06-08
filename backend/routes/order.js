const Order = require('../models/Order')
const {
  verifyTokenAndAdmin,
  verifyToken,
  verifyTokenAndAuthorization,
} = require('./verifyToken')

const router = require('express').Router()

// GET USER ORDERS
router.get('/find/:userId', verifyTokenAndAuthorization, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId })
    if (!orders) return res.status(404).json({ message: 'Order not found' })
    res.json(orders)
  } catch (err) {
    res.status(500).json(err)
  }
})
// GET ALL
router.get('/', verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find()
    res.status(200).json(orders)
  } catch (err) {
    res.status(500).json(err)
  }
})
// GET MONTHLY INCOME
router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
  const date = new Date()
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
  const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))
  try {
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: {
            $gte: prevMonth,
          },
        },
      },
      {
        $project: {
          month: {
            $month: '$createdAt',
            sales: '$amount',
          },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: '$sales' },
        },
      },
    ])
    res.status(200).json(income)
  } catch (err) {
    res.status(500).json(err)
  }
})

// UPDATE
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
      }
    )
    res.status(200).json(updatedOrder)
  } catch (err) {
    res.status(500).json(err)
  }
})

// CREATE
router.post('/', verifyToken, async (req, res) => {
  const newOrder = new Order(req.body)
  try {
    const order = await newOrder.save()
    res.status(201).json(order)
  } catch (err) {
    res.status(500).json(err)
  }
})

// DELETE
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: 'Order deleted' })
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
