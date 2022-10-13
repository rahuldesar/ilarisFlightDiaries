// * ALL DATA FROM OUTSIDE IS TYPE CHECKED HERE AND PROPERLY TYPED OBJECTS ARE FORWARDED..

import { NewDiaryEntry, Visibility, Weather } from "./types";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toNewDiaryEntry = ({ comment, date, weather, visibility } : any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(comment),
    date: parseDate(date),
    weather: parseWeather(weather),
    visibility: parseVisibility(visibility)
  };

  return newEntry;
};


const parseComment = (comment: unknown): string => {
  if(!comment || !isString(comment)){
    throw new Error('Incorrect or missing content');
  }
  return comment; 
};

const isDate = (date : string) : boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date : unknown ) : string => {
  if(!date || !isString(date) || !isDate(date)){
    throw new Error('Incorrect or Missing date : ' + date);
  }
  return date;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isWeather = (param: any) : param is Weather => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(Weather).includes(param);
};

const parseWeather = (weather : unknown) : Weather => {
  if(!weather || !isString(weather) || !isWeather(weather)){
    throw new Error('Incorrect or missing weather : ' + weather);
  }
  return weather;
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isVisibility = (param: any): param is Visibility => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(Visibility).includes(param);
};

const parseVisibility = (visibility: unknown): Visibility => {
  if (!visibility || !isVisibility(visibility)) {
      throw new Error('Incorrect or missing visibility: ' + visibility);
  }
  return visibility;
};


// * TYPE-GUARD => returns a boolean and has a type predicate as the return type
const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

export default toNewDiaryEntry;