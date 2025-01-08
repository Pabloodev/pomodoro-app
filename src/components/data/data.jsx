import { useState } from 'react';
import { ArrowUp, OctagonX, Hammer, Omega } from 'lucide-react';
import './data.css'

export default function StudyData() {

    const [isActive, setActive] = useState(false)

    return (
        isActive ? (
            <div className='statusDiv'>
                <h2>Monthly</h2>

                <button onClick={() => setActive(false)} className='leaveStatusDiv'>
                    <OctagonX />
                </button>

                <p>Esta parte está em desenvolvimento, espero trazer coisas interessantes para vocês!</p>
                <Hammer size={60}/>
                
                
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