// Global state is the data that is shared between all the components within a React application. When the state is changed, or let’s say a filter is added, the components re-render accordingly. https://endertech.com/blog/using-reacts-context-api-for-global-state-management

import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header text="Feedback App" />
        <div className="container">

          <Routes>
            {/* Home Route */}
            <Route exact path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }>
            </Route>

            {/* About Route */}
            <Route path='/about' element={<AboutPage />} />

          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
