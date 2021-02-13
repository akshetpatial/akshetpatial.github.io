function gettime()
    {
        time= new Date();
       var date= time.getHours()+':'+time.getMinutes()+':'+time.getSeconds();
        document.getElementById("time").innerHTML=date;
    }
    setInterval(gettime,1000);
function opennav()
{
    document.getElementById("open").style.display="none";
    document.getElementById("navlist").style.width="100%";
}
function closenav()
{
    
    document.getElementById("open").style.display="block";
    document.getElementById("navlist").style.width="0";
}

//     function show()
//     {
//       let para=document.getElementById("para");
//       if(para.style.display!="none")
//       {
//           para.style.display="none";
//       }
//       else{
//           para.style.display="block"
//       }
//   }

