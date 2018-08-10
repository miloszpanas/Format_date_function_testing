const formatDate = (timeInSeconds) => {
    if (!timeInSeconds) {
        return '0s';
    };

    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor((timeInSeconds % 3600) % 60);

    return `${hours > 0 ? hours + 'h' : ''}${hours > 0 && (minutes > 0 || seconds > 0) ? ' ' : ''}${minutes > 0 ? minutes + 'm' : '' }${(minutes > 0 && seconds > 0)  ? ' ' : ''}${seconds > 0 ? seconds + 's' : ''}`;
  }
  
  module.exports = formatDate;