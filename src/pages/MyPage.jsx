import React from 'react';
import ReservationCard from '../components/ResevationCard';
function MyPage({ reserveInfoList, updateReserveInfo, removeReserveInfo }) {

  return (
    <div>
      <h1>Travels</h1>
      <h2>Scheduled reservations</h2>
      {reserveInfoList.map((reserveInfo, index) => (
        <ReservationCard key={index} reserveInfo={reserveInfo} updateReserveInfo={() => updateReserveInfo(index)} removeReserveInfo={() => removeReserveInfo(index)}/>
      ))}
    </div>
  )
}
export default MyPage