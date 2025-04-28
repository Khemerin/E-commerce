import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='description-nav-box'>Description</div>
            <div className='description-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus necessitatibus, laboriosam, rem exercitationem enim, iure quia obcaecati sit quaerat quisquam veritatis et voluptas! Voluptatibus recusandae deserunt similique reiciendis perspiciatis tempora.</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloremque culpa ea beatae iste consequatur aut aliquam atque reprehenderit cum! Ipsa reiciendis ratione asperiores fuga. Iusto minima optio est quos.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox
