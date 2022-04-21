
import { useEffect, useState, useRef } from "react";

import WeaponDescription from './weaponDescription'
import './weapons.css'

const Weapons = () => {

   const [weaponsData, setWeaponsData] = useState(null)
   const [selectedWeapon, setSelectedWeapon] = useState(null)

   const refWeaponSelectGuide = useRef(null)


   useEffect(() => {
      const apiUrl = "https://valorant-api.com/v1/weapons";
      console.log("Use Effect called");
      fetch(apiUrl)
         .then((res) => res.json())
         .then((weaponsInfo) => {
            setWeaponsData(weaponsInfo.data);
            console.log(weaponsInfo);
         })
         .catch((err) => console.log(err.message));

   }, [])

   const selecteWeapon = (weapon) => {

      if (refWeaponSelectGuide.current.style.display !== 'none')
         refWeaponSelectGuide.current.style.display = 'none'

      setSelectedWeapon(weapon)
   }

   return (
      <div className="main-container">
         <p style={{ 'font-size': 'larger' }} ref={refWeaponSelectGuide}>Select Any Agent </p>
         <WeaponDescription weapon={selectedWeapon} />
         <hr className="divider-line" />
         <div className="weapon-selection">
            {weaponsData && weaponsData.map((weapon, key) => (
               <div className='weapon'>
                  <img src={weapon.displayIcon} alt='NA' className="weapon-display-icon" onClick={() => {
                     selecteWeapon(weapon)
                  }} />
                  <p key={key}>{weapon.displayName}</p>
               </div>
            ))}
         </div>
      </div>
   )
}

export default Weapons