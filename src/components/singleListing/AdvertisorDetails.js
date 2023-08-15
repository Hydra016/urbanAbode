import React from 'react'

const AdvertisorDetails = ({ advertisor }) => {
  return (
    <>
    {advertisor.broker && <div className='advertiser_container'>
    <p className="text-primary heading-listing">Advertiser By</p>
        <img className='advertiser_img' src={advertisor.photo && advertisor.photo.href} />
        <div>
        <p style={{fontWeight: '800'}}>{advertisor.broker.name}</p>
        <p style={{marginTop: '5px', fontSize: 13}}>{advertisor.email}</p>
        </div>
    </div>}
    </>
    
  )
}

export default AdvertisorDetails