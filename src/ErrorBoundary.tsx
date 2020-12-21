import React, { ErrorInfo, PureComponent, ReactNode } from 'react'
import ky from 'ky'
import { Message } from 'semantic-ui-react'

type StatusMessages = { [status: number]: string }
type Props = { statusMessages?: StatusMessages }
type State = { hasError: boolean; error: Error | null }
const DEFAULT_MESSAGES: StatusMessages = { 0: 'サーバエラーです' }

class ErrorBoundary extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  /** Error Catch -> change state */
  static getDerivedStateFromError = (error: Error): State => ({
    hasError: true,
    error,
  })

  /** Error Catch -> console.error */
  componentDidCatch = (error: Error, info: ErrorInfo): void => {
    // eslint-disable-next-line no-console
    console.error(error, info)
  }

  render = (): ReactNode => {
    const { children, statusMessages = {} } = this.props
    const { hasError, error } = this.state
    const messages = { ...DEFAULT_MESSAGES, ...statusMessages }

    if (hasError) {
      const statusCode = (error as ky.HTTPError)?.response?.status

      if (statusCode && Object.keys(messages).includes(String(statusCode))) {
        return <Message warning>{messages[statusCode]}</Message>
      }

      return <Message error>{messages[0]}</Message>
    }

    return children
  }
}

export default ErrorBoundary
