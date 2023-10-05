






  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
  import { getFirestore, setDoc, doc, addDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
  import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
 
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC1jYiH0128uax6MhrGR67fqaWEJa0QxOY",
    authDomain: "hacatone-task.firebaseapp.com",
    projectId: "hacatone-task",
    storageBucket: "hacatone-task.appspot.com",
    messagingSenderId: "798874786052",
    appId: "1:798874786052:web:245dee48f0295d1aa2d851",
    measurementId: "G-G630HS6BEJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);











function signinFirebase(loginEmail, loginPassword) {
    return signInWithEmailAndPassword(auth, loginEmail, loginPassword)

}




function postAdToDB(classtimings,scedofclass,teachersname,sectionname,coursename,batchnumber) {

  return addDoc(collection(db, "classes"), {
      classtimings: classtimings,
      scedofclass: scedofclass,
      teachersname: teachersname,
      sectionname: sectionname,
      coursename:coursename,
      batchnumber:batchnumber
  }
  );

}
async function uploadImage(image) {
 
  const imagesRef = ref(storage, 'images/{image.name}');
  const snapshot = await uploadBytes(imagesRef, image)
  const url = getDownloadURL(snapshot.ref)
  return url
}


function detailindb(studentname,fathername,contactnumber,cnic,rollnumber,image) {

  return setDoc(doc(db, "stdetail",rollnumber)  , {
    studentname:studentname,
    fathername:fathername,
    contactnumber:contactnumber,
    cnic:cnic,
    rollnumber:rollnumber,
     image:image
  }
  );

}


async function getAdsFromDB() {
  
  const querySnapshot = await getDocs(collection(db, "stdetail"));
  const stads = []
  querySnapshot.forEach((doc) => {
      stads.push({id : doc.id, ...doc.data()})
      
  });
  console.log(stads)
  return stads;
}

async function getclassFromDB() {
  
  const querySnapshot = await getDocs(collection(db, "classes"));
  const ads = []
  querySnapshot.forEach((doc) => {
      ads.push({id : doc.id, ...doc.data()})
      
  });
  console.log(ads)
  return ads;
}











function showstudentdetail(studentname,fathername,contactnumber,cnic,rollnumber) {

  return setDoc(doc(db, "stdetailindb",rollnumber)  , {
    studentname:studentname,
    fathername:fathername,
    contactnumber:contactnumber,
    cnic:cnic,
    rollnumber:rollnumber,
    
  }
  );

}





async function getstudentdetail() {
  
  const querySnapshot = await getDocs(collection(db, "stdetailindb"));
  const detailads = []
  querySnapshot.forEach((doc) => {
      detailads.push({id : doc.id, ...doc.data()})
      
  });
  console.log(detailads)
  return detailads;
}








export {
   
    signinFirebase,
    postAdToDB,
    detailindb,
    uploadImage,
    getAdsFromDB,
    getclassFromDB,
    showstudentdetail,
    getstudentdetail
}

