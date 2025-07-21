
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarClock } from 'lucide-react';

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval as keyof typeof timeLeft] && timeLeft[interval as keyof typeof timeLeft] !==0) {
      return null;
    }

    return (
      <div key={interval} className="text-center p-2">
        <div className="font-montserrat font-bold text-2xl md:text-3xl text-gold">
          {String(timeLeft[interval as keyof typeof timeLeft]).padStart(2, '0')}
        </div>
        <div className="font-open-sans text-xs uppercase text-navy">
          {interval}
        </div>
      </div>
    );
  });

  return (
    <Card className="bg-navy/5 border-navy/20 shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-navy">
          <CalendarClock className="w-6 h-6 mr-2 text-gold" />
          <span className="font-montserrat text-xl">Election Countdown</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        {Object.keys(timeLeft).length > 0 ? (
          <div className="flex justify-around items-center">
            {timerComponents}
          </div>
        ) : (
          <p className="font-open-sans text-xl text-navy text-center py-4">Election Day is here or has passed!</p>
        )}
      </CardContent>
    </Card>
  );
};

export default CountdownTimer;
