import { studentsRepositories } from "../repositories/index.js";
async function getAllStudents(req, res) {
  res.status(200).json({
    messae: "Hello",
    data: [
      {
        name: "Nghe Si Tin",
        age: "20",
        email: "nghesitin@gmail.com",
      },
      {
        name: "Captain Cold",
        age: "20",
        email: "cold@gmail.com",
      },
    ],
  });
  // res.status(500).json({ message: "Error" });
}

async function getStudentById(req, res) {}
async function updateStudent(req, res) {}
async function insertStudent(req, res) {}

export default { getAllStudents, getStudentById, updateStudent, insertStudent };
