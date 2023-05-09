import { post } from '~/lib/fetchWrapper'
import { API_URL, IS_PROD, IS_PREVIEW } from 'lib/constants'
import { BrowserTabTracker } from 'browser-session-tabs'
import { NextRouter } from 'next/router'

export interface GoogleAnalyticsEvent {
  category: string
  action: string
  label: string
  value?: string
}

export interface GoogleAnalyticsProps {
  screenResolution?: string
  language: string
}

// This event is the same as in studio/lib/telemetry.tx
// but uses different ENV variables for www

const sendEvent = (
  event: GoogleAnalyticsEvent,
  gaProps: GoogleAnalyticsProps,
  router: NextRouter
) => {
  if (!IS_PROD && !IS_PREVIEW) return

  const { category, action, label, value } = event

  return post(`${API_URL}/telemetry/event`, {
    action: action,
    category: category,
    label: label,
    value: value,
    page_referrer: document?.referrer,
    page_title: document?.title,
    page_location: router.asPath,
    ga: {
      screen_resolution: gaProps?.screenResolution,
      language: gaProps?.language,
      session_id: BrowserTabTracker.sessionId,
    },
  })
}

export default {
  sendEvent,
}