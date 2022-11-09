import {useState, useEffect} from 'react';
import axios from 'axios'


const Resources = (props) => {
    const [imageView, setImageView] = useState(true);
    const onClick = () => {
        setImageView((state) => {
            return !state;
        })
    };

    const initialState = {
        data: [],
        loading: true,
        error: null,
    }

    const [state, setState] = useState(initialState);

    const getData = async () => {
        try {
            const response = await axios.get(props.path)
            setState({
                data: response.data,
                loading: false,
                error: null
            }
            )
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getData()
    }, [props.reload]
    )


    return (
        <div onClick={onClick} className='roll-out'>
            {imageView ? props.render(state) : props.imageDesc(state)}
        </div>
    )
}

export default Resources;
