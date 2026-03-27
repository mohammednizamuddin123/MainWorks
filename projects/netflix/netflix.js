let englishText = [
    "Cancel or switch plans anytime",
     "Starts at ₹149. Cancel at any time",
     "Ready to watch? Enter your email to create or restart your membership.",
     "Cancel or switch plans anytime"
 ]
 
 let hindiText = [
     "अनलिमिटेड फ़िल्में, टीवी शो, और बहुत कुछ",
      "₹149 से शुरू होता है. कभी भी कैंसल करें.",
      "देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस डालें.",
      "कभी भी अपना प्लान कैंसल करें या बदलें"
  ]
  
 
 
 let dropdown = document.querySelector("select")
 let para = document.querySelectorAll(".switch")
 
 dropdown.addEventListener("change", ()=>{
     if(dropdown.value == "eng"){
         para.forEach((value, index)=>{
             value.textContent = englishText[index]
         })
         
        }
       
     else{
         para.forEach((value, index)=>{
             value.textContent = hindiText[index]
         })
     }
      
 })


 