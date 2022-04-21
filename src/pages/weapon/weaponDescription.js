

import './weaponDescription.css'

const WeaponDescription = (props) => {

   console.log(props.weapon)

   return (
      <>
         <div className="weapon-selected">
            {(props.weapon) && (

               <div className='weapon-container'>

                  <p className='weapon-display-name'>{props.weapon.displayName}</p>

                  <div className='weapon-category-container'>
                     <p>{props.weapon.category.split('::')[1]}</p>
                  </div>

                  <>
                     {(props.weapon.weaponStats) &&
                        (<>
                           <p>Weapon Statistics</p>
                           <p>Equip Time - {props.weapon.weaponStats.equipTimeSeconds}</p>
                           <p>Fire Rate - {props.weapon.weaponStats.fireRate}</p>
                           <p>First Bullet Accuracy - {props.weapon.weaponStats.firstBulletAccuracy}</p>
                           <p>Magazine Size - {props.weapon.weaponStats.magazineSize}</p>
                           <p>Reload Time - {props.weapon.weaponStats.reloadTimeSeconds}</p>
                        </>)}
                  </>

                  <p className='weapon-display-name'>Weapon Skins</p>
               </div>
            )
            }
         </div >
         <div className="skin-container">
            {(props.weapon) &&
               props.weapon.skins.map((skin, key) => {
                  return (
                     <div className='skin-container-card'>
                        {
                           (skin.displayName.includes('Standard')) ?
                              (<></>) :
                              (<div>
                                 <img src={skin.displayIcon} alt="NA" />
                                 <p key={key}>{skin.displayName}</p>
                              </div>)

                        }
                     </div>
                  )
               })
            }
         </div>
      </>
   )
}

export default WeaponDescription