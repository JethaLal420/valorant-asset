import { useEffect, useState, useRef } from "react";
import React from "react";

import AgentDescription from "./agentDescription";
import './agents.css'

function Agents() {

  // console.log('props', props)

  const [agentSelect, setAgentSelect] = useState(null)
  const [agentsData, setAgentsData] = useState(null)

  const refAgentSelectGuide = useRef(null)


  //console.log("---", agentsData);

  useEffect(() => {
    const apiUrl = "https://valorant-api.com/v1/agents";
    console.log("Use Effect called");
    fetch(apiUrl)
      .then((res) => res.json())
      .then((agentInfo) => {
        setAgentsData(agentInfo.data);
        //  console.log(agentInfo);
      })
      .catch((err) => console.log(err.message));

  }, [])

  const agentSelected = (agent) => {


    // console.log(refAgentSelectGuide.current.style)

    if (refAgentSelectGuide.current.style.display !== 'none')
      refAgentSelectGuide.current.style.display = 'none'

    setAgentSelect(agent)
  }

  return (
    <div className="main-container">
      <p style={{ 'font-size': 'larger' }} ref={refAgentSelectGuide}>Select Any Agent </p>
      <AgentDescription agent={agentSelect} />
      <hr className="divider-line" />
      <div className="agent-selection">
        {agentsData &&
          agentsData.map((agent, key) => {
            return (
              <div className="agent" >
                <img src={agent.displayIcon} alt="NA" className="agent-display-icon" onClick={() => {
                  agentSelected(agent)
                }} />
                <p key={key}>{agent.displayName}</p>
              </div>

            );
          })}
      </div>
    </div >
  );
};

export default Agents;