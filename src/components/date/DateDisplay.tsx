import React from 'react';

function convertDateToMonthYearString(dateString: string): string {
    const [year, month] = dateString.split('-');
    const monthsInFrench = [
        'Janvier',
        'Février',
        'Mars',
        'Avril',
        'Mai',
        'Juin',
        'Juillet',
        'Août',
        'Septembre',
        'Octobre',
        'Novembre',
        'Décembre',
    ];
    return `${monthsInFrench[parseInt(month) - 1]} ${year}`;
}

interface DateDisplayProps {
    date: string;
}

function DateDisplay(props: DateDisplayProps): JSX.Element {
    const { date } = props;
    const monthYearInFrench = convertDateToMonthYearString(date);

    return <span>{monthYearInFrench}</span>;
}

export default DateDisplay;
