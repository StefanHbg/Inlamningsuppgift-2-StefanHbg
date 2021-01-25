import React from 'react';

function Goal(props) {
    function handleClick(){
        props.updateState(props.goal.code);
    }
    return (
        <div>
            <article>
                <h2 className='h2Tag'>{props.goal.description}</h2>
                <button onClick={ handleClick } className='buttonStyle'>Läs mer</button>
            </article>
        </div>
    )
}

export default Goal;