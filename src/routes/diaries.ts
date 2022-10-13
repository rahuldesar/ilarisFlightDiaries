import express from 'express';
import diaryService from '../services/diaryService';
import toNewDiaryEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diaryService.getNonSensitiveEntries());
});

router.get('/:id', (req, res) => {
  const diary = diaryService.findById(Number(req.params.id));

  if(!diary){
    res.sendStatus(404);
  } else {
    res.send(diary);
  }
}); 

router.post('/', (req,res) => {
  try{
    const newDiaryEntry = toNewDiaryEntry(req.body);
    const addedEntry = diaryService.addDiary(newDiaryEntry);
    res.json(addedEntry);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';

    if(error instanceof Error){
      errorMessage += ' Error ' + error.message;
    }
    res.status(400).send(errorMessage);
  }


  // const {date, weather, visibility, comment} =  req.body;
  // const newDiaryEntry = diaryService.addDiary({
  //   date,
  //   weather,
  //   visibility,
  //   comment,
  // }); 
  // res.json(newDiaryEntry);
});

export default router;