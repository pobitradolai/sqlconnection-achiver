const db = require('../db/dbConn');
const common = require('../services/commonService');

module.exports.addCourse = (data) => {
	return new Promise((resolve, reject) => {
		try {
            console.log(data)
			var sql 	="INSERT INTO `course`(`courseCode`, `courseName`, `courseDuration`, `certificateAvailable`, `courseDescription`, `fileName`) VALUES ('"+data.courseCode+"','"+data.courseName+"','"+data.courseDuration+"','"+data.certificateAvailable+"','"+data.courseDescription+"','"+data.fileName+"')";
			db.connection.query(sql,function (err, success){
                if (err) {
                    resolve(common.errorResolve(err))
                } else {
                    console.log(success)
                    resolve(success)
                }
            });
		} catch (e) {
			console.log(e);
			resolve('500');
		}
	});
}
//
//
module.exports.allcourse  = (data) => {
	return new Promise((resolve, reject) => {
		try {
            console.log(data)
			var sql 	=	"SELECT * FROM `course` WHERE `is_delete`=0";
			db.connection.query(sql,async function (err, success){
                if (err) {
                    resolve(common.errorResolve(err))
                } else {
                    resolve(success)
                }
            });
		} catch (e) {
			console.log(e);
			resolve('500');
		}
	});
}

//
module.exports.courseDetails = (data) => {
	return new Promise((resolve, reject) => {
		try {
            console.log(data)
			var sql 	=	"select * from course where id='"+data.id+"' AND is_delete=0";
			db.connection.query(sql,async function (err, success){
                if (err) {
                    resolve(common.errorResolve(err))
                } else {
                    resolve(success)
                }
            });
		} catch (e) {
			console.log(e);
			resolve('500');
		}
	});
}
//
//
module.exports.courseDelete = (data) => {
	return new Promise((resolve, reject) => {
		try {
            console.log(data)
			var sql 	=	"UPDATE `course` SET `is_delete`='1' WHERE id='"+data.id+"'";
			console.log(sql)
			db.connection.query(sql,async function (err, success){
                if (err) {
                    resolve(common.errorResolve(err))
                } else {
                    resolve(success)
                }
            });
		} catch (e) {
			console.log(e);
			resolve('500');
		}
	});
}
//
module.exports.courseUpdate = (data) => {
	return new Promise((resolve, reject) => {
		try {
            console.log(data)
			var sql 	=	"UPDATE `course` SET `courseCode`='"+data.courseCode+"',`courseName`='"+data.courseName+"',`courseDuration`='"+data.courseDuration+"',`certificateAvailable`='"+data.certificateAvailable+"',`courseDescription`='"+data.courseDescription+"',`fileName`='"+data.fileName+"' WHERE `id`='"+data.id+"' AND `is_delete`=0";
			console.log(sql)
			db.connection.query(sql,async function (err, success){
                if (err) {
                    resolve(common.errorResolve(err))
                } else {
                    resolve(success)
                }
            });
		} catch (e) {
			console.log(e);
			resolve('500');
		}
	});
}
