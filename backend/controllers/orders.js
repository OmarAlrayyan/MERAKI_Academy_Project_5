const pool = require("../models/db");

const createNewOrder = (req,res) => {
    const requester_user_id = req.token.userId
    console.log("ssss1",requester_user_id);
    const {schedule_date,order_desc,receiver_user_id} = req.body
    const data = [schedule_date || null, order_desc || null, requester_user_id || null,receiver_user_id||null,"1"]
    const query=`INSERT INTO orders (schedule_date, order_desc, requester_user_id,receiver_user_id, state_id) VALUES($1,$2,$3,$4,$5) RETURNING *;`
    pool
    .query(query,data)
    .then((result) => {
        res.status(200).json({
          success: true,
          message: "new order created",
          order: result.rows
        });
      })
      .catch((err) => {
        res.status(409).json({
          success: false,
          message: "server error",
          err:err.message,
        });
        console.log(err.message);
      });
}

module.exports = {
    createNewOrder,
}