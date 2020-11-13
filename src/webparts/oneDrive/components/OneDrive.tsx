import * as React from 'react';
import styles from './OneDrive.module.scss';
import { IOneDriveProps } from './IOneDriveProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class OneDrive extends React.Component<IOneDriveProps, {}> {
  public render(): React.ReactElement<IOneDriveProps> {
    return (
      <div className={ styles.oneDrive }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <img src="data:image/png;base64,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"></img>
              <p className={ styles.title }>Welcome to OneDrive!</p>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}