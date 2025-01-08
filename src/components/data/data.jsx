import { useState } from 'react';
import { ArrowUp, OctagonX, Hammer, Omega } from 'lucide-react';
import './data.css'

export default function StudyData() {

    const [isActive, setActive] = useState(false);
    const [fullMinutesStudied, setFullMinutesStudied] = useState(localStorage.getItem('minutesStudied') ?? 0);

    return (
        isActive ? (
            <div className='statusDiv'>
                <h2>Monthly</h2>

                <button onClick={() => setActive(false)} className='leaveStatusDiv'>
                    <OctagonX />
                </button>

                <p className='titleMinutes'>Time of pomodoro</p>
                <span className='minutesStudied'>{Math.floor(localStorage.getItem('minutesStudied') / 60)} Minutes</span>

                {/* <p>Esta parte está em desenvolvimento, espero trazer coisas interessantes para vocês!</p>
                <Hammer size={60}/> */}
                
                
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