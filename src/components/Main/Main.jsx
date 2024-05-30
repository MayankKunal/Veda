import  { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Main = () => {
  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context);
  return (
    <div className='main'>
      <div className='nav'>
        <h1>Veda</h1>
        <img src={assets.user_icon} alt="ved Icon"/>
      </div>
      <div className='main-container'>
        {!showResult?
        <>
<div className='greet'>
            <p><span>Welcome! I’m Veda</span></p>
            <p>Your personal guide to knowledge and wisdom. How can I assist you today?</p>
        </div>
        {/* <div className='cards'>
            <div className='card'>
                <p>suggest some beautiful place to see on an upcoming road trips</p>
                <img src={assets.compass_icon} alt=""/>
            </div>
            <div className='card'>
                <p>Learn all about how to implement font using the API CSS code.</p>
                <img src={assets.bulb_icon} alt=""/>
            </div>
            <div className='card'>
                <p> A web font is any font used in a website’s design that isn’t installed by default on the end user’s device—a counterpart to a system font</p>
                <img src={assets.code_icon} alt=""/>
            </div>
            <div className='card'>
                <p> A web font is any font used in a website’s design that isn’t installed by default on the end user’s device—a counterpart to a system font</p>
                <img src={assets.message_icon} alt=""/>
            </div>
        </div> */}
        </>
          :
          <div className='result'>
          <div className='result-title'>
            <img src={assets.user_icon} alt=''/>
            <p>{recentPrompt}</p>

          </div>
          <div className='result-data'>
            <img src={assets.veda_icon} alt='' />
            {loading?<div className='loader'>
              <hr/>
              <hr/>
              <hr/>
            </div>:
            <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
          </div>
          </div>
          }
       
        <div className='main-bottom'>
            <div className='search-box'>
                <input type="text" placeholder="Start your conversation..." onChange={(e)=>setInput(e.target.value)} value={input}/>
                <div>
                {/* <img src={assets.gallery_icon} alt=""/>
                <img src={assets.mic_icon} alt=""/> */}
               {input? <img src={assets.send_icon}   alt=""onClick={()=>onSent()}/>:null} 
                </div>
            </div>

            <div className='contact'>
            <p className='bottom-info'> Send how to optimize our performance and enhance overall user experience
            </p>
            <a href='mailto:mayankkumar4647@gmail.com'>mayankkumar4647@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
