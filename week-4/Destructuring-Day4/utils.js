export function formatDate(date){
    return date.toISOString().split('T')[0];
}

export function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function randomNumber(min, max){
    return Math.floor(Math.random() * (min - max + 1) + min)
}
