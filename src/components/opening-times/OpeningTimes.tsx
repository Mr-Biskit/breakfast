import React from "react";

type OpeningTimesProps = {
  openTimes: {
    title: string;
    weekdayHours: {
      days: string;
      openTime: string;
      closeTime: string;
    };
    weekendHours: {
      days: string;
      openTime: string;
      closeTime: string;
    };
  };
  primaryColor: string;
  secondaryColor: string;
};

function OpeningTimes({
  openTimes,
  primaryColor,
  secondaryColor,
}: OpeningTimesProps) {
  return (
    <div
      id="opening-times"
      className="font-heading flex flex-col items-center justify-center space-y-2"
    >
      <div className="text-md flex items-center justify-center space-x-2 lg:text-xl">
        <p className={` text-center text-${primaryColor}`}>Available</p>
        <p
          className={`whitespace-nowrap text-lg font-bold tracking-tighter lg:text-3xl text-${secondaryColor} text-center `}
        >
          {openTimes.weekdayHours.days}
        </p>
        <p className={`whitespace-nowrap text-center  text-${primaryColor}`}>
          {openTimes.weekdayHours.openTime} - {openTimes.weekdayHours.closeTime}
        </p>
      </div>
      <div className="text-md flex items-center justify-center space-x-2 lg:text-xl">
        <p className={` text-center text-${primaryColor}`}>Available</p>
        <p
          className={`whitespace-nowrap text-lg font-bold tracking-tighter lg:text-3xl text-${secondaryColor} text-center `}
        >
          {openTimes.weekendHours.days}
        </p>
        <p className={`whitespace-nowrap text-center  text-${primaryColor}`}>
          {openTimes.weekendHours.openTime} - {openTimes.weekendHours.closeTime}
        </p>
      </div>
    </div>
  );
}

export default OpeningTimes;
