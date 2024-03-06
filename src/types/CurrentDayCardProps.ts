export type CurrentDayCardProps = {
  currentDay: {
    dt: number;
    main: {
      temp: number;
      temp_max: number;
      temp_min: number;
      humidity: number;
      feels_like: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
    wind: {
      speed: number;
    };
  };
};

export interface CurrentDayCardCity extends CurrentDayCardProps {
  city: {
    id: number;
    name: string;
    country: string;
  };
}
