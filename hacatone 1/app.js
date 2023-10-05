
 
import { signinFirebase,postAdToDB,detailindb,uploadImage,getAdsFromDB,getclassFromDB,showstudentdetail,getstudentdetail} from "./firebase.js";

 window.signin =async function(){
var email=document.getElementById('email').value
var password=document.getElementById('password').value
    try {
        await signinFirebase(email,password)
        alert("loggined Successfully")
        location.href=('classform.html')


    } catch (e) {
        alert(e.message)
    }
}









window.postAd = async function(){
    var classtimings=document.getElementById('classtiming').value
     var  scedofclass=document.getElementById('scedofclass').value
      var  teachersname=document.getElementById('teachername').value
        var sectionname=document.getElementById('sectionname').value
        var coursename=document.getElementById('coursename').value
    var batchnumber=document.getElementById('batchnumber').value

    try {
 
       await postAdToDB(classtimings,scedofclass,teachersname,sectionname,coursename,batchnumber)
       alert("Ad Posted Successfully")
       location.href=('student.html')
        
    } catch (e) {
        alert(e.message)
    }
   
}


window.detailindb =async function (){
    var studentname=document.getElementById('studentname').value
    var fathername=document.getElementById('fathername').value
    var contactnumber=document.getElementById('contactnumber').value
    var cnic=document.getElementById('cnic').value
    var rollnumber=document.getElementById('rollnumber').value
    var image1=document.getElementById('image').files[0]



    
    try {
        const image = await uploadImage(image1)
        await detailindb (studentname,fathername,contactnumber,cnic,rollnumber,image)
        alert("Submit Successfully")
     
        location.href=('card.html')
          
  }
        
       
        
        
        catch (e) {
            alert(e.message)
        }
   }
   



   window.getAds=async function (){
    const stads = await getAdsFromDB()
    var studentname=document.getElementById('studentname2')
    var fathername=document.getElementById('fathername')
    var cnic=document.getElementById('cnic')
    var contactnumber=document.getElementById('contactnumber')
    var rollnumber=document.getElementById('rollnumber')
   
    var input=document.getElementById('input').value
    input=""
     
     Object.keys(stads).forEach(keys=>{
    
        if (document.getElementById('input').value===stads[keys].rollnumber){
    studentname.innerHTML+=stads[keys].studentname
    fathername.innerHTML+=stads[keys].fathername
    cnic.innerHTML+=stads[keys].cnic
    document.getElementById('card-img').setAttribute('src',stads[keys].image)
    contactnumber.innerHTML+=stads[keys].contactnumber
    rollnumber.innerHTML+=stads[keys].rollnumber
          
        }
          
    
      
      
      

   
    
            console.log(stads)
    
        //    return stads
           
        }  )

       
    
  }

    


           

         









 async function gettechers(){
    var select=document.getElementById('Select')
     var option=document.createElement('option')
     
   
    const ads = await getclassFromDB()
    Object.keys(ads)  .forEach
    (keys=>{option.innerHTML+= ads[keys].teachersname
        option.setAttribute('value',ads.teachersname)
      
   
       console.log(ads)
       select.appendChild(option)
   })}
    
    


gettechers()




window.present=async function(){
   
   
//    location.href=("detail.html")
   var studentname=document.getElementById('studentname2').innerText
   var fathername=document.getElementById('fathername').innerText
   var cnic=document.getElementById('cnic').innerText
   var contactnumber=document.getElementById('contactnumber').innerText
   var rollnumber=document.getElementById('rollnumber').innerText
   console.log(studentname)
   console.log(fathername)
   console.log(cnic)
   console.log(contactnumber)


  
   try {
  
    await showstudentdetail (studentname,fathername,contactnumber,cnic,rollnumber)
    alert("mark attendence sussesfully")


    location.href=('detail.html')
 

      
}
    
   
    
    
    catch (e) {
        alert(e.message)
    }
}











window.showdetail=async function () {
    // var studentname=document.getElementById('studentname2').value
    // console.log(studentname)
    var studentdetail=document.getElementById('studentname-detail')
    var fathername=document.getElementById('father-detail')
    var  contactnumber=document.getElementById('contactnumber-detail')
    var cnic= document.getElementById('Cnic-detail')
    var rollnumber=document.getElementById('rollnumber-detail')
   
     const studentads= await getstudentdetail ()
     console.log(studentads)
      Object.keys(studentads).forEach(keys=>{
if (document.getElementById('detail-input').value===studentads[keys].rollnumber){
   studentdetail.innerHTML+=studentads[keys].studentname
   fathername.innerHTML+=studentads[keys].fathername
   contactnumber.innerHTML+=studentads[keys].contactnumber
   cnic.innerHTML+=studentads[keys].cnic
   rollnumber.innerHTML+=studentads[keys].rollnumber




}

      })
    
}
