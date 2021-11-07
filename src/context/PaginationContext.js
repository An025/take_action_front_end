import React, {useState, useEffect} from 'react';

const PaginationContext = React.createContext({
    isNavbarBGVisible: true,
    changeVisibility: () =>{},
});

export const PaginationContextProvider = (props) =>{
    const [isVisible, setIsVisible] = useState();

/*     useEffect(() => {
        console.log("re-rendering context");
    }, [isVisible]) */

    const changeNavbarVisibility =  () =>{
        console.log(isVisible);
        setIsVisible(false);
    }


    return <PaginationContext.Provider
        value={
            {
                isNavbarBGVisible: isVisible,
                changeVisibility: changeNavbarVisibility,
            }
        }>
        {props.children}
    </PaginationContext.Provider>
}

export default PaginationContext;