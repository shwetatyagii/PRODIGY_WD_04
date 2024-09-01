'use strict';

export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"
];

// Function to get formatted date
export const getDate = (dateUnix, timezone) => {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}

/**
 * Function to get formatted hours from a Unix timestamp in the specified timezone.
 * @param {number} timeUnix - The Unix timestamp in seconds.
 * @param {number} timezone - The timezone offset in seconds.
 * @returns {string} Formatted hour string (e.g., "HH:MM AM/PM").
 */
export const getHours = (timeUnix, timezone) => {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    const formattedHours = hours % 12 || 12; // Convert 0 to 12
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Ensure 2-digit minutes

    return `${formattedHours}:${formattedMinutes} ${period}`;
}

/**
 * 
 * @param {number} timeUnix Unix timestamp in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Formatted time string (e.g., "HH:MM AM/PM")
 */
export const getTime = (timeUnix, timezone) => {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    const formattedHours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Ensure minutes are two digits

    return `${formattedHours}:${formattedMinutes} ${period}`;
}

/**
 * 
 * @param {number} mps Meters per second 
 * @returns {number} Kilometers per hour
 */
export const mps_to_kmph = mps => {
    return mps * 3.6; // Convert meters per second to kilometers per hour directly
}

// Air Quality Index descriptions
export const aqiText = {
    1: {
        level: "Good",
        message: "Air quality is considered satisfactory, and air pollution poses little or no risk."
    },
    2: {
        level: "Fair",
        message: "Air quality is acceptable; however, for some pollutants, there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution."
    },
    3: {
        level: "Moderate",
        message: "Members of sensitive groups may experience health effects. The general public is not likely to be affected."
    },
    4: {
        level: "Poor",
        message: "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects."
    },
    5: {
        level: "Very Poor",
        message: "Health alert: everyone may experience more serious health effects."
    }
};