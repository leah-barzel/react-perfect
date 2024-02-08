import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import Meeting from "./Meeting"
import DataStore from "../../Stores/DataStore";
import { getMeetings } from '../../Stores/Server';
import './meeting.css';

const ShowMeetingAdmin = (observer(() => {

  const [meetingList, setMeetingList] = useState(DataStore.meetings);

  useEffect(() => {
    getMeetings();
  }, []);
  useEffect(() => {
    setMeetingList(DataStore.meetings);
  }, [DataStore.meetings]);
  const getCurrentDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };
  // const getAppointmentStyle = (appointmentDate) => {
  //   const currentDate = getCurrentDate();
  //   if (appointmentDate === currentDate) {
  //     return 'red-background';
  //   } else if (new Date(appointmentDate) > new Date(currentDate) && new Date(appointmentDate) <= new Date(currentDate).getTime() + 6 * 24 * 60 * 60 * 1000) {
  //     return 'orange-background';
  //   } else {
  //     return 'green-background';
  //   }
  // };
  const getAppointmentStyle = (appointmentDate) => {
    const currentDate = getCurrentDate();
    if (appointmentDate === currentDate) {
      return 'red-background';
    } else if (new Date(appointmentDate).getTime() > new Date(currentDate).getTime() && new Date(appointmentDate).getTime() <= new Date(currentDate).getTime() + 6 * 24 * 60 * 60 * 1000) {
      return 'orange-background';
    } else {
      return 'green-background';
    }
  };
  return (
    <>
      {meetingList.length > 0 ?
        <div className="allMeetings">
          {meetingList.map((meeting, i) =>
            <div key={i} className={` ${getAppointmentStyle(meeting.date)}`}>
              <Meeting name={meeting.name} phone={meeting.phone} email={meeting.email}
                date={meeting.date} time={meeting.time} type={meeting.type}></Meeting>
            </div>
          )}
        </div> :<div></div>}
    </>
  )
}))

export default ShowMeetingAdmin
