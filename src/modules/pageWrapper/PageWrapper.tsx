import classNames from 'classnames';
import { PropsWithChildren } from 'react';

import { BakerLogo } from '../../components/bakerLogo/BakerLogo';

import styles from './PageWrapper.module.scss';

export interface IPageWrapperProps {
  className?: string;
}

export const PageWrapper = ({
  className,
  children,
}: PropsWithChildren<IPageWrapperProps>) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <BakerLogo />
      {children}
    </div>
  );
};
