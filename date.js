// console.log(module);
module.exports=getDate;

function getDate(){

    let today=new Date();
    let curDay=today.getDay();
    // var darray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    // var day=darray[curDay];

    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    let day=today.toLocaleDateString("hi-IN",options);//EN-us
    return day;

}