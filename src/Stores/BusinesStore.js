import { action, makeObservable, observable } from 'mobx';


class BusinesStore {

    isEdit = false;
    busines = {
        name: "fly on music",
        address: "רמת שלמה ירושלים",
        phone: "0534110928",
        owner: "לאה ברזל",
        description: "", 
    };
    constructor() {
        makeObservable(this, {
            busines: observable,
            isEdit: observable,
            editDeataild: action,
            markIsEdit: action,
            setBusines: action,
        })
    }

    setBusines = (busines) => {
        this.busines = busines;
    }
    editDeataild(newB) {
        this.busines = newB;

    }
    markIsEdit() {
        this.isEdit = !this.isEdit;
    }
}
export default new BusinesStore();