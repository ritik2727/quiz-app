import React, {  useState } from 'react';
import { questions } from './Questions';
import './App.css';



const App = () =>  {
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const [score,setScore] = useState(0);
    const [showScore,setShowScore] = useState(false);

    const onHandleClickOption = (isCorrect)=> {
        if(isCorrect){ 
            setScore(score+1);
        }
        const nextQuestion = currentQuestion + 1;

        if(nextQuestion < questions.length){
        setCurrentQuestion(nextQuestion)
        }else{
            setShowScore(true)
        }
    }
    const refreshPage = () => window.location.reload();

    return(
             <div className='page'>{showScore ? (
                <div className='box'>
                    <div className='box-container'>
                        <div className='header-container'>
                            <h2>Game Over</h2>
                        Your score is {score} / {questions.length} correct answer ! ! ! 
                        </div>
                        <div style={{textAlign:'center'}}>
                        <button type="button" className="btn btn-primary" onClick={refreshPage}>
                            Play Again
                        </button>
                        </div>
                    </div>
                </div>
            ):( 
                <div className="box">
                    <div className='box-container'>
                        <div className ='header-container'>
                            <span>Question {currentQuestion + 1} </span>/{questions.length}
                        </div>
                    <div>
                    {questions[currentQuestion].questionText}    
                    </div>
                <div>
                    {questions[currentQuestion].answerOptions.map(answerOption=>{
                        return(
                            <div>
                                <button  type='button' className='butn'
                                    onClick={()=>onHandleClickOption(answerOption.isCorrect)}>
                                        {answerOption.answerText}
                                </button> 
                            </div>
                        )
                    }
                    )}
                </div>
                </div>
            </div>
        )}
        </div>
    )
}

 
 export default App;


