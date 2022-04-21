
import { useRef, useEffect } from 'react'

import './agentDescription.css'

const AgentDescription = (props) => {

   const refAudio = useRef(null)

   const loadAudio = () => {
      // console.log(refAudio.current)
      if (refAudio.current) {
         // console.log(refAudio)
         refAudio.current.load()
      }
   }

   useEffect(() => {
      loadAudio()
   })

   return (
      <div className="agent-selected">
         {(props.agent) && (props.agent.role.displayIcon) && (props.agent.bustPortrait) && (

            <div className='agent-container'>
               <div className='agent-left-container'>
                  <img src={props.agent.bustPortrait} alt="NA" className='agent-icon' />
                  <div className='role-container'>
                     <img src={props.agent.role.displayIcon} alt="NA" className='role-icon' />
                     <p>{props.agent.role.displayName}</p>
                  </div>
               </div>

               <div className='agent-right-container'>
                  <p className='agent-display-name'>{props.agent.displayName}</p>
                  <p>{props.agent.description}</p>

                  <p className='agent-display-name'>Voice line</p>

                  <audio controls ref={refAudio} className='audio-player'>
                     <source src={props.agent.voiceLine.mediaList[0].wave} />
                     Your Browser does not support the audio tag
                  </audio>
               </div>
            </div>
         )}
      </div>
   )
}

export default AgentDescription