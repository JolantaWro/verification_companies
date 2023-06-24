const router = require("express").Router();
const authorization = require("../middleware/authorization");
const pool = require("../db");


//all company and name

router.get("/", authorization, async (req, res) => {
  try {

    //req.user has the payload
    const user = await pool.query(
      "SELECT u.user_name, c.company_id FROM users AS u LEFT JOIN companys AS c ON u.user_id = c.user_id WHERE u.user_id = $1",
      [req.user.id]
    );

    res.json(user.rows);
    // res.json(req.user)
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});



module.exports = router;