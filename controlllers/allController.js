import { blogsPool as pool } from "../postgresDB.js";

export const homePageController = (req, res) => {
  res.send(
    `<h1 style="color:blue; text-align:center; font-family:verdana;">Welcome to my Rapid API's Home Page 👋</h1>`
  );
};

export const getAllBlogsController = async (req, res, next) => {
  try {
    const { rows } = await pool.query("SELECT * FROM blogs");
    res.status(200).json(rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const pageNotFoundController = (req, res) => {
  res.send(
    `<h1 style="color:blue; text-align:center; font-family:verdana; font-size:6.4rem">🙃404🙃</h1>`
  );
};
