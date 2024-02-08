import axios from "axios";
import DataStore from "./DataStore";
import BusinesStore from "./BusinesStore";

export async function getServices() {
    const services = await axios.get('http://localhost:8787/services');
    DataStore.setServices(services.data);
}

export async function addService(service) {
    try {
        const res = await axios.post('http://localhost:8787/service', service);

        alert("השירות נוסף בהצלחה");
        DataStore.addService(service);
        return 'success';
    }
    catch (e) {
        alert("השירות כבר קיים במערכת");
        return 'failed';
    }
}

export async function getMeetings() {
    const meetings = await axios.get('http://localhost:8787/appointments');
    DataStore.setMeetings(meetings.data);
}



export async function addMeeting(meeting) {
    try {
        const res = await axios.post('http://localhost:8787/appointment', meeting);
        if (res.status === 200) {
            alert("הפגישה נוספה בהצלחה");
            DataStore.addMeeting(meeting);
            return 'success';
        }
    }
    catch (e) {
        alert("תאריך הפגישה תפוס נסו שנית");
        return 'failed';
    }
}


// export async function addMeeting(meeting) {
//     try {
//         const res = await axios.post('http://localhost:8787/appointment', meeting);
//         if (res.status === 200) {
//             alert("הפגישה נוספה בהצלחה");
//             DataStore.addMeeting(meeting);
//             return 'success';
//         }
//     }
//     catch (e) {
//         alert("תאריך הפגישה תפוס נסו שנית");
//         return 'failed';
//     }
// }

export async function postBusines(busines) {
    const res = await axios.post('http://localhost:8787/businessData', busines);
    if (res.status === 200) {
        BusinesStore.setBusines(res.data)
        return 'success';
    }
    else {
        return 'failed';
    }
}

export async function putBusines(busines) {
    const res = await axios.put('http://localhost:8787/businessData', busines);
    if (res.status === 200) {
        BusinesStore.setBusines(res.data)
        return 'success';
    }
    else {
        return 'failed';
    }
}

export async function getBusines() {
    const busines = await axios.get('http://localhost:8787/businessData');
    BusinesStore.setBusines(busines.data)
}