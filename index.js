const mongo = require('mongoose');

mongo.connect('mongodb://localhost:27017/smple',{useNewUrlParser:true}).then(()=>{
    console.log('Successful');
}).catch(()=>{
    console.log("Not");
})

const student = new mongo.Schema({
    name:{type:String},
    class:{type:Number}
});

const Student = new mongo.model("Student",student);

const add = async ()=>{
    const ss = await Student.create({
        name:"AntariP",
        class:8
    });
    
};

add();