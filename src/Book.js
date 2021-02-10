import Libros from './Libros.json';

function ReadData(){
    return(
            <div>
                {
                    Libros.map((item)=>
                        <div>
                            <h1>{item.title}</h1>
                            <p>{item.author}</p>
                        </div>
                    )
                }
            </div>
    )
}

export default ReadData;