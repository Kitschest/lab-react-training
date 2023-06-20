function Rating (props) {

    const { children } = props;
    const roundedRating = Math.round(children); // Round the rating value
  
    const stars = '★'.repeat(roundedRating) + '☆'.repeat(5 - roundedRating); // Create a string of stars and empty stars

    return(
        <>
        <div>{stars}</div>
        </>
    );
}

export default Rating; 