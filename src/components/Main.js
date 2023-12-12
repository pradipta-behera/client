import React from 'react';
import image from '../assets/pic1.png';

 const Main = () => {
    return(
        <div className='main'>
            <div className='content'>
                <h2>Wisdom in Waves:Dive into Quizzes</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nost</p>
                <button type='button'>Create Quiz</button>
            </div>
            <div className='image'>
                    <img src={image} alt='front pic' height={400}/>
            </div>
            


        </div>
    );
 }
 export default Main;