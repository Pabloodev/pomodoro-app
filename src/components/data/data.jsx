import { useState } from 'react';
import { ArrowUp, OctagonX, Hammer, Omega } from 'lucide-react';
import './data.css'

export default function StudyData() {

    const [isActive, setActive] = useState(false);
    return (
        isActive ? (
            <div className='statusDiv'>
                <h2>Monthly</h2>

                <button onClick={() => setActive(false)} className='leaveStatusDiv'>
                    <OctagonX />
                </button>

                <p className='titleMinutes'>Time of pomodoro</p>
                <span className='minutesStudied'>{Math.floor(localStorage.getItem('minutesStudied') / 60)} Minutes</span>
            </div>
        ) : 
        (
            <button onClick={() => setActive(true)} className='dataButton'>
                <span>Study Status</span>
                <ArrowUp />
            </button>
        )
        
    )
}