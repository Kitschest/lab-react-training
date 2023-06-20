function Random ({min, max}) {

    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    
        return(
    <>
    <p> Random value between {min} and {max}:</p>
    <p>{randomNum}</p>
    </>
        );
    }
    
    export default Random; 