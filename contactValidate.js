function contactvalidate()
{
var n=document.forms["contact"]["name"].value;
var e=document.forms["contact"]["email"].value;
var m=document.forms["contact"]["message"].value;
var atsignposition=e.indexOf("@");
var periodposition=e.indexOf(".");

if(n.length<2 || m.length<2 || atsignposition<1 || periodposition<atsignposition+2 || atsignposition+2>=e.length)
{
alert("All fields must be filled out completely. Thank you :-)");
return false;
}
else
{
alert("Message sent.");
return true;
}
}