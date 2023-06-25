const router = require("express").Router();
const authorization = require("../middleware/authorization");
const pool = require("../db");


//all company and name

router.get("/", authorization, async (req, res) => {
  try {

    //req.user has the payload
    const user = await pool.query(
      "SELECT u.user_name, c.company_name FROM users AS u LEFT JOIN companytable AS c ON u.user_id = c.user_id WHERE u.user_id = $1",
      [req.user.id]
    );

    res.json(user.rows);
    // res.json(req.user)
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/company", authorization, async (req, res) => {
  try {
    console.log(req.body);
    const { company_name, company_nip, company_krs } = req.body;
    const newCompany = await pool.query(
      "INSERT INTO companytable (user_id, company_name, company_nip, company_krs) VALUES ($1, $2, $3, $4) RETURNING *",
      [req.user.id, company_name, company_nip, company_krs]
    );

    res.json(newCompany.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

router.put("/company/:id", authorization, async (req, res) => {
  try {
    const { id } = req.params;
    const { company_name, company_nip, company_krs } = req.body;
    const updateCompany = await pool.query(
      "UPDATE companytable SET company_name = $1, company_nip = $2, company_krs = $3  WHERE company_id = $4 AND user_id = $5 RETURNING *",
      [company_name, company_nip, company_krs, id, req.user.id]
    );

    if (updateCompany.rows.length === 0) {
      return res.json("This is problem ");
    }

    res.json("Company was updated");
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/company/:id", authorization, async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCompany = await pool.query(
      "DELETE FROM companytable WHERE company_id = $1 AND user_id = $2 RETURNING *",
      [id, req.user.id]
    );

    if (deleteCompany.rows.length === 0) {
      return res.json("This Company is not yours - problem");
    }

    res.json("Company was deleted");
  } catch (err) {
    console.error(err.message);
  }
});


module.exports = router;