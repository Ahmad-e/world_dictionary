import PulseLoader from "react-spinners/PulseLoader";
import { useState ,useEffect } from "react";


function Load(props) {
    
    const [loading,setloading] = useState(false);

    useEffect(()=>{
        setloading(props.run);
    },[props])
    return(<div>
        {
        loading?
            <div className="loading">
                <PulseLoader color="#1f4e5f" />
            </div>
            :
            ""
    }
    </div>)
}

export default Load;