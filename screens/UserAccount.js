import { updateUserData } from "../Firebase";

export default class UserAccount {

    constructor(snapshot, uid) {
        this.data = {}
        this.uid = uid;

        snapshot.forEach(element => {
            this.data[element.key] = element.val()
        });


        this.username = this.data["username"];
        this.email = this.data["email"];

    }

    updateDatabase() {
        updateUserData(this);
    }

    getReminders() {
        if (!this.data["reminders"])
            return [];

       // console.log(this.data["reminders"])

       return this.data["reminders"];
    }

    setReminderData(data) {
        this.data["reminders"] = data;
    }

    getAllergies(baby_id) {
        if (!this.data.baby_data[baby_id]["allergies"])
            return false

        return this.data.baby_data["allergies"];
    }

    setAllergies(baby_id, allergy_data) {
        this.data.baby_data[baby_id]["allergies"] = allergy_data;
    }

    getSleepData(baby_id) {
        if (!this.data.baby_data[baby_id]["sleep_data"])
            return false

        return this.data.baby_data[baby_id]["sleep_data"];
    }

    setSleepData(baby_id, sleep_data) {
        this.data.baby_data[baby_id]["sleep_data"] = sleep_data;
    }

    getFeedData(baby_id) {
        if (!this.data.baby_data[baby_id]["feed_data"])
            return false

        return this.data.baby_data[baby_id]["feed_data"];
    }

    setFeedData(baby_id, sleep_data) {
        this.data.baby_data[baby_id]["feed_data"] = sleep_data;
    }

    getVaccinationData(baby_id) {
        if (!this.data.baby_data[baby_id]["vaccination_data"])
            return false

        return this.data.baby_data[baby_id]["vaccination_data"];
    }

    setVaccinationData(baby_id, sleep_data) {
        this.data.baby_data[baby_id]["vaccination_data"] = sleep_data;
    }

}