import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import CopyIcon from '../../assets/icons/copy.svg?react';
import SamokatLogo from '../../assets/icons/samokat.svg?react';

import styles from './PromoCode.module.scss';

export const PromoCode = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const text = textRef.current?.innerText;
    if (text) {
      try {
        await navigator.clipboard.writeText(text);

        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <SamokatLogo
        className={styles.logo}
        width={285}
        height={42}
        aria-label="Логотип Самоката"
      />
      <h3 className={styles.title}>Промокод на скидку</h3>
      <div ref={textRef} className={styles.code}>
        {copied ? <span>скопировано</span> : <span>TASTYSHOW5</span>}
      </div>
      <button className={styles.copyButton} onClick={handleCopy}>
        <span>Нажми чтобы скопировать</span>
        <CopyIcon width={17} height={20} aria-hidden="true" />
      </button>
      <Link to="#" className={styles.samokatLink}>
        Заказать в Самокат
      </Link>
      <Link to="#" className={styles.rulesLink}>
        Правила использования промокода
        <br />
        (срок действия, где и как активировать)
      </Link>
    </div>
  );
};
