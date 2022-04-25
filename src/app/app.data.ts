import * as wjcCore from '@grapecity/wijmo';

const data = generateData();

function generateData(): any[] {
    const data = [];
    const today = new Date();
    for (let i = 0; i < 12; i++) {
        const sales = 100 + Math.random() * 800 + i * 50;
        const expenses = 50 + Math.random() * 300 + i * 5;
        data.push({
            id: i,
            date: wjcCore.DateTime.addMonths(today, 12 - i),
            sales,
            expenses,
            profit: sales - expenses,
        });
    }
    return data;
}

export function getData(): any[] {
    return data;
}