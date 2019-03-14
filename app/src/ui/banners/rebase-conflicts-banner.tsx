import * as React from 'react'
import { Octicon, OcticonSymbol } from '../octicons'
import { Banner } from './banner'
import { Dispatcher } from '../dispatcher'
import { LinkButton } from '../lib/link-button'

interface IRebaseConflictsBannerProps {
  readonly dispatcher: Dispatcher
  /** branch the user is rebasing into */
  readonly targetBranch: string
  readonly onDismissed: () => void
  /** callback to run when user clicks on link in banner text */
  readonly onOpenDialog: () => void
}

export class RebaseConflictsBanner extends React.Component<
  IRebaseConflictsBannerProps,
  {}
> {
  private openDialog = () => {
    this.props.onDismissed()
    this.props.onOpenDialog()
    this.props.dispatcher.recordRebaseConflictsDialogReopened()
  }

  public render() {
    return (
      <Banner
        id="rebase-conflicts-banner"
        dismissable={false}
        onDismissed={this.props.onDismissed}
      >
        <Octicon className="alert-icon" symbol={OcticonSymbol.alert} />
        <div className="banner-message">
          <span>
            Resolve conflicts to continue rebasing{' '}
            <strong>{this.props.targetBranch}</strong>.
          </span>
          <LinkButton onClick={this.openDialog}>View conflicts</LinkButton>
        </div>
      </Banner>
    )
  }
}
