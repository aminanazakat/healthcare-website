const manBody = document.querySelector(".work");
const womanBody = document.querySelector(".work");
const womanSkin = document.querySelector(".work");
const manHair = document.querySelector(".work");
const manSkin = document.querySelector(".work");
const arr=[
{
    id:01,
    title:"Say Goodbye to Your Cravings Today",
    Desc:"Dieting sucks, leaving you a hangry mess. GLP-1 gives your brain a good talking to, letting it know when you’re full, so you never indulge unnecessarilly again",
    path:"../1.body.jpg",
    type:"male-body",
},
{
    id:02,
    title:"No Insurance required, Fast order processing",
    Desc:"Are you tired of waiting for your insurance to approve your GLP1 treatment? We understand how frustrating that can be. That’s why we offer a cash payment option that will get you the treatment you need in just a few days.",
    path:"../2.body.jpg",
   type:"male-body",
},
{
    id:03,
    title:"Lose Weight.Win Health",
    Desc:"GLP-1 is a breakthrough drug that does more than suppress your appetite to conquer cravings it proactively lowers blood sugar, promotes cardiovascular health, and lowers",
    path:"./3.body.jpg",
   type:"male-body",
},
{
    id:04,
    title:"No Jitters Only Results",
    Desc:"GLP1 works on your brain and does not cause any jitters, racing heart, or cause any sleep issues, unlike most other weight-loss drugs and supplements on the market today",
    path:"./4.body.jpg",
   type:"male-body",
},
{
    id:01,
    title:"Personalized For Your Skin",
    Desc:"A combination of evidence-based prescription ingredients carefully chosen by our doctor to address all your skin concerns, at a strength that is right for you.",
    path:"./1.skin.jpg",
    type:"male-skin",
},
{
    id:02,
    title:"Your Clear Skin Prescription",
    Desc:"Our unique acne formula features Spironolactone to combat hormonal acne, Tretinoin to open up pores, Clindamycin wipes out acne-forming bacteria. You won’t find this formula anywhere else. ",
    path:"./2.skin.jpg",
   type:"male-skin",
},
{
    id:03,
    title:"Personalised Anti-Aging Treatments",
    Desc:"Our personalized options are designed to improve skin barrier function, encourage cell turnover and lessen the appearance of premature aging.",
    path:"./3.skin.jpg",
   type:"male-skin",
},
{
    id:01,
    title:"Side Effects? Who Needs Them",
    Desc:"Our formula contains 0.025% topical Finasteride, which in recent studies has shown to reduce scalp DHT without unwanted sexual side effects.",
    path:"./1.hair.jpg",
    type:"male-hair",
},
{
    id:02,
    title:"Unique Formula Won’t Find It Anywhere.",
    Desc:"Our unique formula is enhanced with progesterone, a natural growth hair stimulator that further inhibits DHT in the scalp",
    path:"./2.hair.jpg",
   type:"male-hair",
},
{
    id:03,
    title:"Topical Anti-Androgens And Growth Boosters",
    Desc:"We added topical Spironolactone to address testosterone in the scalp and Minoxidil mixed with Retinoic Acid for boosted growth.",
    path:"./3.hair.jpg",
   type:"male-hair",
},
{
    id:01,
    title:"Say Goodbye to Your Cravings Today",
    Desc:"Dieting sucks, leaving you a hangry mess. GLP-1 gives your brain a good talking to, letting it know when you’re full, so you never indulge unnecessarilly again",
    path:"./1.f-body.jpg",
    type:"female-body",
},
{
    id:02,
    title:"Say Goodbye to Your Cravings Today",
    Desc:"Dieting sucks, leaving you a hangry mess. GLP-1 gives your brain a good talking to, letting it know when you’re full, so you never indulge unnecessarilly again",
    Image:"./2.f-body.jpg",
   type:"female-body",
},
{
    id:03,
    title:"Say Goodbye to Your Cravings Today",
    Desc:"Dieting sucks, leaving you a hangry mess. GLP-1 gives your brain a good talking to, letting it know when you’re full, so you never indulge unnecessarilly again",
    path:"./3.f-body.jpg",
   type:"female-body",
},
{
    id:04,
    title:"Say Goodbye to Your Cravings Today",
    Desc:"Dieting sucks, leaving you a hangry mess. GLP-1 gives your brain a good talking to, letting it know when you’re full, so you never indulge unnecessarilly again",
    path:"./4.f-body.jpg",
   type:"female-body",
},
{
    id:01,
    title:"",
    Desc:"",
    path:"./1.f-skin.jpg",
    type:"female-skin",
},
{
    id:02,
    title:"",
    Desc:"",
    path:"./2.f-skin.jpg",
   type:"female-skin",
},
{
    id:03,
    title:"",
    Desc:"",
    Image:"./3.f-skin.jpg",
   type:"female-skin",
},
{
    id:04,
    title:"",
    Desc:"",
    Image:"./4.f-skin.jpg",
   type:"female-skin",
},
]
const filterredmanBody=arr.filter((item1)=>{
  return item1.type=="male-body"
})
const maleBody =filterredmanBody.map((item1)=>{
  return `<div class="w1">
    <img  class="left" src=${item1.path}></img>
     <div class="right">
     <h4>${item1.id}</h4>
    <div class="txt">${item1.title}</div>
    <div class="tx">${item1.Desc}</div>
  <span class="sign">Scroll</span>
  <svg  class="arr"width="53" height="28" viewBox="0 0 53 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.667969 14.6434L52.668 14.6434M52.668 14.6434C52.668 14.6434 34.668 14.7502 34.668 27.3335M52.668 14.6434C52.668 14.6434 34.668 14.6668 34.668 0.666831" stroke="#CE9578" stroke-width="2"></path>
      </svg>  </div>
  </div>`
})
manBody.innerHTML=maleBody.join("");

const filterredwomanSkin=arr.filter((item2)=>{
    return item2.type=="female-body"
  })
  const femaleSkin =filterredwomanSkin.map((item2)=>{
    return `<div class="w1">
      <img  class="left" src=${item1.path}></img>
       <div class="right">
       <h4>${item1.id}</h4>
      <div class="txt">${item1.title}</div>
      <div class="tx">${item1.Desc}</div>
    <span class="sign">Scroll</span>
    <svg  class="arr"width="53" height="28" viewBox="0 0 53 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.667969 14.6434L52.668 14.6434M52.668 14.6434C52.668 14.6434 34.668 14.7502 34.668 27.3335M52.668 14.6434C52.668 14.6434 34.668 14.6668 34.668 0.666831" stroke="#CE9578" stroke-width="2"></path>
        </svg>  </div>
    </div>`
  })
  womanSkin.innerHTML=femaleSkin.join("");

  const filterredmanHaier=arr.filter((item3)=>{
    return item3.type=="male-hair"
  })
  const maleHair =filterredmanBody.map((item3)=>{
    return `<div class="w1">
      <img  class="left" src=${item3.path}></img>
       <div class="right">
       <h4>${item1.id}</h4>
      <div class="txt">${item3.title}</div>
      <div class="tx">${item3.Desc}</div>
    <span class="sign">Scroll</span>
    <svg  class="arr"width="53" height="28" viewBox="0 0 53 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.667969 14.6434L52.668 14.6434M52.668 14.6434C52.668 14.6434 34.668 14.7502 34.668 27.3335M52.668 14.6434C52.668 14.6434 34.668 14.6668 34.668 0.666831" stroke="#CE9578" stroke-width="2"></path>
        </svg>  </div>
    </div>`
  })
  manHair.innerHTML=maleHair.join("");

  const filterredmanSkin=arr.filter((item4)=>{
    return item4.type=="male-skin"
  })
  const maleSkin =filterredmanSkin.map((item4)=>{
    return `<div class="w1">
      <img  class="left" src=${item4.path}></img>
       <div class="right">
       <h4>${item1.id}</h4>
      <div class="txt">${item4.title}</div>
      <div class="tx">${item4.Desc}</div>
    <span class="sign">Scroll</span>
    <svg  class="arr"width="53" height="28" viewBox="0 0 53 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.667969 14.6434L52.668 14.6434M52.668 14.6434C52.668 14.6434 34.668 14.7502 34.668 27.3335M52.668 14.6434C52.668 14.6434 34.668 14.6668 34.668 0.666831" stroke="#CE9578" stroke-width="2"></path>
        </svg>  </div>
    </div>`
  })
  manSkin.innerHTML=maleSkin.join("");

  const filterredfemaleBody=arr.filter((item5)=>{
    return item5.type=="female-body"
  })
  const femaleBody =filterredfemaleBody.map((item5)=>{
    return `<div class="w1">
      <img  class="left" src=${item5.path}></img>
       <div class="right">
       <h4>${item1.id}</h4>
      <div class="txt">${item5.title}</div>
      <div class="tx">${item5.Desc}</div>
    <span class="sign">Scroll</span>
    <svg  class="arr"width="53" height="28" viewBox="0 0 53 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.667969 14.6434L52.668 14.6434M52.668 14.6434C52.668 14.6434 34.668 14.7502 34.668 27.3335M52.668 14.6434C52.668 14.6434 34.668 14.6668 34.668 0.666831" stroke="#CE9578" stroke-width="2"></path>
        </svg>  </div>
    </div>`
  })
  womanBody.innerHTML=femaleBody.join("");