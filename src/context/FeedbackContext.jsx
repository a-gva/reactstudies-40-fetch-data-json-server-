import { v4 as uuidv4 } from 'uuid'
import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext()

// Provider being exported
export const FeedbackProvider = ({ children }) => {
    // Define useState
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    // Fetch feedback
    const fetchFeedback = async () => {
        const response = await fetch(`http://localhost:5000/feedback?_sort=id_order=desc`)
        const data = await response.json()
        setFeedback(data)
        setIsLoading(false)
        console.log(data)
    }

    // FUNCTIONS

    // add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }
    // delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Confirm delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // Update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
        )
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({ item, edit: true })
    }

    // Provider: states, functions available for APP
    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider >
}

export default FeedbackContext