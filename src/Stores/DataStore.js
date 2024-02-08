import { makeObservable, observable, action } from "mobx";

class DataStore {
    services = [];
    meetings=[];
    
    constructor() {
        makeObservable(this, {
            services: observable,
            meetings:observable,
            setServices: action,
            setMeetings:action,
            addService: action,
            addMeeting:action,
        })
    }

    setServices = (services) => {
        this.services = [...services];
    }

    addService = (service) => {
        this.services = [...this.services, service];
    }
    setMeetings = (meetings) => {
        this.meetings = [...meetings];
        this.meetings .sort((a, b) => new Date(a.date) - new Date(b.date));

    }

    addMeeting = (meeting) => {
        this.meetings = [...this.meetings, meeting];
    }
}

export default new DataStore();