export const User = ({ img, name, age, hobbies, children }) => {
    //Destructuring the data

    console.log("user");
    return (
        <>
            <img src={img} alt={name}></img>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <div>
                {hobbies.map((data, index) => (
                    <h1 key={index}> {data} </h1>
                ))}
            </div>
            {children}
        </>
    );
};
