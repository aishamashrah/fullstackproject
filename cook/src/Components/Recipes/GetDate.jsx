const DateComponent = () => {
    const uniqueId = parseInt(
      (Math.ceil(Date.now() / Math.random() * Math.random())).toString().substring(5, 12)
    );
    const currentDate = new Date();
    const month = currentDate.toLocaleDateString('en-US', { month: 'long' });
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
  
    const formattedDate = `${month} ${day}${getDaySuffix(day)}, ${year}`;
  
    function getDaySuffix(day) {
      if (day >= 11 && day <= 13) {
        return 'th';
      }
  
      const lastDigit = day % 10;
      switch (lastDigit) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    }
  
    return formattedDate;
  };
  
  export default DateComponent;
  