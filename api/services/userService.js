const { getDB } = require('../config/db');

const getUserById = async (userId) => {
    const db = getDB();
    return await db.collection('userList').findOne({ _id: userId });
};

const updateUser = async (userId, updatedData) => {
    const db = getDB();
    await db.collection('userList').updateOne({ _id: userId }, { $set: updatedData });
    return await getUserById(userId);
};

module.exports = { getUserById, updateUser };