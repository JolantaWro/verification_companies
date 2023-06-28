const router = require("express").Router();
const authorization = require("../middleware/authorization");
const pool = require("../db");


//all company and name

router.get("/", authorization, async (req, res) => {
  try {

    //req.user has the payload
    const user = await pool.query(
      "SELECT u.user_name, c.company_name, c.company_id,c.company_nip, c.company_krs, date_verification, type_company  FROM users AS u LEFT JOIN companytableapi AS c ON u.user_id = c.user_id WHERE u.user_id = $1",
      [req.user.id]
    );

    // console.log(user.rows)

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
    const { name, nip, krs, date, mark } = req.body;
    const newCompany = await pool.query(
      "INSERT INTO companytableapi (user_id, company_name, company_nip, company_krs, date_verification, type_company) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [req.user.id, name, nip, krs, date, mark]
    );

    res.json(newCompany.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});



router.put("/company/:id", authorization, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, nip, krs, date, mark } = req.body;
    const updateCompany = await pool.query(
      "UPDATE companytableapi SET company_name = $1, company_nip = $2, company_krs = $3, date_verification = $4, type_company = $5 WHERE company_id = $6 AND user_id = $7 RETURNING *",
      [name, nip, krs, date, mark, id, req.user.id]
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
      "DELETE FROM companytableapi WHERE company_id = $1 AND user_id = $2 RETURNING *",
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