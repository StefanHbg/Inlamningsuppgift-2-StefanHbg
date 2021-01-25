import React from 'react';

function ShowGoal(props) {
    function handleClick(){
        props.goBack();
    }
    console.log(props.viewGoal);
    return(
        <div>
            <button className='buttonStyle' onClick={ handleClick } >Klicka här för att komma tillbaka till målen</button>
            <article>
                <div>
                    <p className='goalStyle'>{`${'The Goal:'} ${props.viewGoal.description}`}
                    </p>
                </div>
                <p className='goalStyle2'>{`${'TO DO: '} ${props.viewGoal.title}`}</p>
                <p className='targetStyling'>{props.viewGoal.targets.map((target) => {
                    return (
                        <div>
                            <p>{target.code}- {target.title}</p>
                        </div>
                    )
                })}</p>
            </article>
        </div>
    )
}

export default ShowGoal;