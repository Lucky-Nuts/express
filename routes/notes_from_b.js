var express = require('express');
var router = express.Router();
const cors = require('cors'); // corsミドルウェアを追加
//このリクエストは9行目の別ファイルの設定のために必要なライブラリの呼び出し
require('dotenv').config(); //利用するためには、先にインストールが必要

// 接続情報を設定
const { MongoClient } = require("mongodb");
const uri = process.env.MONGODB_URI; //別ファイルでMongoDBへのURI設定が必要
//直接URIを入力する事でも解決可能。正しサーバアップデートは要注意！
//const uri = "mongodb+srv://lucky-nuts:yfd2JqggeKbfqnz3@test.wjten.mongodb.net/?retryWrites=true&w=majority&appName=test";
const client = new MongoClient(uri);

// corsミドルウェアを使用
router.use(cors());

router.get('/', async (req, res) => {
// データベース、コレクションを指定
const database = client.db('notes');
const notes = database.collection('notes');


// 全てのドキュメントを取得
const note = await notes.find({}).toArray();

res.json(note);
})

module.exports = router;