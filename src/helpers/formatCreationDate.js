const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const rest = minutes % 60;
    return `${hours}:${rest.toString().padStart(2, '0')} hours`;
};
export default formatDuration;