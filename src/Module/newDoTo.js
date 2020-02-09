export default class Mission {
    constructor(newMissionName, stepsCount) {
        this.newMissionName = newMissionName;
        this.stepsCount = stepsCount;
        this.id = Math.random().toString(36).substr(2, 9);
    };
    
}
