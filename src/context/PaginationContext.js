import React, {useState, createContext} from 'react';
const PaginationContext = createContext({
    isVisible: true,
    changeVisibility: () =>{},
});

export const PaginationContextProvider = (props) =>{
    const [isVisible, setisVisible] = useState();


    const changeVisibility =  () =>{
        console.log("hello");
        setisVisible(false);
    }


    return <PaginationContext.Provider
        value={
            {
                isVisible: isVisible,
                changeVisibility: changeVisibility,
            }
        }>
        {props.children}
    </PaginationContext.Provider>
}
export default PaginationContext;