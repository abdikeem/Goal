import { Injectable } from '@angular/core';
import { Goal } from '../goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoal(){
    return Goal
  }

  constructor() { }
}
