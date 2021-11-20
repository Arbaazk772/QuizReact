import React,{useState,useContext} from 'react'
import{Questions} from '../Helpers/QuestionBank'
import { QuizContext } from '../Helpers/Contexts'

function Quiz() {
    const{score,setScore, setGameState}=useContext(QuizContext);

    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen,SetOptionChosen] = useState("")

    const nextQuestion = ()=>{
        if(Questions[currQuestion].answer == optionChosen){
            setScore(score+1);
        }
        setCurrQuestion(currQuestion+1);
    }; 

    const finishQuiz=()=>{
        if(Questions[currQuestion].answer == optionChosen){
            setScore(score+1);
        }
        setGameState("endScreen");
        
    }

    return (
        <div className="Quiz">
        <h1>{Questions[currQuestion].prompt}</h1>
            <div className="options">
            <button onClick={()=>SetOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
            <button onClick={()=>SetOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
            <button onClick={()=>SetOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
            <button onClick={()=>SetOptionChosen("D")}>{Questions[currQuestion].optionD}</button>
            </div>
            {currQuestion==Questions.length-1 ?(
                <button onClick={finishQuiz}> Finish Quiz</button>
            ) :( <button onClick={nextQuestion}>Next</button>
            )} 
           
        </div>
    );
}

export default Quiz
