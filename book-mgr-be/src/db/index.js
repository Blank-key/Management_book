const mongoose = require('mongoose');

//1、给哪个数据库的
//2、哪个集合
//3、添加什么格式的文档

//Schema 映射了MongoDB下的一个集合，并且它的内容就是集合下文档的构成
//Modal 可以理解成时根据Schema生成的一套方法，这套方法用来操作mongodb下的集合以及集合下的文档

const UserSchema = new mongoose.Schema({
    nickname:String,
    password:String,
    age:Number
})

const UserModal = mongoose.model('User',UserSchema);

const connect = () => {
    //去连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');

    //数据库打开时做的事情
    mongoose.connection.on('open',()=>{
        console.log('连接成功');

        //创建文档
        const user = new UserModal({
            nickname:'Swy',
            password:'123456',
            age:23
        });

        user.age = 18;
        //保存 同步到MongoDB数据库
        user.save();

        console.log('123');

    });
};

connect();