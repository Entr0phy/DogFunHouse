import Resources from "./Resources";
import {useState, useEffect} from 'react';
const dogUrl = 'https://dog.ceo/api/breeds/image/random';
const ShowDog = () => {
    //initialise a state to count the page numbers
    const [page, setPage] = useState(1);

    //declaring state for reloading, this reload state is to be passed down to the child component resources
    //as it will receive it as a parameter and call the useEffect to rerender whenever there is a change
    const [reload, setReload] = useState()

    //a function that changes the value of reload, this value changed will then be updated and passed down
    // to resources causing it to rerender
    const onClickPrev = () => {
        setReload(!reload)

        setPage((state) => {
            return state - 1;
        })
    }

    const onClickNext = () => {
        setPage((state) => {
            return state + 1;
        })
        setReload(!reload)
    }

    //function that renders out the image
    const render = (data) => {
        if (data.loading === true) {
            return (
                <p className="">Loading...</p>
            )
        }
        const imagePath = data.data.message
        return (
            <div key={data.key} className='iContainer'>
                <img src={imagePath} alt='dog' className="image" />
            </div>
        )
    }

    //function that renders out the description of the dog
    const imageDesc = (data) => {
        if (data.loading === true) {
            return (
                <p>Loading...</p>
            )
        }
        // the breed of the dog is obtain through manipulating the api request
        let breedArray = data.data.message.split('/')
        return (
            <div className="tContainer">
                <h2 className="text">
                    Breed:  <br />
                    {breedArray[4]}
                </h2>
            </div>
        )
    }

    // useEffect(()=>{
    //    document.title = `Page 1 of ${page}`
    //})
    return (
        <div>
            <div className="imageContainer">
                {
                    [...Array(9)].map((_, index) => (
                        <div key={String(index)}>
                            <Resources
                                path={`${dogUrl}?v${index}`}
                                render={render}
                                imageDesc={imageDesc}
                                reload={reload}
                            />
                        </div>
                    ))
                }
            </div>

            <div className="pageButtons">
                <button id="prev" onClick={onClickPrev} disabled={page === 1}>Prev</button>
                <p>Page {page}/5</p>
                <button id="next" onClick={onClickNext} disabled={page === 5}>Next</button>
            </div>
        </div>
    )
}

export default ShowDog
