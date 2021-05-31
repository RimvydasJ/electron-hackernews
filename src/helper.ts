
export function formatDate(date:Date){
    let finalDate: string = "";

    let singleDigit = (value: number) => {
        if(value < 10){
            return "0" + value + "/";
        }
        else{
            return value + "/";
        }
    }
    finalDate = singleDigit(date.getDate());
    finalDate += singleDigit(date.getMonth());
    finalDate += date.getFullYear();

    return finalDate;
}


export const menuItems = {
    TopHN: 'topstories',
    AskHN: 'askstories',
    ShowHN: 'showstories',
    JobHN: 'jobstories'
};


export default {
    formatDate,
    menuItems
}