import React from 'react'

import classnames from 'classnames'

interface SummaryBoxProps {
  children?: React.ReactNode
  className?: string
}

export const SummaryBox = ({
  children,
  className,
  ...divProps
}: SummaryBoxProps & JSX.IntrinsicElements['div']): React.ReactElement => {
  const classes = classnames('usa-summary-box', className)
  return (
    <div className={classes} data-testid="summary-box" {...divProps}>
      <div className="usa-summary-box__body">{children}</div>
    </div>
  )
}

export default SummaryBox
