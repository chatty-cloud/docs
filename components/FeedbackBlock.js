import { Button, HStack, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export default function FeedbackBlock() {
  const pageURL = typeof window !== 'undefined' ? window.location.href : ''
  const [feedbackProvided, setFeedbackProvided] = useState(false)
  const buttonBgColor = useColorModeValue('gray.80', 'gray.50')

  const feedbackValues = {
    PLUS: 1,
    MINUS: -1
  }

  useEffect(() => {
    if (sessionStorage.getItem(pageURL)) {
      setFeedbackProvided(sessionStorage.getItem(pageURL))
    } else {
      setFeedbackProvided(false)
    }
  }, [pageURL])

  const logFeedback = (feedbackDelta) => {
    window.analytics.track('page-feedback', {
      feedback: feedbackDelta,
      url: pageURL
    })

    sessionStorage.setItem(pageURL, true)
    setFeedbackProvided(true)
  }

  return (
    <div className='flex items-center mt-4 mb-4'>
      <strong className='mr-1'>Was this page useful?</strong>
      {!feedbackProvided ? (
        <HStack>
          <Button
            colorScheme="blue"
            bgColor={buttonBgColor}
            size='xs'
            onClick={(e) => logFeedback(feedbackValues.PLUS, e)}
          >
            Yes
          </Button>
          <Button
            colorScheme="blue"
            bgColor={buttonBgColor}
            size='xs'
            onClick={(e) => logFeedback(feedbackValues.MINUS, e)}
          >
            No
          </Button>
        </HStack>
      ) : (
        <span>Thank you!</span>
      )}
    </div>
  )
}
