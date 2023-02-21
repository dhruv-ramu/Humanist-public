/**
 * @param {import("next").NextApiRequest req}
 * @param {import("next").NextApiResponse res}
 *
 */
const Razorpay = require("razorpay");
export default function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({
      message: "Only POST requests are allowed on this route.",
    });
  const { amount } = req.body;
  const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
  const { id } = razorpay.orders.create({
    amount: parseInt(amount) * 100,
    currency: "INR",
    partial_payment: false,
    notes: req.body,
  });
  return res.status(200).json({
    orderId: id,
  });
}
