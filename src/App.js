import Karavanshow from "./Karavanshow";
import { useState } from "react";
import "./App.css"

  


function getRandomKaravan(){
  const karavans = ["orangekaravans","blackrangerkaravans","seakaravans","hijjjkaravanss"]

    return karavans[Math.floor(Math.random() * karavans.length)] 


}


console.log(getRandomKaravan())




function App() {
  //---------------------------------
//   function makearray()
//   {

//     return [19,3,21,12]
//   }
//   const arrayhijj=makearray();
//   const first =arrayhijj[0]
//   const last =arrayhijj[3]
// console.log(first,last,arrayhijj[1],arrayhijj[2])
  //---------------------------------


  //---------------------------------

// const [count,setCount]=useState(0)



// const handleclick = ()=>{

//   setCount(count + 1)

// }  
//---------------------------------





const [karavan,setkaravan]=useState([])

const handleclick = ()=> {

setkaravan([...karavan,getRandomKaravan()])

}

const renderKaravan = karavan.map(
(karavanx,index) => {
  return       <Karavanshow key={index} karavantitle={karavanx} />

}



);

  return (
    <>
    <div className="app">
      <button  onClick={handleclick}  className="button"> hijjj hupmuahşışı</button>

    <div className="yanyanakaravan" >{renderKaravan}</div>
      

      </div>
    </>
  );
}  

export default App;
