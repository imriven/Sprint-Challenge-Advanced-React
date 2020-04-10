import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";


export const useDocTitle = (key, initialValue) => {
    const [docTitle, setDocTitle] = useLocalStorage(key, initialValue)

    useEffect(() => {
        document.title = docTitle
    }, [docTitle])

    return [docTitle, setDocTitle]
}