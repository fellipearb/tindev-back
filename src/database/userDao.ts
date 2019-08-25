import app from './../index';
import { Connection, queryCallback } from 'mysql';
import { UserModel } from '../models/userModel';

class userDao {
    public constructor() { }

    public getUsers(params: UserModel, callback: queryCallback) {
        app.connection.query(`
            SELECT * FROM user
        `, callback);
    }

    public insertUser(params: UserModel, callback: queryCallback) {
        const query = app.connection.query(`
            INSERT INTO user (github_username, age, email, password) VALUES (?, ?, ?, ?);
        `, [params.github_username, params.age, params.email, params.password], callback);
        console.log(query.sql);
    }

    public likeUser(params: any, callback: queryCallback) {
        const query = app.connection.query(`
            INSERT INTO users_likes (id_user, id_user_liked, matched_at) VALUES (?, ?, NOW());
        `, [params.id_user, params.id_user_liked], callback);
        console.log(query.sql);
    }
}

export default new userDao();