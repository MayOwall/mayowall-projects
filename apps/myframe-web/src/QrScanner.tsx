import { useState } from "react";

import { Scanner } from "@yudiel/react-qr-scanner";
import type {
  IScannerStyles,
  IDetectedBarcode,
} from "@yudiel/react-qr-scanner";

const styles: IScannerStyles = {
  container: {
    width: 200,
    height: 200,
  },
};

function QrScanner({ setUrl }: { setUrl: (v: string) => void }) {
  const [paused, setPaused] = useState(false);

  const onScan = (result: IDetectedBarcode[]) => {
    const { rawValue } = result[0];
    setPaused(true);
    setUrl(rawValue);
  };

  const onBtnClick = () => {
    setPaused(false);
  };

  return (
    <>
      <Scanner
        onScan={onScan}
        styles={styles}
        paused={paused}
        allowMultiple={true}
      />
      <button onClick={onBtnClick} disabled={!paused}>
        다시 QR 인식하기
      </button>
    </>
  );
}

export default QrScanner;
