import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
    const { feedback } = useContext(FeedbackContext)

    if (!feedback || feedback.length === 0) {
        return <p>Nenhum feedback recebido</p>
    }

    return (
        <div className="feedback-list">
            <AnimatePresence >
                {feedback.map((item) => (
                    // <div>{item.rating}</div>
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem
                            key={item.id}
                            item={item}
                        />
                    </motion.div>
                ))}</AnimatePresence>
        </div>
    )
}

export default FeedbackList;