export type CurrentDayCardProps = {
  city: {
    id: number;
    name: string;
    country: string;
  };
  currenDay: {
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
