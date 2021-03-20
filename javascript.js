function gettime()
    {
        var time= new Date();
        var hour = time.getHours();
        var tm="AM";
        if(hour > 12)
        {
            hour=hour-12;
            tm="PM"
        }
        var sep=":";
        if(time.getSeconds()%2===0)
        {
            sep=" ";
        }
        var date= hour+sep+time.getMinutes()+sep+time.getSeconds()+" "+tm;
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
function story1(val)
{
    var text="";
    if(val==1)
    {
        text+="This photo is just an edited version of myself was Trying to give it a cartoonish look.";
    }
    else if(val==2)
    {
        text+="This was not a photo actually, it was a video but managed to find a good still.";
    }
    else if(val==3)
    {
        text+="Same goes with this. By the way he is a pet dog , a very active and lovable companion.";
    }
    else if(val==4)
    {
        text+="This is my neighbour's dog.";
    }
    else if(val==5)
    {
        text+=`This is one of the member of dog's squad of my street in total there are 5 dogs. They attack
        in groups so don't dare to roam around in my street with a loud scilencer bike or in high speed. They can 
        ruin your plan and can make your day worse`;
    }
    else 
    {
        text+="I met this dog when I visited my village. He is my neighbour's dog. Very calm and fun loving";
    }
    document.getElementById("story").innerHTML=text;
}
// function story1();
// setInterval(change,2000);
// var index=0;
// var ind=index+1;
// var img=["images/Aks.jpg","images/dog1.jpg","images/dog2.jpg","images/dog3.jpg","images/dog4.jpg","images/dog5.jpg"]
// function change()
// {

//     story1(ind)
// {
//     var text="";
//     if(ind==1)
//     {
//         text+="This photo is just an edited version of myself was Trying to give it a cartoonish look.";
//     }
//     else if(ind==2)
//     {
//         text+="This was not a photo actually, it was a video but managed to find a good still.";
//     }
//     else if(ind==3)
//     {
//         text+="Same goes with this. By the way he is a pet dog , a very active and lovable companion.";
//     }
//     else if(ind==4)
//     {
//         text+="This is my neighbour's dog.";
//     }
//     else if(ind==5)
//     {
//         text+=`This is one of the member of dog's squad of my street in total there are 5 dogs. They attack
//         in groups so don't dare to roam around in my street with a loud scilencer bike or in high speed. They can 
//         ruin your plan and can make your day worse`;
//     }
//     else 
//     {
//         text+="I met this dog when I visited my village. He is my neighbour's dog. Very calm and fun loving";
//     }
//     document.getElementById("story").innerHTML=text;
// }
//     if(index==img.length)
//     {
//         index=0;
//     }
//     else{
//         document.getElementById("chg").src=img[index];
//         index++;
//     }
// }
// document.getElementById("open").style.display="block";
// document.getElementById("navlist").style.width="0";

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

document.getElementById("submit");
document.addEventListener("submit",subfuc);

function subfuc(event)
{
    event.preventDefault();
    alert("your form is submited!")
    console.log("you have succesfully submited the form well done!");
// var ok= document.getElementsByClassName("td");
// if(ok.value==="")
// {
//     alert("PLease Enter some Value");
//     return;
// }
}