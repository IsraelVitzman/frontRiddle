export function time() {
    return Date.now()
}

export function returnTime(start:any, end:any) {
    return (end - start) / 1000;
}

const secondsList:any = [];
let allTime = 0;

export function addSecondsForQuestion(sec:any) {
    secondsList.push(sec);

}

export function getSecondsForQuestion() {
    if (secondsList.length === 0) {
        return 0;
    }
    const sum = secondsList.reduce((acc:any, current:any) => acc + current, 0);
    return sum / secondsList.length;
}

export function addTimeForAllRidders(sec:any) {
    allTime = sec;

}

export function getTimeForAllRidders() {
    return allTime;
}