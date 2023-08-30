import orangekaravans from "./img/orangekaravans.jpeg"
import blackrangerkaravans from "./img/blackrangerkaravans.jpg"
import hijjjkaravanss from "./img/hijjjkaravanss.jpeg"
import seakaravans from "./img/seakaravans.jpg"
import heart from "./img/heart.svg"
import { useState } from "react"
import "./Karavanshow.css"

const krvn= {
  orangekaravans,
  blackrangerkaravans,
  hijjjkaravanss,
  seakaravans

}


function Karavanshow({karavantitle}) {

const [click,setClick] =useState(0)

  const karavanclick = () => {
      setClick(click+1)
  }

    return (
      <>
<div className="karavan-show">
<img className="karavan" onClick={karavanclick} alt="karavanntıkşaşııı" src={krvn[karavantitle]} />

<img onClick={karavanclick} className="heart"

alt="heart"
src={heart}
style={{width : 10 + click*10 + "px"}}

/>

</div>


      </>
    );
  }  
  
  export default Karavanshow;
  