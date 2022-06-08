const router = require('express').Router()
const stripe = require('stripe')(process.env.STRIPE_KEY)

router.post('/payment', async (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: 'aud',
    },
    (err, charge) => {
      if (err) {
        return res.status(500).json(err)
      } else {
        return res.status(200).json(charge)
      }
    }
  )
})

module.exports = router
