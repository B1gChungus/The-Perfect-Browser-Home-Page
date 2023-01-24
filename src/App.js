import './App.css';
import { useState } from "react"

let sections = {
  "GAMER": {
    "oblitgatory game site": ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbigoven-res.cloudinary.com%2Fimage%2Fupload%2Ft_recipe-1280%2Fperfect-hard-boiled-egg.jpg&f=1&nofb=1&ipt=65cce45eca33767bef060b4ece157ac5d7c354b4427daf130cf181a00520f2b1&ipo=images",
     "https://www.newgrounds.com/"],
     "Very Important": ["https://cdn2.shopify.com/s/files/1/0636/1231/products/GOLDEN_EGG.png?v=1555438413","https://www.models-resource.com/mobile/looneytunesworldofmayhem/model/44860/"]
  },
  "BORING": {
    "Google Classroom": ["https://img.talkandroid.com/uploads/2015/01/google_classroom_app_icon.png", 
    "https://classroom.google.com/u/1/c/NTgxMjg5MDcwODEz/a/NTgxMjkwMTcwODUx/details"],
    "Google Drive":["https://logospng.org/download/google-drive/logo-google-drive-4096.png","https://drive.google.com"]
  },
  "PORTSITE": {
    "Main": ["https://vignette.wikia.nocookie.net/miitopia-fanon/images/e/ee/51NA4HfQo1L.jpg/revision/latest?cb=20190627001658", 
    "https://github.com/B1gChungus/dumbstupid"],
  }
}

function App() {
  let [Frame, SetFrame] = useState("GAMER")
  return (
    <div className="App">
      <div id="main">
        <div id="hotbar">
          {
            Object.keys(sections).map((ok, i) => {
              return (<div className="hotbarbutton" key={ok} onClick={() => { SetFrame(ok) }}>
                <p>{ok}</p>
              </div>)
            })
          }
        </div>
        {
          Object.keys(sections).map((ok, i) => {
            return (
              Frame == ok &&
              <div className="iconcontainer" key={ok}>
                {
                  Object.keys(sections[ok]).map((key, a) => {
                    let ID = "icontext" + key + a
                    let TimesUsed = Number(localStorage.getItem(ID)) || 0
                    return (
                      <a className="iconlink" onClick={() => {
                        TimesUsed++
                        localStorage.setItem(ID,TimesUsed)
                        document.getElementById(ID).innerHTML = key + " (" + TimesUsed + ")"
                      }} key={key} href={sections[ok][key][1]}>
                        <img src={sections[ok][key][0]} alt="image" width="90%" height="80%" className = "linkimage"></img>
                        <p className="icontext" id={ID}>{key + " (" + TimesUsed + ")"}</p>
                      </a>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
