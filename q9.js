const mysql = require("nodejs-mysql").default;

const conn = {
  host: "localhost",
  user: "root",
  password: "",
  database: "employeedb",
};

const db = mysql.getInstance(conn);

db.connect()
  .then(() => {
    console.log(`Connected!!`);

    var sql =
      "INSERT INTO employeetb (empid,empname,joinDate) VALUES (74,'Jay','27-06-2002')";
    console.log("Record Inserted!!");
    return db.exec(sql);
  })

  .then((display) => {
    // var sqlDisplay = "SELECT * FROM employeetb";
    // console.log(display);
    return db.exec("SELECT * FROM employeetb");
  })

  .then((result) => {
    console.log("Employee Name \t Date of Join");
    for (var i in result) {
      console.log(result[i].empname + " \t\t " + result[i].joinDate);
    }
  })

  .catch((err) => {
    console.log("Error: " + err);
    process.exit(0);
  });
