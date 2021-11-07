import React, {useState} from 'react';

const PaginationContext = React.createContext({
    isNavbarBGVisible: true,
    changeVisibility: () =>{},
    changeNavbarClassNameActive: () =>{},
    changeNavbarClassName: () =>{},
});

export const PaginationContextProvider = (props) =>{
    const [isVisible, setIsVisible] = useState();
    const [navClassName, setnavClassName ]= useState("navbar")


    const changeNavbarVisibility =  () =>{
        console.log(isVisible);
        setIsVisible(false);
    }
    const changeNavbarClassNameActive =() =>{
        setnavClassName("navbar active")
    }
    const changeNavbarClassName =() =>{
        setnavClassName("navbar")
    }


    return <PaginationContext.Provider
        value={
            {
                isNavbarBGVisible: isVisible,
                changeVisibility: changeNavbarVisibility,
                navClassName,
                setnavClassName,
                changeNavbarClassNameActive,
                changeNavbarClassName,
            }
        }>
        {props.children}
    </PaginationContext.Provider>
}

export default PaginationContext;