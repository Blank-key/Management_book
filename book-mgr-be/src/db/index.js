require('./Schemas/User')

const mongoose = require('mongoose');

//1、给哪个数据库的
//2、哪个集合
//3、添加什么格式的文档

//Schema 映射了MongoDB下的一个集合，并且它的内容就是集合下文档的构成
//Modal 可以理解成时根据Schema生成的一套方法，这套方法用来操作mongodb下的集合以及集合下的文档



const connect = () => {

    return new Promise((resolve) => {
        //去连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');

    //数据库打开时做的事情
    mongoose.connection.on('open',()=>{
        console.log('连接数据库成功');

        resolve();
    });
    })

};

module.exports = {
    connect,
}