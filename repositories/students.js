async function getAllStudents({ page, size, searchString }) {
  return console.log("Get all students with paging");
}

async function insertStudent({
  name,
  email,
  languages,
  gender,
  phoneNumber,
  address,
}) {
  return console.log("Insert Student");
}
export default {
  getAllStudents,
  insertStudent,
};
