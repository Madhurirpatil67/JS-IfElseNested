let msg=undefined;
let marks=76;

if((marks > 0) && (marks<=100) )
{
    if(marks >= 35 && marks < 50)
        msg="pass";
        else if(marks >= 50 && marks < 65)
            msg="second class"; 
          else if(marks >= 65 && marks < 75)
            msg="First class"; 
            else if(marks >= 75 && marks <=100)
                msg="Distinction"; 
                else
                 msg="Fail";
}
else
    console.log("Enter marks between 0 to 100");

console.log("Grade : "+msg);    