import logo from "./logo.svg"
import "./App.css"
import React, { useState, useEffect } from "react"

function App() {
  const [avatar, setAvatar] = useState("")
  const [profileInfo, setProfileInfo] = useState({})
  const [skillsets, setSkillsets] = useState([])

  useEffect(() => {
    setAvatar("/1-intro-photo-final.jpg")
    setProfileInfo({
      name: "Jonas Schmedtmann",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consectetur beatae doloribus quas itaque laudantium quisquam corrupti, eaque sit sint."
    })
    setSkillsets([
      { skill: "HTML + CSS 😶‍🌫️", color: "blue" },
      { skill: "Javascript 😶‍🌫️", color: "yellow" },
      { skill: "Web Design 😶‍🌫️", color: "green" },
      { skill: "Git and Github 😪", color: "red" },
      { skill: "React 🤫", color: "lightblue" },
      { skill: "Svelte 😪", color: "red" }
    ])
  }, [])
  return (
    <div className="App">
      <div class="container container--card flow-right">
        <div className="card">
          <Avatar profileImage={avatar} />
          <ProfileInfo profileInfo={profileInfo} />
          <Skillsets skillsets={skillsets} />
        </div>
        <div className="card">
          <Avatar profileImage={avatar} />
          <ProfileInfo profileInfo={profileInfo} />
          <Skillsets skillsets={skillsets} />
        </div>
        <div className="card">
          <Avatar profileImage={avatar} />
          <ProfileInfo profileInfo={profileInfo} />
          <Skillsets skillsets={skillsets} />
        </div>
      </div>
    </div>
  )

  function Avatar(props) {
    return <img className="card-image" src={props.profileImage} alt="" />
  }

  function ProfileInfo(props) {
    return (
      <div className="card-info">
        <h2 className="card-title">{props.profileInfo.name}</h2>
        <p className="card-description">{props.profileInfo.description}</p>
      </div>
    )
  }

  function Skillsets(props) {
    let skillset = []
    props.skillsets.forEach((skillInfo) => {
      const style = { backgroundColor: skillInfo["color"] }
      skillset.push(
        <li className="skill-set" style={style}>
          {skillInfo["skill"]}
        </li>
      )
    })
    return <ul class="skillset-container">{skillset}</ul>
  }
}

export default App
