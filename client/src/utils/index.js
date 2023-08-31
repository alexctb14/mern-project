import { surpriseMePrompts } from '../constants'

//Function selects a random index from 1-49
export function getRandomPrompt(prompt) {
    let randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    let randomPrompt = surpriseMePrompts[randomIndex];

    //check to see if random prompt is repeated, if so, get new prompt
    if (randomPrompt === prompt) {
        return getRandomPrompt(prompt);
    }

    return randomPrompt;
}