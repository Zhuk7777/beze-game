import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useClick,
  useDismiss,
  useFloating,
  useId,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { useState } from 'react';

import SamokatLogo from '../../assets/icons/samokatLogoSmall.svg?react';
import { PromoCode } from '../../components/promoCode/PromoCode.tsx';

import styles from './PromoCodeButton.module.scss';

export interface IPromoCodeButtonProps {
  discount: number;
}

export const PromoCodeButton = ({ discount }: IPromoCodeButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const click = useClick(context);
  const role = useRole(context);
  const dismiss = useDismiss(context, { outsidePressEvent: 'mousedown' });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    role,
    dismiss,
  ]);

  const headingId = useId();
  const descriptionId = useId();
  return (
    <>
      <button
        className={styles.button}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        <span className={styles.promoCode}>
          Забрать промокод <br /> на скидку {discount}%
        </span>
        <SamokatLogo aria-label="Логотип самоката" width={50} height={50} />
      </button>
      <FloatingPortal>
        {isOpen && (
          <FloatingOverlay className={styles.dialogOverlay} lockScroll>
            <FloatingFocusManager context={context}>
              <div
                className={styles.dialog}
                ref={refs.setFloating}
                aria-labelledby={headingId}
                aria-describedby={descriptionId}
                {...getFloatingProps()}
              >
                <PromoCode />
                <h2 id={headingId} className="visuallyHidden">
                  Промокод
                </h2>
                <p id={descriptionId} className="visuallyHidden">
                  Промокод на скидку
                </p>
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>
        )}
      </FloatingPortal>
    </>
  );
};
