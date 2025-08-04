//Yêu cầu 4:
db.users.find(
  { age: { $gt: 25 } },
  { _id: 0, name: 1, email: 1 }
)

//Yêu cầu 5:
db.users.updateOne(
  { name: "Alice" },
  { $set: { age: 31 } }
)

//Yêu cầu 6:
db.users.deleteMany(
  { age: { $lt: 20 } }
)

//Yêu cầu 7:
db.users.find().sort({ age: -1 }).limit(3)

//Yêu cầu 8:
db.users.find(
  {},
  { _id: 0, name: 1, age: 1 }
).sort({ age: -1 }).limit(3)

//Yêu cầu 9:
db.users.aggregate([
  { $group: { _id: "$age", count: { $sum: 1 } } }
])

//Yêu cầu 10:
db.users.aggregate([
  { $match: { age: { $gte: 25 } } },
  { $group: { _id: null, averageAge: { $avg: "$age" } } }
])
