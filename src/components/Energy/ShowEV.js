import {EvContextProvider} from '../../context/EvContext'

import Map from './Map';

const ShowEV = props =>{
    return (
        <EvContextProvider>
            <Map/>
        </EvContextProvider>
    )
}
export default ShowEV;